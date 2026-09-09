import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { AppHeader } from "@/components/app-header";
import { ArrivaLogo } from "@/components/arriva-logo";
import { PhoneFrame } from "@/components/phone-frame";
import { TICKET } from "@/lib/ticket-data";

export const Route = createFileRoute("/tickets")({ component: TicketsPage });

function TicketsPage() {
  return (
    <PhoneFrame>
      <AppHeader title="My tickets" />
      <div className="min-h-0 flex-1 overflow-y-auto bg-section px-3 py-4">
        <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-muted">
          Active
        </p>
        <Link
          to="/"
          className="block overflow-hidden rounded-card bg-paper p-4 shadow-sm"
        >
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
                {TICKET.from} → {TICKET.to}
              </p>
              <p className="mt-1 text-xs text-muted">
                Valid until {TICKET.validTo}
              </p>
            </div>
            <ChevronRight className="mt-1 size-5 shrink-0 text-muted" />
          </div>
          <div className="mt-3 inline-flex rounded-full bg-arriva-green/12 px-2.5 py-1 text-xs font-semibold text-arriva-green">
            Active
          </div>
        </Link>

        <a
          href="/arriva-tickets-netlify.zip"
          download="arriva-tickets-netlify.zip"
          className="mt-6 flex w-full items-center justify-center rounded-full bg-cta px-4 py-3 text-sm font-medium text-paper"
        >
          Scarica progetto (ZIP)
        </a>
      </div>
    </PhoneFrame>
  );
}
