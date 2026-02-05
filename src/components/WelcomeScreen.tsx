import { Button } from "@/components/ui/button";

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 animate-fade-in">
      <div className="text-center max-w-2xl">
        <div className="mb-6 text-6xl float-animation">🗃️</div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display">
          How <span className="text-primary text-glow">SQL</span> Are You?
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 font-mono">
          <span className="text-primary">SELECT</span> your_skill_level{" "}
          <span className="text-primary">FROM</span> this_quiz
          <span className="terminal-cursor text-accent">_</span>
        </p>

        <div className="bg-card border border-border rounded-lg p-6 mb-8 text-left font-mono text-sm">
          <p className="text-muted-foreground mb-2">
            <span className="text-secondary">--</span> A silly quiz to determine your SQL mastery
          </p>
          <p className="text-muted-foreground mb-2">
            <span className="text-secondary">--</span> 7 questions • 5 skill levels
          </p>
          <p className="text-muted-foreground">
            <span className="text-secondary">--</span> No semicolons were harmed in the making
          </p>
        </div>

        <Button
          onClick={onStart}
          size="lg"
          className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold pulse-glow transition-all hover:scale-105"
        >
          BEGIN QUERY →
        </Button>

        <p className="mt-6 text-sm text-muted-foreground font-mono">
          Warning: May cause existential crisis about your database skills
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
