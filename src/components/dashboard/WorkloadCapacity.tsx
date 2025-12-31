import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const workloadData = [
  { pic: "Strategist", planned: 25, inProgress: 10, revision: 5, scheduled: 15, published: 10, total: 65 },
  { pic: "Writer", planned: 40, inProgress: 15, revision: 8, scheduled: 20, published: 15, total: 98 },
  { pic: "Designer", planned: 35, inProgress: 20, revision: 10, scheduled: 25, published: 20, total: 110 },
  { pic: "Editor", planned: 30, inProgress: 12, revision: 6, scheduled: 18, published: 12, total: 78 },
  { pic: "Admin", planned: 10, inProgress: 2, revision: 1, scheduled: 5, published: 5, total: 23 },
];

export default function WorkloadCapacity() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-teal mb-4">Workload / Capacity (Per PIC)</h2>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow className="bg-teal/10">
              <TableHead className="font-bold text-teal">PIC</TableHead>
              <TableHead className="font-bold text-teal">Planned</TableHead>
              <TableHead className="font-bold text-teal">In Progress</TableHead>
              <TableHead className="font-bold text-teal">Revision</TableHead>
              <TableHead className="font-bold text-teal">Scheduled</TableHead>
              <TableHead className="font-bold text-teal">Published</TableHead>
              <TableHead className="font-bold text-teal">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {workloadData.map((data) => (
              <TableRow key={data.pic}>
                <TableCell className="font-medium">{data.pic}</TableCell>
                <TableCell>{data.planned}</TableCell>
                <TableCell>{data.inProgress}</TableCell>
                <TableCell>{data.revision}</TableCell>
                <TableCell>{data.scheduled}</TableCell>
                <TableCell>{data.published}</TableCell>
                <TableCell>{data.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
