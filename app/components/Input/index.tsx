import React, { ChangeEvent } from "react";
import ErrorMessage from "../ErrorMessage";

type Props = {
  label: string;
  type: "text" | "email";
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const Input: React.FC<Props> = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
}) => (
  <div>
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
    <ErrorMessage message={error} />
  </div>
);

export default Input;
