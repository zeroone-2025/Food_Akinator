import type { Food } from "./foodData";

export interface QuestionOption {
  label: string;
  value: string;
}

export interface Question {
  id: string;
  text: string;
  subText?: string;
  options: QuestionOption[];
  filter: (food: Food, answer: string) => boolean;
}

export const questions: Question[] = [
  {
    id: "q1_meal",
    text: "지금 든든한 '밥'이 먹고 싶나요?",
    subText: "식사를 원하는지 간단한 간식을 원하는지 알려주세요",
    options: [
      { label: "네, 제대로 된 식사가 하고 싶어요", value: "yes" },
      { label: "아니요, 간단하게 먹고 싶어요", value: "no" },
    ],
    filter: (food, answer) => {
      if (answer === "yes") return food.tags.mealType === "meal";
      if (answer === "no") return food.tags.mealType !== "meal";
      return true;
    },
  },
  {
    id: "q2_soup",
    text: "따끈한 '국물'이 있는 요리를 원하시나요?",
    subText: "찌개, 탕, 국 종류를 좋아하신다면 예를 선택하세요",
    options: [
      { label: "네, 국물이 있으면 좋겠어요", value: "yes" },
      { label: "아니요, 국물 없어도 괜찮아요", value: "no" },
      { label: "상관없어요", value: "any" },
    ],
    filter: (food, answer) => {
      if (answer === "yes") return food.tags.soup === true;
      if (answer === "no") return food.tags.soup === false;
      return true;
    },
  },
  {
    id: "q3_spicy",
    text: "오늘 '매운맛'이 당기나요?",
    subText: "스트레스를 매운 음식으로 풀고 싶으신가요?",
    options: [
      { label: "엄청 매운 게 먹고 싶어요", value: "high" },
      { label: "약간 매콤한 건 괜찮아요", value: "medium" },
      { label: "매운 건 별로예요", value: "none" },
    ],
    filter: (food, answer) => {
      if (answer === "high") return food.tags.spicy === "high";
      if (answer === "medium")
        return food.tags.spicy === "high" || food.tags.spicy === "medium";
      if (answer === "none") return food.tags.spicy === "none";
      return true;
    },
  },
  {
    id: "q4_meat",
    text: "주재료로 '고기'가 들어갔으면 좋겠나요?",
    subText: "돼지고기, 소고기, 닭고기 등 육류 포함 여부",
    options: [
      { label: "네, 고기가 필수예요", value: "yes" },
      { label: "아니요, 채소나 다른 재료도 좋아요", value: "no" },
    ],
    filter: (food, answer) => {
      if (answer === "yes") return food.tags.meat !== "none";
      if (answer === "no") return food.tags.meat === "none";
      return true;
    },
  },
  {
    id: "q5_temperature",
    text: "시원하거나 '차가운' 음식도 괜찮나요?",
    subText: "냉면, 육회 같은 차가운 음식을 원하시나요?",
    options: [
      { label: "네, 차가운 게 오히려 좋아요", value: "cold" },
      { label: "아니요, 따뜻한 게 좋아요", value: "hot" },
      { label: "상관없어요", value: "any" },
    ],
    filter: (food, answer) => {
      if (answer === "cold") return food.tags.temperature === "cold";
      if (answer === "hot") return food.tags.temperature !== "cold";
      return true;
    },
  },
  {
    id: "q6_cooking",
    text: "오늘 원하는 조리 방식은 무엇인가요?",
    subText: "어떤 방식으로 만든 음식이 땡기나요?",
    options: [
      { label: "구이 (불에 굽는 것)", value: "grill" },
      { label: "찌개·탕 (끓이는 것)", value: "stew" },
      { label: "볶음 (볶아낸 것)", value: "stirfry" },
      { label: "뭐든 상관없어요", value: "any" },
    ],
    filter: (food, answer) => {
      if (answer === "any") return true;
      return food.tags.cookingMethod === answer;
    },
  },
  {
    id: "q7_noodle",
    text: "후루룩 먹기 좋은 '면 요리'가 당기나요?",
    subText: "냉면, 칼국수, 잡채 같은 면 종류를 좋아하신다면",
    options: [
      { label: "네, 면 요리가 좋아요", value: "yes" },
      { label: "아니요, 면보다 다른 게 좋아요", value: "no" },
    ],
    filter: (food, answer) => {
      if (answer === "yes") return food.tags.noodle === true;
      if (answer === "no") return food.tags.noodle === false;
      return true;
    },
  },
  {
    id: "q8_budget",
    text: "오늘 식사 예산은 어느 정도인가요?",
    subText: "1만원을 기준으로 선택해주세요",
    options: [
      { label: "저렴하게 먹고 싶어요 (1만원 이하)", value: "low" },
      { label: "좀 더 쓸 수 있어요 (1만원 이상)", value: "high" },
    ],
    filter: (food, answer) => {
      if (answer === "low") return food.tags.budget === "low";
      if (answer === "high") return true; // 비싼 것도 괜찮으면 다 가능
      return true;
    },
  },
  {
    id: "q9_social",
    text: "지금 식사 분위기는 어떤가요?",
    subText: "혼자 조용히 vs 여럿이 시끌벅적",
    options: [
      { label: "혼자 조용히 먹고 싶어요", value: "solo" },
      { label: "여럿이 함께 먹을 거예요", value: "group" },
    ],
    filter: (food, answer) => {
      if (answer === "solo")
        return food.tags.social === "solo" || food.tags.social === "both";
      if (answer === "group")
        return food.tags.social === "group" || food.tags.social === "both";
      return true;
    },
  },
  {
    id: "q10_feeling",
    text: "지금 당장 생각나는 느낌은 무엇인가요?",
    subText: "마지막 질문! 가장 끌리는 느낌을 선택하세요",
    options: [
      { label: "고소하고 구수한 느낌", value: "savory" },
      { label: "칼칼하고 매콤한 느낌", value: "spicy" },
      { label: "담백하고 깔끔한 느낌", value: "mild" },
      { label: "기름지고 풍성한 느낌", value: "greasy" },
      { label: "신선하고 가벼운 느낌", value: "fresh" },
    ],
    filter: (food, answer) => {
      return food.tags.feeling.includes(
        answer as "savory" | "spicy" | "mild" | "greasy" | "fresh"
      );
    },
  },
];
