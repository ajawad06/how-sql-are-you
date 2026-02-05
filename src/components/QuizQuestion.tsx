import { useState } from "react";
import { Question } from "@/data/quizData";
import { cn } from "@/lib/utils";

interface QuizQuestionProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
}

const QuizQuestion = ({ question, currentIndex, totalQuestions, onAnswer }: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index: number) => {
    if (showResult) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    
    setTimeout(() => {
      onAnswer(index === question.correctAnswer);
      setSelectedAnswer(null);
      setShowResult(false);
    }, 1500);
  };

  const getOptionClass = (index: number) => {
    if (!showResult) {
      return selectedAnswer === index
        ? "border-primary bg-primary/10"
        : "border-border hover:border-primary/50 hover:bg-muted/50";
    }

    if (index === question.correctAnswer) {
      return "border-success bg-success/20 text-success";
    }

    if (selectedAnswer === index && index !== question.correctAnswer) {
      return "border-destructive bg-destructive/20 text-destructive";
    }

    return "border-border opacity-50";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl animate-fade-in">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-mono text-muted-foreground">
              Query {currentIndex + 1} of {totalQuestions}
            </span>
            <span className="text-sm font-mono text-primary">
              {Math.round(((currentIndex) / totalQuestions) * 100)}% complete
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          <h2 className="text-xl md:text-2xl font-bold mb-4 font-display">
            {question.question}
          </h2>

          {question.code && (
            <pre className="bg-background border border-border rounded-md p-4 font-mono text-sm md:text-base overflow-x-auto">
              <code className="text-primary">{question.code}</code>
            </pre>
          )}
        </div>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={showResult}
              className={cn(
                "w-full p-4 text-left rounded-lg border-2 transition-all duration-300 font-mono text-sm md:text-base",
                getOptionClass(index)
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="inline-flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold">
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
              </span>
            </button>
          ))}
        </div>

        {showResult && (
          <div className="mt-6 text-center animate-fade-in">
            {selectedAnswer === question.correctAnswer ? (
              <p className="text-success font-mono">✓ Correct! Well done.</p>
            ) : (
              <p className="text-destructive font-mono">
                ✗ Not quite. The answer was: {question.options[question.correctAnswer]}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizQuestion;
