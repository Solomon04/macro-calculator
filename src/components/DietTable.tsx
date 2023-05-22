import { FunctionComponent } from 'react'

type Props = {
  calories: number
}

const DietTable: FunctionComponent<Props> = ({ calories }) => {
  return (
    <>
      <div className='my-5'>
        <h1 className='font-semibold text-2xl'>Here are your results!</h1>
        <h1 className='font-extrabold text-4xl'>{calories} calories per day</h1>
      </div>
    </>
  )
}

export default DietTable
