import React, { ChangeEvent } from "react";

type Props = {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Radio: React.FC<Props> = ({ label, name, value, checked, onChange }) => (
  <div className="mb-4 cursor-pointer">
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="form-radio cursor-pointer"
      id={`radio-${label}`}
    />
    <label className="ml-2 cursor-pointer" htmlFor={`radio-${label}`}>
      {label}
    </label>
  </div>
);

export default Radio;
