import "./App.css";
import ReactMarkdown from "react-markdown";
import page from "./assets/events/1790_naturalization_act.md?raw";
import { Card, CardContent } from "./components/ui/card";

function App() {
   return (
      <>
         <Card>
            <CardContent>
               <ReactMarkdown>{page}</ReactMarkdown>
            </CardContent>
         </Card>
      </>
   );
}

export default App;
