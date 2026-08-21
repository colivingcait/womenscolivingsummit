// Posts a form submission straight to Caitlyn's CRM (the shared
// /api/webhooks/site-form endpoint - see that route in the callcaitlyn
// repo for the full contract). Every WCS form on this site funnels
// through this one function so the payload shape stays consistent.
const CRM_WEBHOOK_URL = "https://crm.callcaitlyn.com/api/webhooks/site-form";

export async function submitToCrm(form: string, data: {
  email: string;
  name?: string;
  phone?: string;
  message?: string;
  fields?: Record<string, string>;
}) {
  const res = await fetch(CRM_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ site: "womens_coliving_summit", form, ...data }),
  });
  if (!res.ok) throw new Error(`CRM submission failed (${res.status})`);
}
