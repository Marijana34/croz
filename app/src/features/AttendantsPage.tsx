import { useEffect, useState } from "react";
import { getAllAttendants } from "../api/CourseApi";
import type { Attendant } from "../model/course";
import { useParams } from "react-router";
import "./AttendantsPage.css";

export default function AttendantsPage() {
  const [attendants, setAttendants] = useState<Attendant[]>([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getAllAttendants(Number(id!)) // pass the course ID you want
      .then((data) => setAttendants(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading attendants...</p>;

  return (
    <div className="attendants-container">
      <h1>Polaznici tečaja</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ime</th>
            <th>Prezime</th>
            <th>Company</th>
            <th>Email</th>
            <th>Message</th>
            <th>Course Title</th>
          </tr>
        </thead>

        <tbody>
          {attendants.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.firstName}</td>
              <td>{a.lastName}</td>
              <td>{a.company}</td>
              <td>{a.email}</td>
              <td>{a.message}</td>
              <td>{a.course.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
