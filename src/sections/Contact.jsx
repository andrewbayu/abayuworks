import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHead } from '../components/Section';
import { site } from '../data/site';
import { fadeUp, stagger, inView } from '../lib/motion';
import { genRefId, submitContact } from '../lib/forms';

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
      await submitContact({
        subject: `New The CMO Notes subscriber ${id} from adityabayu.com`,
        from_name: data.get('name'),
        ref_id: id,
        name: data.get('name'),
        email: data.get('email'),
        resource: 'The CMO Notes newsletter',
        consent: data.get('consent') === 'on',
        message: 'Subscribed to The CMO Notes newsletter.',
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
              <h3 className="font-display text-xl font-semibold text-cream">You’re on the list.</h3>
              <p className="mt-2 text-muted">
                The latest issue of <strong className="text-ink">The CMO Notes</strong> will land in your inbox soon.
              </p>
              {refId && (
                <p className="mt-4 text-sm text-muted">
                  Reference: <code className="rounded bg-cream/10 px-2 py-0.5 font-mono text-cream">{refId}</code>
                </p>
              )}
            </div>
          ) : (
            <form
              name="newsletter"
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

              <p className="max-w-xl text-sm leading-6 text-muted">
                The CMO Notes is Aditya’s practical field note on growth, marketing systems, positioning, and the decisions that compound.
              </p>

              <label className="flex items-start gap-3 text-sm leading-6 text-muted">
                <input type="checkbox" name="consent" required className="mt-1 accent-blue" />
                <span>Yes, send me The CMO Notes and occasional updates. I can unsubscribe anytime.</span>
              </label>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-1 inline-flex w-fit items-center gap-2 rounded-card bg-blue px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-soft disabled:opacity-60"
              >
                {status === 'sending' ? 'Joining…' : 'Get The CMO Notes'}
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
