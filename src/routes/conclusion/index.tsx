import Frame from "@/components/common/frame";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/conclusion/")({
  component: Conclusion,
});

function Conclusion() {
  return (
    <main className="flex flex-1 flex-col">
      <Frame>
        <img
          src="/images/piggy-phone-4x.png"
          alt=""
          className="absolute top-1/2 right-1/24 max-h-[60%] -translate-y-1/2"
        />
        <div className="absolute top-1/2 left-12 -translate-y-1/2">
          <h1 className="mt-2 text-[110px] leading-[110px] font-extrabold tracking-tight">
            Thank You
          </h1>
          <div className="bg-background mt-16 w-fit rounded-full border-2 px-8 py-1">
            <p className="text-muted-foreground">Open to Questions</p>
          </div>
        </div>
      </Frame>
    </main>
  );
}
