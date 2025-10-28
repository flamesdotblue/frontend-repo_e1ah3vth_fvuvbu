import { GraduationCap, MapPin, Phone, Star } from 'lucide-react'

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50" />

      <div className="relative">
        <nav className="flex items-center justify-between px-6 lg:px-12 py-4">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">D</div>
            <div>
              <p className="text-xl font-semibold tracking-tight">dreamlyf overseas</p>
              <p className="text-xs text-gray-500 flex items-center gap-1"><MapPin size={14}/> Mumbai, India</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#mentorship" className="text-gray-600 hover:text-gray-900">Mentorship</a>
            <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            <a href="https://dreamlyf.co.in" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900">Existing site</a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700">
              <Phone size={16}/> Book a free consult
            </a>
          </div>
        </nav>

        <div className="px-6 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-2 items-center gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm font-medium mb-6">
              <Star size={16} className="text-yellow-500"/>
              Alumni-led study abroad guidance
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Study Abroad with Mentors who’ve been there
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Dreamlyf Overseas helps you secure admits, funding, and visas with one-on-one mentorship from alumni who have successfully completed the journey you’re about to start.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                <Phone size={18}/> Talk to an expert
              </a>
              <a href="#mentorship" className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50">
                <GraduationCap size={18}/> Meet our mentors
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Star className="text-yellow-500" size={16}/> Trusted guidance</div>
              <div className="flex items-center gap-2"><GraduationCap className="text-blue-600" size={16}/> Alumni network</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-tr from-blue-200/40 to-indigo-200/40 rounded-3xl blur-3xl pointer-events-none" />
            <div className="relative bg-white/70 backdrop-blur rounded-2xl p-6 shadow-xl border border-white/60">
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                <div className="text-center p-6">
                  <p className="text-6xl mb-4">🎓✈️</p>
                  <p className="text-xl font-semibold">Your journey starts here</p>
                  <p className="opacity-80 mt-1">USA • UK • Canada • Australia • Europe</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                <Stat label="Visa Success" value="98%"/>
                <Stat label="Admit Offers" value="5k+"/>
                <Stat label="Partner Universities" value="250+"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function Stat({ label, value }) {
  return (
    <div className="bg-white rounded-lg border border-gray-100 p-4">
      <p className="text-2xl font-bold tracking-tight">{value}</p>
      <p className="text-xs text-gray-500 mt-1">{label}</p>
    </div>
  )
}
