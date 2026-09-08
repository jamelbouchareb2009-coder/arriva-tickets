import { cn } from "@/lib/utils";

export function TicketQr({ className }: { className?: string }) {
  return (
    <img
      src="/ticket-qr.png"
      alt="Ticket QR code"
      draggable={false}
      className={cn(
        "ticket-qr block h-auto w-full select-none mix-blend-multiply",
        className,
      )}
    />
  );
}
