import React from "react";

type Props = {
  message?: string;
};

const ErrorMessage: React.FC<Props> = ({ message }) => {
  if (!message) return null;
  return <p className="mt-2 text-sm text-red-600">{message}</p>;
};

export default ErrorMessage;
