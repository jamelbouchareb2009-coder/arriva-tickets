import { useState } from "react";
import { ArrivaLogo } from "@/components/arriva-logo";
import { AppHeader } from "@/components/app-header";
import { IdSilhouette } from "@/components/id-silhouette";
import { PhoneFrame } from "@/components/phone-frame";
import { QrBlock } from "@/components/qr-block";
import { QrOverlay } from "@/components/qr-overlay";
import { ScallopWave } from "@/components/scallop-wave";
import { SectionAccordion } from "@/components/section-accordion";
import { CardInfoIcon, PlaneIcon, ValidationIcon } from "@/components/ticket-icons";
import { TransferSheet } from "@/components/transfer-sheet";
import { productTitleSrc, ticketMetaSrc } from "@/lib/img";
import { TICKET } from "@/lib/ticket-data";

export function TicketView() {
  const [cardOpen, setCardOpen] = useState(false);
  const [qrOpen, setQrOpen] = useState(true);
  const [enlarge, setEnlarge] = useState(false);
  const [transfer, setTransfer] = useState(false);

  return (
    <PhoneFrame>
      <AppHeader title="Active ticket" backTo="/tickets" />

      <div className="flex min-h-0 flex-1 flex-col">
        <div className="min-h-0 flex-1 overflow-y-auto bg-arriva-green px-[18px] pb-[34px] pt-6">
          <article className="overflow-hidden rounded-[14px] bg-paper px-4 pb-5 pt-[18px]">
            <ArrivaLogo className="mb-4 h-[22px]" />

            <img
              src={productTitleSrc}
              alt={`${TICKET.productTitle}. ${TICKET.productSubtitle}`}
              className="-mx-4 mb-1 w-[calc(100%+2rem)] max-w-none select-none"
            />

            <div className="mt-4 flex flex-col gap-3">
              <SectionAccordion
                title="Card info"
                open={cardOpen}
                onToggle={() => setCardOpen((v) => !v)}
                icon={<CardInfoIcon className="size-[18px]" />}
              >
                <div className="flex gap-4 pb-4 pt-1">
                  <IdSilhouette className="size-[84px] shrink-0 rounded-[6px]" />
                  <div className="min-w-0 flex-1 pt-0.5">
                    <p className="text-[16px] font-bold tracking-tight text-ink">
                      {TICKET.holder.displayName}
                    </p>
                    <p className="mt-0.5 text-[13px] tracking-[0.01em] text-ink">
                      {TICKET.holder.fiscalCode}
                    </p>
                    <p className="mt-2.5 text-[13px] text-label">Card no.</p>
                    <p className="text-[16px] font-bold text-ink">
                      {TICKET.holder.cardNo}
                    </p>
                    <p className="mt-2 text-[13px] text-label">Expiry date:</p>
                    <p className="text-[16px] font-bold text-ink">
                      {TICKET.holder.expiry}
                    </p>
                  </div>
                </div>
              </SectionAccordion>

              <SectionAccordion
                title="Control and validation"
                open={qrOpen}
                onToggle={() => setQrOpen((v) => !v)}
                icon={<ValidationIcon className="size-[18px]" />}
                contentClassName="px-1 pb-2"
              >
                <QrBlock onEnlarge={() => setEnlarge(true)} />
              </SectionAccordion>
            </div>

            {qrOpen ? <ScallopWave /> : <div className="h-3" />}

            <div className="relative z-10 rounded-[8px] bg-arriva-green-bar px-3.5 py-[7px] text-paper">
              <p className="text-[13px] leading-[16px]">
                Da <span className="font-bold">CASTO</span> a{" "}
                <span className="font-bold">SALÒ</span>
              </p>
              <p className="mt-px text-[12px] leading-[15px]">
                Valido dal <span className="font-bold">08/09/2026</span> al{" "}
                <span className="font-bold">31/08/2027</span>
              </p>
            </div>

            <img
              src={ticketMetaSrc}
              alt="Emesso il: 08/09/2026 – 20:26. Prezzo 576,00€. Codice biglietto: 2001664/150880"
              draggable={false}
              className="-ml-0.5 mt-1 w-[calc(100%+0.125rem)] select-none"
            />
          </article>
        </div>

        <div className="shrink-0 bg-paper px-2.5 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-10">
          <button
            type="button"
            onClick={() => setTransfer(true)}
            className="relative flex h-[46px] w-full items-center justify-center rounded-full bg-cta text-[14px] font-medium text-paper transition-colors duration-150 hover:bg-cta-hover"
          >
            <PlaneIcon className="absolute left-[14px] size-[18px]" />
            Transfer ticket
          </button>
        </div>
      </div>

      {enlarge ? <QrOverlay onClose={() => setEnlarge(false)} /> : null}
      {transfer ? <TransferSheet onClose={() => setTransfer(false)} /> : null}
    </PhoneFrame>
  );
}
