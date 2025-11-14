import type { CourseResponse } from "../model/course";

export async function getAllData(): Promise<CourseResponse[]> {
  const response = await fetch(`/api/courses`);

  if (!response.ok) {
    throw new Error("Nešto ne valja");
  }

  return response.json();
}
