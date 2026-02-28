import { Phone, Menu, X, User, Moon, Sun, Languages } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this
import { Button } from "@/components/ui/button";
import sanjeevaniLogo from "@/assets/sanjeevani-logo-new.png";
import { useTheme } from "@/components/theme-provider"; 
import { useLanguage } from "@/components/language-provider";
import EmergencyResponseDialog from "@/components/EmergencyResponseDialog";

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme(); 
  const { language, setLanguage, t } = useLanguage();
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);

  const navItems = [
    { label: t.navHome, href: "#home" },
    { label: t.navSOS, href: "#sos" },
    { label: t.navProfile, href: "#profile" },
    { label: t.navFirstAid, href: "#first-aid" },
    { label: t.navWarriors, href: "#warriors" },
    { label: t.navMinistry, href: "/ministry" },
  ];

  const toggleLanguageBtn = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <img 
              src={sanjeevaniLogo} 
              alt="Sanjeevani" 
              className="h-12 md:h-14 w-auto object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              onClick={toggleLanguageBtn}
              className="rounded-full w-10 h-10 p-0 border-border hover:bg-muted"
            >
              <Languages className="h-5 w-5 text-foreground" />
            </Button>

            <Button
              variant="outline"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full w-10 h-10 p-0 border-border hover:bg-muted"
            >
              {theme === "dark" ? <Sun className="h-5 w-5 text-foreground" /> : <Moon className="h-5 w-5 text-foreground" />}
            </Button>

            {/* Updated Warrior Login Button */}
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2"
              onClick={() => navigate("/warrior-login")} 
            >
              <User className="h-4 w-4" />
              {t.login}
            </Button>

            <Button variant="emergency" size="sm" className="gap-2" onClick={() => setIsEmergencyOpen(true)}>
              <Phone className="h-4 w-4" />
              {t.emergency}
            </Button>
            <EmergencyResponseDialog open={isEmergencyOpen} onClose={() => setIsEmergencyOpen(false)} />
          </div>
          {/* ... mobile menu logic remains similar, update the login button there too ... */}
        </div>
      </div>
    </header>
  );
};

export default Header;