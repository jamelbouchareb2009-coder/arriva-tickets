import { useState } from "react";
import { ArrivaLogo } from "@/components/arriva-logo";
import { AppHeader } from "@/components/app-header";
import { PhoneFrame } from "@/components/phone-frame";
import { QrBlock } from "@/components/qr-block";
import { QrOverlay } from "@/components/qr-overlay";
import { ScallopWave } from "@/components/scallop-wave";
import { SectionAccordion } from "@/components/section-accordion";
import { CardInfoIcon, PlaneIcon, ValidationIcon } from "@/components/ticket-icons";
import { TransferSheet } from "@/components/transfer-sheet";
import { productTitleSrc, cardHolderSrc } from "@/lib/img";
import { TICKET, TICKETS, type TicketId } from "@/lib/ticket-data";

export function TicketView({
  ticketId = "casto-salo",
}: {
  ticketId?: TicketId;
}) {
  const [cardOpen, setCardOpen] = useState(false);
  const [qrOpen, setQrOpen] = useState(true);
  const [enlarge, setEnlarge] = useState(false);
  const [transfer, setTransfer] = useState(false);
  const ticket = TICKETS[ticketId];

  return (
    <PhoneFrame
      footer={
        <div className="ticket-footer">
          <button
            type="button"
            onClick={() => setTransfer(true)}
            className="ticket-cta relative flex h-[46px] items-center justify-center rounded-full bg-cta text-[14px] font-medium text-paper transition-colors duration-150 hover:bg-cta-hover"
          >
            <PlaneIcon className="absolute left-[14px] size-[18px]" />
            Transfer ticket
          </button>
        </div>
      }
    >
      <AppHeader title="Active ticket" backTo="/tickets" />

      <div className="ticket-scroll min-h-0 flex-1 overflow-y-auto bg-arriva-green px-[10px] pt-3">
        <article className="overflow-hidden rounded-[6px] bg-paper px-5 pb-12 pt-[18px]">
          <ArrivaLogo className="mb-4 h-[22px]" />

          <img
            src={productTitleSrc}
            alt={`${TICKET.productTitle}. ${TICKET.productSubtitle}`}
            className="-mx-5 mb-1 w-[calc(100%+2.5rem)] max-w-none select-none"
          />

          <div className="mt-4 flex flex-col gap-3">
            <SectionAccordion
              title="Card info"
              open={cardOpen}
              onToggle={() => setCardOpen((v) => !v)}
              icon={<CardInfoIcon className="size-[18px]" />}
            >
              <img
                src={cardHolderSrc}
                alt="LAMINE CHERKI. CHRLMN09H04B157R. Card no. B19642. Expiry date: 12/2027"
                className="mb-6 w-[76%] max-w-[248px] select-none"
                draggable={false}
              />
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

          <div className="relative z-10 mt-1.5 rounded-[4px] bg-arriva-green-bar px-3.5 py-[9px] text-paper">
            <p className="text-[13px] leading-[16px]">
              Da <span className="font-bold">{ticket.from}</span> a{" "}
              <span className="font-bold">{ticket.to}</span>
            </p>
            <p className="mt-px text-[12px] leading-[15px]">
              Valido dal <span className="font-bold">08/09/2026</span> al{" "}
              <span className="font-bold">31/08/2027</span>
            </p>
          </div>

          <div className="mt-2">
            <p className="text-[13px] leading-[18px] text-muted">Emesso il:</p>
            <p className="mt-1 text-[16px] font-bold leading-[20px] text-ink">
              08/09/2026 – 20:26
            </p>
            <div className="mt-5 flex items-center justify-between">
              <p className="text-[16px] leading-none text-ink">Prezzo</p>
              <p className="text-[19px] font-bold leading-none text-ink">
                {ticket.price}
              </p>
            </div>
            <div className="mt-3 h-px bg-[#e0e0e0]" />
            <div className="mt-5 flex items-center justify-between">
              <p className="text-[13px] text-muted">Codice biglietto:</p>
              <p className="text-[13px] text-muted">2001664/150880</p>
            </div>
          </div>
        </article>
      </div>

      {enlarge ? <QrOverlay onClose={() => setEnlarge(false)} /> : null}
      {transfer ? <TransferSheet onClose={() => setTransfer(false)} /> : null}
    </PhoneFrame>
  );
}
