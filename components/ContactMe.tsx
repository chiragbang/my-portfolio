'use client';

import React, { useState, FormEvent } from 'react';

type ContactProps = {
  id?: string;
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactMe = ({ id }: ContactProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
        console.error("Form submission failed:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className="bg-neutral-950 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-6 tracking-tight">
          Let&apos;s Connect
        </h2>
        <p className="text-neutral-400 text-lg sm:text-xl text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          Whether it&apos;s a project, collaboration, or just a chat, I&apos;m all ears. Drop me a line!
        </p>
        <form
          onSubmit={handleSubmit}
          className="relative bg-neutral-900/60 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-2xl border border-neutral-800/50 space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-200 tracking-wide"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full p-4 rounded-lg bg-neutral-800/50 text-white border border-neutral-700/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 placeholder-neutral-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-200 tracking-wide"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full p-4 rounded-lg bg-neutral-800/50 text-white border border-neutral-700/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 placeholder-neutral-500"
                placeholder="Your email"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-neutral-200 tracking-wide"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="mt-2 w-full p-4 rounded-lg bg-neutral-800/50 text-white border border-neutral-700/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 placeholder-neutral-500"
              placeholder="What's on your mind?"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`relative inline-block px-8 py-3 rounded-lg font-medium text-white transition-all duration-300 transform hover:scale-105 ${
                isSubmitting
                  ? 'bg-gradient-to-r from-blue-400/50 to-purple-400/50 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
          {submitStatus === 'success' && (
            <p className="text-green-400 text-center mt-4 font-medium animate-fade-in">
              Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-400 text-center mt-4 font-medium animate-fade-in">
              Oops, something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactMe;