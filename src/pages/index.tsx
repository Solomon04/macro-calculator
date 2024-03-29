import Head from 'next/head'
import { Inter } from '@next/font/google'
import { FormEvent, useMemo, useState } from 'react'
import {
  activityLevelOptions,
  consultingOptions,
  goalOptions,
  macroExperienceOptions,
  steps,
  weightliftingExperienceOptions,
} from '@/constants/data'
import CallToAction from '@/components/CallToAction'
import PastExperience from '@/components/PastExperience'
import TotalActivity from '@/components/TotalActivity'
import PhysicalAttributes from '@/components/PhysicalAttributes'
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import Stepper from '@/components/Stepper'
import Button from '@/components/Button'
import {
  calculateCaloriesForWeightGain,
  calculateTotalDailyExpenditure,
} from '@/formulas/tdee'
import {
  balancedFormula,
  highCarbFormula,
  highProteinFormula,
  ketoFormula,
  lowCarbFormula,
} from '@/formulas/macros'
import DividedBarGraphCard from '@/components/DividedBarGraphCard'
import DietTable from '@/components/DietTable'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [currentStep, setCurrentStep] = useState(steps[0])
  const [unit, setUnit] = useState<Unit>('Imperial')
  const [sex, setSex] = useState<Sex>('Male')
  const [age, setAge] = useState(18)
  const [height, setHeight] = useState(72)
  const [weight, setWeight] = useState(180)
  const [activityLevel, setActivityLevel] = useState()
  const [tdee, setTdee] = useState(0)
  const [bmr, setBmr] = useState<number | undefined>()
  const [bodyFatPercentage, setBodyFatPercentage] = useState()
  const [isCalculated] = useMemo(() => {
    return [bmr && tdee]
  }, [bmr, tdee])
  const [dietPlans, setDietPlans] = useState<DietPlan[]>([])
  const [goal, setGoal] = useState<WeightGoal | null>(null)
  const [callToAction, setCallToAction] = useState()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [wantsConsulting, setWantsConsulting] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [isCompleted, setIsComplete] = useState(false)
  const [isValid, setIsValid] = useState(true)
  const [calories, setCalories] = useState(0)
  // const [isValid, setIsValid] = useState(false)

  const incrementStep = () => {
    let stepIndex = currentStep.id - 1
    setCurrentStep(steps[stepIndex + 1])
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!lastStep) {
      return incrementStep()
    }

    setSubmitting(true)
    setIsComplete(true)

    const { tdee, bmr, diets } = calculateTotalDailyExpenditure(
      weight,
      height,
      age,
      sex,
      activityLevel,
      unit
    )

    if (goal) {
      let balanced = balancedFormula(tdee + goal.net)
      setCalories(balanced.calories)
      console.log({ maintain: balancedFormula(tdee), balanced })
      let lowCarb = lowCarbFormula(tdee + goal.net)
      let highCarb = highCarbFormula(tdee + goal.net)
      let highProtein = highProteinFormula(tdee + goal.net)
      let keto = ketoFormula(tdee + goal.net)

      setDietPlans([balanced, lowCarb, highCarb, keto])

      setTdee(tdee)
      setBmr(bmr)
    }
  }
  const handleStepper = (step: any) => {
    setCurrentStep(step)
  }

  const [lastStep] = useMemo(() => {
    return [currentStep.id === 3]
  }, [currentStep])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name='description'
          content='Exercise with style embeddable macro calculator'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <title>Exercise With Style Macro Calculator</title>
      </Head>
      <main className='max-w-5xl mx-auto py-12 px-4 sm:px-0'>
        <Stepper
          isComplete={isCompleted}
          steps={steps}
          onClick={handleStepper}
          currentStep={currentStep}
        />
        <div className=''>
          {/*Results*/}
          {isCalculated && dietPlans.length > 0 ? (
            <DietTable calories={calories} />
          ) : (
            <form onSubmit={(e) => handleSubmit(e)} className='mt-5'>
              <div className='grid grid-cols-1 sm:grid-cols-6 gap-8'>
                {currentStep.id === 1 ? (
                  <PhysicalAttributes
                    height={height}
                    setHeight={setHeight}
                    age={age}
                    setAge={setAge}
                    bodyFatPercentage={bodyFatPercentage}
                    setBodyFatPercentage={setBodyFatPercentage}
                    sex={sex}
                    setSex={setSex}
                    unit={unit}
                    setUnit={setUnit}
                    weight={weight}
                    setWeight={setWeight}
                  />
                ) : null}

                {currentStep.id === 2 ? (
                  <TotalActivity
                    activityLevel={activityLevel}
                    setActivityLevel={setActivityLevel}
                    isValid={(valid: boolean) => setIsValid(valid)}
                  />
                ) : null}

                {currentStep.id === 3 ? (
                  <CallToAction
                    email={email}
                    setEmail={setEmail}
                    goal={goal}
                    setGoal={setGoal}
                    wantsConsulting={wantsConsulting}
                    setWantsConsulting={setWantsConsulting}
                    callToAction={callToAction}
                    setCallToAction={setCallToAction}
                    name={name}
                    setName={setName}
                    isValid={(valid: boolean) => setIsValid(valid)}
                  />
                ) : null}
              </div>

              <div className='flex items-center justify-end mt-5 space-x-4'>
                <Button disabled={!isValid} variant='solid' type='submit'>
                  {lastStep ? 'See Results' : 'Next'}{' '}
                  <ArrowRightCircleIcon className='w-5 h-5 ml-1 stroke-2' />
                </Button>
              </div>
            </form>
          )}
        </div>
      </main>
    </>
  )
}
