import Frame from "@/components/common/frame";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Frame>
        <img
          src="/images/coin-graph.png"
          alt=""
          className="absolute top-1/2 right-1/8 max-h-[70%] -translate-y-1/2"
        />
        <div className="absolute top-1/2 left-1/8 -translate-y-1/2">
          <span className="text-foreground pl-2 text-xl font-medium tracking-wide">
            Stock Trading App
          </span>
          <h1 className="mt-2 text-[120px] leading-[120px] font-extrabold tracking-tight">
            Four
            <br />
            Real
          </h1>
          <div className="bg-background mt-6 w-fit rounded-full border-2 px-8 py-1">
            <p className="text-muted-foreground">Ian Jukes (Product Owner)</p>
          </div>
        </div>
      </Frame>
    </main>
  );
}
