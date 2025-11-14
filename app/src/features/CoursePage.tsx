import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getCourse } from "../api/CourseApi";
import type { CourseResponse } from "../model/course";
import { getAllData } from "../api/AllApi";

export default function CoursePage() {
  const [courses, setCourses] = useState<CourseResponse[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllData().then((data) => {
      setCourses(data);
      setLoading(false);
    });
  }, []);

  return <div className="content">{loading ? "Loading..." : courses.map((course) => <Card {...course} key={course.id} />)}</div>;
}
