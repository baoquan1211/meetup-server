import { cn } from "@/lib/utils";
import Spinner from "./ui/spinner";

type LoadingPageProps = {
  isLayout?: boolean;
};

function LoadingPage({ isLayout = true }: LoadingPageProps) {
  return (
    <section
      className={cn(
        "fixed left-0 top-0 z-50 flex h-dvh w-screen items-center justify-center",
        isLayout ? "bg-primary-foreground/80" : "bg-primary-foreground"
      )}
    >
      <Spinner size={96} />
    </section>
  );
}

export default LoadingPage;
