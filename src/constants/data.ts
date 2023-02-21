export const imperialHeights = [
  { key: '4ft 7in', value: 55 },
  { key: '4ft 8in', value: 56 },
  { key: '4ft 9in', value: 57 },
  { key: '4ft 10in', value: 58 },
  { key: '4ft 11in', value: 59 },
  { key: '5ft 0in', value: 60 },
  { key: '5ft 1in', value: 61 },
  { key: '5ft 2in', value: 62 },
  { key: '5ft 3in', value: 63 },
  { key: '5ft 4in', value: 64 },
  { key: '5ft 5in', value: 65 },
  { key: '5ft 6in', value: 66 },
  { key: '5ft 7in', value: 67 },
  { key: '5ft 8in', value: 68 },
  { key: '5ft 9in', value: 69 },
  { key: '5ft 10in', value: 70 },
  { key: '5ft 11in', value: 71 },
  { key: '6ft 0in', value: 72 },
  { key: '6ft 1in', value: 73 },
  { key: '6ft 2in', value: 74 },
  { key: '6ft 3in', value: 75 },
  { key: '6ft 4in', value: 76 },
  { key: '6ft 5in', value: 77 },
  { key: '6ft 6in', value: 78 },
  { key: '6ft 7in', value: 79 },
  { key: '6ft 8in', value: 80 },
  { key: '6ft 9in', value: 81 },
  { key: '6ft 10in', value: 82 },
  { key: '6ft 11in', value: 83 },
  { key: '7ft 0in', value: 84 },
]

export const activityLevelOptions: ActivityLevel[] = [
  {
    id: 1,
    title: 'Sedentary',
    description: 'Desk job or work from home',
    value: 1.2,
  },
  {
    id: 2,
    title: 'Lightly Active',
    description: 'Exercising 1-2 days a week',
    value: 1.2,
  },
  {
    id: 3,
    title: 'Lightly Active',
    description: 'Exercising 1-2 days a week',
    value: 1.375,
  },
  {
    id: 4,
    title: 'Moderately Active',
    description: 'Exercising 3-5 days a week',
    value: 1.55,
  },
  {
    id: 5,
    title: 'Heavy Active',
    description: 'Exercising 6-7 days a week',
    value: 1.725,
  },
  {
    id: 6,
    title: 'Athlete',
    description: 'Exercising up to twice a day',
    value: 1.9,
  },
]

export const goalOptions = [
  {
    id: 1,
    title: 'Rapid Weight Loss',
    description: 'Lose about 2lbs per week', // 1000 daily deficit
    net: -1000,
  },
  {
    id: 2,
    title: 'Moderate Weight Loss',
    description: 'Lose about  1lb per week', // 500 daily deficit
    net: -500,
  },
  {
    id: 3,
    title: 'Slow Weight Loss',
    description: 'Lose about 0.5lb per week', // 250 daily deficit
    net: -250,
  },
  {
    id: 4,
    title: 'Maintain Weight',
    description: 'Stay the same size',
    net: 0,
  },
  {
    id: 5,
    title: 'Slow weight gain',
    description: 'Gain about  0.5lb per week', // 250 daily surplus
    net: 250,
  },
  {
    id: 6,
    title: 'Moderate weight gain',
    description: 'Gain about 1lb per week', // 500 daily surplus
    net: 500,
  },
]

export const consultingOptions: ConsultingOption[] = [
  {
    id: 1,
    title: 'Step by Step Instructions',
  },
  {
    id: 2,
    title: 'Meal Plan & Recipes',
  },
  {
    id: 3,
    title: 'Macronutrient Coaching',
  },
  {
    id: 4,
    title: '30 Minute Consulting',
  },
  {
    id: 5,
    title: 'None',
  },
  {
    id: 6,
    title: 'Other',
  },
]

export const macroExperienceOptions: MacroSelectOption[] = [
  {
    id: 1,
    title: 'Beginner',
    description: 'I have never tracked macros and barely understand them',
  },
  {
    id: 2,
    title: 'Intermediate',
    description:
      'I know about a little bit about macros and may have done a little tracking',
  },
  {
    id: 3,
    title: 'Advanced',
    description: 'I have been tracking macros and can teach others',
  },
]

export const weightliftingExperienceOptions = [
  {
    id: 1,
    title: 'Beginner',
  },
  {
    id: 2,
    title: 'Intermediate',
  },
  {
    id: 3,
    title: 'Advanced',
  },
]

export const steps = [
  {
    id: 1,
    name: 'Your Experience',
    description: 'Experience with macros & strength training.',
    href: '#',
    status: 'complete',
  },
  {
    id: 2,
    name: 'Physical Attributes',
    description: 'Cursus semper viverra.',
    href: '#',
    status: 'current',
  },
  {
    id: 3,
    name: 'Activity Level',
    description: 'Penatibus eu quis ante.',
    href: '#',
    status: 'upcoming',
  },
  {
    id: 4,
    name: 'Your goals',
    description: 'Penatibus eu quis ante.',
    href: '#',
    status: 'upcoming',
  },
]
