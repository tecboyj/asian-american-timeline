import ReactMarkdown from "react-markdown";
import { Card, CardContent } from "@/components/ui/card";

export default function Timeline() {
   const eventFiles = import.meta.glob("/src/assets/figures/*.md", {
      query: "?raw",
      import: "default",
      eager: true,
   });

   return (
      <div className="flex flex-col gap-4">
         {Object.entries(eventFiles).map(([_path, content]) => {
            return (
               <Card className="w-full">
                  <CardContent>
                     <ReactMarkdown>{content as string}</ReactMarkdown>
                  </CardContent>
               </Card>
            );
         })}
      </div>
   );
}
