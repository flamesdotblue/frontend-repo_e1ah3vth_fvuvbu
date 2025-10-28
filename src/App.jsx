import Hero from './components/Hero'
import Mentorship from './components/Mentorship'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen text-gray-900 bg-white">
      <Hero />
      <Mentorship />
      <Services />
      <Contact />

      <footer className="px-6 lg:px-12 py-10 border-t border-gray-100 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-lg font-semibold">dreamlyf overseas</p>
            <p className="text-sm text-gray-600">Study abroad consultancy with alumni-led mentorship. Mumbai, India.</p>
          </div>
          <div className="text-sm text-gray-600">
            <a href="https://dreamlyf.co.in" target="_blank" rel="noreferrer" className="hover:underline">dreamlyf.co.in</a>
            <span className="mx-2">•</span>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
