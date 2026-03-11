"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Food } from "@/data/foodData";

interface ResultCardProps {
  food: Food;
  isEarlyExit: boolean;
  questionCount: number;
  onRestart: () => void;
}

export function ResultCard({ food, isEarlyExit, questionCount, onRestart }: ResultCardProps) {
  const cuisineLabel: Record<string, string> = {
    korean: "🇰🇷 한식",
    japanese: "🇯🇵 일식",
    chinese: "🇨🇳 중식",
  };
  const tagLabels: Record<string, string> = {
    high: "매운맛", medium: "약간 매운", none: "순한맛",
    pork: "돼지고기", beef: "소고기", chicken: "닭고기",
    hot: "따뜻한", cold: "차가운", room: "상온",
    savory: "고소함", spicy: "칼칼함", mild: "담백함", greasy: "기름진", fresh: "신선함",
  };
  const displayTags = [
    food.tags.soup ? "국물요리" : "비국물",
    food.tags.spicy !== "none" ? tagLabels[food.tags.spicy] : null,
    food.tags.meat !== "none" ? tagLabels[food.tags.meat] : null,
    tagLabels[food.tags.temperature],
    food.tags.noodle ? "면요리" : null,
  ].filter(Boolean) as string[];

  return (
    <div className="w-full max-w-lg mx-auto">
      {isEarlyExit && (
        <div className="mb-4 text-center">
          <Badge variant="secondary" className="text-sm py-1 px-3">
            ⚡ {questionCount}번 만에 찾았어요!
          </Badge>
        </div>
      )}
      <Card className="shadow-xl border-2 border-primary/20">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-2">
            <Badge className="text-sm py-1 px-3">{cuisineLabel[food.cuisine]}</Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-2">오늘 당신이 먹을 음식은...</p>
          <div className="text-7xl mb-3">{food.emoji}</div>
          <CardTitle className="text-3xl font-bold">{food.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {displayTags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
            ))}
            {food.tags.feeling.map((f) => (
              <Badge key={f} className="text-xs bg-primary/10 text-primary border-primary/20">
                {tagLabels[f]}
              </Badge>
            ))}
          </div>
          <div className="bg-muted rounded-lg p-4 text-sm text-center leading-relaxed">
            {food.desc}
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <Button onClick={onRestart} className="w-full" size="lg">다시 해볼게요</Button>
            <Button variant="outline" className="w-full"
              onClick={() => { if (navigator.share) navigator.share({ title: "푸드네이터 결과", text: `오늘의 추천 메뉴는 ${food.emoji} ${food.name}!` }); }}>
              결과 공유하기
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
