"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Gift } from "lucide-react"

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true)
        setHasShown(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [hasShown])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Email submitted:", email)
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md border-0 shadow-2xl">
        <DialogHeader>
          <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
            <Gift className="h-8 w-8 text-green-600" />
          </div>
          <DialogTitle className="text-2xl font-bold text-center text-gray-900">Wait! Don't Miss Out</DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Get a free lead generation audit worth $500 before you go
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your business email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-center"
          />

          <div className="flex flex-col space-y-2">
            <Button type="submit" className="bg-green-600 hover:bg-green-700 text-black font-semibold">
              Request a Quote
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              No thanks, I'll pass
            </Button>
          </div>
        </form>

        <div className="text-xs text-gray-500 text-center mt-4">🔒 We respect your privacy. No spam, ever.</div>
      </DialogContent>
    </Dialog>
  )
}
