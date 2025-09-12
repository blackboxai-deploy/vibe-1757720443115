"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DashboardPage() {
  const [activityFeed, setActivityFeed] = useState([
    { id: 1, type: "alert", message: "New disinformation campaign detected", time: "2 mins ago" },
    { id: 2, type: "message", message: "Secure file shared in group Alpha", time: "10 mins ago" },
    { id: 3, type: "update", message: "Intelligence hub updated with new evidence", time: "1 hour ago" },
  ]);

  useEffect(() => {
    // Mock real-time updates
    const interval = setInterval(() => {
      setActivityFeed((prev) => [
        ...prev,
        { id: prev.length + 1, type: "alert", message: "Security status: All systems secure", time: "Now" },
      ]);
    }, 30000); // Every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">TruthNet Dashboard</h1>
      
      <Alert variant="default">
        <AlertTitle>Security Status</AlertTitle>
        <AlertDescription>All communications encrypted. No breaches detected.</AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Activity Feed</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96">
            <div className="space-y-4">
              {activityFeed.map((item) => (
                <div key={item.id} className="border-b pb-2">
                  <p className="font-semibold">{item.type.toUpperCase()}: {item.message}</p>
                  <p className="text-sm text-muted-foreground">{item.time}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <a href="/messages" className="block hover:underline">Go to Messaging</a>
            <a href="/alerts" className="block hover:underline">View Alerts</a>
            <a href="/campaigns" className="block hover:underline">Manage Campaigns</a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}