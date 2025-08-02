import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orders/")({
  component: Orders,
});

export default function Orders() {
  return (
    <main className="grid h-full place-content-center">
      <span className="text-4xl font-bold opacity-10">Orders</span>
    </main>
  );
}
