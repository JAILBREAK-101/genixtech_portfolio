'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { X } from 'lucide-react';
import { Button } from './ui/Button';
import { contactFormSchema, type ContactFormData } from '../lib/validations/contact';
import { sendContactEmails } from '../lib/emailjs';
import { toast } from 'react-toastify';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmitStatus('loading');
      await sendContactEmails(data);
      setSubmitStatus('success');
        toast.success('Message sent! I will get back to you soon.');
      reset();
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
      toast.error('Failed to send message. Please try again.');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        className="bg-slate-900 rounded-lg border border-violet-500/20 w-full max-w-md p-6 space-y-6 animate-in slide-in-from-bottom-4 duration-300"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-violet-300">
            Let's Discuss Your Project
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-300 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm text-violet-300 mb-1">
              Your Name
            </label>
            <input
              {...register('name')}
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-violet-500/20 text-violet-100 placeholder:text-violet-400/50 focus:border-violet-500 transition-colors"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-violet-300 mb-1">
              Email Address
            </label>
            <input
              {...register('email')}
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-violet-500/20 text-violet-100 placeholder:text-violet-400/50 focus:border-violet-500 transition-colors"
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-violet-300 mb-1">
              Project Type
            </label>
            <select
              {...register('projectType')}
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-violet-500/20 text-violet-100"
            >
              <option value="web-development">Web Development</option>
              <option value="ai-integration">AI Integration</option>
              <option value="consultation">Technical Consultation</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-violet-300 mb-1">
              Project Details
            </label>
            <textarea
              {...register('message')}
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-violet-500/20 text-violet-100 placeholder:text-violet-400/50 focus:border-violet-500 transition-colors"
              placeholder="Tell me about your project..."
              rows={4}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            variant="cta"
            fullWidth
            isLoading={submitStatus === 'loading'}
          >
            {submitStatus === 'success' ? 'Message Sent!' : 
             submitStatus === 'error' ? 'Failed to Send' : 
             'Send Message'}
          </Button>
        </form>

        <p className="text-sm text-gray-400 text-center">
          I typically respond within 24-48 hours
        </p>
      </div>
    </div>
  );
}