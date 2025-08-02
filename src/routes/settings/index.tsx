import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="grid h-full place-content-center">
      <span className="text-4xl font-bold opacity-10">Settings</span>
    </main>
  );
}
