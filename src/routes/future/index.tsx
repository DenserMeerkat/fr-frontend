import Frame from "@/components/common/frame";
import { futureEnhancements } from "@/constants";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/future/")({
  component: Future,
});

function Future() {
  return (
    <main className="flex flex-1 flex-col">
      <Frame>
        <div className="absolute top-1/12 left-1/24 -translate-y-1/2">
          <h1 className="text-[70px] font-extrabold tracking-tight">
            Future Enhancements
          </h1>
        </div>
        <img
          src="/images/gear-money-2x.png"
          alt=""
          className="absolute right-0 bottom-0 max-h-[80%] translate-x-[25%]"
        />
        <img
          src="/images/money-coin.png"
          alt=""
          className="absolute right-0 bottom-0 max-h-[40%] -translate-x-[125%] translate-y-[55%] rotate-90"
        />
        <ul className="absolute top-1/2 left-1/24 flex -translate-y-1/2 flex-col gap-8">
          {futureEnhancements.map((enhancement) => {
            return (
              <li className="flex items-center gap-4">
                {<enhancement.icon className="text-primary size-12" />}
                <span className="text-2xl tracking-wide">
                  {enhancement.content}
                </span>
              </li>
            );
          })}
        </ul>
      </Frame>
    </main>
  );
}
