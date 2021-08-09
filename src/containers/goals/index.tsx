import { ProggressBar } from 'components/progress/bar'
import { CircleBar } from 'components/progress/circle'
import { Fragment } from 'react'

export const ProgressGoals = ({ weeks, currentWeek, goals, week }) => {
  return (
    <Fragment>
      {weeks.map(
        (item, index) =>
          index === week - 1 && (
            <div
              className="w-full py-[20px] px-56 flex items-center justify-center space-x-8"
              key={index}
            >
              <div className="flex flex-col items-center w-full space-y-6">
                <CircleBar
                  duration={2}
                  value={(currentWeek.goal1 / goals.goal1.target) * 100}
                  label={goals.goal1.title}
                />
                <ProggressBar max={7} current={0} duration={2} />
              </div>

              <div className="flex flex-col items-center w-full space-y-8">
                <CircleBar
                  duration={2}
                  value={
                    (weeks.slice(0, week).reduce((a, c) => a + c.goal2, 0) /
                      goals.goal2.target) *
                    100
                  }
                  label={goals.goal2.title}
                />
                <ProggressBar max={90} current={90 - week * 7} duration={2} />
              </div>

              <div className="flex flex-col items-center w-full space-y-8">
                <CircleBar
                  duration={2}
                  value={(currentWeek.goal3 / goals.goal3.target) * 100}
                  label={goals.goal3.title}
                />
                <ProggressBar max={90} current={90 - week * 7} duration={2} />
              </div>
            </div>
          )
      )}
    </Fragment>
  )
}
