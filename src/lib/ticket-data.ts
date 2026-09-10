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
    price: string;
    validTo: string;
    toPath: "/" | "/ticket/$id";
  }
> = {
  "casto-salo": {
    id: "casto-salo",
    from: "CASTO",
    to: "SALÒ",
    price: "576,00€",
    validTo: "31/08/2027",
    toPath: "/",
  },
  "vestone-idro": {
    id: "vestone-idro",
    from: "VESTONE",
    to: "IDRO",
    price: "392,00€",
    validTo: "31/08/2027",
    toPath: "/ticket/$id",
  },
  "salo-brescia": {
    id: "salo-brescia",
    from: "SALÒ",
    to: "BRESCIA",
    price: "669,00€",
    validTo: "31/08/2027",
    toPath: "/ticket/$id",
  },
};

export const TICKET_LIST: TicketId[] = [
  "casto-salo",
  "vestone-idro",
  "salo-brescia",
];

export const QR_PAYLOAD = "https://arriva.it/";
