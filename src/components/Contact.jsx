import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const phone = form.get('phone')
    const message = form.get('message')
    const subject = encodeURIComponent(`Study Abroad Enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nPhone/WhatsApp: ${phone}\n\nMessage:\n${message}`)
    window.location.href = `mailto:hello@dreamlyf.co.in?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="px-6 lg:px-12 py-16">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Speak to a mentor</h2>
          <p className="text-gray-600 mt-4">
            Share a few details and we’ll connect you with an alumni mentor for a free 15-minute discovery call.
          </p>

          <div className="mt-6 space-y-3 text-gray-700">
            <p className="flex items-center gap-2"><Phone size={18} className="text-blue-600"/> +91 90046 44576</p>
            <p className="flex items-center gap-2"><Mail size={18} className="text-blue-600"/> hello@dreamlyf.co.in</p>
            <p className="flex items-center gap-2"><MapPin size={18} className="text-blue-600"/> Mumbai, India</p>
            <a href="https://wa.me/919004644576" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-green-700 hover:underline">
              <MessageCircle size={18}/> Chat on WhatsApp
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label>
              <input id="name" name="name" required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-600 focus:border-blue-600" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone / WhatsApp</label>
              <input id="phone" name="phone" required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-600 focus:border-blue-600" placeholder="+91 ..." />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">What are you aiming for?</label>
              <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-600 focus:border-blue-600" placeholder="Target country/intake, course, budget, tests taken, etc." />
            </div>
          </div>
          <button type="submit" className="mt-6 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 w-full">
            Request a callback
          </button>
          <p className="text-xs text-gray-500 mt-3">By submitting, you agree to be contacted by Dreamlyf Overseas for counselling purposes only.</p>
        </form>
      </div>
    </section>
  )
}
