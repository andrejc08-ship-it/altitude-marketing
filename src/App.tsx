import { useState } from 'react';
import { Menu, X, ArrowRight, CheckCircle2, TrendingUp, Users, Award, Mail, Phone, MapPin, Globe } from 'lucide-react';
import logoA from './assets/logo.svg';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Management",
      description: "Updates, security, maintenance, and ongoing improvements—handled. Your site stays current, secure, and working for you."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Local SEO & Google Business Profile",
      description: "Show up when Chester County customers search. We optimize your Google presence, manage reviews, and improve local rankings."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Content & Social Media",
      description: "Regular posts, professional updates, and customer engagement—without you having to think about it."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Monthly Marketing Execution",
      description: "Consistent progress on your marketing priorities with clear reporting and accountability."
    }
  ];

  const testimonials = [
    {
      quote: "Finally, someone who actually does the work instead of just telling us what to do. Our website stays updated and our Google presence has never been stronger.",
      author: "Mike Thompson",
      company: "Thompson Plumbing & HVAC"
    },
    {
      quote: "I was juggling two freelancers and still falling behind. Altitude handles everything—website, SEO, social—and I actually know what's happening each month.",
      author: "Dr. Jennifer Park",
      company: "Chester County Family Dentistry"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will be in touch within 24 hours.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SEO-friendly meta tags would be added via helmet or framework */}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img src={logoA} alt="Altitude Marketing Group Logo" className="w-10 h-10 md:w-12 md:h-12" />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-gray-900">Altitude</span>
                <span className="text-xs md:text-sm text-gray-600 -mt-1">Marketing Group</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">About</a>
              <a href="#results" className="text-gray-700 hover:text-orange-500 transition-colors">Results</a>
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
              <a href="#results" className="block py-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>Results</a>
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
                Website, Google Visibility, and Ongoing Marketing — <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Handled.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                For Chester County and Main Line service businesses that need execution, not another strategy deck. We handle the ongoing work—website upkeep, local SEO, Google Business Profile, and monthly marketing—so you can stop chasing vendors and get back to running your business.
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
                    <span className="text-gray-700">Website updates & security—handled</span>
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
              The ongoing marketing work you need done—without hiring in-house or juggling freelancers
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

      {/* Who It's For Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Built for Local Service Businesses</h2>
            <p className="text-xl text-gray-600">Owner-led businesses that need execution, not more advice</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg mb-2 text-gray-900">Home Services</h3>
              <p className="text-gray-600 text-sm">HVAC, plumbing, electrical, landscaping, contractors</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg mb-2 text-gray-900">Healthcare Practices</h3>
              <p className="text-gray-600 text-sm">Dentists, orthodontists, med spas, specialty practices</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg mb-2 text-gray-900">Professional Services</h3>
              <p className="text-gray-600 text-sm">Law firms, accounting firms, insurance agencies</p>
            </div>
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
                We're not consultants who drop a strategy deck and disappear. We're your local marketing operator—handling the day-to-day execution so you can focus on serving customers, not managing vendors.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">We Do the Weekly Work</h3>
                    <p className="text-gray-400">Not just advice—actual execution. Website updates, content posts, SEO improvements, all handled.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Local & Responsive</h3>
                    <p className="text-gray-400">Based in West Chester, we know your market. Same-day acknowledgment on every request.</p>
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
                <p className="text-orange-400">— Altitude Marketing Philosophy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results/Testimonials Section */}
      <section id="results" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Businesses We Work With</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Local service businesses that need reliable marketing execution
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-5xl text-orange-400 mb-4">"</div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{testimonial.quote}</p>
                <div>
                  <div className="text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl md:text-4xl mb-4">Stop Chasing Vendors. Start Getting Results.</h3>
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
                Let's talk about your business, what's not working, and whether we're the right fit. No pressure, no sales pitch—just a straight conversation about execution.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Call Us</div>
                    <a href="tel:+16105551234" className="text-lg text-gray-900 hover:text-orange-600">(610) 555-1234</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email Us</div>
                    <a href="mailto:hello@altitudemarketinggroup.com" className="text-lg text-gray-900 hover:text-orange-600">hello@altitudemarketinggroup.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Visit Us</div>
                    <div className="text-lg text-gray-900">West Chester, PA 19380</div>
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
                <img src={logoA} alt="Altitude Marketing Group Logo" className="w-10 h-10" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">Altitude</span>
                  <span className="text-sm text-gray-400 -mt-1">Marketing Group</span>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Altitude Marketing Group is a West Chester-based marketing operator for local service businesses. We handle the ongoing work—website, local SEO, Google Business Profile, content, and monthly execution—so you can focus on serving customers.
              </p>
            </div>
            <div>
              <h3 className="text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-orange-400 transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-orange-400 transition-colors">About</a></li>
                <li><a href="#results" className="hover:text-orange-400 transition-colors">Results</a></li>
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
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Altitude Marketing Group. All rights reserved. | Local Marketing Execution for Chester County & Main Line Service Businesses</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
