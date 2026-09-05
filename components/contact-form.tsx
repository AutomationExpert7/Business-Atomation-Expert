"use client"

import { useState, type FormEvent } from "react"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"

const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwoddOu_WG0byiTIrXicgT3xqlUjUHF0zNg6RPSvOx1oHIisR0DuBItAWK3z3dVKdEW/exec"

export function ContactForm() {
  const [verified, setVerified] = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleCheckboxClick() {
    if (verified || verifying) return
    setVerifying(true)
    setTimeout(() => {
      setVerifying(false)
      setVerified(true)
    }, 1200)
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!verified) {
      alert("Please verify that you are not a robot")
      return
    }

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value ?? "",
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value ?? "",
      company:
        (form.elements.namedItem("company") as HTMLInputElement)?.value ?? "",
      phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value ?? "",
      message:
        (form.elements.namedItem("message") as HTMLTextAreaElement)?.value ??
        "",
    }

    setSubmitting(true)
    try {
      await fetch(ENDPOINT, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(data),
      })
    } catch {
      // Original behavior: errors are swallowed and the success state
      // is shown regardless (fire-and-forget submission).
    } finally {
      setSubmitting(false)
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12 px-4">
        <h2 className="text-3xl font-bold mb-3">
          Thank you for{" "}
          <span className="text-primary-accent">reaching out!</span>
        </h2>
        <p className="text-untitled-ui-gray300">
          We have received your message and will get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div>
          <label
            className="block text-xs sm:text-sm font-medium text-primary-accent mb-2 uppercase tracking-wide"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="flex h-10 w-full ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-transparent border-0 border-b-2 border-untitled-ui-gray600 text-untitled-ui-white placeholder:text-untitled-ui-gray500 focus:border-primary-accent focus:ring-0 rounded-none px-0 py-3 text-base sm:text-lg"
            id="name"
            name="name"
            type="text"
            required
          />
        </div>
        <div>
          <label
            className="block text-xs sm:text-sm font-medium text-primary-accent mb-2 uppercase tracking-wide"
            htmlFor="company"
          >
            Company
          </label>
          <input
            className="flex h-10 w-full ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-transparent border-0 border-b-2 border-untitled-ui-gray600 text-untitled-ui-white placeholder:text-untitled-ui-gray500 focus:border-primary-accent focus:ring-0 rounded-none px-0 py-3 text-base sm:text-lg"
            id="company"
            name="company"
            type="text"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div>
          <label
            className="block text-xs sm:text-sm font-medium text-primary-accent mb-2 uppercase tracking-wide"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="flex h-10 w-full ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-transparent border-0 border-b-2 border-untitled-ui-gray600 text-untitled-ui-white placeholder:text-untitled-ui-gray500 focus:border-primary-accent focus:ring-0 rounded-none px-0 py-3 text-base sm:text-lg"
            id="email"
            name="email"
            type="email"
            required
          />
        </div>
        <div>
          <label
            className="block text-xs sm:text-sm font-medium text-primary-accent mb-2 uppercase tracking-wide"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            className="flex h-10 w-full ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-transparent border-0 border-b-2 border-untitled-ui-gray600 text-untitled-ui-white placeholder:text-untitled-ui-gray500 focus:border-primary-accent focus:ring-0 rounded-none px-0 py-3 text-base sm:text-lg"
            id="phone"
            name="phone"
            type="tel"
          />
        </div>
      </div>

      <div>
        <label
          className="block text-xs sm:text-sm font-medium text-primary-accent mb-2 uppercase tracking-wide"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="flex w-full border-input ring-offset-background focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-transparent border-0 border-b-2 text-untitled-ui-white placeholder:text-untitled-ui-gray500 focus:border-primary-accent focus:ring-0 rounded-none px-0 py-3 text-base sm:text-lg resize-none min-h-[120px]"
          id="message"
          name="message"
          placeholder="Please provide details of why you are reaching out to us"
          required
          rows={5}
        />
      </div>

      <div className="flex items-center space-x-3">
        <div className="relative">
          <div
            role="checkbox"
            aria-checked={verified}
            tabIndex={0}
            onClick={handleCheckboxClick}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                handleCheckboxClick()
              }
            }}
            className="flex items-center justify-center w-6 h-6 border-2 border-primary-accent rounded cursor-pointer hover:bg-primary-accent/10 transition-colors"
          >
            {verifying && (
              <span className="w-3 h-3 border-2 border-primary-accent border-t-transparent rounded-full inline-block animate-spin" />
            )}
            {verified && !verifying && (
              <Check className="w-4 h-4 text-primary-accent" strokeWidth={3} />
            )}
          </div>
        </div>
        <label className="text-sm sm:text-base text-untitled-ui-white cursor-pointer">
          I&apos;m not a robot
        </label>
      </div>

      <div className="pt-4 sm:pt-6">
        <Button
          type="submit"
          disabled={submitting}
          className="h-11 w-full sm:w-auto bg-primary-accent text-dark-primary hover:bg-primary-accent/90 font-medium py-3 sm:py-4 px-8 sm:px-12 rounded-full text-sm sm:text-base uppercase tracking-wide transition-all duration-300"
        >
          <span>{submitting ? "Sending..." : "Submit"}</span>
        </Button>
      </div>
    </form>
  )
}