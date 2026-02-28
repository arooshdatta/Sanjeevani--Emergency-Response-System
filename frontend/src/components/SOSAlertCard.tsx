import { SOSAlert } from "@/data/mockAlerts";
import { MapPin, Phone, Clock, ExternalLink, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SOSAlertCardProps {
  alert: SOSAlert;
  onAcknowledge: (id: string) => void;
}

const severityConfig = {
  critical: { label: "CRITICAL", className: "bg-primary/20 text-primary border-primary/40" },
  high: { label: "HIGH", className: "bg-accent/20 text-accent border-accent/40" },
  medium: { label: "MEDIUM", className: "bg-muted text-muted-foreground border-border" },
};

const SOSAlertCard = ({ alert, onAcknowledge }: SOSAlertCardProps) => {
  const severity = severityConfig[alert.severity];
  const timeAgo = getTimeAgo(alert.timestamp);
  const mapsUrl = `https://www.google.com/maps?q=${alert.lat},${alert.lng}`;

  return (
    <div
      className={`bg-card border rounded-xl p-5 transition-all hover:border-primary/40 ${
        alert.severity === "critical" && alert.status === "active"
          ? "border-primary/50 animate-pulse-sos"
          : "border-border"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          {alert.status === "active" && alert.severity === "critical" && (
            <span className="relative flex h-3 w-3">
              <span className="animate-beacon absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
          )}
          <span className="font-mono text-xs text-muted-foreground">{alert.id}</span>
          <Badge variant="outline" className={severity.className}>
            {severity.label}
          </Badge>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          {timeAgo}
        </div>
      </div>

      {/* Patient Info */}
      <h3 className="text-lg font-semibold text-foreground mb-1">
        {alert.patientName}, {alert.age}
      </h3>
      <p className="text-sm text-primary font-medium mb-3">{alert.condition}</p>

      {/* Address */}
      <div className="bg-muted rounded-lg p-3 mb-3 space-y-2">
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
          <p className="text-sm text-secondary-foreground">{alert.address}</p>
        </div>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
        >
          <ExternalLink className="w-3 h-3" />
          Open in Google Maps
        </a>
      </div>

      {/* Notes */}
      {alert.notes && (
        <p className="text-xs text-muted-foreground mb-3 italic">"{alert.notes}"</p>
      )}

      {/* Actions */}
      <div className="flex items-center gap-2">
        <a href={`tel:${alert.phone}`} className="flex-1">
          <Button
            variant="outline"
            className="w-full border-border text-foreground hover:bg-muted text-sm h-9"
          >
            <Phone className="w-3.5 h-3.5 mr-1.5" />
            Call Patient
          </Button>
        </a>
        {alert.status === "active" ? (
          <Button
            onClick={() => onAcknowledge(alert.id)}
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground text-sm h-9"
          >
            <AlertTriangle className="w-3.5 h-3.5 mr-1.5" />
            Acknowledge
          </Button>
        ) : (
          <Button
            disabled
            className="flex-1 bg-success/20 text-success border border-success/30 text-sm h-9"
          >
            <CheckCircle className="w-3.5 h-3.5 mr-1.5" />
            Acknowledged
          </Button>
        )}
      </div>
    </div>
  );
};

function getTimeAgo(timestamp: string): string {
  const diff = Date.now() - new Date(timestamp).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  return `${hrs}h ago`;
}

export default SOSAlertCard;
