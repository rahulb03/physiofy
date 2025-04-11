
"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import { Send, Phone, Mail,  } from "lucide-react"
import { toast } from "sonner"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://backend.unizoy.com/api/contact-forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            name: formData.name,
            phoneNumber: formData.phone,
            email: formData.email,
            feedback: formData.message,
          },
        }),
      })

      if (!response.ok) throw new Error("Submission failed")

      toast.success("🎉 Message sent successfully! Thank you.")
      setFormData({ name: "", phone: "", email: " " , message: "" })
    } catch  {
      toast.error("🚫 Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="contact" className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-xl bg-white">
      <div className="grid md:grid-cols-5">
        <div className="hidden md:block md:col-span-2 bg-theme text-white p-10">
          <div className="h-full flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Contact Us</h2>
              <p className="opacity-90 text-lg">
                We`re dedicated to helping you achieve optimal physical health and wellness. Our team of experienced
                physiotherapists is ready to assist you.
              </p>
            </div>

            <div className="space-y-8 mt-12">
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm opacity-75">Phone</p>
                  <p className="font-medium">+91 6353295389</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm opacity-75">Email</p>
                  <p className="font-medium">officalphysiofy@gmail.com</p>
                </div>
              </div>

              {/* <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm opacity-75">Response Time</p>
                  <p className="font-medium">Within 24 business hours</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="p-8 md:p-10 col-span-5 md:col-span-3">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">Send us a message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-theme"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-theme"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-theme"
                placeholder="Your phone number"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-theme"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-4 bg-theme hover:bg-theme/90 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 group"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Processing...</span>
                </div>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </>
              )}
            </button>
          </form>

          {/* Mobile contact info */}
          <div className="md:hidden mt-10 pt-8 border-t border-gray-100">
            <h4 className="text-lg font-medium text-gray-800 mb-4">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-theme" />
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-theme" />
                <p className="text-gray-600">info@yourphysiotherapy.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
