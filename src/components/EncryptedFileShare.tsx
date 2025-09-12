"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export function EncryptedFileShare() {
  return (
    <div className="mt-4 space-y-4">
      <Label>Secure File Share</Label>
      <Input type="file" />
      <Button>Upload Encrypted File</Button>
      <Badge variant="success">Encryption: AES-256 (Mock)</Badge>
      <p className="text-sm text-muted-foreground">Files automatically encrypted before sharing.</p>
    </div>
  );
}