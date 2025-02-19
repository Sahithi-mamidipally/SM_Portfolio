"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Get in Touch</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Textarea placeholder="Your Message" required className="min-h-[150px]" />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

