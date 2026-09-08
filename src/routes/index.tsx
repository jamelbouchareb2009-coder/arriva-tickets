import { createFileRoute } from "@tanstack/react-router";
import { TicketView } from "@/components/ticket-view";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <TicketView />;
}
