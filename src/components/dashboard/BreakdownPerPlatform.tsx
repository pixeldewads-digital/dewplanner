export default function BreakdownPerPlatform() {
    const data = [
      { platform: 'Instagram', total: 120, planned: 30, inProgress: 25, scheduled: 40, published: 25 },
      { platform: 'TikTok', total: 80, planned: 20, inProgress: 15, scheduled: 30, published: 15 },
      { platform: 'YouTube', total: 40, planned: 10, inProgress: 8, scheduled: 12, published: 10 },
      { platform: 'Threads', total: 60, planned: 15, inProgress: 10, scheduled: 25, published: 10 },
      { platform: 'LinkedIn', total: 50, planned: 12, inProgress: 8, scheduled: 20, published: 10 },
    ]

    return (
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-primary-orange">Breakdown per Platform</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-2">Platform</th>
                <th className="p-2">Total</th>
                <th className="p-2">Planned</th>
                <th className="p-2">In Progress</th>
                <th className="p-2">Scheduled</th>
                <th className="p-2">Published</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.platform} className="border-b">
                  <td className="p-2 font-medium">{row.platform}</td>
                  <td className="p-2">{row.total}</td>
                  <td className="p-2">{row.planned}</td>
                  <td className="p-2">{row.inProgress}</td>
                  <td className="p-2">{row.scheduled}</td>
                  <td className="p-2">{row.published}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
