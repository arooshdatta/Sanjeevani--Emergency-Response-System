import { useState, useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import HeroSection from "@/components/HeroSection";
import SOSSection from "@/components/SOSSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import HealthProfileSection from "@/components/HealthProfileSection";
import FirstAidSection from "@/components/FirstAidSection";
import WarriorsSection from "@/components/WarriorsSection";
import Footer from "@/components/Footer";
import { Phone, User, Moon, Sun, Languages } from "lucide-react"; // Added Languages
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useLanguage } from "@/components/language-provider"; // Added hook
import newLogo from "@/assets/sanjeevani-logo-new.png";

const SIDEBAR_STATE_KEY = "sanjeevani-sidebar-collapsed";

const Index = () => {
  const [defaultOpen, setDefaultOpen] = useState<boolean | undefined>(undefined);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage(); // Get language state

  useEffect(() => {
    const stored = localStorage.getItem(SIDEBAR_STATE_KEY);
    setDefaultOpen(stored !== "true");
  }, []);

  const handleOpenChange = (open: boolean) => {
    localStorage.setItem(SIDEBAR_STATE_KEY, (!open).toString());
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  if (defaultOpen === undefined) {
    return null; // Wait for localStorage to load
  }

  return (
    <SidebarProvider defaultOpen={defaultOpen} onOpenChange={handleOpenChange}>
      {/* BACKGROUND GRADIENT */}
      <div className="min-h-screen flex w-full bg-gradient-to-br from-blue-50 via-background to-blue-100/50 dark:from-slate-900 dark:via-background dark:to-slate-800/40 transition-colors duration-500">
        
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-md shadow-soft border-b border-border">
            <div className="flex items-center justify-between h-14 px-4">
              {/* Left side: Trigger + Logo + Text */}
              <div className="flex items-center gap-3">
                <SidebarTrigger className="text-foreground transition-transform duration-200 hover:scale-110" />
                <img 
                  src={newLogo} 
                  alt="Sanjeevani Logo" 
                  className="h-8 w-auto object-contain" 
                />
                <span className="font-bold text-lg hidden md:block text-primary">Sanjeevani</span>
              </div>

              {/* Right side buttons */}
              <div className="flex items-center gap-3">
                {/* LANGUAGE TOGGLE BUTTON */}
                <Button
                  variant="outline"
                  onClick={toggleLanguage}
                  className="rounded-full w-9 h-9 p-0 flex items-center justify-center border-border hover:bg-muted"
                  title={t.toggleLang}
                >
                  <Languages className="h-4 w-4 text-foreground" />
                  <span className="sr-only">Toggle language</span>
                </Button>

                {/* THEME TOGGLE BUTTON */}
                <Button
                  variant="outline"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-full w-9 h-9 p-0 flex items-center justify-center border-border hover:bg-muted"
                  title={t.toggleTheme}
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4 text-foreground" />
                  ) : (
                    <Moon className="h-4 w-4 text-foreground" />
                  )}
                  <span className="sr-only">Toggle theme</span>
                </Button>

                <Button variant="outline" size="sm" className="gap-2">
                  <User className="h-4 w-4" />
                  {t.login}
                </Button>
                <Button variant="emergency" size="sm" className="gap-2">
                  <Phone className="h-4 w-4" />
                  {t.emergency}
                </Button>
              </div>
            </div>
          </header>

          <main className="flex-1">
            <HeroSection />
            <SOSSection />
            <HowItWorksSection />
            <HealthProfileSection />
            <FirstAidSection />
            <WarriorsSection />
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;