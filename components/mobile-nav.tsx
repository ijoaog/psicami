"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 lg:hidden bg-transparent">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Abrir menu de navegação</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="grid gap-6 text-lg font-medium mt-8">
          <Link href="#" className="flex items-center gap-2 text-lg font-semibold mb-4" onClick={() => setOpen(false)}>
            <span className="font-sora">Camila Ferreira</span>
          </Link>
          <Link href="#ajuda" className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
            Como Posso Ajudar
          </Link>
          <Link href="#sobre" className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
            Sobre Mim
          </Link>
          <Button asChild className="w-full mt-4" onClick={() => setOpen(false)}>
            <Link href="#contato">Agendar Consulta</Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
