import { FunctionComponent } from 'react'

type Props = {
  dataset: Array<{
    label: string
    color: string
    amount: number
    prefix?: string
    suffix?: string
  }>
}

const DividedBarGraphCard: FunctionComponent<Props> = ({ dataset }) => {
  return (
    <div className='rounded bg-white p-5 shadow-lg'>
      <div className='flex rounded-md'>
        {/*rounded left if first*/}
        {dataset.map((data, index) => (
          <div
            key={index}
            className={`flex w-[72%] justify-center text-xs text-white ${
              data.color
            } ${index === 0 && 'rounded-l-md'} ${
              index === dataset.length - 1 && 'rounded-r-md'
            }`}>
            &nbsp;
          </div>
        ))}
      </div>
      <ul className='mt-4 space-y-1 divide-y divide-gray-300'>
        <li className='flex items-center justify-between py-2'>
          <div className='inline-flex items-center justify-start'>
            <div className='mr-2 h-5 w-5 rounded-md bg-fuchsia-400' />
            <h3 className='leading-tight tracking-tight text-gray-700'>Fat</h3>
          </div>

          <h2 className='font-semibold'>$72.00</h2>
        </li>
        <li className='flex items-center justify-between py-2'>
          <div className='inline-flex items-center justify-start'>
            <div className='mr-2 h-5 w-5 rounded-md bg-sky-400' />
            <h3 className='leading-tight tracking-tight text-gray-700'>
              Carbs
            </h3>
          </div>

          <h2 className='font-semibold'>$18.00</h2>
        </li>
        <li className='flex items-center justify-between py-2'>
          <div className='inline-flex items-center justify-start'>
            <div className='mr-2 h-5 w-5 rounded-md bg-emerald-400' />
            <h3 className='leading-tight tracking-tight text-gray-700'>
              Protein
            </h3>
          </div>

          <h2 className='font-semibold'>$5.00</h2>
        </li>
        <li className='flex items-center justify-between py-2'>
          <div className='inline-flex items-center justify-start'>
            <div className='mr-2 h-5 w-5 rounded-md bg-rose-400' />
            <h3 className='leading-tight tracking-tight text-gray-700'>
              Failed
            </h3>
          </div>

          <h2 className='font-semibold'></h2>
        </li>
      </ul>
    </div>
  )
}

export default DividedBarGraphCard
