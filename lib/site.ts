export const BRAND = "Ultra Clipper";
export const SUPPORT_EMAIL = "leagueoffgentlemen@gmail.com";
export const LAST_UPDATED = "November 13, 2026";

export type Plan = {
  id: string;
  name: string;
  price: string;
  period: string;
  blurb: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter Plan",
    price: "$19",
    period: "/month",
    blurb: "For creators getting started with short-form.",
    features: [
      "15 video uploads/month",
      "Up to 30 mins per video",
      "9:16 vertical cropping",
      "Burned-in captions",
      "MP4 downloads",
    ],
    cta: "Choose Starter",
  },
  {
    id: "pro",
    name: "Pro Plan",
    price: "$49",
    period: "/month",
    blurb: "For creators and teams publishing every day.",
    features: [
      "50 video uploads/month",
      "Up to 60 mins per video",
      "Priority processing",
      "Custom caption styles",
      "MP4 downloads",
    ],
    cta: "Choose Pro",
    highlight: true,
  },
  {
    id: "credits",
    name: "Pay-As-You-Go Credit Pack",
    price: "$15",
    period: " one-time",
    blurb: "No subscription. Use credits whenever you need.",
    features: ["20 video processing credits", "Never expires"],
    cta: "Buy Credit Pack",
  },
];
