"use client";

import React from "react";

import { Form } from "./components/Form";
import { Confirm } from "./components/Confirm";
import { useContactForm } from "./hooks/useContactForm";

const Home = () => {
  const {
    formData,
    errors,
    isConfirmed,
    isSubmitted,
    handleChange,
    handleConfirm,
    handleBack,
    handleSubmit,
  } = useContactForm();

  if (isSubmitted) {
    return (
      <div>
        <h2>Thanks!</h2>
        <p>お問い合わせありがとうございます。</p>
      </div>
    );
  }

  if (isConfirmed) {
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
