import Card from "../components/Card";

export default function CoursePage() {
  const courses = [
    {
      id: 1,
      src: "https://croz.net/app/uploads/2025/03/gitops-1.jpg",
      title: "GitOps Fundamentals",
      duration: 2,
      category: "DEVOPS",
    },
    {
      id: 2,
      src: "https://croz.net/app/uploads/2025/03/gitops-1.jpg",
      title: "Service Mesh Workshop",
      duration: 2,
      category: "DEVOPS",
    },
  ];

  return (
    <div className="content">
      {courses.map((course) => (
        <Card {...course} key={course.title} />
      ))}
    </div>
  );
}
