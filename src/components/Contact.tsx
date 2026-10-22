import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  AlertCircle, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (status !== 'idle') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all fields before submitting.');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    // Construct Mailto Link
    const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject.trim()}`);
    const mailtoBody = encodeURIComponent(
      `Hello Junaid,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}\n\nSent from your portfolio website.`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Trigger user mail client
    window.location.href = mailtoUrl;

    setStatus('success');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-100 tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-center text-sm sm:text-base mt-3">
            Whether you have an internship opportunity, a project proposal, or just want to connect, my inbox is open!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
              <h3 className="font-heading font-semibold text-xl text-slate-100">
                Contact Information
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Feel free to reach out directly via email, message me through LinkedIn, or send a note via the contact form.
              </p>

              {/* Contact item: Email */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-slate-400 block font-mono">Direct Email</span>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`} 
                    className="text-sm font-semibold text-slate-200 hover:text-indigo-400 transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Contact item: LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-slate-400 block font-mono">LinkedIn Profile</span>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-blue-400 transition-colors truncate block">
                    linkedin.com/in/junaid-hashir-127180446
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
              </a>

              {/* Contact item: Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Location</span>
                  <span className="text-sm font-semibold text-slate-200">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 flex-shrink-0" />
                <span>Usually responds within 24-48 hours.</span>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
              <h3 className="font-heading font-semibold text-xl text-slate-100 mb-2">
                Send a Message
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Fill out the form below. When you click send, it will launch your email client pre-configured with your message.
              </p>

              {status === 'error' && (
                <div className="mb-6 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-center gap-2 animate-fadeIn">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="mb-6 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-center gap-2 animate-fadeIn">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span>Email client opened! If it didn't open automatically, send directly to <strong className="underline">{PERSONAL_INFO.email}</strong>.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-750 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-sm transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-750 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Internship Inquiry / Web Project / Collaboration"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-750 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-sm transition-all"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-750 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-sm transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-600/30 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 group"
                  >
                    <span>Send Email (via Mail Client)</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
