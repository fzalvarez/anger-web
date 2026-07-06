import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// The project defines custom font-size utilities (text-headline-*, text-body-*,
// text-label-*) as plain CSS in MainLayout, not as real Tailwind theme values.
// tailwind-merge doesn't recognize them, so its default "text-color" group swallows
// them and strips out genuine color classes like text-on-primary that appear earlier
// in a className string. Registering them under "font-size" fixes that misclassification.
const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "headline-lg",
            "headline-md",
            "headline-sm",
            "body-lg",
            "body-md",
            "body-sm",
            "label-md",
            "label-sm",
          ],
        },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}
