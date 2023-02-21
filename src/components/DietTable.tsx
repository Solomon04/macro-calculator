import { FunctionComponent } from 'react'

type Props = {
  dietPlans: DietPlan[]
}

const DietTable: FunctionComponent<Props> = ({ dietPlans }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full divide-y-2 divide-gray-200 text-sm'>
        <thead>
          <tr>
            <th className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900'>
              Diet
            </th>
            <th className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900'>
              Total Calories
            </th>
            <th className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900'>
              Fat
            </th>
            <th className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900'>
              Carbs
            </th>
            <th className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900'>
              Protein
            </th>
          </tr>
        </thead>

        <tbody className='divide-y divide-gray-200'>
          {dietPlans.map((plan, index) => (
            <tr key={index}>
              <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                {plan.name}
              </td>
              <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                {plan.calories} cals/day
              </td>
              <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                {plan.fat} g/day
              </td>
              <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                {plan.carbs} g/day
              </td>
              <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                {plan.protein} g/day
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DietTable