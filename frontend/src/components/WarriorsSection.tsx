import { useNavigate } from "react-router-dom"; // Use router navigation
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const WarriorsSection = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <section className="py-20 bg-background" id="warriors">
      <div className="container mx-auto px-4">
        {/* ... other content ... */}
        
        <Button 
          variant="outline"
          size="lg"
          onClick={() => navigate("/warrior-login")} // Redirects to Warrior portal
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground h-10 px-4 py-2 gap-2 border-secondary/30 hover:border-secondary hover:bg-secondary/5 transition-all duration-300 group"
        >
          <Shield className="lucide lucide-shield h-5 w-5 text-secondary group-hover:scale-110 transition-transform" />
          <span className="font-semibold hidden sm:inline">Warrior Login</span>
        </Button>
      </div>
    </section>
  );
};

export default WarriorsSection;