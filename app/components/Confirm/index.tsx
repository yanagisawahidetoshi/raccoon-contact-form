import { FormData } from "@/app/types";
import React from "react";
import Button from "../Button";

type Props = {
  formData: FormData;
  handleBack: () => void;
  handleSubmit: () => void;
};

export const Confirm: React.FC<Props> = ({
  formData,
  handleBack,
  handleSubmit,
}) => (
  <div>
    <h2>確認</h2>
    <p>名前: {formData.name}</p>
    <p>メールアドレス: {formData.email}</p>
    <p>性別: {formData.gender}</p>
    <p>都道府県: {formData.prefecture}</p>
    <p>スキル: {formData.skills.join(", ")}</p>
    <p>自己アピール: {formData.selfPromotion}</p>
    <Button type="button" variant="primary" onClick={handleSubmit}>
      完了
    </Button>
    <Button type="button" variant="secondary" onClick={handleBack}>
      戻る
    </Button>
  </div>
);
