"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { NetworkMap } from "@/components/NetworkMap"; // We'll create in Phase 3

export default function IntelligencePage() {
  const [documents, setDocuments] = useState([
    { id: 1, title: "Exposé on Secret Society X", status: "Verified", submitted: "Anonymous", date: "2023-10-01" },
    { id: 2, title: "Leaked Documents Y", status: "Pending Vetting", submitted: "Whistleblower1", date: "2023-10-05" },
  ]);
  const [newTip, setNewTip] = useState("");

  const submitTip = () => {
    if (newTip.trim()) {
      setDocuments([...documents, { id: documents.length + 1, title: newTip, status: "Pending", submitted: "Anonymous", date: new Date().toISOString().split('T')[0] }]);
      setNewTip("");
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Verified Intelligence Hub</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Submit Whistleblower Tip (Anonymous)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input value={newTip} onChange={(e) => setNewTip(e.target.value)} placeholder="Enter tip or document title..." />
            <Button onClick={submitTip}>Submit Securely</Button>
          </div>
          <p className="text-sm text-muted-foreground mt-2">All submissions encrypted and vetted by community.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Document Repository</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Submitted By</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>{doc.title}</TableCell>
                  <TableCell><Badge variant={doc.status === "Verified" ? "success" : "warning"}>{doc.status}</Badge></TableCell>
                  <TableCell>{doc.submitted}</TableCell>
                  <TableCell>{doc.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Interactive Network Map</CardTitle>
        </CardHeader>
        <CardContent>
          <NetworkMap /> {/* Mock interactive map of power connections */}
        </CardContent>
      </Card>
    </div>
  );
}