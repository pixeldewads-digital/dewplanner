import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const actionData = [
  { dueDate: "2024-05-28", platform: "Instagram", title: "Finalize Q3 Campaign", status: "Revision", pic: "Designer", priority: "High" },
  { dueDate: "2024-05-29", platform: "YouTube", title: "Script for New Video", status: "Planned", pic: "Writer", priority: "High" },
  { dueDate: "2024-05-30", platform: "TikTok", title: "Shoot Viral Trend Video", status: "In Progress", pic: "Editor", priority: "Medium" },
  { dueDate: "2024-06-01", platform: "LinkedIn", title: "Publish Tech Article", status: "Scheduled", pic: "Admin", priority: "Low" },
  { dueDate: "2024-06-02", platform: "Threads", title: "Brainstorm New Ideas", status: "Planned", pic: "Strategist", priority: "Medium" },
];

export default function ActionNeeded() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-deep-orange mb-4">Action Needed</h2>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow className="bg-deep-orange/10">
              <TableHead className="font-bold text-deep-orange">Due Date</TableHead>
              <TableHead className="font-bold text-deep-orange">Platform</TableHead>
              <TableHead className="font-bold text-deep-orange">Title</TableHead>
              <TableHead className="font-bold text-deep-orange">Status</TableHead>
              <TableHead className="font-bold text-deep-orange">PIC</TableHead>
              <TableHead className="font-bold text-deep-orange">Priority</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {actionData.map((data, index) => (
              <TableRow key={index} className={data.priority === "High" ? "bg-red-100/50" : ""}>
                <TableCell>{data.dueDate}</TableCell>
                <TableCell>{data.platform}</TableCell>
                <TableCell className="font-medium">{data.title}</TableCell>
                <TableCell>{data.status}</TableCell>
                <TableCell>{data.pic}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      data.priority === "High" ? "destructive" :
                      data.priority === "Medium" ? "secondary" : "outline"
                    }
                  >
                    {data.priority}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
