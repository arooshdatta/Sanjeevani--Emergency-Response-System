// filepath: e:\warriorai-main\src\types\sanjeevani-tagger.d.ts
declare module "sanjeevani-tagger" {
  // adjust the exports to whatever the real API is
  import type { Plugin } from "vite";
  export function componentTagger(): Plugin;
}