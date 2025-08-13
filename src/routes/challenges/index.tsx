import React from "react";
import Frame from "@/components/common/frame";
import { challengesAndLearnings } from "@/constants";
import { createFileRoute } from "@tanstack/react-router";
import { IconBug, IconBulb } from "@tabler/icons-react";

export const Route = createFileRoute("/challenges/")({
  component: Challenges,
});

function Challenges() {
  return (
    <main className="flex flex-1 flex-col">
      <Frame>
        <img
          src="/images/target-money-32x.png"
          alt=""
          className="absolute -top-4 -right-24 max-h-[40%]"
        />
        <img
          src="/images/money-coin.png"
          alt=""
          className="absolute -right-16 bottom-36 max-h-[30%] rotate-45"
        />
        <img
          src="/images/money-coin.png"
          alt=""
          className="absolute -right-8 -bottom-16 max-h-[30%] rotate-90"
        />
        <div className="w-full pr-52 text-center">
          <h1 className="text-[60px] font-extrabold tracking-tight">
            Challenges <span className="px-12">&</span> Learnings
          </h1>
        </div>
        <div className="mx-auto grid h-full w-full grid-cols-2 gap-x-8 gap-y-4 pt-8 pr-52 pb-24 pl-12 text-xl font-normal tracking-wide">
          {challengesAndLearnings.map((challenge) => (
            <React.Fragment key={challenge.challenge}>
              <div className="flex items-start gap-2">
                <div>
                  <IconBug className="text-muted-foreground size-6" />
                </div>
                <p>{challenge.challenge}</p>
              </div>
              <div className="flex items-start gap-2">
                <div>
                  <IconBulb className="text-primary size-6" />
                </div>
                <p>{challenge.learning}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </Frame>
    </main>
  );
}
