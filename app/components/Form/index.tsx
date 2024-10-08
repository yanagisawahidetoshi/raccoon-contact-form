import { prefectures } from "@/app/data";
import { Errors, FormData } from "@/app/types";
import React, { ChangeEvent } from "react";
import Input from "../Input";
import Radio from "../Radio";
import ErrorMessage from "../ErrorMessage";
import Select from "../Select";
import Checkbox from "../CheckBox";
import Textarea from "../TextArea";
import Button from "../Button";

type Props = {
  formData: FormData;
  errors: Errors;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handleConfirm: () => void;
};

export const Form: React.FC<Props> = ({
  formData,
  errors,
  handleChange,
  handleConfirm,
}) => (
  <form>
    <Input
      label="名前"
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      error={errors.name}
    />
    <Input
      label="メールアドレス"
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      error={errors.email}
    />
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        性別
      </label>
      {["男性", "女性"].map((v) => (
        <Radio
          label={v}
          name="gender"
          value={v}
          checked={formData.gender === v}
          onChange={handleChange}
          key={v}
        />
      ))}
      <ErrorMessage message={errors.gender} />
    </div>
    <div>
      <Select
        label="都道府県"
        name="prefecture"
        value={formData.prefecture}
        options={prefectures}
        onChange={handleChange}
        error={errors.prefecture}
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        スキル
      </label>
      {["Html", "JavaScript"].map((v) => (
        <Checkbox
          label={v}
          name={v}
          checked={formData.skills.includes(v)}
          onChange={handleChange}
          key={v}
        />
      ))}
      <ErrorMessage message={errors.skills} />
    </div>
    <div>
      <Textarea
        label="自己アピール"
        name="selfPromotion"
        value={formData.selfPromotion}
        onChange={handleChange}
        error={errors.selfPromotion}
      />
    </div>
    <Button onClick={handleConfirm} type="button" variant="primary">
      確認
    </Button>
  </form>
);
