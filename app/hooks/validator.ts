export const isRequired = (
  value: string | string[],
  fieldName: string
): string | null => {
  if (!value || (Array.isArray(value) && value.length === 0)) {
    return `${fieldName}を入力してください`;
  }
  return null;
};

export const isValidEmail = (email: string): string | null => {
  if (!/\S+@\S+\.\S+/.test(email)) {
    return "有効なメールアドレスを入力してください";
  }
  return null;
};
