export interface SOSAlert {
  id: string;
  patientName: string;
  age: number;
  condition: string;
  severity: "critical" | "high" | "medium";
  address: string;
  lat: number;
  lng: number;
  phone: string;
  timestamp: string;
  status: "active" | "acknowledged" | "resolved";
  notes: string;
}

export const mockAlerts: SOSAlert[] = [
  {
    id: "SOS-001",
    patientName: "Ramesh Kumar",
    age: 62,
    condition: "Cardiac Arrest - Chest pain, shortness of breath",
    severity: "critical",
    address: "42, MG Road, Koramangala, Bangalore, Karnataka 560034",
    lat: 12.9352,
    lng: 77.6245,
    phone: "+91 99876 54321",
    timestamp: new Date(Date.now() - 3 * 60000).toISOString(),
    status: "active",
    notes: "Patient is conscious but in severe pain. Family member called.",
  },
  {
    id: "SOS-002",
    patientName: "Priya Sharma",
    age: 34,
    condition: "Severe allergic reaction - Anaphylaxis",
    severity: "critical",
    address: "15, Residency Road, Shanthala Nagar, Bangalore 560025",
    lat: 12.9716,
    lng: 77.5946,
    phone: "+91 98765 12345",
    timestamp: new Date(Date.now() - 8 * 60000).toISOString(),
    status: "active",
    notes: "EpiPen administered by bystander. Still needs medical attention.",
  },
  {
    id: "SOS-003",
    patientName: "Anil Reddy",
    age: 45,
    condition: "Road accident - Multiple fractures, bleeding",
    severity: "high",
    address: "Outer Ring Road, near Marathahalli Bridge, Bangalore 560037",
    lat: 12.9568,
    lng: 77.7011,
    phone: "+91 87654 32100",
    timestamp: new Date(Date.now() - 15 * 60000).toISOString(),
    status: "acknowledged",
    notes: "Ambulance dispatched. Warrior needed for first aid on site.",
  },
  {
    id: "SOS-004",
    patientName: "Lakshmi Devi",
    age: 78,
    condition: "Stroke symptoms - Slurred speech, facial drooping",
    severity: "high",
    address: "23, 1st Cross, Jayanagar 4th Block, Bangalore 560011",
    lat: 12.9279,
    lng: 77.5838,
    phone: "+91 99001 23456",
    timestamp: new Date(Date.now() - 22 * 60000).toISOString(),
    status: "active",
    notes: "Neighbor reported symptoms. Patient alone at home.",
  },
  {
    id: "SOS-005",
    patientName: "Mohammed Faisal",
    age: 28,
    condition: "Asthma attack - Severe breathlessness",
    severity: "medium",
    address: "8, Commercial Street, Shivajinagar, Bangalore 560051",
    lat: 12.9817,
    lng: 77.6055,
    phone: "+91 77889 90011",
    timestamp: new Date(Date.now() - 35 * 60000).toISOString(),
    status: "acknowledged",
    notes: "Patient has inhaler but it's empty. Needs nebulizer.",
  },
];
