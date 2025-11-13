import React, { type ChangeEvent, type FormEvent, useState } from "react";
import InputField from "../components/InputField";
import Title from "../components/Title";
import { useSearchParams } from "react-router";
import Button from "../components/Button";
import "../features/InputPage.css";

const InputPage = () => {
  const [name, setName] = useState("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

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

    setFormErrors(errors); // ne ovisimo o prijašnjem stanju, nema old value
  };

  return (
    <div className="CourseApply">
      <Title title={`Prijava za ${name}`} />
      <form onSubmit={onSubmit} className="CourseForm">
        <InputField name="firstName" label="First Name" error={formErrors.firstName} />
        <InputField name="lastName" label="Last Name" error={formErrors.lastName} />
        <InputField name="company" label="Company" />
        <InputField name="email" label="Email" />
        <InputField name="message" label="Message" className="GridSpan2" />
        <Button label="Apply" />
      </form>
    </div>
  );
};

export default InputPage;
