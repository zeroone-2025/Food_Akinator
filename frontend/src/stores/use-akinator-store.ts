import { create } from "zustand";
import { foods, type Food } from "@/data/foodData";
import { questions } from "@/data/questions";

interface AkinatorState {
  step: number;
  answers: string[];
  candidates: Food[];
  result: Food | null;
  isFinished: boolean;

  startQuiz: () => void;
  answerQuestion: (answer: string) => void;
  reset: () => void;
}

export const useAkinatorStore = create<AkinatorState>((set, get) => ({
  step: 0,
  answers: [],
  candidates: foods,
  result: null,
  isFinished: false,

  startQuiz: () => {
    set({
      step: 0,
      answers: [],
      candidates: foods,
      result: null,
      isFinished: false,
    });
  },

  answerQuestion: (answer: string) => {
    const { step, candidates, answers } = get();
    const currentQuestion = questions[step];

    // 현재 질문의 필터를 적용
    const filtered = candidates.filter((food) =>
      currentQuestion.filter(food, answer)
    );

    // 필터링 결과가 없으면 이전 후보군 유지 (최소 1개 보장)
    const nextCandidates = filtered.length > 0 ? filtered : candidates;
    const nextAnswers = [...answers, answer];
    const nextStep = step + 1;

    const shouldFinish =
      nextCandidates.length === 1 || nextStep >= questions.length;

    if (shouldFinish) {
      set({
        step: nextStep,
        answers: nextAnswers,
        candidates: nextCandidates,
        result: nextCandidates[0],
        isFinished: true,
      });
    } else {
      set({
        step: nextStep,
        answers: nextAnswers,
        candidates: nextCandidates,
        isFinished: false,
      });
    }
  },

  reset: () => {
    set({
      step: 0,
      answers: [],
      candidates: foods,
      result: null,
      isFinished: false,
    });
  },
}));
