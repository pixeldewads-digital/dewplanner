import PlatformBreakdown from "@/components/dashboard/PlatformBreakdown";
import WorkloadCapacity from "@/components/dashboard/WorkloadCapacity";
import PostingHeatmap from "@/components/dashboard/PostingHeatmap";
import ActionNeeded from "@/components/dashboard/ActionNeeded";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/components/Logo";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream-background text-dark-navy">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Logo />
          <div className="flex items-center gap-4">
            <span className="font-semibold">PixelDew Workspace</span>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>PD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="flex-grow p-4 md:p-8">
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
