import { useAkinatorStore } from "@/stores/use-akinator-store";
import { questions } from "@/data/questions";

export function useAkinator() {
  const store = useAkinatorStore();

  const currentQuestion = questions[store.step] ?? null;
  const progress = (store.step / questions.length) * 100;
  const isEarlyExit = store.isFinished && store.step < questions.length;
  const remainingCount = store.candidates.length;

  return {
    step: store.step,
    totalSteps: questions.length,
    progress,
    currentQuestion,
    candidates: store.candidates,
    remainingCount,
    result: store.result,
    isFinished: store.isFinished,
    isEarlyExit,
    answers: store.answers,

    startQuiz: store.startQuiz,
    answerQuestion: store.answerQuestion,
    reset: store.reset,
  };
}
