import { prefectures } from "../data";

export type Prefecture = (typeof prefectures)[number];
export type Gender = "男性" | "女性";

export type FormData = {
  name: string;
  email: string;
  gender: Gender | "";
  prefecture: Prefecture | "";
  skills: string[];
  selfPromotion: string;
};

export type Errors = {
  name?: string;
  email?: string;
  gender?: string;
  prefecture?: string;
  skills?: string;
  selfPromotion?: string;
};
