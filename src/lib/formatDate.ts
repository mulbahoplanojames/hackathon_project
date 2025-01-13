import { format, isValid, parseISO } from "date-fns";

export const formatDate = (dateString: string) => {
  try {
    if (!dateString) return "Date unavailable";

    const date = parseISO(dateString);

    if (!isValid(date)) {
      return "Invalid date";
    }

    return format(date, "MMMM dd, yyyy");
  } catch (error) {
    console.error("Date formatting error:", error);
    return "Invalid date format";
  }
};
