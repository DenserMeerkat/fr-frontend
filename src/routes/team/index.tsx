import Frame from "@/components/common/frame";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { team } from "@/constants";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/team/")({
  component: Team,
});

export default function Team() {
  return (
    <main className="flex flex-1 flex-col">
      <Frame>
        <div className="absolute top-1/8 left-1/24 -translate-y-1/2">
          <h1 className="mt-2 text-[70px] font-extrabold tracking-tight">
            Team Members
          </h1>
        </div>
        <img
          src="/images/money-coin.png"
          alt=""
          className="absolute right-0 max-h-[40%] translate-x-[50%] rotate-45"
        />
        <img
          src="/images/globe-money-4x.png"
          alt=""
          className="absolute right-0 bottom-0 max-h-[80%] translate-x-[25%] translate-y-[10%]"
        />
        <img
          src="/images/money-coin.png"
          alt=""
          className="absolute right-0 bottom-0 max-h-[40%] -translate-x-[125%] translate-y-[55%] rotate-90"
        />
        <div className="absolute top-1/2 left-1/24 flex -translate-y-1/2 gap-8">
          {team.map((member) => {
            return (
              <div key={member.initials} className="space-y-4">
                <Avatar className="size-36 rounded-lg shadow-xl">
                  <AvatarImage src={member.src} alt={member.name} />
                  <AvatarFallback className="rounded-md text-xs">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-center justify-between space-y-4">
                  <p className="text-primary font-semibold">{member.name}</p>
                  <p className="text-foreground">{member.universiity}</p>
                  <p className="text-muted-foreground font-mono">
                    [{member.domain}]
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Frame>
    </main>
  );
}
