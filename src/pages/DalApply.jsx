import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import { site } from '../data/site';
import { fadeUp, stagger } from '../lib/motion';
import { genRefId, submitContact } from '../lib/forms';

const inputClass =
  'w-full rounded-card border border-[#dfe4eb] bg-white px-4 py-3 text-[#111] placeholder:text-[#8a94a3] focus:border-[#1C3D73] focus:outline-none focus:ring-2 focus:ring-[#1C3D73]/20';

const steps = ['About the business', 'The growth situation', 'The desired outcome'];

function Field({ label, required = false, children }) {
  return (
    <label className="grid gap-2">
      <span className="font-sans text-sm font-medium text-[#111]">
        {label}{required && <span className="text-[#1C3D73]"> *</span>}
      </span>
      {children}
    </label>
  );
}

export default function DalApply() {
  const formRef = useRef(null);
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState('idle');
  const [answers, setAnswers] = useState({});

  const remember = (event) => {
    const { name, value } = event.target;
    if (name) setAnswers((current) => ({ ...current, [name]: value }));
  };

  const next = () => {
    if (!formRef.current.reportValidity()) return;
    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const back = () => setStep((current) => Math.max(current - 1, 0));

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!formRef.current.reportValidity()) return;
    const data = new FormData(formRef.current);
    const currentAnswers = Object.fromEntries(data.entries());
    const refId = genRefId();
    setStatus('sending');

    const fields = { ...answers, ...currentAnswers };

    try {
      await submitContact({
        subject: `DAL application ${refId} from ${fields.name}`,
        ref_id: refId,
        name: fields.name,
        email: fields.email,
        company: fields.company,
        engagement_type: 'digital-advantage-lab',
        resource: 'Digital Advantage Lab application',
        dal_website: fields.website,
        dal_offer: fields.offer,
        dal_challenge: fields.challenge,
        dal_tried: fields.tried,
        dal_goal: fields.goal,
        consent: true,
        message: [
          `Website / social: ${fields.website}`,
          `Offer: ${fields.offer}`,
          `Primary challenge: ${fields.challenge}`,
          `What has been tried: ${fields.tried}`,
          `90-day goal: ${fields.goal}`,
        ].join('\n\n'),
      });
      setStatus('ok');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Seo
        title="Apply for Digital Advantage Lab · Aditya Bayu"
        description="Apply for the Digital Advantage Lab: a two-session business diagnostic with a five-day working period and strategic PDF report."
        path="/dal-apply/"
      />
      <main className="dal-light min-h-screen bg-white px-5 py-8 sm:px-8 sm:py-12">
        <div aria-hidden className="pointer-events-none fixed inset-0 bg-grid opacity-60" />
        <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="relative z-10 mx-auto max-w-3xl">
          <motion.div variants={fadeUp} className="flex items-center justify-between">
            <a href="/dal/" className="font-display text-sm font-semibold tracking-tight text-[#111]">← Digital Advantage Lab</a>
            <span className="font-mono text-xs text-[#718096]">DAL / APPLY</span>
          </motion.div>

          {status === 'ok' ? (
            <motion.div variants={fadeUp} className="mt-20 rounded-card border border-[#dfe4eb] bg-[#f7f9fc] p-7 sm:mt-28 sm:p-12">
              <p className="eyebrow">Application received</p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#111] sm:text-5xl">The next step is in the brief.</h1>
              <p className="mt-5 max-w-2xl leading-relaxed text-[#4b5563]">The application has been received. The brief will be reviewed before the Discovery Call is scheduled.</p>
              <a href="/dal/" className="mt-8 inline-flex items-center gap-2 font-sans font-medium text-[#1C3D73]">Back to Digital Advantage Lab <span aria-hidden>→</span></a>
            </motion.div>
          ) : (
            <>
              <motion.div variants={fadeUp} className="mt-16 max-w-2xl sm:mt-24">
                <p className="eyebrow">Private application · 5 monthly places</p>
                <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-[#111] sm:text-6xl">Apply for Digital Advantage Lab.</h1>
                <p className="mt-5 text-lg leading-relaxed text-[#4b5563]">Answer a few focused questions so the Discovery Call starts with context, not guesswork.</p>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-10 flex items-center gap-2" aria-label={`Application step ${step + 1} of ${steps.length}`}>
                {steps.map((label, index) => (
                  <div key={label} className="flex flex-1 items-center gap-2">
                    <span className={`h-2 w-full rounded-full ${index <= step ? 'bg-[#1C3D73]' : 'bg-[#dfe4eb]'}`} />
                    <span className="hidden whitespace-nowrap text-xs text-[#718096] sm:block">{index + 1}. {label}</span>
                  </div>
                ))}
              </motion.div>

              <motion.form ref={formRef} variants={fadeUp} onSubmit={onSubmit} onChange={remember} className="mt-10 rounded-card border border-[#dfe4eb] bg-[#f7f9fc] p-6 sm:p-10">
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
                {step === 0 && (
                  <div className="grid gap-5">
                    <div><p className="eyebrow">Step 1</p><h2 className="mt-2 font-display text-2xl font-semibold text-[#111]">Start with the business.</h2></div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Full name" required><input name="name" required autoComplete="name" defaultValue={answers.name || ''} className={inputClass} /></Field>
                      <Field label="Work email" required><input type="email" name="email" required autoComplete="email" defaultValue={answers.email || ''} className={inputClass} /></Field>
                    </div>
                    <Field label="Company / brand" required><input name="company" required autoComplete="organization" defaultValue={answers.company || ''} className={inputClass} /></Field>
                    <Field label="Website or social profile" required><input name="website" required placeholder="https:// or @brand" defaultValue={answers.website || ''} className={inputClass} /></Field>
                  </div>
                )}
                {step === 1 && (
                  <div className="grid gap-5">
                    <div><p className="eyebrow">Step 2</p><h2 className="mt-2 font-display text-2xl font-semibold text-[#111]">Describe the growth situation.</h2></div>
                    <Field label="What does the business sell, and to whom?" required><textarea name="offer" required rows={4} defaultValue={answers.offer || ''} className={`${inputClass} resize-y`} /></Field>
                    <Field label="What is the main challenge right now?" required>
                      <select name="challenge" required defaultValue={answers.challenge || ''} className={inputClass}>
                        <option value="" disabled>Select the closest challenge</option>
                        <option>Positioning or offer is unclear</option>
                        <option>Not enough qualified demand</option>
                        <option>Traffic or leads are not converting</option>
                        <option>Marketing, sales, or follow-up is disconnected</option>
                        <option>Growth is happening but is not predictable</option>
                      </select>
                    </Field>
                    <Field label="What has already been tried?" required><textarea name="tried" required rows={4} defaultValue={answers.tried || ''} className={`${inputClass} resize-y`} /></Field>
                  </div>
                )}
                {step === 2 && (
                  <div className="grid gap-5">
                    <div><p className="eyebrow">Step 3</p><h2 className="mt-2 font-display text-2xl font-semibold text-[#111]">Define the next outcome.</h2></div>
                    <Field label="What would a meaningful result look like in the next 90 days?" required><textarea name="goal" required rows={5} defaultValue={answers.goal || ''} className={`${inputClass} resize-y`} /></Field>
                    <label className="flex items-start gap-3 border-t border-[#dfe4eb] pt-5 text-sm leading-relaxed text-[#4b5563]"><input type="checkbox" required className="mt-1 accent-[#1C3D73]" /><span>The information provided may be used to review this application and send relevant DAL follow-up. Unsubscribe anytime.</span></label>
                  </div>
                )}

                <div className="mt-8 flex items-center justify-between border-t border-[#dfe4eb] pt-6">
                  {step > 0 ? <button type="button" onClick={back} className="font-sans text-sm font-medium text-[#4b5563] hover:text-[#111]">← Back</button> : <span />}
                  {step < steps.length - 1 ? <button type="button" onClick={next} className="rounded-card bg-[#1C3D73] px-5 py-3 font-sans font-medium text-white hover:bg-[#2A5499]">Continue →</button> : <button type="submit" disabled={status === 'sending'} className="rounded-card bg-[#1C3D73] px-5 py-3 font-sans font-medium text-white hover:bg-[#2A5499] disabled:opacity-60">{status === 'sending' ? 'Sending…' : 'Send application →'}</button>}
                </div>
                {status === 'error' && <p className="mt-4 text-sm text-red-600">Could not send the application. Please try again or email {site.email} directly.</p>}
              </motion.form>
              <motion.p variants={fadeUp} className="mt-5 text-center text-xs leading-relaxed text-[#718096]">The application is for the diagnostic only. The report and next steps are discussed in the Clarity Session.</motion.p>
            </>
          )}
        </motion.div>
      </main>
    </>
  );
}
