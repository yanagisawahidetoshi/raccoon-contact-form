"use client";

import React from "react";

import { Form } from "./components/Form";
import { Confirm } from "./components/Confirm";
import { useContactForm } from "./hooks/useContactForm";

const Home = () => {
  const {
    formData,
    errors,
    step,
    handleChange,
    handleConfirm,
    handleBack,
    handleSubmit,
  } = useContactForm();

  if (step === "thanks") {
    return (
      <div>
        <h2>Thanks!</h2>
        <p>お問い合わせありがとうございます。</p>
      </div>
    );
  }

  if (step === "confirm") {
    return (
      <Confirm
        formData={formData}
        handleBack={handleBack}
        handleSubmit={handleSubmit}
      />
    );
  }

  return (
    <Form
      formData={formData}
      errors={errors}
      handleChange={handleChange}
      handleConfirm={handleConfirm}
    />
  );
};

export default Home;
