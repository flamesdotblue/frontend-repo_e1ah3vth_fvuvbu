import { GraduationCap, Users, Globe, Shield, Star } from 'lucide-react'

const perks = [
  {
    title: 'Alumni Mentors',
    desc: 'One-on-one guidance from graduates of top global universities who have lived the journey.',
    icon: GraduationCap,
  },
  {
    title: 'Real Insights',
    desc: 'Get application strategies, scholarship tips, and interview prep straight from experience.',
    icon: Globe,
  },
  {
    title: 'Accountability',
    desc: 'Weekly check-ins, milestone tracking, and document reviews to keep you on course.',
    icon: Shield,
  },
  {
    title: 'Community',
    desc: 'Join a peer group to share resources, mock interviews, and success stories.',
    icon: Users,
  },
]

export default function Mentorship() {
  return (
    <section id="mentorship" className="px-6 lg:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm font-medium mb-4">
            <Star size={16} className="text-yellow-500"/>
            Our USP
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Mentorship by those who’ve done it</h2>
          <p className="text-gray-600 mt-4">
            Every applicant is matched with an alumni mentor from their target country and program. Learn the shortcuts, avoid the mistakes, and present your best self.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {perks.map((perk) => (
            <div key={perk.title} className="group bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
              <div className="h-11 w-11 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center">
                <perk.icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{perk.title}</h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
