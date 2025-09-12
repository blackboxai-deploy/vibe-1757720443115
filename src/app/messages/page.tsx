"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { EncryptedFileShare } from "@/components/EncryptedFileShare"; // We'll create in Phase 3

export default function MessagesPage() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Anonymous1", content: "Secure message: Plan for next action", time: "5 mins ago", encrypted: true },
    { id: 2, sender: "You", content: "Acknowledged. File shared.", time: "3 mins ago", encrypted: true },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [groups, setGroups] = useState(["Group Alpha", "Whistleblower Circle"]);

  useEffect(() => {
    // Mock incoming messages
    const interval = setInterval(() => {
      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, sender: "Anonymous2", content: "New update:警", time: "Now", encrypted: true },
      ]);
    }, 60000); // Every minute
    return () => clearInterval(interval);
  }, []);

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: "You", content: newMessage, time: "Now", encrypted: true }]);
      setNewMessage("");
    }
  };

  const createGroup = () => {
    const groupName = prompt("Enter new group name (invite-only):");
    if (groupName) setGroups([...groups, groupName]);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Secure Messaging</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Private Groups <Button onClick={createGroup} size="sm">Create Group</Button></CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            {groups.map((group) => (
              <Badge key={group} variant="secondary">{group} (Encrypted)</Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Chat (End-to-End Encrypted)</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96 mb-4">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`p-2 rounded ${msg.sender === "You" ? "bg-accent text-accent-foreground ml-auto" : "bg-muted"}`}>
                  <p className="font-semibold">{msg.sender}</p>
                  <p>{msg.content}</p>
                  <p className="text-xs text-muted-foreground">{msg.time} {msg.encrypted && "(Encrypted)"}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="flex space-x-2">
            <Input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Type secure message..." />
            <Button onClick={sendMessage}>Send</Button>
          </div>
          <EncryptedFileShare /> {/* Mock file sharing */}
        </CardContent>
      </Card>
    </div>
  );
}