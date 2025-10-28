"use client";

import ContactForm from "@/components/ContactForm";
import CryptoPaymentOptions from "@/components/CryptoPaymentOptions";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto text-white font-serif">
      <h1 className="text-4xl text-pink-300 mb-6 text-center">Services</h1>
      <p className="text-lg leading-relaxed mb-6 text-white/80 text-center">
        I am Franz Schopenhauer — a composer, poet, and independent voice in the world of verse and music. My creative works 
        span across genres, always aiming to express truth, emotion, and transcendence through lyrical power and sound.
      </p>

      <p className="text-lg leading-relaxed mb-6 text-white/80 text-center">
        My proudest achievement to date is being featured on <a href="https://www.iheart.com/artist/franz-schopenhauer-35644996/albums/" target="_blank" className="text-pink-300 underline">iHeart Radio</a>,
        one of the world’s leading digital music platforms — a recognition of artistic depth, poetic narrative, and musical quality.
      </p>

      <h2 className="text-2xl text-pink-200 mt-10 mb-4 text-center">Custom Services</h2>
      <p className="text-white/80 mb-3 text-center">You may request original works in two categories:</p>

      <ul className="list-disc list-inside text-white/70 space-y-2 text-center">
        <li>
          <strong>Custom Music Composition</strong> — created for your project, film, podcast, or personal use.
          <br />Options:
          <ul className="list-disc list-inside ml-6 mt-1">
            <li>Use license (ownership withheld, non-exclusive or exclusive)</li>
            <li>Full ownership transfer (buyout)</li>
          </ul>
        </li>
        <li>
          <strong>Custom Poetic Work</strong> — original verses, tailored to your message, dedication, event, or mood.
          <br />Options:
          <ul className="list-disc list-inside ml-6 mt-1">
            <li>Use license (ownership withheld)</li>
            <li>Full ownership transfer (buyout)</li>
          </ul>
        </li>
      </ul>

      <p className="text-white/70 mt-6 text-center">Contact details and pricing are available as a response. If you’re interested in working with me now, please use the contact form direct inquiry channel listed below.</p>
    
      <div className="mt-16 text-center">
        <a href="https://www.iheart.com/artist/franz-schopenhauer-35644996/albums/" target="_blank">
          <img src="/iheart-badge.webp" alt="iHeart Radio" className="inline-block h-16 mb-4" />
        </a>
      </div>

      <ContactForm />
      <CryptoPaymentOptions />
      <Footer/>
    </div>
  );
}
