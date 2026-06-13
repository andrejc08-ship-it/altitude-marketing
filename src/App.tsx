import { useState } from 'react';
import { Menu, X, ArrowRight, CheckCircle2, TrendingUp, Users, Award, Mail, Phone, MapPin, Globe, Wrench, Heart, Utensils, Leaf, Scale, PawPrint, Car, ShoppingBag } from 'lucide-react';
import logoA from './assets/logo.svg';

function PolicyModal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-8 pb-4 border-b border-gray-100 sticky top-0 bg-white rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <button onClick={onClose} aria-label="Close" className="p-1 rounded-lg hover:bg-gray-100 transition-colors">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="p-8 pt-6 prose prose-sm max-w-none text-gray-700 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Management",
      description: "Updates, security, maintenance, and ongoing improvements. Your site stays current, secure, and working for you."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Local SEO & Google Business Profile",
      description: "Show up when Chester County customers search. We optimize your Google presence, manage reviews, and improve local rankings."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Content & Social Media",
      description: "Regular posts, professional updates, and customer engagement. You never have to think about it."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Monthly Marketing Execution",
      description: "Consistent progress on your marketing priorities with clear reporting and accountability."
    }
  ];

  const businessTypes = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Home Service Contractors",
      examples: "Plumbers, HVAC, electricians, roofers",
      insight: "When something breaks, people search fast. Rank first and the phone rings before your competitor knows there's a lead."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Family Dental and Medical",
      examples: "Dentists, orthodontists, chiropractors, pediatricians",
      insight: "Patients look you up before they ever call. Your website and reviews are the first impression, not the front desk."
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Restaurants and Eateries",
      examples: "Diners, pizza shops, delis, bakeries, cafes",
      insight: "Updated hours, fresh photos, and answered reviews on Google turn searchers into walk-ins every single day."
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Landscaping and Outdoor Services",
      examples: "Lawn care, landscaping, pool companies, pest control",
      insight: "Spring jobs book in February for homeowners who planned ahead. Year-round visibility fills your calendar before the season starts."
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Law and Accounting Firms",
      examples: "Solo attorneys, small firms, CPAs, bookkeepers",
      insight: "Clients research before they commit. A clean, current website closes the gap between finding you and calling you."
    },
    {
      icon: <PawPrint className="w-6 h-6" />,
      title: "Pet Care and Boarding",
      examples: "Groomers, veterinarians, kennels, trainers",
      insight: "Pet owners are loyal and they talk. One happy customer on social becomes five referrals in the same neighborhood."
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Auto Repair and Detailing",
      examples: "Mechanics, body shops, tire shops, detailers",
      insight: "Local reputation is everything in this business. Strong reviews and a sharp Google profile keep you the first call."
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Boutique Retail and Specialty Shops",
      examples: "Salons, gift shops, fitness studios, florists",
      insight: "Locals shop local when they know you exist. Consistent posts and a sharp Google profile keep you top of mind."
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will be in touch within 24 hours.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img src={logoA} alt="Altitude Marketing Group LLC Logo" className="w-10 h-10 md:w-12 md:h-12" />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-gray-900">Altitude</span>
                <span className="text-xs md:text-sm text-gray-600 -mt-1">Marketing Group, LLC</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">About</a>
              <a href="#who-we-serve" className="text-gray-700 hover:text-orange-500 transition-colors">Who We Serve</a>
              <a href="#contact" className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all">
                Get Started
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block py-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#about" className="block py-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#who-we-serve" className="block py-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>Who We Serve</a>
              <a href="#contact" className="block bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-3 rounded-lg text-center" onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">West Chester • Exton • Malvern • Wayne • Main Line</span>
              </div>
              <h1 className="text-5xl md:text-6xl mb-6 text-gray-900 leading-tight">
                Your Website, Google Presence, and Marketing: <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Handled.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                For Chester County and Main Line service businesses that need execution, not another strategy deck. We handle the ongoing work: website upkeep, local SEO, Google Business Profile, and monthly marketing. Stop chasing vendors and get back to running your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all">
                  Book a 15-Minute Fit Call
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#services" className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-orange-400 hover:text-orange-600 transition-all">
                  See What We Handle
                </a>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl text-orange-500 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl text-orange-500 mb-1">200+</div>
                  <div className="text-sm text-gray-600">Local Clients</div>
                </div>
                <div>
                  <div className="text-3xl text-orange-500 mb-1">98%</div>
                  <div className="text-sm text-gray-600">Client Retention</div>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Website updates and security, handled</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Local SEO & Google Business Profile</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Content & social posts on schedule</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Same-day response & accountability</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">One local partner for everything</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50 border-y border-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Marketing Keeps Slipping Because Nobody Owns It</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Your website needs updates. Google Business Profile is incomplete. Social posts are inconsistent. You know it matters, but between serving customers and running the business, marketing always gets pushed to next week. And managing multiple freelancers? That's another full-time job you don't have time for.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">What We Handle for You</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The ongoing marketing work you need done, without hiring in-house or juggling freelancers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-orange-400 hover:shadow-xl transition-all bg-white"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Why Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6">Why Local Service Businesses Choose Altitude</h2>
              <p className="text-xl text-gray-300 mb-8">
                We're not consultants who drop a strategy deck and disappear. We're your local marketing operator, handling the day-to-day execution so you can focus on serving customers, not managing vendors.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">We Do the Weekly Work</h3>
                    <p className="text-gray-400">Not just advice. Actual execution. Website updates, content posts, SEO improvements, all handled.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Local & Responsive</h3>
                    <p className="text-gray-400">Based in Exton, we know your market. Same-day acknowledgment on every request.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">One Accountable Partner</h3>
                    <p className="text-gray-400">No more juggling three freelancers. One contact who owns your marketing execution.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <blockquote className="text-2xl mb-6 leading-relaxed">
                  "The difference between average marketing and exceptional marketing is understanding your local community."
                </blockquote>
                <p className="text-orange-400 text-sm tracking-wide uppercase">Altitude Marketing Group, LLC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section id="who-we-serve" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">Who We Serve</div>
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Built for Chester County's Own</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From the diner on Gay Street to the plumber on Boot Road. If your name is on the door, this is built for you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {businessTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-orange-400 hover:shadow-lg transition-all group"
              >
                <div className="w-11 h-11 bg-orange-50 group-hover:bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-orange-500 transition-colors">
                  {type.icon}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{type.title}</h3>
                <p className="text-xs text-gray-400 mb-3">{type.examples}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{type.insight}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl md:text-4xl mb-4">Your Competitor Is Already Showing Up Online. Are You?</h3>
            <p className="text-xl mb-8 opacity-90">One local partner for all your marketing execution needs</p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg hover:shadow-xl transition-all">
              Book Your Fit Call
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">Ready to Get Your Marketing Handled?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's talk about your business, what's not working, and whether we're the right fit. No pressure, no sales pitch. Just a straight conversation about execution.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Call Us</div>
                    <a href="tel:+16314320281" className="text-lg text-gray-900 hover:text-orange-600">(631) 432-0281</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email Us</div>
                    <a href="mailto:andre.jc08@gmail.com" className="text-lg text-gray-900 hover:text-orange-600">andre.jc08@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Visit Us</div>
                    <div className="text-lg text-gray-900">Exton, PA 19341</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-2">Message *</label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                    placeholder="Tell us about your marketing goals..."
                  ></textarea>
                </div>
                <p className="text-xs text-gray-500">
                  By submitting this form you agree to our{' '}
                  <button type="button" onClick={() => setPrivacyOpen(true)} className="underline hover:text-orange-600">Privacy Policy</button>
                  {' '}and{' '}
                  <button type="button" onClick={() => setTermsOpen(true)} className="underline hover:text-orange-600">Terms of Service</button>.
                </p>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={logoA} alt="Altitude Marketing Group LLC Logo" className="w-10 h-10" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">Altitude</span>
                  <span className="text-sm text-gray-400 -mt-1">Marketing Group, LLC</span>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Altitude Marketing Group, LLC is an Exton-based marketing operator for local service businesses. We handle the ongoing work: website, local SEO, Google Business Profile, content, and monthly execution. You focus on serving customers.
              </p>
            </div>
            <div>
              <h3 className="text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-orange-400 transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-orange-400 transition-colors">About</a></li>
                <li><a href="#who-we-serve" className="hover:text-orange-400 transition-colors">Who We Serve</a></li>
                <li><a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-4">Service Areas</h3>
              <ul className="space-y-2 text-gray-400">
                <li>West Chester</li>
                <li>Exton</li>
                <li>Malvern</li>
                <li>Wayne</li>
                <li>Downingtown</li>
                <li>Main Line Townships</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; 2026 Altitude Marketing Group, LLC. All rights reserved. Local Marketing Execution for Chester County and Main Line Service Businesses.</p>
            <div className="flex gap-6">
              <button onClick={() => setPrivacyOpen(true)} className="hover:text-orange-400 transition-colors">Privacy Policy</button>
              <button onClick={() => setTermsOpen(true)} className="hover:text-orange-400 transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {privacyOpen && (
        <PolicyModal title="Privacy Policy" onClose={() => setPrivacyOpen(false)}>
          <p className="text-sm text-gray-500">Effective Date: June 1, 2026</p>

          <p>Altitude Marketing Group, LLC ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or submit an inquiry.</p>

          <h3 className="font-semibold text-gray-900 text-base mt-6">1. Information We Collect</h3>
          <p>We collect personal information that you voluntarily provide through our contact form, including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Full name</li>
            <li>Email address</li>
            <li>Company name</li>
            <li>Message content</li>
          </ul>
          <p>We may also automatically collect non-personal data such as browser type, device type, and pages visited through standard web analytics tools.</p>

          <h3 className="font-semibold text-gray-900 text-base mt-6">2. How We Use Your Information</h3>
          <p>We use the information you provide to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Respond to your inquiry within 24 business hours</li>
            <li>Determine whether our services are a good fit for your business</li>
            <li>Send relevant follow-up communications related to your inquiry</li>
            <li>Improve our website and services</li>
          </ul>
          <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

          <h3 className="font-semibold text-gray-900 text-base mt-6">3. Data Retention</h3>
          <p>We retain your contact information only as long as necessary to fulfill the purpose for which it was collected or as required by law. If you wish to have your information removed from our records, contact us at andre.jc08@gmail.com.</p>

          <h3 className="font-semibold text-gray-900 text-base mt-6">4. Cookies</h3>
          <p>Our website may use cookies and similar technologies for basic site functionality and analytics. You may disable cookies in your browser settings; however, some features of the site may not function properly.</p>

          <h3 className="font-semibold text-gray-900 text-base mt-6">5. Third-Party Services</h3>
          <p>We may use third-party services (such as Google Analytics) that collect, monitor, and analyze web traffic. These services have their own privacy policies governing their use of your information.</p>

          <h3 className="font-semibold text-gray-900 text-base mt-6">6. Your Rights</h3>
          <p>You have the right to request access to, correction of, or deletion of your personal information. Pennsylvania residents and California residents (under CCPA) may have additional rights. To exercise any of these rights, contact us at andre.jc08@gmail.com.</p>

          <h3 className="font-semibold text-gray-900 text-base mt-6">7. Security</h3>
          <p>We implement reasonable administrative and technical safeguards to protect your information. However, no method of transmission over the internet is 100% secure.</p>

          <h3 className="font-semibold text-gray-900 text-base mt-6">8. Changes to This Policy</h3>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>

          <h3 className="font-semibold text-gray-900 text-base mt-6">9. Contact Us</h3>
          <p>Altitude Marketing Group, LLC<br />Exton, PA 19341<br />andre.jc08@gmail.com</p>
        </PolicyModal>
      )}

      {/* Terms of Service Modal */}
      {termsOpen && (
        <PolicyModal title="Terms of Service" onClose={() => setTermsOpen(false)}>
          <p className="text-sm text-gray-500">Effective Date: June 1, 2026</p>

          <p>These Terms of Service ("Terms") govern your use of the Altitude Marketing Group, LLC website and any services we provide. By accessing our website or engaging our services, you agree to these Terms.</p>

          <h3 className="font-semibold text-gray-900 text-base mt-6">1. Services</h3>
          <p>Altitude Marketing Group, LLC provides ongoing marketing execution services for local service businesses, including website management, local SEO, Google Business Profile management, content creation, social media management, and monthly marketing execution. Specific services, deliverables, timelines, and fees are outlined in individual client agreements.</p>

          <h3 className="font-semibold text-gray-900 text-base mt-6">2. Client Responsibilities</h3>
          <p>Clients agree to provide accurate business information, timely feedback, and necessary access to systems (website, social accounts, Google Business Profile) required to perform the agreed services. Delays caused by client inaction may affect timelines and deliverables.</p>

          <h3 className="font-semibold text-gray-900 text-base mt-6">3. Payment</h3>
          <p>Payment terms, fees, and billing cycles are specified in each client's service agreement. Invoices are due upon receipt unless otherwise agreed in writing. We reserve the right to pause services for accounts with outstanding balances exceeding 30 days.</p>

          <h3 className="font-semibold text-gray-900 text-base mt-6">4. Intellectual Property</h3>
          <p>Upon full payment, clients retain ownership of all content and creative assets produced specifically for them. Altitude Marketing Group, LLC retains ownership of its proprietary processes, tools, and templates. We reserve the right to reference completed work in our portfolio unless the client requests otherwise in writing.</p>

          <h3 className="font-semibold text-gray-900 text-base mt-6">5. Confidentiality</h3>
          <p>We treat all client business information as confidential and will not disclose it to third parties without written consent, except as required by law.</p>

          <h3 className="font-semibold text-gray-900 text-base mt-6">6. Results Disclaimer</h3>
          <p>While we work diligently to improve your digital presence and marketing performance, we do not guarantee specific results such as search engine rankings, website traffic levels, or revenue outcomes. Marketing results depend on many factors outside our control.</p>

          <h3 className="font-semibold text-gray-900 text-base mt-6">7. Limitation of Liability</h3>
          <p>To the maximum extent permitted by law, Altitude Marketing Group, LLC's total liability for any claim arising from or related to our services shall not exceed the total fees paid by the client in the three (3) months preceding the claim. We are not liable for indirect, incidental, or consequential damages.</p>

          <h3 className="font-semibold text-gray-900 text-base mt-6">8. Termination</h3>
          <p>Either party may terminate a service agreement with 30 days' written notice unless otherwise specified in the client agreement. Fees for work completed through the termination date remain due.</p>

          <h3 className="font-semibold text-gray-900 text-base mt-6">9. Governing Law</h3>
          <p>These Terms are governed by the laws of the Commonwealth of Pennsylvania. Any disputes shall be resolved in the courts of Chester County, Pennsylvania.</p>

          <h3 className="font-semibold text-gray-900 text-base mt-6">10. Changes to These Terms</h3>
          <p>We may update these Terms from time to time. Continued use of our website or services after changes constitutes acceptance of the revised Terms.</p>

          <h3 className="font-semibold text-gray-900 text-base mt-6">11. Contact Us</h3>
          <p>Altitude Marketing Group, LLC<br />Exton, PA 19341<br />andre.jc08@gmail.com</p>
        </PolicyModal>
      )}

    </div>
  );
}
