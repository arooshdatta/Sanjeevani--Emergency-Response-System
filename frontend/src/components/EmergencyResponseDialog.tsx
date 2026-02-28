import React, { useEffect } from "react";
import { X, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

interface Props {
  open: boolean;
  onClose: () => void;
}

const EmergencyResponseDialog: React.FC<Props> = ({ open, onClose }) => {
  useEffect(() => {
    if (open) trackEvent('emergency_dialog_open', { ts: new Date().toISOString() });
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative max-w-lg w-full mx-4 bg-card border border-border rounded-xl p-6 shadow-xl">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold">Emergency Response</h3>
          <button onClick={onClose} className="p-1 rounded-md hover:bg-muted">
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="text-sm text-muted-foreground mb-4">If you are in immediate danger or need urgent medical help, call the local emergency services or follow the steps below.</p>
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-destructive" />
            <div>
              <div className="font-medium">Call Emergency Services</div>
              <div className="text-sm text-muted-foreground">Tap to call your local emergency number</div>
            </div>
            <div className="ml-auto">
              <a href="tel:112" onClick={() => trackEvent('emergency_call', { number: '112' })}>
                <Button variant="destructive" size="sm">Call 112</Button>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ExternalLink className="h-5 w-5 text-foreground" />
            <div>
              <div className="font-medium">Emergency Response Guide</div>
              <div className="text-sm text-muted-foreground">Open official guidance for first responders</div>
            </div>
            <div className="ml-auto">
              <a href="/ministry" onClick={() => trackEvent('emergency_open_guide', { href: '/ministry' })}>
                <Button variant="outline" size="sm">Open Guide</Button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={() => { trackEvent('emergency_dialog_closed'); onClose(); }} variant="ghost">Close</Button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyResponseDialog;
