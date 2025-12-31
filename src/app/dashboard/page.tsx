import BreakdownPerPlatform from '@/components/dashboard/BreakdownPerPlatform'
import WorkloadCapacity from '@/components/dashboard/WorkloadCapacity'
import PostingHeatmap from '@/components/dashboard/PostingHeatmap'
import ActionNeeded from '@/components/dashboard/ActionNeeded'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-cream-background">
      <header className="sticky top-0 z-10 border-b bg-white/60 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-2xl font-bold text-dark-navy">
            Dew Flow Planner
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-dark-teal">Workspace Name</span>
            <div className="h-8 w-8 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-8">
        <div className="grid gap-8">
          <BreakdownPerPlatform />
          <WorkloadCapacity />
          <PostingHeatmap month="July" year={2024} />
          <ActionNeeded />
        </div>
      </main>
    </div>
  )
}
