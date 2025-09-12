"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";

export function ProfileManager() {
  const [pseudonym, setPseudonym] = useState("");

  const generatePseudonym = () => {
    setPseudonym(`TruthSeeker_${Math.random().toString(36).substring(2, 9)}`);
  };

  return (
    <div className="space-y-4">
      <Alert>
        Anonymous mode enabled: Your identity is protected with a pseudonym.
      </Alert>
      <div>
        <Label htmlFor="pseudonym">Pseudonym</Label>
        <Input id="pseudonym" value={pseudonym} onChange={(e) => setPseudonym(e.target.value)} placeholder="Enter or generate pseudonym" />
      </div>
      <Button variant="outline" onClick={generatePseudonym}>Generate Secure Pseudonym</Button>
    </div>
  );
}