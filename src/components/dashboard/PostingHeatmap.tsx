import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const calendarData = Array.from({ length: 35 }, (_, i) => {
  const day = i - 3;
  if (day > 0 && day <= 31) {
    const posts = Math.floor(Math.random() * 10);
    return { day, posts };
  }
  return { day: null, posts: 0 };
});

export default function PostingHeatmap() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-soft-yellow-accent mb-4">Posting Heatmap (Calendar)</h2>
      <Card className="overflow-hidden">
        <CardHeader className="bg-soft-yellow-accent/20">
          <CardTitle className="flex justify-between items-center text-dark-navy">
            <span>&lt;</span>
            <span>May 2024</span>
            <span>&gt;</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-7">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center font-bold py-2 border-b text-dark-navy">{day}</div>
            ))}
            {calendarData.map((data, index) => (
              <div
                key={index}
                className={`h-24 border-r border-b p-2 flex flex-col justify-start items-start ${
                  !data.day ? "bg-gray-50" : ""
                }`}
                style={{
                  backgroundColor: data.day
                    ? `rgba(242, 164, 76, ${data.posts / 10})`
                    : undefined,
                }}
              >
                <span className="font-bold">{data.day}</span>
                {data.day && data.posts > 0 && (
                  <span className="text-sm mt-1">{data.posts} posts</span>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
