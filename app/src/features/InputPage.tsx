import React, { type ChangeEvent, type FormEvent, useState } from "react";
import InputField from "../components/InputField";
import Title from "../components/Title";
import { Navigate, useParams, useSearchParams } from "react-router";
import Button from "../components/Button";
import "../features/InputPage.css";
import { CreateAttendant } from "../api/CourseApi";
import { useNavigate } from "react-router";

const InputPage = () => {
  const [name, setName] = useState("");
  const { id } = useParams(); //čita iz url sve stavri što smo rekli da su parametri
  const [formErrors, setFormErrors] = useState<Record<string, string>>();
  const navigate = useNavigate();
  const navigateAttendants = useNavigate();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.currentTarget);

    const formData = new FormData(event.currentTarget);
    const data: Record<string, unknown> = {};

    formData.forEach((value, name) => {
      data[name] = value;
    });
    console.log(data);

    const errors: Record<string, string> = {};

    if (!data.firstName) {
      errors.firstName = "Ime je obavezno polje";
    }

    if (!data.lastName) {
      errors.lastName = "Prezime je obavezno polje";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors); // ne ovisimo o prijašnjem stanju, nema old value
      return;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error

    CreateAttendant({ ...data, courseId: Number(id!) }).then(() => navigate("/courses")); // tu staviti navigate, tek nakon validacije, ne uz button onclick
  };

  return (
    <div className="CourseApply">
      <Title title={`Prijava za ${name}`} />
      <form onSubmit={onSubmit} className="CourseForm">
        <InputField name="firstName" label="First Name" error={formErrors?.firstName} />
        <InputField name="lastName" label="Last Name" error={formErrors?.lastName} />
        <InputField name="company" label="Company" />
        <InputField name="email" label="Email" />
        <InputField name="message" label="Message" className="GridSpan2" />
        <Button label="Apply" type="submit" />
        <Button label="Attendants" type="button" onClick={() => navigateAttendants(`/courses/${id}/attendants`)} />
      </form>
    </div>
  );
};

export default InputPage;
