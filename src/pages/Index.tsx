import { useState } from "react";
import WelcomeScreen from "@/components/WelcomeScreen";
import QuizQuestion from "@/components/QuizQuestion";
import ResultScreen from "@/components/ResultScreen";
import { questions, getSQLLevel } from "@/data/quizData";

type GameState = "welcome" | "quiz" | "result";

const Index = () => {
  const [gameState, setGameState] = useState<GameState>("welcome");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setGameState("quiz");
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setGameState("result");
    }
  };

  const handleRestart = () => {
    setGameState("welcome");
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {gameState === "welcome" && <WelcomeScreen onStart={handleStart} />}
        
        {gameState === "quiz" && (
          <QuizQuestion
            key={currentQuestionIndex}
            question={questions[currentQuestionIndex]}
            currentIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
          />
        )}
        
        {gameState === "result" && (
          <ResultScreen
            score={score}
            level={getSQLLevel(score)}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
