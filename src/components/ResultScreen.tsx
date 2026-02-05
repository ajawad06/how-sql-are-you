import { SQLLevel, questions } from "@/data/quizData";
import { Button } from "@/components/ui/button";

interface ResultScreenProps {
  score: number;
  level: SQLLevel;
  onRestart: () => void;
}

const ResultScreen = ({ score, level, onRestart }: ResultScreenProps) => {
  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl text-center animate-fade-in">
        {/* Result Badge */}
        <div className="mb-6">
          <div className="text-8xl mb-4 float-animation">{level.emoji}</div>
          <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-mono mb-4">
            Level {level.level} / 5
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-2 font-display gradient-text">
          {level.title}
        </h1>
        <h2 className="text-xl md:text-2xl text-secondary font-display mb-6">
          {level.subtitle}
        </h2>

        {/* Score Card */}
        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          <div className="flex justify-center items-center gap-8 mb-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary font-mono">{score}</div>
              <div className="text-sm text-muted-foreground font-mono">correct</div>
            </div>
            <div className="text-4xl text-muted-foreground">/</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-muted-foreground font-mono">{questions.length}</div>
              <div className="text-sm text-muted-foreground font-mono">total</div>
            </div>
          </div>

          <div className="h-3 bg-muted rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-1000"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground font-mono">{percentage}% accuracy</p>
        </div>

        {/* Description */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8 text-left">
          <p className="text-foreground font-display leading-relaxed">
            {level.description}
          </p>
        </div>

        {/* SQL Comment */}
        <div className="font-mono text-sm text-muted-foreground mb-8">
          <span className="text-secondary">--</span> Your journey in the database realm continues...
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onRestart}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold pulse-glow"
          >
            DROP TABLE results; TRY AGAIN
          </Button>
        </div>

        <p className="mt-8 text-xs text-muted-foreground font-mono">
          No databases were harmed in this assessment
        </p>
      </div>
    </div>
  );
};

export default ResultScreen;
