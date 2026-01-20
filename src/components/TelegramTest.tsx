import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { testTelegramConnection, getBotUpdates } from "@/services/telegramService";

export const TelegramTest = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [customChatId, setCustomChatId] = useState("");

  const handleTestConnection = async () => {
    setIsLoading(true);
    try {
      const workingChatId = await testTelegramConnection();
      if (workingChatId) {
        toast({
          title: "Success!",
          description: `Telegram connection works with chat ID: ${workingChatId}`,
        });
      } else {
        toast({
          title: "Connection failed",
          description: "Could not connect to Telegram bot. Check console for details.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to test Telegram connection",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  const handleGetUpdates = async () => {
    setIsLoading(true);
    try {
      const updates = await getBotUpdates();
      console.log("Bot updates:", updates);
      toast({
        title: "Updates retrieved",
        description: "Check browser console for bot updates",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get bot updates",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  const handleTestCustomChatId = async () => {
    if (!customChatId.trim()) {
      toast({
        title: "Error",
        description: "Please enter a chat ID to test",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`https://api.telegram.org/bot7961020846:AAHxJI6TdsZmY87A1u5FwOgvZL8bcthkoXs/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: customChatId,
          text: `🧪 Test message from Drex-flows with chat ID: ${customChatId}`,
        }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: `Message sent successfully to chat ID: ${customChatId}`,
        });
      } else {
        const errorData = await response.json();
        console.error("Telegram API Error:", errorData);
        toast({
          title: "Failed",
          description: `Could not send to chat ID: ${customChatId}. Check console for details.`,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Network error occurred",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>🤖 Telegram Bot Test</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          onClick={handleTestConnection} 
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? "Testing..." : "Test Default Connection"}
        </Button>

        <Button 
          onClick={handleGetUpdates} 
          disabled={isLoading}
          variant="outline"
          className="w-full"
        >
          {isLoading ? "Getting..." : "Get Bot Updates"}
        </Button>

        <div className="space-y-2">
          <Label htmlFor="chatId">Test Custom Chat ID:</Label>
          <Input
            id="chatId"
            value={customChatId}
            onChange={(e) => setCustomChatId(e.target.value)}
            placeholder="Enter chat ID (e.g., 123456789 or @username)"
          />
          <Button 
            onClick={handleTestCustomChatId} 
            disabled={isLoading || !customChatId.trim()}
            variant="secondary"
            className="w-full"
          >
            {isLoading ? "Testing..." : "Test Custom Chat ID"}
          </Button>
        </div>

        <div className="text-sm text-muted-foreground">
          <p><strong>Instructions:</strong></p>
          <ol className="list-decimal list-inside space-y-1">
            <li>First, message @drexflows_bot in Telegram</li>
            <li>Click "Get Bot Updates" to see chat IDs</li>
            <li>Use the numeric chat ID in the custom test</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  );
};
