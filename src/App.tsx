import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import bairavanImg from "../assets/bairavan1.png";
import krishImg from "../assets/krish.png";
import heImg from "../assets/he.webp";
import btImg from "../assets/bt.webp";
import ctImg from "../assets/ct.webp";
import autImg from "../assets/aut.webp";
import esImg from "../assets/es.webp";
import loImg from "../assets/lo.webp";
import preImg from "../assets/pre.webp";
import a1Img from "../assets/a1.webp";
import a2Img from "../assets/a2.webp";
import classImg from "../assets/class.webp";
import {
  Menu, X, Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2,
  Linkedin, Facebook, Instagram, Shield, Award, Zap, Briefcase
} from 'lucide-react';

// --- Components ---

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-brand-dark flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background Circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.05, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-[500px] h-[500px] bg-brand-blue rounded-full blur-[100px]"
        />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Animated Central Image (GIF-like effect) */}
        <div className="relative mb-12">
          {/* Rotating Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-6 border-2 border-dashed border-brand-blue/30 rounded-full"
          />

          {/* Pulsing Border */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -inset-3 border-2 border-brand-blue rounded-full"
          />

          {/* Central Circular Image */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-[0_0_40px_rgba(0,70,173,0.5)] z-10 relative bg-white"
          >
            <img
              src={preImg}   
               className="w-full h-full object-cover"
              alt="Loading"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Scanning Line Effect */}
          <motion.div
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-1 bg-brand-blue/60 blur-[2px] z-20 shadow-[0_0_10px_#0046AD]"
          />
        </div>

        <div className="text-center relative z-20">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center mb-6"
          >
            <span className="text-3xl font-bold text-white tracking-widest font-display">TUBE INSPECTION</span>
            <span className="text-sm font-bold text-brand-blue tracking-[0.4em] uppercase -mt-1">Technology</span>
          </motion.div>

          <div className="w-56 h-1.5 bg-white/10 rounded-full overflow-hidden mx-auto mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
              className="h-full bg-brand-blue shadow-[0_0_20px_#0046AD]"
            />
          </div>

          <motion.p
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 text-[10px] uppercase tracking-[0.3em] font-bold"
          >
            Precision Scanning in Progress...
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Products', path: '/products' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav id="navbar" className="glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-15 h-15 bg-brand-white rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src={loImg}
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-brand-dark tracking-tight leading-tight font-display">TUBE INSPECTION</span>
                <span className="text-[10px] font-semibold text-brand-blue uppercase tracking-[0.3em] -mt-1">TECHNOLOGY</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${location.pathname === link.path
                  ? 'text-brand-blue bg-brand-light-blue'
                  : 'text-gray-600 hover:text-brand-blue hover:bg-gray-50'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary ml-4 py-2 px-6 text-sm">
              Get Quote
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-brand-blue transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-brand-light-blue rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="w-full btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex flex-col mb-6">
              <span className="text-xl font-bold text-white tracking-tight leading-tight">TUBE INSPECTION</span>
              <span className="text-xs font-medium text-gray-400 uppercase tracking-[0.2em]">TECHNOLOGY</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Delivering quality through precision inspection. Advanced NDT solutions for global industrial safety and efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="https://www.facebook.com/profile.php?id=61579335988636" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white text-sm transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white text-sm transition-colors">Products</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white text-sm transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin className="text-brand-blue flex-shrink-0" size={18} />
                <span>Plot-02, Gunaseelan Nagar, Opposite to Best School, Thanjavur - 613002</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="text-brand-blue flex-shrink-0" size={18} />
                <span>6383382278</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Clock className="text-brand-blue flex-shrink-0" size={18} />
                <span>9:00 AM - 5:30 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Stay updated with our latest industrial news.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none border border-gray-700"
              />
              <button
                type="submit"
                className="bg-brand-blue hover:bg-brand-dark px-4 py-2 rounded-r-md transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Tube Inspection Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Pages ---

const HomePage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col">
      {/* Hero Banner */}
      <section
        className="relative text-white overflow-hidden py-24 md:py-48"
        style={{
          backgroundImage: `url(${bairavanImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent opacity-90"></div>

        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] font-display"
            >
              Precision Tube Inspection <br />
              <span className="text-brand-blue">NDT Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 mb-12 max-w-xl leading-relaxed"
            >
              Advanced Non-Destructive Testing (NDT), Tube Inspection, and Industrial Training Services for Quality, Safety, and Reliability.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link to="/contact" className="btn-primary py-4 px-10 text-lg">
                Get a Quote
              </Link>
              <Link
                to="/services"
                className="btn-secondary py-4 px-10 text-lg border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white hover:text-brand-dark"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="bg-white overflow-hidden">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-blue font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Trusted Partner</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-brand-dark leading-tight">Welcome to Tube Inspection Technology</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Your trusted partner in advanced inspection and testing solutions. We specialize in Non-Destructive Testing (NDT), tube inspection, industrial training, and quality assurance services across multiple industries.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Our mission is to ensure safety, efficiency, and reliability in every project we handle, helping industries maintain operational safety through advanced techniques.
              </p>
              <Link to="/about" className="group inline-flex items-center text-brand-blue font-bold px-8 py-4 bg-brand-light-blue rounded-full transition-all hover:bg-brand-blue hover:text-white">
                Learn more about us
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-light-blue rounded-full -z-10 blur-3xl opacity-50"></div>
              <img
                src={krishImg}
                alt="Industrial Inspection"
                className="rounded-3xl shadow-2xl border-8 border-white"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-white shadow-2xl p-8 rounded-3xl border border-gray-100 flex items-center gap-6">
                <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center text-white">
                  <Award size={32} />
                </div>
                <div>
                  <p className="text-3xl font-bold text-brand-dark">10+</p>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-brand-blue font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
              Expertise
            </span>
            <h2 className="text-4xl font-bold text-brand-dark mb-4">
              What We Do
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Comprehensive range of industrial inspection services tailored to high-stakes environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: 'Heat Exchanger Tube Inspection', image: heImg },
              { title: 'Boiler Tube Inspection', image: btImg },
              { title: 'Condenser Tube Testing', image: ctImg },
              { title: 'Advance Ultrasonic Testing (AUT)', image: autImg },
              { title: 'ASNT Training Programs', image: classImg },
              { title: 'NDT Equipment & Solutions', image: esImg }
            ].map((work, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-300 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors"></div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-blue transition-colors mb-4">
                    {work.title}
                  </h3>

                  {/* ✅ Navigation logic here */}
                  <Link
                    to={work.title.includes("Equipment") ? "/products" : "/services"}
                    className="text-gray-400 hover:text-brand-blue flex items-center font-semibold text-sm"
                  >
                    View Details
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1470&auto=format&fit=crop" alt="Quality Commitment" className="rounded-2xl shadow-xl" referrerPolicy="no-referrer" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
              <div className="space-y-6">
                {[
                  "Experienced & Certified Professionals",
                  "Advanced Testing Equipment",
                  "Accurate & Reliable Results",
                  "On-Time Project Delivery",
                  "Industry Standard Compliance"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="bg-brand-light-blue p-2 rounded-full">
                      <CheckCircle2 className="text-brand-blue" size={24} />
                    </div>
                    <p className="text-lg font-medium text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const AboutPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <header className="bg-brand-dark text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1470&auto=format&fit=crop" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="section-container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">About Us</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-xl italic">"Precision at every step, safety at every layer."</p>
        </div>
      </header>

      <section className="section-container bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-blue font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Company Profile</span>
            <h2 className="text-4xl font-bold mb-8 text-brand-dark">Our Journey Excellence</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Tube Inspection Technology is a specialized service provider in Non-Destructive Testing (NDT) and tube inspection solutions. We help industries maintain operational safety and efficiency through advanced inspection techniques.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Based in Thanjavur, we serve a wide range of industrial clients across the region, bringing technical expertise and state-of-the-art equipment to every inspection project. We believe in building long-term partnerships through reliability and accuracy.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img src={a1Img} alt="Industrial Team" className="rounded-3xl shadow-xl h-64 w-full object-cover" referrerPolicy="no-referrer" />
            <img src={a2Img} alt="Lab Work" className="rounded-3xl shadow-xl h-64 w-full object-cover mt-12" referrerPolicy="no-referrer" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
          <div className="bg-brand-light-blue p-12 rounded-[2.5rem] border border-brand-blue/5">
            <div className="w-16 h-16 bg-brand-blue text-white rounded-2xl flex items-center justify-center mb-8">
              <Zap size={32} />
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">To become a leading provider of inspection and testing services with global standards, pioneering new benchmarks in industrial safety.</p>
          </div>
          <div className="bg-brand-light-blue p-12 rounded-[2.5rem] border border-brand-blue/5">
            <div className="w-16 h-16 bg-brand-blue text-white rounded-2xl flex items-center justify-center mb-8">
              <Shield size={32} />
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">To deliver high-quality inspection services ensuring safety, reliability, and customer satisfaction through innovation and integrity.</p>
          </div>
        </div>

        <div className="text-center">
          <span className="text-brand-blue font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Core Principles</span>
          <h2 className="text-4xl font-bold mb-16 text-brand-dark">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: 'Integrity', icon: <Shield className="mb-6 text-brand-blue" size={48} /> },
              { title: 'Quality', icon: <CheckCircle2 className="mb-6 text-brand-blue" size={48} /> },
              { title: 'Innovation', icon: <Zap className="mb-6 text-brand-blue" size={48} /> },
              { title: 'Commitment', icon: <Briefcase className="mb-6 text-brand-blue" size={48} /> }
            ].map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-10 rounded-3xl border border-gray-100 hover:border-brand-blue/20 hover:shadow-xl hover:shadow-brand-blue/5 transition-all text-center"
              >
                <div className="flex justify-center">{v.icon}</div>
                <h4 className="text-xl font-bold text-brand-dark">{v.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const ServicesPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <header className="bg-brand-dark text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1470&auto=format&fit=crop" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="section-container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">Our Services</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-xl">Comprehensive NDT Solutions & Professional Certification.</p>
        </div>
      </header>

      <section className="section-container">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Expertise</span>
          <h2 className="text-4xl font-bold text-brand-dark">NDT Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
          {[
            { title: 'Eddy Current Testing (ECT)', desc: 'Used for detecting surface and sub-surface defects in tubes with high precision. Essential for heat exchanger integrity.', icon: <Zap className="text-brand-blue" size={32} /> },
            { title: 'Ultrasonic Testing (UT)', desc: 'Ensures internal defect detection using high-frequency sound waves for material density analysis and thickness mapping.', icon: <Shield className="text-brand-blue" size={32} /> },
            { title: 'Visual Inspection (VT)', desc: 'Fundamental inspection method for identifying obvious surface defects, weld quality, and mechanical damage.', icon: <CheckCircle2 className="text-brand-blue" size={32} /> },
            { title: 'Heat Exchanger Inspection', desc: 'Critical assessment of tubes in heat exchangers for leakage, corrosion, and wear using multiple specialized probes.', icon: <Award className="text-brand-blue" size={32} /> }
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-10 bg-white border border-gray-100 rounded-[2.5rem] flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8 hover:shadow-2xl hover:shadow-brand-blue/5 transition-all"
            >
              <div className="bg-brand-light-blue p-6 rounded-3xl flex-shrink-0">{s.icon}</div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-dark">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-brand-dark rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue rounded-full blur-[120px] opacity-20 -mr-48 -mt-48"></div>
          <div className="relative z-10">
            <span className="text-brand-blue font-bold tracking-[0.2em] text-sm uppercase mb-6 block">Professional Training</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 font-display">Training & Industrial Classes</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-16 text-xl leading-relaxed">Empowering the next generation of inspection professionals with hands-on expertise and global certification pathways.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 text-left">
              {[
                "NDT Level I, II Training",
                "Practical Hands-on Training",
                "Industrial Certification Guidance",
                "Job-Oriented Career Courses"
              ].map((t, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-all group">
                  <div className="w-10 h-10 bg-brand-blue rounded-full mb-6 flex items-center justify-center font-bold text-white group-hover:scale-110 transition-transform">{i + 1}</div>
                  <p className="font-bold text-lg">{t}</p>
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn-primary bg-white text-brand-blue hover:bg-gray-100 py-5 px-12 text-xl">Enroll in a Program</Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const ProductsPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <header className="bg-brand-dark text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="section-container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">Our Products</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-xl">Premium Industrial Inspection Technology.</p>
        </div>
      </header>

      <section className="section-container">
        <div className="bg-white rounded-[3.5rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-2 relative">
            <div className="relative h-96 lg:h-[700px] rounded-[3rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop"
                alt="Industrial Testing Device"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-md text-brand-blue px-8 py-3 rounded-full text-sm font-bold shadow-lg">FEATURED TECHNOLOGY</div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 flex-1 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                  <img src={`https://images.unsplash.com/photo-1549419139-2ce1da10${i}d15?q=80&w=1470&auto=format&fit=crop`} className="w-full h-full object-cover" alt="Detail" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
            <span className="text-brand-blue font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Advanced NDT</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-brand-dark">ECT Pro Equipment</h2>
            <p className="text-gray-600 text-xl mb-10 leading-relaxed">
              Our professional-grade Eddy Current Testing device is engineered for rapid, high-precision detection of sub-surface cracks and micro-corrosion in complex industrial tube systems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Portable Design", detail: "Lightweight field operation" },
                { title: "High Accuracy", detail: "Sub-millimeter precision" },
                { title: "IP67 Certified", detail: "Industrial grade durability" },
                { title: "Cloud Integration", detail: "Real-time data logging" }
              ].map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 bg-brand-light-blue rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <CheckCircle2 size={16} className="text-brand-blue" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark">{f.title}</p>
                    <p className="text-sm text-gray-500">{f.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="group relative w-full aspect-video bg-brand-dark rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" alt="Video Placeholder" />
              <div className="relative z-10 text-center p-8">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-blue">
                    <Zap size={32} />
                  </div>
                </div>
                <p className="text-white font-bold uppercase tracking-widest">Watch Demo Video</p>
              </div>
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const CareersPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <header className="bg-brand-dark text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1484&auto=format&fit=crop" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="section-container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">Join Our Team</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-xl">Innovate with the leaders in tubular inspection technology.</p>
        </div>
      </header>

      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-10 text-brand-dark">Current Opportunities</h2>
            <div className="space-y-6">
              {[
                { title: 'NDT Technician', type: 'Full-time', loc: 'Thanjavur', salary: 'Competitive' },
                { title: 'Inspection Engineer', type: 'Full-time', loc: 'Thanjavur', salary: 'Premium' },
                { title: 'Training Instructor', type: 'Part-time', loc: 'On-site', salary: 'Hourly' }
              ].map((job, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-10 bg-white border border-gray-100 rounded-[2.5rem] hover:border-brand-blue/30 hover:shadow-2xl hover:shadow-brand-blue/5 transition-all flex flex-col md:flex-row md:items-center justify-between group"
                >
                  <div>
                    <span className="text-brand-blue font-bold text-xs uppercase tracking-widest mb-2 block">{job.type} • {job.loc}</span>
                    <h3 className="text-2xl font-bold text-brand-dark mb-4">{job.title}</h3>
                    <div className="flex gap-4">
                      <span className="px-4 py-1 bg-gray-50 rounded-full text-xs font-semibold text-gray-500 border border-gray-100">NDT Level II</span>
                      <span className="px-4 py-1 bg-gray-50 rounded-full text-xs font-semibold text-gray-500 border border-gray-100">Engineering</span>
                    </div>
                  </div>
                  <button className="btn-secondary py-3 px-8 mt-6 md:mt-0 group-hover:bg-brand-blue group-hover:text-white group-hover:border-transparent">Apply Now</button>
                </motion.div>
              ))}
            </div>
          </div>

          <aside className="bg-brand-dark text-white p-12 rounded-[3rem] h-fit sticky top-32">
            <h3 className="text-2xl font-bold mb-8">Work Culture</h3>
            <ul className="space-y-8">
              {[
                { title: 'Growth Mentorship', desc: 'Direct learning from certified NDT Level III masters.' },
                { title: 'Latest Equipment', desc: 'Get trained on 2025-ready ECT and UT digital systems.' },
                { title: 'Safety First', desc: 'Zero-compromise approach to field and lab safety protocols.' }
              ].map((item, idx) => (
                <li key={idx} className="relative pl-8">
                  <div className="absolute left-0 top-1 w-2 h-2 bg-brand-blue rounded-full"></div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>
            <div className="mt-12 pt-10 border-t border-white/10">
              <p className="text-sm font-medium text-gray-400 italic leading-relaxed text-center">
                "Join a legacy of precision and a future of safety."
              </p>
            </div>
          </aside>
        </div>
      </section>
    </motion.div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'NDT Service Inquiry',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', subject: 'NDT Service Inquiry', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <header className="bg-brand-dark text-white py-24 md:py-32 relative overflow-hidden text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">Contact Us</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-xl italic">"Excellence across every connection."</p>
      </header>

      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-blue font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Connect</span>
            <h2 className="text-4xl font-bold mb-10 text-brand-dark">How to reach us</h2>

            <div className="space-y-12 mb-16">
              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-brand-light-blue rounded-3xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all"><MapPin size={28} /></div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Primary Office</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">Plot-02, Gunaseelan Nagar,<br />Opposite to Best School,<br />Thanjavur - 613002</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-brand-light-blue rounded-3xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all"><Phone size={28} /></div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Direct Line</h4>
                  <p className="text-gray-600 text-lg">6383382278</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-brand-light-blue rounded-3xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all"><Clock size={28} /></div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Business Hours</h4>
                  <p className="text-gray-600 text-lg">Mon - Sat: 9:00 AM - 5:30 PM</p>
                </div>
              </div>
            </div>

            <div className="p-10 bg-brand-dark text-white rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <p className="text-brand-blue font-bold text-xs uppercase tracking-widest mb-4">Personal Connection</p>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10"><Briefcase size={28} /></div>
                <div>
                  <h4 className="text-xl font-bold">Mr. Bairavan</h4>
                  <p className="text-gray-400">Head of Operations</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl border border-gray-100 relative"
          >
            <h2 className="text-3xl font-bold mb-10 text-brand-dark">Send an Inquiry</h2>
            {status === 'success' ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Message Sent!</h3>
                <p className="text-gray-600 mb-8">Thank you for Reaching out. Our team will contact you shortly.</p>
                <button onClick={() => setStatus('idle')} className="btn-primary">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-500 uppercase tracking-widest pl-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-brand-blue transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-500 uppercase tracking-widest pl-2">Phone</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-brand-blue transition-all"
                      placeholder="+91..."
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest pl-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-brand-blue transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest pl-2">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-brand-blue appearance-none transition-all"
                  >
                    <option>NDT Service Inquiry</option>
                    <option>Training & Classes</option>
                    <option>Product Purchase</option>
                    <option>Career Opportunity</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest pl-2">Detailed Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-brand-blue transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full btn-primary py-5 text-xl relative overflow-hidden"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center">
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="mr-2">
                        <Zap size={20} />
                      </motion.div>
                      Sending...
                    </span>
                  ) : 'Submit Request'}
                </button>
                {status === 'error' && <p className="text-red-500 text-center text-sm font-medium">Something went wrong. Please try again.</p>}
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>
      <div className="min-h-screen flex flex-col font-sans">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
