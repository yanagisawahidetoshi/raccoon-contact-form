// app/components/ContactForm/Select.tsx
import React, { ChangeEvent } from "react";
import ErrorMessage from "../ErrorMessage";

type Props = {
  label: string;
  name: string;
  value: string;
  options: readonly string[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
};

const Select: React.FC<Props> = ({
  label,
  name,
  value,
  options,
  onChange,
  error,
}) => (
  <div className="mb-4">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      {label}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value="">選択してください</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    <ErrorMessage message={error} />
  </div>
);

export default Select;
