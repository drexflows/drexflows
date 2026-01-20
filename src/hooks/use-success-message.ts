import { useState, useCallback } from "react";

interface SuccessMessageState {
  isVisible: boolean;
  title: string;
  description: string;
}

export const useSuccessMessage = () => {
  const [messageState, setMessageState] = useState<SuccessMessageState>({
    isVisible: false,
    title: "",
    description: "",
  });

  const showSuccess = useCallback((title: string, description: string) => {
    setMessageState({
      isVisible: true,
      title,
      description,
    });
  }, []);

  const hideSuccess = useCallback(() => {
    setMessageState(prev => ({
      ...prev,
      isVisible: false,
    }));
  }, []);

  return {
    ...messageState,
    showSuccess,
    hideSuccess,
  };
};
