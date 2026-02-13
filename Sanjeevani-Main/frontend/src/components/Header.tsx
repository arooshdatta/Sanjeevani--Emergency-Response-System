import { Phone, Menu, X, User, Moon, Sun, Languages } from "lucide-react"; // Added Languages icon
import { useState } from "react";
import { Button } from "@/components/ui/button";
import sanjeevaniLogo from "@/assets/sanjeevani-logo-new.png";
import { useTheme } from "@/components/theme-provider"; 
import { useLanguage } from "@/components/language-provider"; // Added hook

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme(); 
  const { language, setLanguage, t } = useLanguage(); // Get language state

  const navItems = [
    { label: t.navHome, href: "#home" },
    { label: t.navSOS, href: "#sos" },
    { label: t.navProfile, href: "#profile" },
    { label: t.navFirstAid, href: "#first-aid" },
    { label: t.navWarriors, href: "#warriors" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={sanjeevaniLogo} 
              alt="Sanjeevani" 
              className="h-12 md:h-14 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
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

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle Button */}
            <Button
              variant="outline"
              onClick={toggleLanguage}
              className="rounded-full w-10 h-10 p-0 flex items-center justify-center border-border hover:bg-muted"
              title={t.toggleLang}
            >
              <Languages className="h-5 w-5 text-foreground" />
              <span className="sr-only">Toggle language</span>
            </Button>

            {/* Desktop Theme Toggle Button */}
            <Button
              variant="outline"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full w-10 h-10 p-0 flex items-center justify-center border-border hover:bg-muted"
              title={t.toggleTheme}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
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

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
             {/* Mobile Language Toggle */}
             <Button
              variant="outline"
              onClick={toggleLanguage}
              className="rounded-full w-10 h-10 p-0 flex items-center justify-center border-border hover:bg-muted"
              title={t.toggleLang}
            >
              <span className="font-bold text-xs">{language === "en" ? "HI" : "EN"}</span>
            </Button>

            {/* Mobile Theme Toggle Button */}
            <Button
              variant="outline"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full w-10 h-10 p-0 flex items-center justify-center border-border hover:bg-muted"
              title={t.toggleTheme}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-in-up">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="outline" className="w-full gap-2">
                  <User className="h-4 w-4" />
                  {t.loginRegister}
                </Button>
                <Button variant="emergency" className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  {t.emergency}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;