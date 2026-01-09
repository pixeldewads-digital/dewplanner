import PlatformBreakdown from "@/components/dashboard/PlatformBreakdown";
import WorkloadCapacity from "@/components/dashboard/WorkloadCapacity";
import PostingHeatmap from "@/components/dashboard/PostingHeatmap";
import ActionNeeded from "@/components/dashboard/ActionNeeded";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/components/Logo";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream-background text-dark-navy">
      <main className="flex-grow p-4 md:p-8 pt-24">
        <div className="container mx-auto space-y-8">
          <PlatformBreakdown />
          <WorkloadCapacity />
          <PostingHeatmap />
          <ActionNeeded />
        </div>
      </main>
    </div>
  );
}
