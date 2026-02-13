import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, Camera, CameraOff, Activity, AlertCircle,
  Info, ChevronLeft, Lightbulb, RotateCcw
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useRppg } from "@/hooks/useRppg";

const tips = [
  "Keep your face centered and well-lit",
  "Avoid moving during measurement",
  "Natural lighting works best",
  "Remove glasses if possible",
  "Keep a neutral expression",
];

const MEASUREMENT_TIME = 30; // 30 seconds timer

const RppgMonitor = () => {
  const { 
    heartRate, signalQuality, isProcessing, error,
    videoRef, canvasRef, startCamera, stopCamera 
  } = useRppg();

  const [showTips, setShowTips] = useState(true);
  
  // New States for Countdown and Averaging
  const [timeLeft, setTimeLeft] = useState(MEASUREMENT_TIME);
  const [isMeasuring, setIsMeasuring] = useState(false);
  const [hrHistory, setHrHistory] = useState<number[]>([]);
  const [finalResult, setFinalResult] = useState<number | null>(null);

  // Manage start and reset
  const handleStartMeasurement = () => {
    setHrHistory([]);
    setFinalResult(null);
    setTimeLeft(MEASUREMENT_TIME);
    setIsMeasuring(true);
    startCamera();
  };

  const handleStopMeasurement = () => {
    setIsMeasuring(false);
    stopCamera();
  };

  // Timer Effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isMeasuring && isProcessing) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleStopMeasurement();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isMeasuring, isProcessing]);

  // Collect Heart Rate Data
  useEffect(() => {
    if (isMeasuring && heartRate && heartRate > 0) {
      setHrHistory((prev) => [...prev, heartRate]);
    }
  }, [heartRate, isMeasuring]);

  // Calculate Average when timer hits 0
  useEffect(() => {
    if (timeLeft === 0 && hrHistory.length > 0 && !isMeasuring) {
      const sum = hrHistory.reduce((a, b) => a + b, 0);
      setFinalResult(Math.round(sum / hrHistory.length));
    } else if (timeLeft === 0 && hrHistory.length === 0 && !isMeasuring) {
      setFinalResult(0); // Indicates error or no read
    }
  }, [timeLeft, isMeasuring, hrHistory]);

  const getQualityColor = (quality: number) => {
    if (quality >= 70) return "text-success";
    if (quality >= 40) return "text-warning";
    return "text-destructive";
  };

  const getQualityLabel = (quality: number) => {
    if (quality >= 70) return "Good";
    if (quality >= 40) return "Fair";
    return "Poor";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-md shadow-soft border-b border-border">
        <div className="flex items-center justify-between h-14 px-4">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ChevronLeft className="h-5 w-5" />
            <span className="font-medium">Back</span>
          </Link>
          <h1 className="font-semibold text-foreground">Heart Rate Monitor</h1>
          <div className="w-20" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Info Card */}
        <AnimatePresence>
          {showTips && !isProcessing && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <Card className="p-4 mb-6 bg-primary/5 border-primary/20">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground mb-2">How it works</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      rPPG detects subtle color changes in your skin caused by blood flow to estimate your heart rate over 30 seconds using just your camera.
                    </p>
                    <Button variant="ghost" size="sm" onClick={() => setShowTips(false)} className="text-primary">
                      Got it
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Camera View */}
        <Card className="overflow-hidden mb-6">
          <div className="relative aspect-[4/3] bg-muted">
            <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover scale-x-[-1]" playsInline muted />
            <canvas ref={canvasRef} className="hidden" />
            
            {!isProcessing && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted/80">
                <Camera className="h-16 w-16 text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-center px-4">
                  Click the button below to start your 30-second measurement
                </p>
              </div>
            )}

            {isProcessing && (
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <ellipse cx="50" cy="40" rx="20" ry="25" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.6" />
                </svg>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="p-4 border-t border-border">
            <div className="flex justify-center">
              {!isProcessing && finalResult === null ? (
                <Button onClick={handleStartMeasurement} size="lg" className="gap-2">
                  <Camera className="h-5 w-5" />
                  Start 30s Measurement
                </Button>
              ) : isProcessing ? (
                <Button onClick={handleStopMeasurement} variant="outline" size="lg" className="gap-2">
                  <CameraOff className="h-5 w-5" />
                  Cancel Measurement
                </Button>
              ) : null}
            </div>
          </div>
        </Card>

        {/* Error Display */}
        {error && (
          <Card className="p-4 mb-6 bg-destructive/10 border-destructive/30">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-destructive" />
              <p className="text-destructive">{error}</p>
            </div>
          </Card>
        )}

        {/* Heart Rate & Countdown Display */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
          <Card className="p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-destructive" />
                <h3 className="font-semibold text-foreground">Heart Rate Analysis</h3>
              </div>
              {isProcessing && (
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: heartRate ? 60 / heartRate : 1 }}>
                  <Heart className="h-6 w-6 text-destructive fill-destructive" />
                </motion.div>
              )}
            </div>

            <div className="text-center py-6 min-h-[160px] flex flex-col justify-center">
              {finalResult !== null ? (
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center gap-2">
                  <span className="text-lg text-muted-foreground font-medium">Average Heart Rate</span>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-6xl font-bold text-success">{finalResult > 0 ? finalResult : "--"}</span>
                    <span className="text-xl text-muted-foreground">BPM</span>
                  </div>
                  {finalResult === 0 && <p className="text-sm text-destructive mt-2">Could not get a clear reading.</p>}
                  <Button onClick={handleStartMeasurement} variant="outline" className="mt-4 gap-2">
                    <RotateCcw className="h-4 w-4"/> Measure Again
                  </Button>
                </motion.div>
              ) : isMeasuring ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="text-2xl font-medium text-primary bg-primary/10 px-6 py-2 rounded-full">
                    Time left: {timeLeft}s
                  </div>
                  {heartRate !== null ? (
                    <motion.div key={heartRate} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold text-foreground/80">{heartRate}</span>
                      <span className="text-lg text-muted-foreground">BPM</span>
                    </motion.div>
                  ) : (
                    <div className="text-2xl text-muted-foreground animate-pulse mt-4">Calibrating...</div>
                  )}
                </div>
              ) : (
                <div className="text-4xl text-muted-foreground">--</div>
              )}
            </div>

            {/* Signal Quality (Only show while measuring) */}
            {isProcessing && (
              <div className="space-y-2 mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Signal Quality</span>
                  </div>
                  <span className={getQualityColor(signalQuality)}>{getQualityLabel(signalQuality)}</span>
                </div>
                <Progress value={signalQuality} className="h-2" />
              </div>
            )}
          </Card>
        </motion.div>

        {/* Tips */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="h-5 w-5 text-warning" />
            <h3 className="font-semibold text-foreground">Tips for Better Results</h3>
          </div>
          <ul className="space-y-2">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </Card>

        <p className="text-xs text-muted-foreground text-center mt-6 px-4">
          This is for informational purposes only and should not be used for medical diagnosis. 
          For accurate readings, please use certified medical devices.
        </p>
      </main>
    </div>
  );
};

export default RppgMonitor;