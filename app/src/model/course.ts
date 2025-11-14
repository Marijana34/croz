export interface CourseResponse {
  id: number;
  src: string;
  title: string;
  duration: number;
  category: string;
}

export interface CreateAttendantRequest {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  message: string;
  courseId: number;
}

export interface Attendant {
  id: number;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  message: string;
  course: {
    id: number;
    src: string;
    type: string;
    title: string;
    duration: number;
  };
}
