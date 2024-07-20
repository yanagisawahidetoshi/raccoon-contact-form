import React, { ChangeEvent } from "react";

type Props = {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<Props> = ({ label, name, checked, onChange }) => (
  <div className="inline-flex items-center">
    <input
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      id={`checkbox-${label}`}
    />
    <label className="ml-2" htmlFor={`checkbox-${label}`}>
      {label}
    </label>
  </div>
);

export default Checkbox;
