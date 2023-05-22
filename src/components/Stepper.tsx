import { FunctionComponent } from 'react'
import {
  CheckCircleIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/solid'
import { classNames } from '../utils'

type Step = {
  id: number
  name: string
}

type Props = {
  steps: Step[]
  onClick: (step: Step) => void
  currentStep: Step
  isComplete: boolean
}

type StepProp = {
  name: string
  completed: boolean
  id: number
}

type StepIconProp = {
  id: number
}

const StepIcon: FunctionComponent<StepIconProp> = ({ id }) => (
  <span className='flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary-600'>
    <span className='text-primary-600'>{id}</span>
  </span>
)

const Step: FunctionComponent<StepProp> = ({ name, completed, id }) => (
  <li
    className={classNames(
      'relative text-center',
      completed ? 'text-primary' : 'text-gray-600'
    )}>
    <div className='absolute left-0 -bottom-[1.75rem] rounded-full'>
      {completed ? (
        <CheckCircleIcon className='h-6 w-6' aria-hidden='true' />
      ) : (
        <StepIcon id={id} />
      )}
    </div>
    <span className='hidden sm:block'> {name} </span>
  </li>
)

const Stepper: FunctionComponent<Props> = ({
  currentStep,
  steps,
  onClick,
  isComplete,
}) => {
  return (
    <nav aria-label='Progress'>
      <div className='hidden sm:block'>
        <ol
          role='list'
          className='divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0'>
          {steps.map((step, stepIdx) => (
            <li key={step.name} className='relative md:flex md:flex-1'>
              {currentStep.id > step.id || isComplete ? (
                <button
                  onClick={() => onClick(step)}
                  className='group flex w-full items-center'>
                  <span className='flex items-center px-6 py-4 text-sm font-medium'>
                    <span className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 group-hover:bg-primary-800'>
                      <CheckCircleIcon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </span>
                    <span className='ml-4 text-sm font-medium text-gray-900'>
                      {step.name}
                    </span>
                  </span>
                </button>
              ) : step === currentStep ? (
                <button
                  onClick={() => onClick(step)}
                  className='flex items-center px-6 py-4 text-sm font-medium'
                  aria-current='step'>
                  <span className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary-600'>
                    <span className='text-primary-600'>{step.id}</span>
                  </span>
                  <span className='ml-4 text-sm font-medium text-primary-600'>
                    {step.name}
                  </span>
                </button>
              ) : (
                <button
                  disabled={true}
                  className='group flex items-center cursor-not-allowed'>
                  <span className='flex items-center px-6 py-4 text-sm font-medium'>
                    <span className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400'>
                      <span className='text-gray-500 group-hover:text-gray-900'>
                        {step.id}
                      </span>
                    </span>
                    <span className='ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900'>
                      {step.name}
                    </span>
                  </span>
                </button>
              )}

              {stepIdx !== steps.length - 1 ? (
                <>
                  {/* Arrow separator for lg screens and up */}
                  <div
                    className='absolute top-0 right-0 hidden h-full w-5 md:block'
                    aria-hidden='true'>
                    <svg
                      className='h-full w-full text-gray-300'
                      viewBox='0 0 22 80'
                      fill='none'
                      preserveAspectRatio='none'>
                      <path
                        d='M0 -2L20 40L0 82'
                        vectorEffect='non-scaling-stroke'
                        stroke='currentcolor'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </>
              ) : null}
            </li>
          ))}
        </ol>
      </div>

      <div className='sm:hidden'>
        <h2 className='sr-only'>Steps</h2>
        <div className='after:mt-4 after:block after:h-1 after:w-full after:rounded-lg after:bg-gray-200'>
          <ol className='flex justify-between items-center text-sm font-medium text-gray-500'>
            {steps.map((step) => (
              <Step
                key={step.id}
                id={step.id}
                name={step.name}
                completed={currentStep.id > step.id || isComplete}
              />
            ))}
          </ol>
        </div>
      </div>
    </nav>
  )
}

export default Stepper
