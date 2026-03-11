"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAkinator } from "@/hooks/useAkinator";
import { ResultCard } from "@/components/ResultCard";

export default function ResultPage() {
  const router = useRouter();
  const { result, isFinished, isEarlyExit, step, reset } = useAkinator();

  // 결과 없으면 홈으로
  useEffect(() => {
    if (!isFinished || !result) {
      router.push("/");
    }
  }, [isFinished, result, router]);

  const handleRestart = () => {
    reset();
    router.push("/");
  };

  if (!result) {
    return (
      <div className="min-h-[calc(100vh-120px)] flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-3">🔄</div>
          <p className="text-muted-foreground">홈으로 이동 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center px-4 py-8">
      <ResultCard
        food={result}
        isEarlyExit={isEarlyExit}
        questionCount={step}
        onRestart={handleRestart}
      />
    </div>
  );
}
