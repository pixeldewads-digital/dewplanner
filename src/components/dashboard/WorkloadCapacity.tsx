export default function WorkloadCapacity() {
    const data = [
      { pic: 'Strategist', planned: 10, inProgress: 8, revision: 2, scheduled: 12, published: 8, total: 40 },
      { pic: 'Writer', planned: 15, inProgress: 12, revision: 4, scheduled: 18, published: 10, total: 59 },
      { pic: 'Designer', planned: 12, inProgress: 10, revision: 3, scheduled: 15, published: 9, total: 49 },
      { pic: 'Editor', planned: 8, inProgress: 6, revision: 1, scheduled: 10, published: 7, total: 32 },
      { pic: 'Admin', planned: 5, inProgress: 3, revision: 0, scheduled: 8, published: 4, total: 20 },
    ]

    return (
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-teal">Workload / Capacity (Per PIC)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-2">PIC</th>
                <th className="p-2">Planned</th>
                <th className="p-2">In Progress</th>
                <th className="p-2">Revision</th>
                <th className="p-2">Scheduled</th>
                <th className="p-2">Published</th>
                <th className="p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.pic} className="border-b">
                  <td className="p-2 font-medium">{row.pic}</td>
                  <td className="p-2">{row.planned}</td>
                  <td className="p-2">{row.inProgress}</td>
                  <td className="p-2">{row.revision}</td>
                  <td className="p-2">{row.scheduled}</td>
                  <td className="p-2">{row.published}</td>
                  <td className="p-2">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
