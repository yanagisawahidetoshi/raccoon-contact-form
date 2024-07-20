"use client";
import { useState, ChangeEvent } from "react";
import { Errors, FormData } from "../types";

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
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prevData) => {
        const newSkills = checked
          ? [...prevData.skills, name]
          : prevData.skills.filter((skill) => skill !== name);
        return {
          ...prevData,
          skills: newSkills,
        };
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validate = () => {
    const newErrors: Errors = {};
    if (!formData.name) newErrors.name = "名前を入力してください";
    if (!formData.email) newErrors.email = "メールアドレスを入力してください";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "有効なメールアドレスを入力してください";
    if (!formData.gender) newErrors.gender = "性別を選択してください";
    if (!formData.prefecture)
      newErrors.prefecture = "都道府県を選択してください";
    if (formData.skills.length === 0)
      newErrors.skills = "少なくとも1つのスキルを選択してください";
    if (!formData.selfPromotion)
      newErrors.selfPromotion = "自己アピールを入力してください";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirm = () => {
    if (validate()) {
      setIsConfirmed(true);
    }
  };

  const handleBack = () => {
    setIsConfirmed(false);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setIsConfirmed(false);
  };

  return {
    formData,
    errors,
    isConfirmed,
    isSubmitted,
    handleChange,
    handleConfirm,
    handleBack,
    handleSubmit,
  };
};
