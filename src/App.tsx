import TimelinePage from "./timeline/page";
import SupremeCourtPage from "./supreme-court/page";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function App() {
   const [view, setView] = useState<"supreme-court" | "timeline">(
      "supreme-court"
   );

   if (true) {
      return <TimelinePage />;
   }

   return (
      <div>
         <nav className="flex gap-4 p-4">
            <Button onClick={() => setView("supreme-court")}>
               Supreme Court
            </Button>
            <Button onClick={() => setView("timeline")}>Timeline</Button>
         </nav>

         <main style={{ marginTop: 16 }}>
            {view === "supreme-court" ? <SupremeCourtPage /> : <TimelinePage />}
         </main>
      </div>
   );
}
