// app/layout.tsx
import type React from "react"
import "@/app/globals.css"
import { Mona_Sans as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import CookieConsent from "@/components/gdpr/cookie-consent"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
          <Toaster />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
  generator: 'v0.dev'
};