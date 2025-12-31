import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const platformData = [
  { platform: "Instagram", total: 120, planned: 40, inProgress: 20, scheduled: 30, published: 30 },
  { platform: "TikTok", total: 80, planned: 30, inProgress: 10, scheduled: 20, published: 20 },
  { platform: "YouTube", total: 40, planned: 15, inProgress: 5, scheduled: 10, published: 10 },
  { platform: "Threads", total: 60, planned: 25, inProgress: 10, scheduled: 15, published: 10 },
  { platform: "LinkedIn", total: 50, planned: 20, inProgress: 5, scheduled: 15, published: 10 },
];

export default function PlatformBreakdown() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary-orange mb-4">Breakdown per Platform</h2>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow className="bg-primary-orange/10">
              <TableHead className="font-bold text-primary-orange">Platform</TableHead>
              <TableHead className="font-bold text-primary-orange">Total</TableHead>
              <TableHead className="font-bold text-primary-orange">Planned</TableHead>
              <TableHead className="font-bold text-primary-orange">In Progress</TableHead>
              <TableHead className="font-bold text-primary-orange">Scheduled</TableHead>
              <TableHead className="font-bold text-primary-orange">Published</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {platformData.map((data) => (
              <TableRow key={data.platform}>
                <TableCell className="font-medium">{data.platform}</TableCell>
                <TableCell>{data.total}</TableCell>
                <TableCell>{data.planned}</TableCell>
                <TableCell>{data.inProgress}</TableCell>
                <TableCell>{data.scheduled}</TableCell>
                <TableCell>{data.published}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
