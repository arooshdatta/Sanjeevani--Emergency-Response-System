import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, HeartPulse, ShieldAlert, Wind, Droplets, Flame, Skull } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

// Import images from assets
import cprImage from "@/assets/cpr.png";
import strokeImage from "@/assets/stroke.png";
import severeBleedingImage from "@/assets/severe bleeding.png";
import chokingImage from "@/assets/choking.png";
import burnImage from "@/assets/burn.png";
import poisoningImage from "@/assets/poisoning.png";

const FirstAidSection = () => {
  const { t } = useLanguage();

  // Array moved inside the component to access 't' for live translations
  const firstAidGuides = [
    {
      title: t.firstaidCpr,
      icon: <HeartPulse className="h-6 w-6 text-red-500" />,
      image: cprImage,
      steps: t.firstaidCprSteps ? t.firstaidCprSteps.split(" | ") : []
    },
    {
      title: t.firstaidStroke,
      icon: <Activity className="h-6 w-6 text-orange-500" />,
      image: strokeImage,
      steps: t.firstaidStrokeSteps ? t.firstaidStrokeSteps.split(" | ") : []
    },
    {
      title: t.firstaidBleeding,
      icon: <Droplets className="h-6 w-6 text-red-600" />,
      image: severeBleedingImage,
      steps: t.firstaidBleedingSteps ? t.firstaidBleedingSteps.split(" | ") : []
    },
    {
      title: t.firstaidChoking,
      icon: <Wind className="h-6 w-6 text-blue-500" />,
      image: chokingImage,
      steps: t.firstaidChokingSteps ? t.firstaidChokingSteps.split(" | ") : []
    },
    {
      title: t.firstaidBurns,
      icon: <Flame className="h-6 w-6 text-orange-600" />,
      image: burnImage,
      steps: t.firstaidBurnsSteps ? t.firstaidBurnsSteps.split(" | ") : []
    },
    {
      title: t.firstaidPoisoning,
      icon: <Skull className="h-6 w-6 text-green-600" />,
      image: poisoningImage,
      steps: t.firstaidPoisoningSteps ? t.firstaidPoisoningSteps.split(" | ") : []
    }
  ];

  return (
    <section id="first-aid" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <ShieldAlert className="mr-2 h-4 w-4" />
            {t.firstaidBadge || "First Aid Knowledge"}
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            {t.firstaidTitle1} <span className="text-primary">{t.firstaidTitle2}</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            {t.firstaidSubtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {firstAidGuides.map((guide, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-in fade-in zoom-in-95" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {guide.icon}
                  </div>
                  <CardTitle>{guide.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 mb-4">
                  {guide.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary font-bold">•</span> {step}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border rounded-xl overflow-hidden shadow-sm">
                  <img 
                    src={guide.image} 
                    alt={`Illustration for ${guide.title}`} 
                    className="w-full h-auto object-cover max-h-48 hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FirstAidSection;