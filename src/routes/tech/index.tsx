import Frame from "@/components/common/frame";
import { createFileRoute } from "@tanstack/react-router";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { techStack } from "@/constants";

export const Route = createFileRoute("/tech/")({
  component: Tech,
});

function Tech() {
  const categories = Object.entries(techStack);

  return (
    <main className="flex flex-1 flex-col">
      <Frame>
        <div className="absolute -top-2 w-full text-center">
          <h1 className="text-[60px] font-extrabold tracking-tight">
            Tech Stack
          </h1>
        </div>
        <div className="mx-auto mt-24 grid max-h-[80%] w-full grid-cols-4 place-content-center px-16">
          <TooltipProvider>
            {categories.map(([category, technologies], index) => (
              <div
                key={category}
                className={`flex flex-col items-center ${
                  index < categories.length - 1
                    ? "border-r-2 border-dashed"
                    : ""
                }`}
              >
                <h2 className="mb-8 text-center text-xl font-bold">
                  {category}
                </h2>
                <div className="flex flex-col gap-8">
                  {technologies.map((tech) => (
                    <Tooltip key={tech.name}>
                      <TooltipTrigger asChild>
                        <div className="flex cursor-pointer items-center gap-4">
                          <img
                            src={tech.src}
                            alt={tech.name}
                            className="size-20"
                          />
                          <span className="font-mono font-semibold">
                            {tech.name}
                          </span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{tech.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>
            ))}
          </TooltipProvider>
        </div>
      </Frame>
    </main>
  );
}
