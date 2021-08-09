import { useState, useMemo } from 'react'
import { WeekPagination } from 'components/pagination/week-pagination'
import { ProgressGoals } from 'containers/goals'
import { Charts } from 'containers/chart'

const goals = {
  goal1: { title: 'Talk to 5 clinicians per weeks', target: 5, time: 7 },
  goal2: { title: '$150k by end of Smartmate ', target: 150, time: 90 },
  goal3: { title: 'Publish one papaer a month ', target: 1, time: 90 },
}

const weeks = [
  { goal1: 5, goal2: 10, goal3: 0, nsValue: 1000 },
  { goal1: 4, goal2: 20, goal3: 0, nsValue: 1500 },
  { goal1: 5, goal2: 0, goal3: 1, nsValue: 2300 },
]

const Smartmate = () => {
  const [week, setWeek] = useState(1)
  const currentWeek = useMemo(() => weeks[week - 1] || weeks[0], [week])

  return (
    <div className="w-full flex flex-col items-start p-12">
      <WeekPagination setWeek={setWeek} week={week} />
      <Charts currentWeek={currentWeek} weeks={weeks} week={week} />
      <ProgressGoals
        week={week}
        weeks={weeks}
        currentWeek={currentWeek}
        goals={goals}
      />
      <input
        className="w-1/4 bg-gray-300 rounded border border-gray-500 px-4 h-10 self-center my-10"
        placeholder="Introduction to public hospital doctors"
      />
    </div>
  )

  return (
    <div className="w-full flex flex-col items-start p-12">
      <WeekPagination setWeek={setWeek} week={week} />
      {/* <AnimateChart weeks={weeks} week={week} /> */}
      <ProgressGoals
        week={week}
        weeks={weeks}
        currentWeek={currentWeek}
        goals={goals}
      />
      <input
        className="w-1/4 bg-gray-300 rounded border border-gray-500 px-4 h-10 self-center my-10"
        placeholder="Introduction to public hospital doctors"
      />
    </div>
  )
}

export default Smartmate
