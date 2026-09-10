export const TICKET = {
  operator: "Arriva",
  productTitle: "Abbonamento Annuale Studenti",
  productSubtitle:
    "Abbonamento annuale studenti valido sulla rete extraurbana Arriva",
  holder: {
    firstName: "Lamine",
    lastName: "Cherki",
    displayName: "LAMINE CHERKI",
    fiscalCode: "CHRLMN09H04B157R",
    cardNo: "B19642",
    expiry: "12/2027",
  },
  from: "CASTO",
  to: "SALÒ",
  validFrom: "08/09/2026",
  validTo: "31/08/2027",
  issuedOn: "08/09/2026",
  issuedAt: "20:26",
  price: "576,00€",
  ticketCode: "2001664/150880",
} as const;

export type TicketId = "casto-salo" | "vestone-idro" | "salo-brescia";

export const TICKETS: Record<
  TicketId,
  {
    id: TicketId;
    from: string;
    to: string;
    validTo: string;
    toPath: "/" | "/ticket/$id";
    params?: { id: TicketId };
    routeBarSrc?: string;
    metaSrc?: string;
  }
> = {
  "casto-salo": {
    id: "casto-salo",
    from: "CASTO",
    to: "SALÒ",
    validTo: "31/08/2027",
    toPath: "/",
  },
  "vestone-idro": {
    id: "vestone-idro",
    from: "VESTONE",
    to: "IDRO",
    validTo: "31/08/2027",
    toPath: "/ticket/$id",
    params: { id: "vestone-idro" },
    routeBarSrc: "/route-vestone-idro.png",
    metaSrc: "/meta-vestone-idro.png",
  },
  "salo-brescia": {
    id: "salo-brescia",
    from: "SALÒ",
    to: "BRESCIA",
    validTo: "31/08/2027",
    toPath: "/ticket/$id",
    params: { id: "salo-brescia" },
    routeBarSrc: "/route-salo-brescia.png",
    metaSrc: "/meta-salo-brescia.png",
  },
};

export const TICKET_LIST: TicketId[] = [
  "casto-salo",
  "vestone-idro",
  "salo-brescia",
];

export const QR_PAYLOAD = "https://arriva.it/";
