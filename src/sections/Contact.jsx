import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHead } from '../components/Section';
import { contact, site } from '../data/site';
import { fadeUp, stagger, inView } from '../lib/motion';
import { genRefId, submitWeb3Forms } from '../lib/forms';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  const [refId, setRefId] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const data = new FormData(form);
      if (data.get('botcheck')) { setStatus('ok'); return; }
      const id = genRefId();
      await submitWeb3Forms({
        subject: `New inquiry ${id} from adityabayu.com`,
        from_name: data.get('name'),
        ref_id: id,
        name: data.get('name'),
        email: data.get('email'),
        company: data.get('company') || '(not provided)',
        engagement_type: data.get('engagement_type'),
        message: data.get('message'),
      });
      setRefId(id);
      setStatus('ok');
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section id="contact">
      <SectionHead eyebrow="Contact" title={contact.title} intro={contact.lede} />

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Direct links */}
        <motion.div variants={stagger(0.06)} {...inView} className="flex flex-col gap-4">
          <motion.a
            variants={fadeUp}
            href={`mailto:${site.email}`}
            className="card group flex items-center justify-between p-5 hover:shadow-glow"
          >
            <span className="font-medium text-ink">{site.email}</span>
            <span className="text-cream transition-transform group-hover:translate-x-1" aria-hidden>→</span>
          </motion.a>
          {site.socials.map((s) => (
            <motion.a
              key={s.label}
              variants={fadeUp}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center justify-between p-4 text-muted transition-colors hover:text-ink"
            >
              {s.label}
              <span aria-hidden className="text-faint">↗</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div variants={fadeUp} {...inView}>
          {status === 'ok' ? (
            <div className="card border-cream/30 bg-cream/5 p-6">
              <h3 className="font-display text-xl font-semibold text-cream">Inquiry received.</h3>
              <p className="mt-2 text-muted">
                Thanks for reaching out. Aditya replies from <strong className="text-ink">{site.email}</strong> within 48 hours.
              </p>
              {refId && (
                <p className="mt-4 text-sm text-muted">
                  Reference: <code className="rounded bg-cream/10 px-2 py-0.5 font-mono text-cream">{refId}</code>
                </p>
              )}
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              onSubmit={onSubmit}
              className="grid gap-4"
            >
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your name" required>
                  <input name="name" required autoComplete="name" className={inputCls} />
                </Field>
                <Field label="Email" required>
                  <input type="email" name="email" required autoComplete="email" className={inputCls} />
                </Field>
              </div>

              <Field label="Company / role (optional)">
                <input name="company" autoComplete="organization" placeholder="e.g. Head of Marketing at Acme" className={inputCls} />
              </Field>

              <Field label="Engagement type" required>
                <select name="engagement_type" required defaultValue="" className={inputCls}>
                  <option value="" disabled>What are you looking for?</option>
                  {contact.engagementTypes.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </Field>

              <Field label="What you’d like to discuss" required>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="A few sentences about the brand, the stage, and what you're trying to unblock."
                  className={`${inputCls} resize-y`}
                />
              </Field>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-1 inline-flex w-fit items-center gap-2 rounded-card bg-blue px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-soft disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Send inquiry'}
                <span aria-hidden>→</span>
              </button>

              {status === 'error' && (
                <p className="text-sm text-red-400">
                  Could not send. Email {site.email} directly, or try again in a moment.
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
}

const inputCls =
  'w-full rounded-card border border-line bg-elevated px-3.5 py-2.5 text-ink placeholder:text-faint focus:border-cream focus:outline-none focus:ring-2 focus:ring-cream/30';

function Field({ label, required, children }) {
  return (
    <label className="grid gap-1.5">
      <span className="text-sm text-muted">
        {label}{required && <span className="text-cream"> *</span>}
      </span>
      {children}
    </label>
  );
}
