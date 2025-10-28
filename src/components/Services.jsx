import { FileText, Briefcase, Plane, Landmark, MessageSquare, BookOpen, CheckCircle, PiggyBank } from 'lucide-react'

const services = [
  {
    title: 'Profile & University Shortlisting',
    desc: 'Data-driven mapping of your profile to the right courses, countries, and universities.',
    icon: CheckCircle,
  },
  {
    title: 'SOP, Essays & LOR Guidance',
    desc: 'Structured storytelling and reviews so your application stands out.',
    icon: FileText,
  },
  {
    title: 'Applications & Deadlines',
    desc: 'Hands-on help with portals, documents, timelines, and follow-ups.',
    icon: Briefcase,
  },
  {
    title: 'Visa & Compliance',
    desc: 'End-to-end support on documentation, financials, and interviews.',
    icon: Landmark,
  },
  {
    title: 'Test Prep (IELTS/TOEFL/GRE)',
    desc: 'Study plans, resources, and mentor-driven accountability.',
    icon: BookOpen,
  },
  {
    title: 'Scholarships & Education Loans',
    desc: 'Strategies to optimize funding and connect with lenders.',
    icon: PiggyBank,
  },
  {
    title: 'Accommodation & Pre-departure',
    desc: 'Checklist, packing, stay, SIM card, and first-week survival playbook.',
    icon: Plane,
  },
  {
    title: 'Ongoing Mentorship',
    desc: 'Stay connected with your mentor till you land and settle in.',
    icon: MessageSquare,
  },
]

export default function Services() {
  return (
    <section id="services" className="px-6 lg:px-12 py-16 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Everything you need to go global</h2>
          <p className="text-gray-600 mt-4">
            From profile building to post-visa support — a single partner to guide you end-to-end.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
              <div className="h-11 w-11 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center">
                <s.icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
