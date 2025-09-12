"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { AuthForm } from "@/components/AuthForm"; // Supporting component, created below
import { ProfileManager } from "@/components/ProfileManager"; // Supporting component, created below

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(true);
  const [anonymousMode, setAnonymousMode] = useState(true);

  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>{isSignup ? "Secure Signup" : "Secure Login"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-2">
            <Switch id="anonymous-mode" checked={anonymousMode} onCheckedChange={setAnonymousMode} />
            <Label htmlFor="anonymous-mode">Enable Anonymous Profile</Label>
          </div>
          
          {anonymousMode ? (
            <ProfileManager />
          ) : (
            <AuthForm isSignup={isSignup} />
          )}

          <Button className="w-full">{isSignup ? "Create Secure Account" : "Login Securely"}</Button>
          <Button variant="link" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Already have an account? Login" : "Need an account? Signup"}
          </Button>
          
          <p className="text-sm text-muted-foreground">Multi-factor authentication enabled. OpSec tip: Use a secure pseudonym for protection.</p>
        </CardContent>
      </Card>
    </div>
  );
}