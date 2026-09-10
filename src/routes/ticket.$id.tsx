import { createFileRoute, redirect } from "@tanstack/react-router";
import { TicketView } from "@/components/ticket-view";
import type { TicketId } from "@/lib/ticket-data";

export const Route = createFileRoute("/ticket/$id")({
  beforeLoad: ({ params }) => {
    if (params.id !== "vestone-idro" && params.id !== "salo-brescia") {
      throw redirect({ to: "/tickets" });
    }
  },
  component: TicketByIdPage,
});

function TicketByIdPage() {
  const { id } = Route.useParams();
  return <TicketView ticketId={id as TicketId} />;
}
