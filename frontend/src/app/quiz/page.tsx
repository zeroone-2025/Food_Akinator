"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAkinator } from "@/hooks/useAkinator";
import { QuizCard } from "@/components/QuizCard";

export default function QuizPage() {
  const router = useRouter();
  const {
    step,
    totalSteps,
    progress,
    currentQuestion,
    remainingCount,
    isFinished,
    startQuiz,
    answerQuestion,
  } = useAkinator();

  // 페이지 진입 시 퀴즈 초기화
  useEffect(() => {
    startQuiz();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // 완료되면 결과 페이지로 이동
  useEffect(() => {
    if (isFinished) {
      router.push("/result");
    }
  }, [isFinished, router]);

  if (!currentQuestion || isFinished) {
    return (
      <div className="min-h-[calc(100vh-120px)] flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-3 animate-spin">🍱</div>
          <p className="text-muted-foreground">결과를 분석하는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center px-4 py-8">
      <QuizCard
        question={currentQuestion}
        step={step}
        totalSteps={totalSteps}
        progress={progress}
        remainingCount={remainingCount}
        onAnswer={answerQuestion}
      />
    </div>
  );
}
