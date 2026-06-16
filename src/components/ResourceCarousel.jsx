import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { resources } from '../data/site';
import { genRefId, submitWeb3Forms } from '../lib/forms';
import { fadeUp } from '../lib/motion';

const cardCls = 'card flex h-full w-64 shrink-0 snap-start flex-col p-5';
const inputCls =
  'w-full rounded-card border border-line bg-elevated px-3 py-2 text-sm text-ink placeholder:text-faint focus:border-cream focus:outline-none focus:ring-2 focus:ring-cream/30';

function CardHead({ r }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="rounded-full border border-line px-2 py-0.5 text-[0.65rem] uppercase tracking-wide text-cream">
        {r.tag}
      </span>
      {r.format && <span className="text-[0.65rem] uppercase tracking-wide text-faint">{r.format}</span>}
    </div>
  );
}

function GuideCard({ r }) {
  const inner = (
    <>
      <CardHead r={r} />
      <h3 className="mt-3 font-display text-base font-semibold leading-snug text-ink">{r.title}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-snug text-muted">{r.blurb}</p>
      <p className="mt-2 text-xs text-faint">{r.audience}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cream">
        Read {r.external ? '↗' : '→'}
      </span>
    </>
  );
  return r.external ? (
    <a href={r.href} target="_blank" rel="noopener noreferrer" className={`${cardCls} group transition-colors`}>{inner}</a>
  ) : (
    <Link to={r.href} className={`${cardCls} group transition-colors`}>{inner}</Link>
  );
}

function DownloadCard({ r }) {
  const [state, setState] = useState('idle'); // idle | open | sending | done | error
  const [email, setEmail] = useState('');
  const [refId, setRefId] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setState('sending');
    try {
      const id = genRefId();
      await submitWeb3Forms({
        subject: `Lead magnet request: ${r.title} (${id})`,
        from_name: email,
        email,
        resource: r.title,
        ref_id: id,
      });
      setRefId(id);
      setState('done');
    } catch {
      setState('error');
    }
  };

  return (
    <div className={cardCls}>
      <CardHead r={r} />
      <h3 className="mt-3 font-display text-base font-semibold leading-snug text-ink">{r.title}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-snug text-muted">{r.blurb}</p>
      <p className="mt-2 text-xs text-faint">{r.audience}</p>

      <div className="mt-4">
        <AnimatePresence mode="wait" initial={false}>
          {state === 'done' ? (
            <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {r.file ? (
                <a
                  href={r.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-card bg-blue px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-soft"
                >
                  Download {r.tag} ↓
                </a>
              ) : (
                <p className="text-sm text-cream">On its way to your inbox.</p>
              )}
              {refId && <p className="mt-2 text-xs text-muted">Ref {refId}</p>}
            </motion.div>
          ) : state === 'open' || state === 'sending' || state === 'error' ? (
            <motion.form
              key="form"
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-2"
            >
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className={inputCls}
              />
              <button
                type="submit"
                disabled={state === 'sending'}
                className="inline-flex items-center justify-center gap-2 rounded-card bg-blue px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-soft disabled:opacity-60"
              >
                {state === 'sending' ? 'Sending…' : 'Send it to me →'}
              </button>
              {state === 'error' && <p className="text-xs text-red-400">Could not send. Try again in a moment.</p>}
            </motion.form>
          ) : (
            <motion.button
              key="cta"
              type="button"
              onClick={() => setState('open')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-card border border-cream/40 px-4 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-cream hover:text-bg"
            >
              Get it free →
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function ResourceCarousel() {
  return (
    <motion.section variants={fadeUp} aria-labelledby="resources-heading" className="mt-8">
      <div className="mb-3 flex items-baseline justify-between">
        <h2 id="resources-heading" className="text-micro uppercase tracking-wide text-muted">
          Free resources and guides
        </h2>
        <span className="text-micro uppercase tracking-wide text-faint" aria-hidden>Swipe →</span>
      </div>
      <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1">
        {resources.map((r) =>
          r.type === 'download' ? <DownloadCard key={r.title} r={r} /> : <GuideCard key={r.title} r={r} />
        )}
      </div>
    </motion.section>
  );
}
