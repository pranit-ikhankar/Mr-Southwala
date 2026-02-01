import { useEffect, useState, useRef } from "react";
import "./App.css";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, Facebook, ArrowRight, ChevronDown, Menu, X } from "lucide-react";

// Menu Data
const menuCategories = [
  {
    name: "Starters",
    items: [
      { name: "Masala Fries", price: "₹149", desc: "Crispy fries with house spice blend", popular: true },
      { name: "Paneer Tikka Bites", price: "₹199", desc: "Grilled cottage cheese with mint chutney" },
      { name: "Street Style Momos", price: "₹179", desc: "Steamed dumplings with spicy sauce", popular: true },
      { name: "Aloo Tikki Chaat", price: "₹129", desc: "Crispy potato patties with tangy chutneys" },
    ]
  },
  {
    name: "Bowls",
    items: [
      { name: "Butter Chicken Bowl", price: "₹299", desc: "Creamy tomato curry with fragrant rice", popular: true },
      { name: "Chole Bhature Bowl", price: "₹249", desc: "Spiced chickpeas with fluffy bhature" },
      { name: "Indo-Thai Noodle Bowl", price: "₹269", desc: "Wok-tossed noodles with desi twist" },
      { name: "Rajma Chawal Bowl", price: "₹229", desc: "Punjabi comfort in a bowl" },
    ]
  },
  {
    name: "Wraps & Rolls",
    items: [
      { name: "Chicken Tikka Roll", price: "₹189", desc: "Grilled chicken wrapped in roomali roti", popular: true },
      { name: "Paneer Kathi Roll", price: "₹169", desc: "Spiced paneer with onions & chutneys" },
      { name: "Egg Bhurji Roll", price: "₹149", desc: "Indian style scrambled eggs in paratha" },
      { name: "Seekh Kebab Roll", price: "₹199", desc: "Smoky minced meat rolled perfection" },
    ]
  },
  {
    name: "Beverages",
    items: [
      { name: "Masala Chai", price: "₹49", desc: "Spiced Indian tea" },
      { name: "Mango Lassi", price: "₹99", desc: "Creamy yogurt smoothie with mango" },
      { name: "Jaljeera Soda", price: "₹79", desc: "Tangy cumin cooler" },
      { name: "Filter Coffee", price: "₹69", desc: "South Indian drip coffee" },
    ]
  }
];

