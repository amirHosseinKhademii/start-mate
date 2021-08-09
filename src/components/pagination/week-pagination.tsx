export const WeekPagination = ({ setWeek, week }) => {
  return (
    <div className="flex items-center space-x-4">
      <button
        disabled={week === 1}
        className="text-gray-300 text-lg disabled:opacity-30 disabled:cursor-not-allowed"
        onClick={() => setWeek(week - 1)}
      >
        {'|<'}
      </button>
      <span className="w-24 h-8 bg-gray-300 rounded text-lg flex items-center justify-center">
        Week {week}
      </span>
      <button
        disabled={week === 12}
        className="text-gray-300 text-lg disabled:opacity-30 disabled:cursor-not-allowed"
        onClick={() => setWeek(week + 1)}
      >
        {'>|'}
      </button>
    </div>
  )
}
