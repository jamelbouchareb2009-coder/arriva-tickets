import { useState, type FormEvent } from "react";
import { Check, Send, X } from "lucide-react";
import { TICKET } from "@/lib/ticket-data";
import { cn } from "@/lib/utils";

export function TransferSheet({ onClose }: { onClose: () => void }) {
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [value, setValue] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    setSentTo(trimmed);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="transfer-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink/45"
        aria-label="Dismiss"
        onClick={onClose}
      />
      <div className="relative w-full rounded-t-3xl bg-paper px-5 pb-8 pt-4 shadow-phone">
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-hairline" />
        <div className="mb-1 flex items-start justify-between gap-3">
          <h2
            id="transfer-title"
            className="text-lg font-semibold tracking-tight text-ink"
          >
            Transfer ticket
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex size-9 items-center justify-center rounded-full text-muted"
          >
            <X className="size-5" />
          </button>
        </div>
        <p className="mb-5 text-sm leading-relaxed text-muted">
          Send {TICKET.productTitle} ({TICKET.from} → {TICKET.to}) to another
          Arriva account.
        </p>

        {sentTo ? (
          <div className="flex flex-col items-center py-6 text-center">
            <span className="mb-3 flex size-14 items-center justify-center rounded-full bg-arriva-green text-paper">
              <Check className="size-7" strokeWidth={2.4} />
            </span>
            <p className="text-base font-semibold text-ink">Ticket sent</p>
            <p className="mt-1 max-w-xs text-sm text-muted">
              The pass has been transferred to {sentTo}.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 h-12 w-full rounded-pill bg-arriva-green text-sm font-semibold text-paper"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label className="text-sm font-medium text-ink" htmlFor="transfer-to">
              Recipient email
            </label>
            <input
              id="transfer-to"
              type="email"
              required
              autoComplete="email"
              placeholder="name@email.com"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="h-12 rounded-xl border border-hairline bg-section px-3.5 text-sm text-ink outline-none ring-arriva-green placeholder:text-muted focus:ring-2"
            />
            <button
              type="submit"
              className={cn(
                "mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-pill",
                "bg-cta text-sm font-semibold text-paper",
              )}
            >
              <Send className="size-4" strokeWidth={2.2} />
              Send ticket
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
