// components/cookie-consent.tsx
"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

type CookieSettings = {
  necessary: boolean
  analytics: boolean
  preferences: boolean
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [cookieSettings, setCookieSettings] = useState<CookieSettings>({
    necessary: true,
    analytics: false,
    preferences: false
  })

  useEffect(() => {
    // Check if cookie consent already exists
    const consentGiven = localStorage.getItem("cookieConsent")
    if (!consentGiven) {
      // If no consent is stored, show the banner
      setShowBanner(true)
    } else {
      // Parse stored settings
      try {
        setCookieSettings(JSON.parse(consentGiven))
      } catch (e) {
        // If parsing fails, show the banner again
        setShowBanner(true)
      }
    }
  }, [])

  const savePreferences = (settings: CookieSettings) => {
    localStorage.setItem("cookieConsent", JSON.stringify(settings))
    setCookieSettings(settings)
    setShowBanner(false)
    setShowDialog(false)
  }

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      preferences: true
    }
    savePreferences(allAccepted)
  }

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      preferences: false
    }
    savePreferences(necessaryOnly)
  }

  const handleSettingsChange = (key: keyof CookieSettings) => {
    if (key === 'necessary') return // Cannot change necessary cookies
    
    setCookieSettings({
      ...cookieSettings,
      [key]: !cookieSettings[key]
    })
  }

  const openSettings = () => {
    setShowBanner(false)
    setShowDialog(true)
  }

  const saveSettings = () => {
    savePreferences(cookieSettings)
  }

  if (!showBanner && !showDialog) {
    return (
      <Button 
        variant="outline" 
        size="sm" 
        className="fixed bottom-4 right-4 z-50"
        onClick={() => setShowDialog(true)}
      >
        Paramètres des cookies
      </Button>
    )
  }

  return (
    <>
      {showBanner && (
        <div className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6 bg-background border-t shadow-lg">
          <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-medium">Ce site utilise des cookies</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez personnaliser vos préférences ou accepter les paramètres par défaut.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <Button variant="outline" size="sm" onClick={acceptNecessary}>
                Refuser tous
              </Button>
              <Button variant="outline" size="sm" onClick={openSettings}>
                Personnaliser
              </Button>
              <Button size="sm" onClick={acceptAll}>
                Accepter tous
              </Button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Paramètres des cookies</DialogTitle>
            <DialogDescription>
              Personnalisez vos préférences de cookies. Les cookies nécessaires sont requis pour le fonctionnement du site.
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="settings">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="settings">Paramètres</TabsTrigger>
              <TabsTrigger value="about">À propos des cookies</TabsTrigger>
            </TabsList>
            <TabsContent value="settings" className="space-y-4 py-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="necessary">Cookies nécessaires</Label>
                    <p className="text-xs text-muted-foreground">
                      Ces cookies sont indispensables au fonctionnement du site.
                    </p>
                  </div>
                  <Switch
                    id="necessary"
                    checked={cookieSettings.necessary}
                    disabled
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="analytics">Cookies analytiques</Label>
                    <p className="text-xs text-muted-foreground">
                      Nous analysons le trafic pour améliorer l'expérience utilisateur.
                    </p>
                  </div>
                  <Switch
                    id="analytics"
                    checked={cookieSettings.analytics}
                    onCheckedChange={() => handleSettingsChange('analytics')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="preferences">Cookies de préférences</Label>
                    <p className="text-xs text-muted-foreground">
                      Ces cookies mémorisent vos préférences de navigation.
                    </p>
                  </div>
                  <Switch
                    id="preferences"
                    checked={cookieSettings.preferences}
                    onCheckedChange={() => handleSettingsChange('preferences')}
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="about" className="py-4">
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Qu'est-ce que les cookies ?</h4>
                <p className="text-sm text-muted-foreground">
                  Les cookies sont de petits fichiers texte placés sur votre appareil lorsque vous visitez un site web. 
                  Ils sont utilisés pour mémoriser vos préférences, comprendre comment vous interagissez avec le site, 
                  et peuvent être utilisés pour personnaliser votre expérience.
                </p>
                <h4 className="text-sm font-medium">Comment nous utilisons les cookies</h4>
                <p className="text-sm text-muted-foreground">
                  Les cookies nécessaires permettent les fonctionnalités de base du site. Les cookies analytiques nous aident 
                  à comprendre comment les visiteurs interagissent avec le site. Les cookies de préférences mémorisent vos 
                  choix pour améliorer votre expérience.
                </p>
                <h4 className="text-sm font-medium">Vos droits</h4>
                <p className="text-sm text-muted-foreground">
                  Vous avez le droit d'accepter ou de refuser les cookies non essentiels. Vous pouvez modifier vos préférences 
                  à tout moment en utilisant le bouton "Paramètres des cookies" en bas de page.
                </p>
              </div>
            </TabsContent>
          </Tabs>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDialog(false)}>
              Annuler
            </Button>
            <Button onClick={saveSettings}>
              Enregistrer les préférences
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}