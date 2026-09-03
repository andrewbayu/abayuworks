# Resend lead-magnet sequence

The website now sends the `lead_magnet.subscribed` event after a successful opt-in. Create one active Resend Automation with that event as its trigger.

## Suggested sequence

Create and publish four Resend email templates. Use `{{{contact.first_name|there}}}` for the greeting and `{{{event.resource}}}` for the requested resource.

1. **Immediately · Deliver the resource**
   - Subject: `Your {{event.resource}} is ready`
   - Include the download link and one action the reader can complete today.
2. **After 2 days · Teach one principle**
   - Subject: `The mistake this guide helps you avoid`
   - Share one practical lesson from the resource. Link back to the download.
3. **After 5 days · Show the system**
   - Subject: `The next step after the checklist`
   - Explain how the lesson connects to the reader's marketing or operating system.
4. **After 9 days · Soft offer**
   - Subject: `Want this system inside your business?`
   - Invite a reply or consultation. Include `{{{RESEND_UNSUBSCRIBE_URL}}}` in every marketing email.

## Automation setup

- Trigger event: `lead_magnet.subscribed`
- Send email 1
- Delay: 2 days
- Send email 2
- Delay: 3 days
- Send email 3
- Delay: 4 days
- Send email 4
- Start the Automation after all templates are published.

The event payload includes `resource` and `ref_id`, so one automation can serve all lead magnets. Use a condition on `event.resource` only if different resources need different sequences.

## Required production settings

- `RESEND_API_KEY` or a Resend `SMTP_PASS` beginning with `re_`
- `MAIL_FROM=Aditya Bayu <hi@adityabayu.com>`
- `RESEND_AUTOMATION_EVENT=lead_magnet.subscribed` (optional, this is the default)
- `adityabayu.com` verified in Resend with its DNS records published
