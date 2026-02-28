import { motion } from "framer-motion";
import { Smartphone, Radio, Navigation, Hospital, FileCheck, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
    { number: "01", icon: Smartphone, titleKey: "howStep1Title", descKey: "howStep1Desc" },
    { number: "02", icon: Radio, titleKey: "howStep2Title", descKey: "howStep2Desc" },
    { number: "03", icon: Navigation, titleKey: "howStep3Title", descKey: "howStep3Desc" },
    { number: "04", icon: Hospital, titleKey: "howStep4Title", descKey: "howStep4Desc" },
    { number: "05", icon: FileCheck, titleKey: "howStep5Title", descKey: "howStep5Desc" },
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t("howTitle1")} <span className="text-secondary">{t("howTitle2")}</span> {t("howTitle3")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("howSubtitle")}</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary via-secondary to-primary" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div key={step.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} className="relative">
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-elevated transition-shadow duration-300">
                  <div className="absolute -top-4 left-6 bg-secondary text-secondary-foreground text-sm font-bold px-3 py-1 rounded-full">{step.number}</div>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mt-2">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{t(step.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground">{t(step.descKey)}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-24 -right-4 z-10 w-8 h-8 bg-background rounded-full items-center justify-center shadow-soft">
                    <ArrowRight className="h-4 w-4 text-secondary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
