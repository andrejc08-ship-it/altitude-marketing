import { useState } from 'react';
import { Menu, X, ArrowRight, CheckCircle2, TrendingUp, Users, Megaphone, Award, Mail, Phone, MapPin, Globe, Wrench } from 'lucide-react';
import logoA from './assets/logo.svg';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Strategy",
      description: "Data-driven marketing strategies that elevate your Chester County business and drive measurable ROI."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Management",
      description: "Complete website care—from updates and security to performance optimization. We handle everything so you can focus on your business."
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Brand Development",
      description: "Create a memorable brand presence that resonates with local and regional audiences."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Media Management",
      description: "Full-service social media—we create content, manage your profiles, engage with followers, and grow your community across all platforms."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "SEO & Local Search",
      description: "Dominate Chester County search results and attract customers actively seeking your services."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Ongoing Support",
      description: "Your dedicated marketing partner. We're here whenever you need us—for updates, strategy adjustments, or quick fixes."
    }
  ];

  const testimonials = [
    {
      quote: "Altitude transformed our marketing strategy. We've seen a 200% increase in qualified leads from the Chester County area.",
      author: "Sarah Mitchell",
      company: "West Chester Wellness Center"
    },
    {
      quote: "Their local expertise is unmatched. They understand the Chester County market better than any agency we've worked with.",
      author: "James Rodriguez",
      company: "Main Line Home Services"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with your form service (Formspree, Netlify Forms, etc.)
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">

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
                <span className="text-sm">Proudly Serving Chester County, PA</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Elevate Your Brand. <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Amplify Results.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your complete marketing partner in Chester County. We don't just consult—we manage your website, run your social media, optimize your SEO, and grow your digital presence every single day. From strategy to execution to ongoing management, we handle it all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all">
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#results" className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-orange-400 hover:text-orange-600 transition-all">
                  View Our Results
                </a>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-orange-500 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500 mb-1">200+</div>
                  <div className="text-sm text-gray-600">Local Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500 mb-1">98%</div>
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
                    <span className="text-gray-700">Complete social media management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Complete website management & maintenance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Strategic marketing planning & execution</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Hyper-local SEO optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Ongoing support & updates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Full-service marketing partnership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Full-Service Marketing Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From strategy to execution to ongoing management—we're with you every step of the way
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-orange-400 hover:shadow-xl transition-all bg-white"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">{service.title}</h3>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Chester County Businesses Choose Altitude</h2>
              <p className="text-xl text-gray-300 mb-8">
                We're not just consultants—we're your dedicated marketing team. From managing your website and social channels to crafting campaigns, we're locals who understand Chester County and are committed to your long-term success.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Social Media Experts</h3>
                    <p className="text-gray-400">We create, post, and manage all your social content—you stay top-of-mind without lifting a finger</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Complete Website Care</h3>
                    <p className="text-gray-400">We manage, update, and optimize your website continuously—no tech headaches for you</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Local Market Expertise</h3>
                    <p className="text-gray-400">Deep understanding of Chester County demographics, behaviors, and preferences</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">True Partnership Approach</h3>
                    <p className="text-gray-400">We're in it for the long haul—your success is our success, and we're here to support you in every way</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Real Results for Real Businesses</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it—hear from Chester County business owners
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-5xl text-orange-400 mb-4">"</div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{testimonial.quote}</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Marketing?</h3>
            <p className="text-xl mb-8 opacity-90">Join 200+ Chester County businesses seeing real results</p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg hover:shadow-xl transition-all font-semibold">
              Get Your Free Strategy Session
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Let's Start Your Journey</h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to have a dedicated marketing partner handle everything? From website and social media management to strategic campaigns, we're here to support your Chester County business in every way possible.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Call Us</div>
                    {/* TODO: Replace with real phone number */}
                    <a href="tel:+16105551234" className="text-lg text-gray-900 hover:text-orange-600">(610) 555-1234</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email Us</div>
                    {/* TODO: Replace with real email */}
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
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">Thank you for reaching out. We'll be in touch within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-orange-600 hover:text-orange-700 font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
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
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
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
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
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
                    className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              )}
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
                Your complete marketing partner—from website and social media management to campaign execution. Elevating Chester County businesses through hands-on support and strategic solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-orange-400 transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-orange-400 transition-colors">About</a></li>
                <li><a href="#results" className="hover:text-orange-400 transition-colors">Results</a></li>
                <li><a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
              <ul className="space-y-2 text-gray-400">
                <li>West Chester</li>
                <li>Kennett Square</li>
                <li>Downingtown</li>
                <li>All of Chester County</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Altitude Marketing Group. All rights reserved. | Chester County, PA Marketing Consultants</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
