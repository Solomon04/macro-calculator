type Sex = 'Male' | 'Female'
type Unit = 'Imperial' | 'Metric'
type ActivityLevel = {
  id: number
  title: string
  description?: string
  value: number
}

type ConsultingOption = {
  id: number
  title: string
}

type MacroSelectOption = {
  id: number
  title: string
  description: string
}

type DietPlan = {
  name: string
  fat: number
  carbs: number
  protein: number
  calories: number
}
