import { useEffect, useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SuccessMessageProps {
  isVisible: boolean;
  title: string;
  description: string;
  onClose: () => void;
  duration?: number; // Auto-close duration in milliseconds
}

export const SuccessMessage = ({
  isVisible,
  title,
  description,
  onClose,
  duration = 4000,
}: SuccessMessageProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      
      // Auto-close after duration
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration]);

  const handleClose = () => {
    setIsAnimating(false);
    // Wait for exit animation to complete before calling onClose
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isVisible && !isAnimating) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300",
          isAnimating && isVisible ? "opacity-100" : "opacity-0"
        )}
        onClick={handleClose}
      />

      {/* Success Message */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className={cn(
            "relative bg-background border border-border rounded-2xl shadow-2xl max-w-md w-full p-8 pointer-events-auto",
            "transform transition-all duration-500 ease-out",
            isAnimating && isVisible
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-95 opacity-0 translate-y-4"
          )}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Success Icon with Animation */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              {/* Pulsing Background */}
              <div
                className={cn(
                  "absolute inset-0 bg-green-500/20 rounded-full blur-xl transition-all duration-1000",
                  isAnimating && isVisible ? "scale-150 opacity-100" : "scale-100 opacity-0"
                )}
              />
              
              {/* Success Icon */}
              <div
                className={cn(
                  "relative w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30",
                  "transform transition-all duration-700 ease-out",
                  isAnimating && isVisible
                    ? "scale-100 rotate-0"
                    : "scale-0 rotate-180"
                )}
              >
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>

              {/* Ripple Effect */}
              <div
                className={cn(
                  "absolute inset-0 border-2 border-green-400 rounded-full transition-all duration-1000 ease-out",
                  isAnimating && isVisible
                    ? "scale-150 opacity-0"
                    : "scale-100 opacity-100"
                )}
              />
            </div>

            {/* Text Content */}
            <div
              className={cn(
                "space-y-2 transition-all duration-500 delay-200",
                isAnimating && isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
            >
              <h3 className="text-xl font-bold text-foreground">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full mt-6">
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <div
                  className={cn(
                    "h-full bg-gradient-to-r from-green-400 to-green-600 transition-all ease-linear",
                    isAnimating && isVisible ? "w-0" : "w-full"
                  )}
                  style={{
                    transitionDuration: isAnimating && isVisible ? `${duration}ms` : "0ms",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
