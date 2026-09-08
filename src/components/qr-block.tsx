import { TicketQr } from "@/components/ticket-qr";
import { ClockIcon, LockIcon } from "@/components/ticket-icons";
import { formatHms, useLiveClock } from "@/hooks/use-live-clock";

export function QrBlock({
  onEnlarge,
  showMeta = true,
}: {
  onEnlarge?: () => void;
  showMeta?: boolean;
}) {
  const now = useLiveClock();

  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <TicketQr />
      </div>
      {onEnlarge ? (
        <button
          type="button"
          onClick={onEnlarge}
          className="-mt-1 text-[15px] font-bold text-link underline decoration-link decoration-1 underline-offset-[3px]"
        >
          Ingrandisci QRcode
        </button>
      ) : null}
      {showMeta ? (
        <div className="mt-1.5 flex w-full items-center justify-between pl-0.5 pr-4 text-meta">
          <span className="inline-flex h-[18px] items-center gap-[7px] text-[15px] font-medium leading-none tabular-nums tracking-[0.02em]">
            <ClockIcon className="size-[18px] shrink-0" />
            <span className="leading-none">
              {now ? formatHms(now) : "--:--:--"}
            </span>
          </span>
          <span className="inline-flex h-4 items-center gap-[5px] text-[14px] font-medium leading-none tabular-nums tracking-[0.01em]">
            <LockIcon className="block h-[13px] w-auto shrink-0" />
            <span className="leading-none">547</span>
          </span>
        </div>
      ) : null}
    </div>
  );
}
