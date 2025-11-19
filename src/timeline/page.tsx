import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Figures from "./Figures";
import Timeline from "./Timeline";
import WorksCited from "./WorksCited";

export default function TimelinePage() {
   return (
      <div className="flex flex-col gap-4 m-8">
         <Tabs defaultValue="events">
            <TabsList>
               <TabsTrigger value="events">Events</TabsTrigger>
               <TabsTrigger value="people">People</TabsTrigger>
               <TabsTrigger value="works-cited">Works Cited</TabsTrigger>
            </TabsList>
            <TabsContent value="events">
               <Timeline />
            </TabsContent>
            <TabsContent value="people">
               <Figures />
            </TabsContent>
            <TabsContent value="works-cited">
               <WorksCited />
            </TabsContent>
         </Tabs>
      </div>
   );
}
