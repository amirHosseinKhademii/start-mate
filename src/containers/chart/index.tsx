import { ApexChart } from 'components/chart'
import { ICStar } from 'icons/star'

export const Charts = ({ currentWeek, weeks, week }) => {
  return (
    <div id="chart" className="mt-12 w-full">
      <div className=" mb-4 flex items-center space-x-1">
        <span className="text-gray-300">Number of patient records</span>
        <ICStar className="text-yellow-400 w-4 h-4" />
        <ICStar className="text-yellow-400 w-4 h-4" />
      </div>
      {weeks.map(
        (item, index) =>
          index === week - 1 && (
            <ApexChart
              values={weeks.slice(0, week).map((item) => item.nsValue)}
              key={index}
            />
          )
      )}
    </div>
  )
}
