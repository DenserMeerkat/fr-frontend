import Frame from "@/components/common/frame";
import LightDarkComponent from "@/components/common/light-dark";
import { BlurFade } from "@/components/magicui/blur-fade";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/system/")({
  component: System,
});

function System() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <Frame>
          <div className="absolute -top-2 w-full text-center">
            <BlurFade delay={0.25} inView>
              <h1 className="text-[60px] font-extrabold tracking-tight">
                System Architecture
              </h1>
            </BlurFade>
          </div>
          <div className="mx-auto mt-24 grid max-h-[80%] w-full place-content-center">
            <BlurFade delay={0.5} inView>
              <LightDarkComponent
                LightComponent={
                  <img
                    src="/images/system/system-light.png"
                    alt="System Architecture Diagram"
                    className="mx-auto max-w-[78%] rounded-md"
                  />
                }
                DarkComponent={
                  <img
                    src="/images/system/system-dark.png"
                    alt="System Architecture Diagram"
                    className="mx-auto max-w-[78%] rounded-md"
                  />
                }
              />
            </BlurFade>
          </div>
        </Frame>
      </div>
    </main>
  );
}
