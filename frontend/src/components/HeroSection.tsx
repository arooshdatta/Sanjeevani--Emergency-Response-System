import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Activity, AlertCircle, Heart, Clock } from "lucide-react";
import heroImage from "@/assets/sanjeevani-logo-new.png";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/language-provider";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToSOS = () => {
    const sosSection = document.querySelector('#sos');
    sosSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { label: "10k+", sublabel: "Warriors", icon: Shield },
    { label: "500+", sublabel: "Villages", icon: AlertCircle },
    { label: "24/7", sublabel: "Active Response", icon: Clock },
    { label: "100%", sublabel: "Coverage", icon: Heart },
  ];

  return (
    <section id="home" className="relative pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden bg-transparent">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 animate-fade-in">
              <Shield className="h-4 w-4" />
              {t.heroBadge || "Emergency Response System"}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              {t.heroTitle || "Save Lives"} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {t.heroSubtitlePart1 || "Every Minute"}
              </span>
              <br />
              {t.heroSubtitlePart2 || "Matters"}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              {t.heroDescription || "A decentralized emergency response system powered by AI and community warriors for instant health response."}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToSOS} size="lg" className="gap-2 shadow-soft hover:shadow-lg transition-all text-lg h-14 px-8">
                <Phone className="h-5 w-5" />
                {t.btnActivateSOS || "Activate SOS"}
              </Button>
              
              <Link to="/warrior-registration">
                <Button variant="outline" size="lg" className="gap-2 text-lg h-14 px-8 bg-background/50 backdrop-blur-sm">
                  <Activity className="h-5 w-5" />
                  {t.btnJoinWarrior || "Join as Warrior"}
                </Button>
              </Link>

              <Link to="/ministry">
                <Button variant="secondary" size="lg" className="gap-2 text-lg h-14 px-8">
                  <Shield className="h-5 w-5" />
                  {t.navMinistry || "Ministry"}
                </Button>
              </Link>
            </div>
            
            {/* Stats Row */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <Icon className="h-6 w-6 text-primary mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.label}</div>
                    <div className="text-xs text-muted-foreground text-center">{stat.sublabel}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-0"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <img
                src={heroImage}
                alt="Sanjeevani Emergency Response"
                className="w-full h-full object-contain drop-shadow-2xl animate-float relative z-10"
              />
              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-3xl animate-pulse-slow -z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-secondary/10 rounded-full blur-2xl animate-pulse-slow delay-75 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
