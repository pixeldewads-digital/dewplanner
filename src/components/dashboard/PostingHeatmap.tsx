interface HeatmapProps {
  month: string;
  year: number;
}

export default function PostingHeatmap({ month = 'June', year = 2024 }: HeatmapProps) {
    const daysInMonth = 30
    const startDay = 5 // Saturday

    const heatmapData = Array.from({ length: daysInMonth }, (_, i) => ({
      day: i + 1,
      posts: Math.floor(Math.random() * 10),
    }))

    const getColor = (posts: number) => {
      if (posts === 0) return 'bg-gray-100'
      if (posts < 3) return 'bg-soft-yellow-accent/20'
      if (posts < 6) return 'bg-soft-yellow-accent/50'
      return 'bg-soft-yellow-accent/80'
    }

    return (
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-soft-yellow-accent">Posting Heatmap (Calendar)</h2>
        <div className="mb-4 text-center text-lg font-semibold">{month} {year}</div>
        <div className="grid grid-cols-7 gap-1 text-center">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => <div key={day} className="font-bold">{day}</div>)}
          {Array.from({ length: startDay }).map((_, i) => <div key={`empty-${i}`}></div>)}
          {heatmapData.map(data => (
            <div key={data.day} className={`flex h-12 w-12 items-center justify-center rounded ${getColor(data.posts)}`}>
              {data.posts > 0 && <span>{data.posts}</span>}
            </div>
          ))}
        </div>
      </div>
    )
  }
