"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">T</span>
              </div>
              <span className="text-xl font-bold">TruthNet</span>
              <Badge variant="outline" className="text-green-400 border-green-400">
                SECURE
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link href="/dashboard">
                <Button>Enter Platform</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Expose Hidden Powers.
              <br />
              Demand Accountability.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              TruthNet empowers activists, whistleblowers, and truth-seekers with secure communication, 
              verified intelligence, and coordinated action tools to dismantle secretive power structures.
            </p>
            
            {/* Hero Image */}
            <div className="mb-8">
              <img 
                src="https://placehold.co/1200x600?text=Secure+global+network+of+activists+uniting+against+hidden+powers+with+encrypted+data+streams+resistance+symbols+dark+cyberpunk+aesthetic" 
                alt="Secure global network of activists uniting against hidden powers with encrypted data streams resistance symbols dark cyberpunk aesthetic" 
                className="mx-auto rounded-lg shadow-2xl border border-border"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
            
            <div className="flex items-center justify-center space-x-6 mb-12">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">End-to-End Encrypted</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Anonymous Profiles</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Verified Intelligence</span>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <Link href="/dashboard">
                <Button size="lg" className="px-8">
                  🚀 Launch Platform
                </Button>
              </Link>
              <Link href="/education">
                <Button size="lg" variant="outline" className="px-8">
                  🛡️ Security Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Platform Capabilities</h2>
            <p className="text-muted-foreground">
              Comprehensive tools for transparency activism and resistance coordination
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <CardTitle>Encrypted Communication</CardTitle>
                <CardDescription>
                  End-to-end encrypted messaging with anonymous profiles and secure file sharing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Private invite-only groups</li>
                  <li>• Multi-factor authentication</li>
                  <li>• Anonymous identity protection</li>
                  <li>• Secure document sharing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <CardTitle>Intelligence Hub</CardTitle>
                <CardDescription>
                  Centralized repository of verified exposés, documents, and evidence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Document verification workflows</li>
                  <li>• Whistleblower submission system</li>
                  <li>• Network visualization maps</li>
                  <li>• Evidence cross-referencing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🚨</span>
                </div>
                <CardTitle>Alert System</CardTitle>
                <CardDescription>
                  Real-time monitoring and rapid response to disinformation campaigns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Live threat monitoring</li>
                  <li>• Community fact-checking</li>
                  <li>• Rapid counter-narrative tools</li>
                  <li>• Coordinated response system</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <CardTitle>Campaign Center</CardTitle>
                <CardDescription>
                  Organize protests, petitions, and coordinated actions with impact tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Event planning & RSVP</li>
                  <li>• Viral content templates</li>
                  <li>• Impact metrics tracking</li>
                  <li>• Coordinated messaging</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <CardTitle>OpSec Training</CardTitle>
                <CardDescription>
                  Comprehensive security education and operational safety protocols
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Digital security tutorials</li>
                  <li>• Whistleblowing safety guides</li>
                  <li>• Expert Q&A sessions</li>
                  <li>• Threat assessment tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <CardTitle>Community Support</CardTitle>
                <CardDescription>
                  Peer support networks and mental health resources for activists
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Secure forums & discussions</li>
                  <li>• Mental health resources</li>
                  <li>• Contributor recognition</li>
                  <li>• Anonymous support groups</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join the Resistance</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Transform from isolated activist to part of a coordinated force capable of 
              exposing and dismantling secretive power structures.
            </p>
            
            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">256-bit</div>
                  <div className="text-sm text-muted-foreground">Military-grade encryption</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Threat monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Global</div>
                  <div className="text-sm text-muted-foreground">Resistance network</div>
                </div>
              </div>
            </div>

            <Link href="/dashboard">
              <Button size="lg" className="px-8">
                🔓 Access Platform Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                © 2024 TruthNet Platform
              </span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>🔒 Encrypted</span>
              <span>🛡️ Anonymous</span>
              <span>🌐 Decentralized</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}