import type { Attendant, CourseResponse, CreateAttendantRequest } from "../model/course";

export async function getCourse(id: number): Promise<CourseResponse> {
  const response = await fetch(`/api/courses/${id}`);

  if (!response.ok) {
    throw new Error("Nešto ne valja");
  }

  return response.json();
}

export async function CreateAttendant(request: CreateAttendantRequest) {
  const response = await fetch(`/api/courses/${request.courseId}/attendants`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.log("Greska");
  }
}

export async function getAllAttendants(id: number): Promise<Attendant[]> {
  const response = await fetch(`/api/courses/${id}/attendants`);

  if (!response.ok) {
    throw new Error("Nešto ne valja");
  }

  return response.json();
}
