import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover";
import ReactMarkdown from "react-markdown";

export default function Event({ md }: { md: string }) {
   return (
      <div>
         <Popover>
            <PopoverTrigger>
               <Button variant="ghost" size="icon">
                  <Star color="#fcff38" />
               </Button>
            </PopoverTrigger>
            <PopoverContent>
               <ReactMarkdown>{md}</ReactMarkdown>
            </PopoverContent>
         </Popover>
      </div>
   );
}
