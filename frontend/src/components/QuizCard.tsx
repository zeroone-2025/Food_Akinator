"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Question } from "@/data/questions";

interface QuizCardProps {
  question: Question;
  step: number;
  totalSteps: number;
  progress: number;
  remainingCount: number;
  onAnswer: (answer: string) => void;
}

export function QuizCard({
  question,
  step,
  totalSteps,
  progress,
  remainingCount,
  onAnswer,
}: QuizCardProps) {
  return (
    <div className="w-full max-w-lg mx-auto">
      {/* 진행률 */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>질문 {step + 1} / {totalSteps}</span>
          <span>후보 {remainingCount}개 남음</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 질문 카드 */}
      <Card className="shadow-lg">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
              Q{step + 1}
            </span>
            <span className="text-xs text-muted-foreground">아키네이터가 묻습니다</span>
          </div>
          <CardTitle className="text-xl leading-snug">{question.text}</CardTitle>
          {question.subText && (
            <p className="text-sm text-muted-foreground mt-1">{question.subText}</p>
          )}
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            {question.options.map((option) => (
              <Button
                key={option.value}
                variant="outline"
                className="w-full justify-start text-left h-auto py-3 px-4 hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => onAnswer(option.value)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
