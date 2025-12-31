interface ActionItem {
    dueDate: string;
    platform: string;
    title: string;
    status: string;
    pic: string;
    priority: 'High' | 'Medium' | 'Low';
}

export default function ActionNeeded() {
    const data: ActionItem[] = [
      { dueDate: '2024-07-01', platform: 'Instagram', title: 'Finalize Q3 campaign visuals', status: 'Revision', pic: 'Designer', priority: 'High' },
      { dueDate: '2024-07-02', platform: 'TikTok', title: 'Script for "Behind the Scenes" video', status: 'In Progress', pic: 'Writer', priority: 'High' },
      { dueDate: '2024-07-03', platform: 'YouTube', title: 'Review first cut of tutorial', status: 'Revision', pic: 'Editor', priority: 'Medium' },
      { dueDate: '2024-07-05', platform: 'LinkedIn', title: 'Draft article on industry trends', status: 'Planned', pic: 'Strategist', priority: 'Low' },
    ]

    const getPriorityClass = (priority: 'High' | 'Medium' | 'Low') => {
      switch (priority) {
        case 'High': return 'border-l-4 border-red-500'
        case 'Medium': return 'border-l-4 border-yellow-500'
        default: return 'border-l-4 border-gray-300'
      }
    }

    return (
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-red-500">Action Needed</h2>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className={`flex items-center justify-between rounded bg-gray-50 p-3 ${getPriorityClass(item.priority)}`}>
              <div>
                <p className="font-bold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.platform} - Due: {item.dueDate}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{item.status}</p>
                <p className="text-sm text-gray-500">{item.pic}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
