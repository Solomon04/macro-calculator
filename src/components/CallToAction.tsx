import { FunctionComponent, useEffect } from 'react'
import { consultingOptions, goalOptions } from '@/constants/data'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { classNames } from '@/utils'
import { Tooltip } from 'flowbite-react'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

type Props = {
  email: any
  name: any
  setEmail: any
  setName: any
  goal: any
  setGoal: any
  callToAction: any
  setCallToAction: any
  wantsConsulting: any
  setWantsConsulting: any
  isValid: (valid: boolean) => void
}
const CallToAction: FunctionComponent<Props> = ({
  setCallToAction,
  callToAction,
  setGoal,
  goal,
  isValid,
}) => {
  useEffect(() => {
    isValid(!!goal)
  }, [goal, setGoal])
  return (
    <>
      <div className='col-span-6'>
        <RadioGroup value={goal} onChange={setGoal}>
          <RadioGroup.Label className='text-base font-medium text-gray-900'>
            What are you looking to accomplish?
          </RadioGroup.Label>

          <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4'>
            {goalOptions.map((option) => (
              <RadioGroup.Option
                key={option.id}
                value={option}
                className={({ checked, active }) =>
                  classNames(
                    checked ? 'border-transparent' : 'border-gray-300',
                    active ? 'border-primary-500 ring-2 ring-primary-500' : '',
                    'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
                  )
                }>
                {({ checked, active }) => (
                  <>
                    <span className='flex flex-1'>
                      <span className='flex flex-col'>
                        <RadioGroup.Label
                          as='span'
                          className='inline-flex text-sm font-medium text-gray-900'>
                          {option.title}
                          <span>
                            <Tooltip content={option.help} placement='top'>
                              <QuestionMarkCircleIcon className='ml-1.5 text-gray-400 h-5 w-5' />
                            </Tooltip>
                          </span>
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as='span'
                          className='mt-1 flex items-center text-sm text-gray-500'>
                          {option.description}
                        </RadioGroup.Description>
                      </span>
                    </span>
                    <CheckCircleIcon
                      className={classNames(
                        !checked ? 'invisible' : '',
                        'h-5 w-5 text-primary-600'
                      )}
                      aria-hidden='true'
                    />
                    <span
                      className={classNames(
                        active ? 'border' : 'border-2',
                        checked ? 'border-primary-500' : 'border-transparent',
                        'pointer-events-none absolute -inset-px rounded-lg'
                      )}
                      aria-hidden='true'
                    />
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </>
  )
}

export default CallToAction
