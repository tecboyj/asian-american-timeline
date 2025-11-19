import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function WorksCited() {
   const sources = [
      "https://immigrationhistory.org/item/page-act/",
      "https://www.nps.gov/safr/blogs/chinese-women-immigration-and-the-first-u-s-exclusion-law-the-page-act-of-1875.htm",
      "https://www.archives.gov/milestone-documents/chinese-exclusion-act",
      "https://history.state.gov/historicaldocuments/frus1924v02/d279",
      "https://history.state.gov/milestones/1921-1936/immigration-act",
      "https://immigrationhistory.org/item/takao-ozawa-v-united-states-1922/",
      "https://www.oyez.org/cases/1850-1900/169us649",
      "https://www.immigrant-voices.aiisf.org/876-bridges-burnt-behind-the-story-of-vaishno-das-bagai/",
      "https://www.zinnedproject.org/news/tdih/yuri-kochiyama-was-born/",
   ];
   return (
      <Card>
         <CardContent>
            <h1>Works Cited</h1>
         </CardContent>
         <CardContent>
            <ul>
               {sources.map((source) => (
                  <li>
                     <Button variant="link" asChild>
                        <a href={source}>{source}</a>
                     </Button>
                  </li>
               ))}
            </ul>
         </CardContent>
      </Card>
   );
}
