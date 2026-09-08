import { TicketQr } from "@/components/ticket-qr";

export function QrOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="absolute inset-0 z-50 bg-paper"
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged QR code"
    >
      <div className="flex h-full w-full items-center justify-center">
        <div className="relative w-[66%]">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute -right-7 top-0 flex size-7 items-center justify-center text-close"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-[16px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <TicketQr />
        </div>
      </div>
    </div>
  );
}
