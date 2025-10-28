'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name:       '',
    email:      '',
    service:    'Music',
    ownership:  'Withheld',
    message:    '',
  });
  const [status, setStatus] = useState<string | null>(null);
  const [hasChanged, setHasChanged] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setHasChanged(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      setStatus(result.message || 'Message sent.');
      setHasChanged(false);        // reset so they can’t re-send without edits
    } catch (error) {
      setStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#2A2740] p-6 rounded shadow mt-12 space-y-4"
    >
      <h2 className="text-2xl text-pink-200 mb-4 text-center">Request a Custom Work</h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="w-full px-4 py-2 rounded bg-[#1C1B33] text-white placeholder-white/50 border border-pink-300/20"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
        className="w-full px-4 py-2 rounded bg-[#1C1B33] text-white placeholder-white/50 border border-pink-300/20"
      />

      <div className="flex space-x-4">
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="flex-1 px-4 py-2 rounded bg-[#1C1B33] text-white border border-pink-300/20"
        >
          <option value="Music">Custom Music</option>
          <option value="Poetry">Custom Poetry</option>
        </select>
        <select
          name="ownership"
          value={formData.ownership}
          onChange={handleChange}
          className="flex-1 px-4 py-2 rounded bg-[#1C1B33] text-white border border-pink-300/20"
        >
          <option value="Withheld">Ownership Withheld</option>
          <option value="Transferred">Ownership Transferred</option>
        </select>
      </div>

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Describe your request..."
        required
        rows={4}
        className="w-full px-4 py-2 rounded bg-[#1C1B33] text-white placeholder-white/50 border border-pink-300/20"
      />

      <button
        type="submit"
        disabled={!hasChanged}
        className={`
          w-full py-2 font-semibold rounded transition
          ${hasChanged 
            ? 'bg-pink-500 hover:bg-pink-400 text-white' 
            : 'bg-gray-600 text-gray-300 cursor-not-allowed opacity-50'}
        `}
      >
        Send Request
      </button>

      {status && (
        <p className="text-center text-sm text-pink-300 mt-4">{status}</p>
      )}
    </motion.form>
  );
}
