import { useState, ChangeEvent } from "react";
import { Errors, FormData } from "../types";
import { isRequired, isValidEmail } from "./validator";

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    gender: "",
    prefecture: "",
    skills: [],
    selfPromotion: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [step, setStep] = useState<"form" | "confirm" | "thanks">("form");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((v) => {
        const newSkills = checked
          ? [...v.skills, name]
          : v.skills.filter((skill) => skill !== name);
        return {
          ...v,
          skills: newSkills,
        };
      });
      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors: Errors = {};

    const nameError = isRequired(formData.name, "名前");
    if (nameError) {
      newErrors.name = nameError;
    }

    const emailError = isRequired(formData.email, "メールアドレス");
    const emailValidError = isValidEmail(formData.email);
    if (emailError) {
      newErrors.email = emailError;
    } else if (emailValidError) {
      newErrors.email = emailValidError;
    }

    const genderError = isRequired(formData.gender, "性別");
    if (genderError) {
      newErrors.gender = genderError;
    }

    const prefectureError = isRequired(formData.prefecture, "都道府県");
    if (prefectureError) {
      newErrors.prefecture = prefectureError;
    }

    const skillsError = isRequired(formData.skills, "スキル");
    if (skillsError) {
      newErrors.skills = skillsError;
    }

    const selfPromotionError = isRequired(formData.selfPromotion, "自己紹介");
    if (selfPromotionError) {
      newErrors.selfPromotion = selfPromotionError;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirm = () => {
    if (validate()) {
      setStep("confirm");
    }
  };

  const handleBack = () => {
    setStep("form");
  };

  const handleSubmit = () => {
    setStep("thanks");
  };

  return {
    formData,
    errors,
    step,
    handleChange,
    handleConfirm,
    handleBack,
    handleSubmit,
  };
};
