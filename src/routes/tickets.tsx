import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { AppHeader } from "@/components/app-header";
import { ArrivaLogo } from "@/components/arriva-logo";
import { PhoneFrame } from "@/components/phone-frame";
import { TICKET, TICKET_LIST, TICKETS } from "@/lib/ticket-data";

export const Route = createFileRoute("/tickets")({ component: TicketsPage });

function TicketsPage() {
  return (
    <PhoneFrame>
      <AppHeader title="My tickets" />
      <div className="min-h-0 flex-1 overflow-y-auto bg-section px-3 py-4">
        <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-muted">
          Active
        </p>
        <div className="flex flex-col gap-3">
          {TICKET_LIST.map((id) => {
            const ticket = TICKETS[id];
            const card = (
              <>
                <ArrivaLogo className="mb-3 h-7" />
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-ui font-bold leading-snug text-ink">
                      {TICKET.productTitle}
                    </p>
                    <p className="mt-1 text-sm font-medium text-label">
                      {TICKET.holder.displayName}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-arriva-green">
                      {ticket.from} → {ticket.to}
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      Valid until {ticket.validTo}
                    </p>
                  </div>
                  <ChevronRight className="mt-1 size-5 shrink-0 text-muted" />
                </div>
                <div className="mt-3 inline-flex rounded-full bg-arriva-green/12 px-2.5 py-1 text-xs font-semibold text-arriva-green">
                  Active
                </div>
              </>
            );
            const className =
              "block overflow-hidden rounded-card bg-paper p-4 shadow-sm";
            if (ticket.toPath === "/") {
              return (
                <Link key={id} to="/" className={className}>
                  {card}
                </Link>
              );
            }
            return (
              <Link
                key={id}
                to="/ticket/$id"
                params={{ id: ticket.id }}
                className={className}
              >
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </PhoneFrame>
  );
}
