import { sendGAEvent } from "@next/third-parties/google";

export const GA_MEASUREMENT_ID = "G-7C4CPZ92WQ" as const;

/** Fire only after a confirmed successful lead submission. Never include PII. */
export function trackGenerateLead(leadType: "storage_quote") {
  sendGAEvent("event", "generate_lead", { lead_type: leadType });
}
