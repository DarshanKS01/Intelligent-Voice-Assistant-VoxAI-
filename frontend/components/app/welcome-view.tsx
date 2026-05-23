import { Button } from '@/components/livekit/button';

function WelcomeImage() {
  return (
    <img
      src="/Jarvis.gif"
      alt="Jarvis"
      className="absolute inset-0 w-full h-full object-cover -z-10"
    />
  );
}

interface WelcomeViewProps {
  startButtonText: string;
  onStartCall: () => void;
}

export const WelcomeView = ({
  startButtonText,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeViewProps) => {
  return (
    <div ref={ref} className="relative min-h-screen">
      <WelcomeImage />

      <section className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <p className="text-foreground max-w-prose pt-1 leading-6 font-medium">
          Chat with your MAXI
        </p>

        <Button variant="primary" size="lg" onClick={onStartCall} className="mt-6 w-64 font-mono">
          {startButtonText}
        </Button>
      </section>

      {/* Removed the LiveKit quickstart footer per request */}
    </div>
  );
};
