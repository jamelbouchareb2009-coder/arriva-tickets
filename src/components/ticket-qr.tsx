import { cn } from "@/lib/utils";
import { ticketQrSrc } from "@/lib/img";

export function TicketQr({ className }: { className?: string }) {
  return (
    <img
      src={ticketQrSrc}
      alt="Ticket QR code"
      draggable={false}
      className={cn(
        "ticket-qr block h-auto w-full select-none mix-blend-multiply",
        className,
      )}
    />
  );
}
