"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: "#sobre", label: "Sobre Mim" },
    { href: "#servicos", label: "Serviços" },
    { href: "#abordagem", label: "Abordagem" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="lg:hidden ">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menu de navegação</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 bg-white/95 backdrop-blur-md">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between py-4 border-b border-secondary-200">
            <span className="font-sora font-bold text-xl text-secondary-900">Menu</span>
          </div>

          <nav className="flex-1 py-8">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-lg font-medium text-secondary-700 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="py-6 border-t border-secondary-200">
            <Button asChild className="w-full" onClick={() => setOpen(false)}>
              <Link
                href="https://wa.me/5541985199520?text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Consulta
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
