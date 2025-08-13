import Frame from "@/components/common/frame";
import { createFileRoute } from "@tanstack/react-router";
import { ExternalLinkIcon } from "lucide-react";

export const Route = createFileRoute("/demo/")({
  component: Demo,
});

function Demo() {
  return (
    <main className="flex flex-1 flex-col">
      <Frame>
        <img
          src="/images/fold-graph-2x.png"
          alt=""
          className="absolute top-1/2 right-1/8 max-h-[60%] -translate-y-1/2"
        />
        <div className="absolute top-1/2 left-1/10 -translate-y-1/2">
          <h1 className="mt-2 text-[110px] leading-[110px] font-extrabold tracking-tight">
            Demo
          </h1>
          <div className="mt-6">
            <a
              href="https://fourreal.vercel.app"
              target="_blank"
              className="bg-background hover:text-primary flex w-fit items-center rounded-full border-2 px-8 py-1.5 text-xl transition-colors duration-300 hover:underline"
            >
              fourreal.vercel.app
              <ExternalLinkIcon className="ml-3 size-5" />
            </a>
          </div>
        </div>
      </Frame>
    </main>
  );
}
