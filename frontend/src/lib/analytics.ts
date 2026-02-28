import { supabase } from "@/integrations/supabase/client";

export async function trackEvent(name: string, payload: any = {}) {
  try {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: name, ...payload });
    }
  } catch (e) {
    // ignore
  }
  // always log to console for local debugging
  // eslint-disable-next-line no-console
  console.log('trackEvent', name, payload);

  // non-blocking attempt to persist to Supabase if table exists
  try {
    if (supabase) {
      await supabase.from('analytics_events').insert({ event_name: name, payload, created_at: new Date().toISOString() });
    }
  } catch (e) {
    // ignore - this is best-effort
  }
}

export default trackEvent;
