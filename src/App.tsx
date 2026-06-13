import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, CheckCircle2, TrendingUp, Users, Award, Mail, Phone, MapPin, Globe, Wrench, Heart, Utensils, Leaf, Scale, PawPrint, Car, ShoppingBag, ChevronDown, FileText, Zap } from 'lucide-react';
import logoA from './assets/logo.svg';

function useScrollAnimation() {
  useEffect(() => {
    const els = document.querySelectorAll('.scroll-animate');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in-view'); observer.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function PolicyModal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center p-8 pb-4 border-b border-gray-100 sticky top-0 bg-white rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <button onClick={onClose} aria-label="Close" className="p-1 rounded-lg hover:bg-gray-100 transition-colors">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="p-8 pt-6 text-gray-700 space-y-4 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useScrollAnimation();

  useEffect(() => {
    const onScroll = () => setShowStickyBar(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

  const steps = [
    {
      icon: <Phone className="w-7 h-7" />,
      title: "Book a 15-Minute Call",
      description: "Tell us about your business and what's not working. No pitch deck, no commitment. We'll tell you honestly if we're a good fit before we go any further."
    },
    {
      icon: <FileText className="w-7 h-7" />,
      title: "We Build Your 90-Day Plan",
      description: "Within a week you get a plain-English breakdown of exactly what we'll tackle first, in what order, and what to expect by day 90."
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "We Execute Every Month",
      description: "We handle the work, send a clear monthly summary, and come ready with what's next. You'll never have to chase us for an update."
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

  const faqs = [
    {
      q: "What if I already have a website?",
      a: "Good. We take it over. We handle the updates, security, and ongoing improvements. You don't need to start from scratch unless you want to. Most of our clients already have a site that just needs consistent attention."
    },
    {
      q: "How long before I start seeing results?",
      a: "Google Business Profile improvements show up for most clients within 30 to 60 days. Local SEO takes a bit longer, typically 90 days before rankings move meaningfully. Either way, we send a monthly report so you always know exactly where things stand."
    },
    {
      q: "Do I have to sign a long-term contract?",
      a: "No. Month-to-month, no lock-in. We earn your business every month by doing the work. Most clients stay because the results keep compounding over time, not because they're stuck."
    },
    {
      q: "What makes you different from a freelancer or a big agency?",
      a: "Freelancers do one thing well. Big agencies assign you an account manager who outsources everything and marks it up. We're a local team that handles the full picture: website, SEO, Google profile, social, and monthly execution. One person who knows your business, answers your calls, and owns the results."
    },
    {
      q: "What does it typically cost?",
      a: "Most local service businesses invest between $500 and $1,500 per month depending on what they need. We talk through fit and scope before we ever talk price. No surprise proposals, no bait-and-switch."
    },
    {
      q: "How much of my time will this take?",
      a: "About 30 minutes a month for a quick check-in call. We handle everything else and send you a plain-English summary. You focus on your customers. That's the whole point."
    }
  ];

  const platforms = ['Google Search', 'Google Business Profile', 'Google Maps', 'Facebook & Instagram', 'Yelp', 'Nextdoor', 'Your Website'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
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
                <span className="text-xs md:text-sm text-gray-500 -mt-1">Marketing Group, LLC</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-7">
              <a href="#services" className="text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium">Services</a>
              <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium">About</a>
              <a href="#who-we-serve" className="text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium">Who We Serve</a>
              <a href="tel:+16314320281" className="flex items-center gap-1.5 text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium">
                <Phone className="w-3.5 h-3.5" />
                (631) 432-0281
              </a>
              <a href="#contact" className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-5 py-2.5 rounded-lg hover:shadow-lg transition-all text-sm font-semibold">
                Get Started
              </a>
            </div>

            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#about" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#who-we-serve" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>Who We Serve</a>
              <a href="tel:+16314320281" className="flex items-center gap-2 py-2 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>
                <Phone className="w-4 h-4 text-orange-500" />
                (631) 432-0281
              </a>
              <a href="#contact" className="block bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-3 rounded-lg text-center font-semibold" onClick={() => setMobileMenuOpen(false)}>
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
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6 text-sm font-medium">
                <MapPin className="w-4 h-4" />
                West Chester · Exton · Malvern · Wayne · Main Line
              </div>
              <h1 className="text-5xl md:text-6xl mb-6 text-gray-900 leading-[1.1] font-extrabold">
                Your Website. Your Google Presence.<br />Your Marketing.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  All Handled.
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                For Chester County and Main Line service businesses that need execution, not another strategy deck. We handle the ongoing work: website upkeep, local SEO, Google Business Profile, and monthly marketing. Stop chasing vendors and get back to running your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-8 py-4 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all font-semibold">
                  Book a 15-Minute Fit Call
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#services" className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl hover:border-orange-400 hover:text-orange-600 transition-all font-medium">
                  See What We Handle
                </a>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-extrabold text-orange-500 mb-1">15+</div>
                  <div className="text-sm text-gray-500 font-medium">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-orange-500 mb-1">200+</div>
                  <div className="text-sm text-gray-500 font-medium">Local Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-orange-500 mb-1">98%</div>
                  <div className="text-sm text-gray-500 font-medium">Client Retention</div>
                </div>
              </div>
            </div>

            {/* Mock Google Business Profile card */}
            <div className="relative hidden md:block">
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-300 to-orange-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 mx-2 flex items-center gap-1.5">
                    <Globe className="w-3 h-3" />
                    google.com/search?q=hvac+repair+exton+pa
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-5 pb-5 border-b border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">S</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-gray-900 text-sm">Sullivan's HVAC & Plumbing</div>
                      <div className="text-xs text-gray-500 mb-1">Exton, PA · HVAC Contractor</div>
                      <div className="flex items-center gap-1">
                        {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400 text-xs">★</span>)}
                        <span className="text-xs font-bold text-gray-800 ml-1">4.9</span>
                        <span className="text-xs text-blue-600 ml-1">(247 reviews)</span>
                      </div>
                    </div>
                    <div className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold flex-shrink-0">Open</div>
                  </div>
                  <div className="space-y-2.5 mb-5">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl border border-green-100">
                      <span className="text-xs text-gray-600 font-medium">Search views (30 days)</span>
                      <span className="text-xs font-bold text-green-700">+340%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl border border-blue-100">
                      <span className="text-xs text-gray-600 font-medium">Calls & direction requests</span>
                      <span className="text-xs font-bold text-blue-700">+128 this month</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-xl border border-orange-100">
                      <span className="text-xs text-gray-600 font-medium">New 5-star reviews</span>
                      <span className="text-xs font-bold text-orange-700">14 in 30 days</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                    <span className="text-xs text-gray-400">Managed by Altitude Marketing Group, LLC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Trust Bar */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-center text-xs text-gray-400 uppercase tracking-[0.15em] mb-5 font-semibold">Where your customers are already searching for you</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {platforms.map(p => (
              <span key={p} className="bg-gray-50 border border-gray-200 text-gray-600 text-sm font-medium px-4 py-2 rounded-full">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50 border-y border-orange-100">
        <div className="max-w-4xl mx-auto text-center scroll-animate">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900 font-bold">Marketing Keeps Slipping Because Nobody Owns It</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Your website needs updates. Google Business Profile is incomplete. Social posts are inconsistent. You know it matters, but between serving customers and running the business, marketing always gets pushed to next week. And managing multiple freelancers? That's another full-time job you don't have time for.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900 font-bold">What We Handle for You</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              The ongoing marketing work you need done, without hiring in-house or juggling freelancers
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-orange-400 hover:shadow-xl transition-all bg-white scroll-animate"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-md shadow-orange-100">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <div className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Simple Process</div>
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900 font-bold">From First Call to First Month</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Here's exactly what happens after you reach out. No surprises.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative scroll-animate" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-orange-100 flex-shrink-0">
                      {step.icon}
                    </div>
                    <div className="text-4xl font-extrabold text-gray-100">0{i + 1}</div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{step.description}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/3 -right-4 z-10 items-center justify-center w-8 h-8 bg-orange-100 rounded-full">
                    <ArrowRight className="w-4 h-4 text-orange-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section id="who-we-serve" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <div className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Who We Serve</div>
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900 font-bold">Built for Chester County's Own</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              From the diner on Gay Street to the plumber on Boot Road. If your name is on the door, this is built for you.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {businessTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-orange-400 hover:shadow-lg transition-all group scroll-animate"
                style={{ transitionDelay: `${(index % 4) * 0.1}s` }}
              >
                <div className="w-11 h-11 bg-orange-50 group-hover:bg-orange-100 rounded-xl flex items-center justify-center mb-4 text-orange-500 transition-colors">
                  {type.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{type.title}</h3>
                <p className="text-xs text-gray-400 mb-3 font-medium">{type.examples}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{type.insight}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center scroll-animate">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Your Competitor Is Already Showing Up Online. Are You?</h3>
            <p className="text-xl mb-8 opacity-90">One local partner for all your marketing execution needs</p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all font-bold">
              Book Your Fit Call
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Local Service Businesses Choose Altitude</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We're not consultants who drop a strategy deck and disappear. We're your local marketing operator, handling the day-to-day execution so you can focus on serving customers, not managing vendors.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">We Do the Weekly Work</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Not just advice. Actual execution. Website updates, content posts, SEO improvements, all handled.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Local and Responsive</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Based in Exton, we know your market. Same-day acknowledgment on every request.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">One Accountable Partner</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">No more juggling three freelancers. One contact who owns your marketing execution.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="scroll-animate">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <div className="text-4xl text-orange-400 font-serif mb-4 leading-none">"</div>
                <blockquote className="text-xl mb-6 leading-relaxed text-gray-100">
                  Most of our clients came to us after getting burned. Too much money, not enough execution, nobody who actually knew their business. That's exactly what we built Altitude to fix.
                </blockquote>
                <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest">Altitude Marketing Group, LLC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14 scroll-animate">
            <div className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Common Questions</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Straight Answers</h2>
            <p className="text-xl text-gray-500">No fluff. Here's what business owners actually ask us.</p>
          </div>
          <div className="space-y-3 scroll-animate">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-500 leading-relaxed text-sm border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="scroll-animate">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Ready to Get Your Marketing Handled?</h2>
              <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                Let's talk about your business, what's not working, and whether we're the right fit. No pressure, no sales pitch. Just a straight conversation about execution.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Call Us</div>
                    <a href="tel:+16314320281" className="text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors">(631) 432-0281</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Email Us</div>
                    <a href="mailto:andre.jc08@gmail.com" className="text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors">andre.jc08@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Based In</div>
                    <div className="text-lg font-semibold text-gray-900">Exton, PA 19341</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-animate">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                {formSubmitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">We got your message.</h3>
                    <p className="text-gray-500 leading-relaxed">Expect to hear from us within 24 hours. We'll keep it short and straight to the point.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                      <input
                        type="text" id="name" required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white text-gray-900"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                      <input
                        type="email" id="email" required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white text-gray-900"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                      <input
                        type="text" id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white text-gray-900"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                      <textarea
                        id="message" required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none bg-white text-gray-900"
                        placeholder="Tell us about your business and what's not working..."
                      ></textarea>
                    </div>
                    <p className="text-xs text-gray-400">
                      By submitting this form you agree to our{' '}
                      <button type="button" onClick={() => setPrivacyOpen(true)} className="underline hover:text-orange-600">Privacy Policy</button>
                      {' '}and{' '}
                      <button type="button" onClick={() => setTermsOpen(true)} className="underline hover:text-orange-600">Terms of Service</button>.
                    </p>
                    <button type="submit" className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white px-8 py-4 rounded-xl hover:shadow-xl hover:scale-[1.01] transition-all font-bold">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={logoA} alt="Altitude Marketing Group LLC Logo" className="w-10 h-10" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">Altitude</span>
                  <span className="text-sm text-gray-400 -mt-1">Marketing Group, LLC</span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm mb-4">
                Altitude Marketing Group, LLC is an Exton-based marketing operator for local service businesses. We handle the ongoing work: website, local SEO, Google Business Profile, content, and monthly execution. You focus on serving customers.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Quick Links</h3>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li><a href="#services" className="hover:text-orange-400 transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-orange-400 transition-colors">About</a></li>
                <li><a href="#who-we-serve" className="hover:text-orange-400 transition-colors">Who We Serve</a></li>
                <li><a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Service Areas</h3>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li>West Chester</li>
                <li>Exton</li>
                <li>Malvern</li>
                <li>Wayne</li>
                <li>Downingtown</li>
                <li>Main Line Townships</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
            <p>&copy; 2026 Altitude Marketing Group, LLC. All rights reserved. Local Marketing Execution for Chester County and Main Line Service Businesses.</p>
            <div className="flex gap-6">
              <button onClick={() => setPrivacyOpen(true)} className="hover:text-orange-400 transition-colors">Privacy Policy</button>
              <button onClick={() => setTermsOpen(true)} className="hover:text-orange-400 transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky CTA */}
      {showStickyBar && (
        <>
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-40 flex items-center justify-between md:hidden shadow-2xl">
            <div>
              <div className="font-bold text-gray-900 text-sm">Ready to get found online?</div>
              <div className="text-xs text-gray-500">Free 15-min call, no commitment</div>
            </div>
            <a href="#contact" className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2.5 rounded-xl text-sm font-bold flex-shrink-0 ml-4">
              Book a Call
            </a>
          </div>
          <a href="#contact" className="hidden md:flex fixed bottom-8 right-8 z-40 items-center gap-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-5 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all font-semibold text-sm">
            <Phone className="w-4 h-4" />
            Book a Free Call
          </a>
        </>
      )}

      {/* Privacy Policy Modal */}
      {privacyOpen && (
        <PolicyModal title="Privacy Policy" onClose={() => setPrivacyOpen(false)}>
          <p className="text-gray-400">Effective Date: June 1, 2026</p>
          <p>Altitude Marketing Group, LLC ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or submit an inquiry.</p>
          <h3 className="font-bold text-gray-900 text-base mt-6">1. Information We Collect</h3>
          <p>We collect personal information that you voluntarily provide through our contact form, including full name, email address, company name, and message content. We may also automatically collect non-personal data such as browser type, device type, and pages visited through standard web analytics tools.</p>
          <h3 className="font-bold text-gray-900 text-base mt-6">2. How We Use Your Information</h3>
          <p>We use the information you provide to respond to your inquiry within 24 business hours, determine whether our services are a good fit for your business, send relevant follow-up communications, and improve our website and services. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          <h3 className="font-bold text-gray-900 text-base mt-6">3. Data Retention</h3>
          <p>We retain your contact information only as long as necessary to fulfill the purpose for which it was collected or as required by law. To have your information removed, contact us at andre.jc08@gmail.com.</p>
          <h3 className="font-bold text-gray-900 text-base mt-6">4. Cookies</h3>
          <p>Our website may use cookies for basic site functionality and analytics. You may disable cookies in your browser settings; however, some features may not function properly.</p>
          <h3 className="font-bold text-gray-900 text-base mt-6">5. Your Rights</h3>
          <p>You have the right to request access to, correction of, or deletion of your personal information. Pennsylvania residents and California residents (under CCPA) may have additional rights. Contact us at andre.jc08@gmail.com to exercise these rights.</p>
          <h3 className="font-bold text-gray-900 text-base mt-6">6. Security</h3>
          <p>We implement reasonable administrative and technical safeguards to protect your information. However, no method of transmission over the internet is 100% secure.</p>
          <h3 className="font-bold text-gray-900 text-base mt-6">7. Changes to This Policy</h3>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
          <h3 className="font-bold text-gray-900 text-base mt-6">8. Contact Us</h3>
          <p>Altitude Marketing Group, LLC<br />Exton, PA 19341<br />andre.jc08@gmail.com</p>
        </PolicyModal>
      )}

      {/* Terms of Service Modal */}
      {termsOpen && (
        <PolicyModal title="Terms of Service" onClose={() => setTermsOpen(false)}>
          <p className="text-gray-400">Effective Date: June 1, 2026</p>
          <p>These Terms of Service ("Terms") govern your use of the Altitude Marketing Group, LLC website and any services we provide. By accessing our website or engaging our services, you agree to these Terms.</p>
          <h3 className="font-bold text-gray-900 text-base mt-6">1. Services</h3>
          <p>Altitude Marketing Group, LLC provides ongoing marketing execution services for local service businesses, including website management, local SEO, Google Business Profile management, content creation, social media management, and monthly marketing execution. Specific services, deliverables, timelines, and fees are outlined in individual client agreements.</p>
          <h3 className="font-bold text-gray-900 text-base mt-6">2. Client Responsibilities</h3>
          <p>Clients agree to provide accurate business information, timely feedback, and necessary access to systems required to perform the agreed services. Delays caused by client inaction may affect timelines and deliverables.</p>
          <h3 className="font-bold text-gray-900 text-base mt-6">3. Payment</h3>
          <p>Payment terms, fees, and billing cycles are specified in each client's service agreement. Invoices are due upon receipt unless otherwise agreed in writing. We reserve the right to pause services for accounts with outstanding balances exceeding 30 days.</p>
          <h3 className="font-bold text-gray-900 text-base mt-6">4. Intellectual Property</h3>
          <p>Upon full payment, clients retain ownership of all content and creative assets produced specifically for them. Altitude Marketing Group, LLC retains ownership of its proprietary processes, tools, and templates.</p>
          <h3 className="font-bold text-gray-900 text-base mt-6">5. Confidentiality</h3>
          <p>We treat all client business information as confidential and will not disclose it to third parties without written consent, except as required by law.</p>
          <h3 className="font-bold text-gray-900 text-base mt-6">6. Results Disclaimer</h3>
          <p>While we work diligently to improve your digital presence and marketing performance, we do not guarantee specific results such as search engine rankings, website traffic levels, or revenue outcomes. Marketing results depend on many factors outside our control.</p>
          <h3 className="font-bold text-gray-900 text-base mt-6">7. Limitation of Liability</h3>
          <p>To the maximum extent permitted by law, Altitude Marketing Group, LLC's total liability for any claim shall not exceed the total fees paid by the client in the three (3) months preceding the claim. We are not liable for indirect, incidental, or consequential damages.</p>
          <h3 className="font-bold text-gray-900 text-base mt-6">8. Termination</h3>
          <p>Either party may terminate a service agreement with 30 days' written notice. Fees for work completed through the termination date remain due.</p>
          <h3 className="font-bold text-gray-900 text-base mt-6">9. Governing Law</h3>
          <p>These Terms are governed by the laws of the Commonwealth of Pennsylvania. Any disputes shall be resolved in the courts of Chester County, Pennsylvania.</p>
          <h3 className="font-bold text-gray-900 text-base mt-6">10. Changes to These Terms</h3>
          <p>We may update these Terms from time to time. Continued use of our website or services after changes constitutes acceptance of the revised Terms.</p>
          <h3 className="font-bold text-gray-900 text-base mt-6">11. Contact Us</h3>
          <p>Altitude Marketing Group, LLC<br />Exton, PA 19341<br />andre.jc08@gmail.com</p>
        </PolicyModal>
      )}

    </div>
  );
}
