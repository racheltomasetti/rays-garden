/**
 * Get the color for a category badge
 */
export function getCategoryColor(category: string): string {
  switch (category) {
    case "Projects":
      return "#9e2a2b"; // terra
    case "Resources":
      return "#58a4b0"; // pacific
    case "Ki":
      return "#efcb68"; // ray
    case "Essays":
      return "#e0bad7"; // dawn
    default:
      return "#af3029"; // accent
  }
}
