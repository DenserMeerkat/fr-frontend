import Frame from "@/components/common/frame";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/intro/")({
  component: Introduction,
});

function Introduction() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <Frame>
          <div className="absolute top-1/12 right-1/8">
            <h1 className="mt-2 text-[70px] font-extrabold tracking-tight">
              Requirements
            </h1>
            <div className="pt-6 pl-4">
              <p className="text-foreground text-2xl tracking-wide [word-spacing:0.3rem]">
                Simulate a{" "}
                <span className="text-primary text-3xl font-bold">
                  Stock Trading
                </span>{" "}
                app using
                <ul className="my-6 ml-6 list-disc space-y-1 text-lg font-normal">
                  <li>
                    Frontend :{" "}
                    <span className="text-positive text-xl font-bold">
                      React
                    </span>
                  </li>
                  <li>
                    Backend :{" "}
                    <span className="text-positive text-xl font-bold">
                      Spring Boot
                    </span>
                  </li>
                  <li>
                    Database :{" "}
                    <span className="text-positive text-xl font-bold">
                      MySQL
                    </span>
                  </li>
                  <li>
                    Container :{" "}
                    <span className="text-positive text-xl font-bold">
                      Docker
                    </span>
                  </li>
                  <li>
                    Live API :{" "}
                    <span className="text-positive text-xl font-bold">
                      market.neueda.com
                    </span>
                  </li>
                </ul>
                in a time-frame of{" "}
                <span className="text-negative text-3xl font-bold">
                  104 Man-hours
                </span>
              </p>
            </div>
          </div>
          <img
            src="/images/paper-rocket-2x.png"
            alt=""
            className="absolute bottom-0 left-0 max-h-[80%] -translate-x-[10%]"
          />
          <img
            src="/images/money-coin.png"
            alt=""
            className="absolute bottom-0 left-0 max-h-[40%] translate-x-[125%] translate-y-[55%] rotate-90"
          />
        </Frame>
      </div>
    </main>
  );
}
