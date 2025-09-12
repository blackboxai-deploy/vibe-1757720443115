"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "🏠",
    description: "Central command center"
  },
  {
    name: "Secure Messages",
    href: "/messages",
    icon: "🔒",
    description: "End-to-end encrypted communication",
    badge: "3"
  },
  {
    name: "Intelligence Hub",
    href: "/intelligence",
    icon: "📊",
    description: "Verified documents & evidence"
  },
  {
    name: "Alert Center",
    href: "/alerts",
    icon: "🚨",
    description: "Disinformation monitoring",
    badge: "LIVE"
  },
  {
    name: "Campaigns",
    href: "/campaigns",
    icon: "⚡",
    description: "Coordinated actions & events"
  },
  {
    name: "OpSec Training",
    href: "/education",
    icon: "🛡️",
    description: "Security & safety education"
  },
  {
    name: "Community",
    href: "/community",
    icon: "👥",
    description: "Forums & peer support"
  },
  {
    name: "Network Map",
    href: "/network",
    icon: "🕸️",
    description: "Power structure visualization"
  }
]

export function Sidebar() {
  const pathname = usePathname()
  const [securityStatus] = useState("SECURE")

  return (
    <div className="w-80 bg-card border-r border-border flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold">T</span>
          </div>
          <div>
            <h1 className="text-xl font-bold">TruthNet</h1>
            <p className="text-sm text-muted-foreground">Transparency Platform</p>
          </div>
        </div>
        
        {/* Security Status */}
        <div className="mt-4 p-3 bg-green-950/20 border border-green-800 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-400">Connection {securityStatus}</span>
            </div>
            <Badge variant="outline" className="text-green-400 border-green-400">
              E2E
            </Badge>
          </div>
          <p className="text-xs text-green-400/70 mt-1">All communications encrypted</p>
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-1 py-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.name} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start h-auto p-3 text-left",
                    isActive && "bg-secondary text-secondary-foreground"
                  )}
                >
                  <div className="flex items-center space-x-3 w-full">
                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium truncate">{item.name}</p>
                        {item.badge && (
                          <Badge 
                            variant={item.badge === "LIVE" ? "destructive" : "default"}
                            className="ml-2 text-xs"
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground truncate">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Button>
              </Link>
            )
          })}
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Anonymous Session</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span>Tor Active</span>
          </div>
        </div>
      </div>
    </div>
  )
}