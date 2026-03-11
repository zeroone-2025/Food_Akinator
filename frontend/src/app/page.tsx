import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Badge */}
        <Badge variant="secondary" className="mb-6 text-sm py-1 px-4">
          🍱 푸드네이터
        </Badge>

        {/* 메인 이모지 */}
        <div className="text-8xl mb-6 animate-bounce">🤔</div>

        {/* 타이틀 */}
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          오늘 뭐 먹지?
        </h1>

        {/* 설명 */}
        <p className="text-lg text-muted-foreground mb-2">
          11개의 질문으로 오늘 당신이 먹고 싶은
        </p>
        <p className="text-lg text-muted-foreground mb-8">
          음식을 맞혀드릴게요!
        </p>

        {/* 시작 버튼 */}
        <Link href="/quiz">
          <Button size="lg" className="w-full text-lg py-6 rounded-xl">
            지금 시작하기 →
          </Button>
        </Link>

        {/* 서브 텍스트 */}
        <p className="text-sm text-muted-foreground mt-4">
          45종 음식 중 딱 맞는 메뉴를 추천해드려요
        </p>

        {/* 음식 아이콘들 */}
        <div className="flex justify-center gap-3 mt-8 text-3xl opacity-50">
          <span>🍲</span>
          <span>🥗</span>
          <span>🍜</span>
          <span>🥩</span>
          <span>🐔</span>
          <span>🥓</span>
        </div>
      </div>
    </div>
  );
}
