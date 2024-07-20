// app/components/ContactForm/Textarea.tsx
import React, { ChangeEvent } from "react";
import ErrorMessage from "../ErrorMessage";

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
};

const Textarea: React.FC<Props> = ({ label, name, value, onChange, error }) => (
  <div className="mb-4">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      {label}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
    <ErrorMessage message={error} />
  </div>
);

export default Textarea;