const signatureDishes = [
  {
    name: "The Southwala Special",
    price: "₹349",
    desc: "Our signature loaded bowl with butter chicken, dal makhani, jeera rice, and mini naan",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800"
  },
  {
    name: "Fusion Thali",
    price: "₹399",
    desc: "A complete meal experience - 4 curries, rice, breads, raita, and dessert",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800"
  },
  {
    name: "Street Platter",
    price: "₹279",
    desc: "Samosa, pav bhaji, chaat, and momos - ultimate street food combo",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800"
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=800",
  "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=800",
  "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800",
  "https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=800",
  "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800",
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800"
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Signatures", href: "#signatures" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Visit", href: "#location" }
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} data-testid="navbar">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="font-heading text-2xl md:text-3xl text-[#FFD028] tracking-tight" data-testid="nav-logo">
          MR. SOUTHWALA
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="footer-link text-sm uppercase tracking-widest font-medium" data-testid={`nav-link-${link.name.toLowerCase()}`}>
              {link.name}
            </a>
          ))}
          <a href="#location" className="btn-primary px-6 py-3 skew-btn" data-testid="nav-cta">
            <span>Order Now</span>
          </a>
        </div>

        <button className="md:hidden text-[#EDEDED]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} data-testid="mobile-menu-toggle">
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden absolute top-full left-0 right-0 bg-[#050505] border-b border-[#27272A] py-6" data-testid="mobile-menu">
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[#EDEDED] text-lg uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href="#location" className="btn-primary px-8 py-3 mt-2">Order Now</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section className="hero-section" data-testid="hero-section">
      <motion.div className="hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070')", y }} />
      <div className="hero-overlay" />
      
      <motion.div className="relative z-10 text-center px-4 max-w-5xl mx-auto" style={{ opacity }}>
        <motion.p className="font-accent text-[#FFD028] text-lg md:text-xl mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          Taste the Culture
        </motion.p>
        
        <motion.h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-[#EDEDED] tracking-tight uppercase leading-none" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} data-testid="hero-title">
          MR. SOUTHWALA
        </motion.h1>
        
        <motion.p className="text-[#A1A1AA] text-lg md:text-xl mt-6 max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          Where South Indian soul meets street food swagger. Bold flavors. Zero apologies.
        </motion.p>
        
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mt-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
          <a href="#menu" className="btn-primary px-10 py-4 skew-btn text-lg" data-testid="hero-cta-menu">
            <span>Explore Menu</span>
          </a>
          <a href="#location" className="btn-secondary px-10 py-4 text-lg" data-testid="hero-cta-visit">Visit Us</a>
        </motion.div>
      </motion.div>

      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
        <ChevronDown className="text-[#A1A1AA]" size={32} />
      </motion.div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="bg-[#121212] py-6 overflow-hidden border-y border-[#27272A]" data-testid="marquee">
      <div className="flex animate-marquee whitespace-nowrap">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="font-heading text-5xl md:text-7xl text-stroke mx-8 uppercase tracking-wide">
            STREET FOOD • FUSION • BOLD FLAVORS • SOUTH INDIAN SOUL •
          </span>
        ))}
      </div>
    </div>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 px-4" data-testid="about-section" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeInUp}>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-[#FFD028] text-sm uppercase tracking-widest mb-4 font-medium">Our Story</p>
              <h2 className="font-heading text-4xl md:text-6xl text-[#EDEDED] uppercase tracking-tight mb-6" data-testid="about-title">
                BORN ON THE STREETS
              </h2>
              <p className="text-[#A1A1AA] text-lg leading-relaxed mb-6">
                Mr. Southwala isn't just a restaurant—it's a movement. We took the bold, unapologetic flavors of South Indian street food and gave them a global passport.
              </p>
              <p className="text-[#A1A1AA] text-lg leading-relaxed mb-8">
                Every dish is a rebellion against bland. Every bite is a celebration of culture, spice, and the beautiful chaos of Indian streets.
              </p>
              <div className="flex gap-8">
                <div><p className="font-heading text-4xl text-[#FFD028]">50+</p><p className="text-[#A1A1AA] text-sm uppercase tracking-wider">Dishes</p></div>
                <div><p className="font-heading text-4xl text-[#FFD028]">10K+</p><p className="text-[#A1A1AA] text-sm uppercase tracking-wider">Happy Customers</p></div>
                <div><p className="font-heading text-4xl text-[#FFD028]">4.8</p><p className="text-[#A1A1AA] text-sm uppercase tracking-wider">Rating</p></div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800" alt="Chef cooking" className="w-full h-full object-cover img-zoom" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#FFD028] p-6">
                <p className="font-heading text-2xl text-[#050505] uppercase">Since 2020</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Starters");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const currentItems = menuCategories.find((cat) => cat.name === activeCategory)?.items || [];

  return (
    <section id="menu" className="py-20 md:py-32 bg-[#0A0A0A] px-4" data-testid="menu-section" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-12" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeInUp}>
          <p className="text-[#FFD028] text-sm uppercase tracking-widest mb-4 font-medium">What We Serve</p>
          <h2 className="font-heading text-4xl md:text-6xl text-[#EDEDED] uppercase tracking-tight" data-testid="menu-title">THE MENU</h2>
        </motion.div>

        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={staggerContainer}>
          {menuCategories.map((category) => (
            <motion.button
              key={category.name}
              variants={fadeInUp}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 text-sm uppercase tracking-widest font-medium transition-all ${
                activeCategory === category.name ? "bg-[#FFD028] text-[#050505]" : "border border-[#27272A] text-[#A1A1AA] hover:border-[#FFD028] hover:text-[#FFD028]"
              }`}
              data-testid={`menu-tab-${category.name.toLowerCase().replace(/s+/g, '-')}`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {currentItems.map((item, index) => (
            <motion.div key={item.name} variants={fadeInUp} className="menu-card p-6 flex justify-between items-start" data-testid={`menu-item-${index}`}>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-[#EDEDED] text-xl font-semibold">{item.name}</h3>
                  {item.popular && <span className="bg-[#F94C10] text-[#EDEDED] text-xs px-2 py-1 uppercase tracking-wider">Popular</span>}
                </div>
                <p className="text-[#A1A1AA] text-sm">{item.desc}</p>
              </div>
              <p className="font-heading text-2xl text-[#FFD028]">{item.price}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SignatureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="signatures" className="py-20 md:py-32 px-4" data-testid="signatures-section" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-12" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeInUp}>
          <p className="text-[#FFD028] text-sm uppercase tracking-widest mb-4 font-medium">Must Try</p>
          <h2 className="font-heading text-4xl md:text-6xl text-[#EDEDED] uppercase tracking-tight" data-testid="signatures-title">SIGNATURE DISHES</h2>
        </motion.div>

        <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {signatureDishes.map((dish, index) => (
            <motion.div key={dish.name} variants={fadeInUp} className="signature-card group" data-testid={`signature-dish-${index}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={dish.image} alt={dish.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading text-2xl text-[#EDEDED] uppercase">{dish.name}</h3>
                  <p className="font-heading text-2xl text-[#FFD028]">{dish.price}</p>
                </div>
                <p className="text-[#A1A1AA]">{dish.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-20 md:py-32 bg-[#0A0A0A] px-4" data-testid="gallery-section" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-12" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeInUp}>
          <p className="text-[#FFD028] text-sm uppercase tracking-widest mb-4 font-medium">The Vibe</p>
          <h2 className="font-heading text-4xl md:text-6xl text-[#EDEDED] uppercase tracking-tight" data-testid="gallery-title">FOOD GALLERY</h2>
        </motion.div>

        <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-4" variants={staggerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {galleryImages.map((img, index) => (
            <motion.div key={index} variants={fadeInUp} className={`gallery-item aspect-square ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`} data-testid={`gallery-image-${index}`}>
              <img src={img} alt={`Gallery ${index + 1}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      text: "Amazing taste and great quality. Definitely one of the best places for street food.",
    },
    {
      text: "The food is fresh, flavorful, and served quickly. Highly recommended!",
    },
    {
      text: "Loved the vibe and the menu. Perfect place for quick bites with friends.",
    },
  ];

  return (
    <section id="reviews" className="py-24 px-4 bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="font-heading text-5xl text-white mb-12">
          What Customers Say
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#121212] border border-gray-800 p-6 rounded-lg"
            >
              <p className="text-gray-300 italic">“{review.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="location" className="location-bg py-20 md:py-32 px-4" data-testid="location-section" ref={ref}>
      <div className="max-w-7xl mx-auto relative">
        <motion.div className="grid md:grid-cols-2 gap-12 items-center" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={staggerContainer}>
          <motion.div variants={fadeInUp}>
            <p className="text-[#FFD028] text-sm uppercase tracking-widest mb-4 font-medium">Come Hungry</p>
            <h2 className="font-heading text-4xl md:text-6xl text-[#EDEDED] uppercase tracking-tight mb-8" data-testid="location-title">FIND US</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#FFD028] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="text-[#EDEDED] font-semibold mb-1">Address</p>
                  <p className="text-[#A1A1AA]">123 Street Food Lane, Koramangala<br />Bangalore, Karnataka 560034</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="text-[#FFD028] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="text-[#EDEDED] font-semibold mb-1">Hours</p>
                  <p className="text-[#A1A1AA]">Mon - Thu: 11am - 10pm<br />Fri - Sun: 11am - 11pm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-[#FFD028] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="text-[#EDEDED] font-semibold mb-1">Contact</p>
                  <p className="text-[#A1A1AA]">+91 98765 43210<br />hello@mrsouthwala.com</p>
                </div>
              </div>
            </div>

            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 px-8 py-4 mt-8 skew-btn" data-testid="location-cta">
              <span className="flex items-center gap-2">Get Directions <ArrowRight size={18} /></span>
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="aspect-square bg-[#121212] border border-[#27272A] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800" alt="Restaurant interior" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#27272A]" data-testid="footer">
      <div className="py-16 md:py-24 px-4 text-center">
        <h2 className="font-heading text-5xl md:text-8xl lg:text-9xl text-[#EDEDED] uppercase tracking-tight">EAT. REPEAT.</h2>
        <p className="text-[#A1A1AA] text-lg mt-6 max-w-xl mx-auto">Your taste buds will thank you. Your diet might not.</p>
      </div>

      <div className="section-divider" />

      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading text-2xl text-[#FFD028] mb-4">MR. SOUTHWALA</h3>
            <p className="text-[#A1A1AA] text-sm">South Indian soul meets street food swagger.</p>
          </div>
          
          <div>
            <h4 className="text-[#EDEDED] font-semibold uppercase tracking-wider text-sm mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <a href="#menu" className="footer-link text-sm">Menu</a>
              <a href="#signatures" className="footer-link text-sm">Signatures</a>
              <a href="#gallery" className="footer-link text-sm">Gallery</a>
              <a href="#location" className="footer-link text-sm">Location</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[#EDEDED] font-semibold uppercase tracking-wider text-sm mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-[#A1A1AA] text-sm">
              <p>+91 98765 43210</p>
              <p>hello@mrsouthwala.com</p>
              <p>Koramangala, Bangalore</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-[#EDEDED] font-semibold uppercase tracking-wider text-sm mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-[#27272A] flex items-center justify-center text-[#A1A1AA] hover:border-[#FFD028] hover:text-[#FFD028] transition-colors" data-testid="social-instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-[#27272A] flex items-center justify-center text-[#A1A1AA] hover:border-[#FFD028] hover:text-[#FFD028] transition-colors" data-testid="social-facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="section-divider my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A1A1AA] text-sm">© 2024 Mr. Southwala. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="footer-link text-sm">Privacy Policy</a>
            <a href="#" className="footer-link text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="bg-[#050505] min-h-screen">
      <Navbar />
      <HeroSection />
      <Marquee />
      <AboutSection />
      <div className="section-divider" />
      <MenuSection />
      <SignatureSection />
      <GallerySection />
      <Reviews />
      <LocationSection />
      <Footer />
    </div>
  );
}

export default App;
