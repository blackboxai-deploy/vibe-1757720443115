"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function NetworkMap() {
  // Mock simple visualization (replace with real chart in full impl)
  return (
    <Card>
      <CardContent className="p-4">
        <div className="grid grid-cols-3 gap-4 text-center">
          <Badge variant="secondary">Secret Society X</Badge>
          <Badge variant="secondary">Institution Y</Badge>
          <Badge variant="secondary">Power Connection Z</Badge>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Mock interactive map of power structures. Click to expand connections.</p>
      </CardContent>
    </Card>
  );
}