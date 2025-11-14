import type { CourseResponse } from "../model/course";

export async function getCourse(id: number): Promise<CourseResponse> {
  const response = await fetch(`/api/courses/${id}`);

  if (!response.ok) {
    throw new Error("Nešto ne valja");
  }

  return response.json();
}
