// Aggregates all post modules. Each post file exports { meta, Body }.
import * as dental from './dental-clinic-multi-branch-growth.jsx';
import * as kicaufest from './aboitiz-gold-coin-kicaufest.jsx';
import * as wse from './wall-street-english-turnaround.jsx';
import * as bpr from './bpr-triastra-rebrand.jsx';
import * as hypebuzz from './hypebuzz-brand-from-zero.jsx';
import * as hacktiv8 from './hacktiv8-scholarship-pr-campaign.jsx';
import * as growthCurve from './growth-curve-method-2026.jsx';
import * as xniper from './xniper-hybrid-behavioral-synthetic-modeling.jsx';

const modules = [dental, kicaufest, wse, bpr, hypebuzz, hacktiv8, growthCurve, xniper];

// Newest first.
export const posts = modules
  .map((m) => ({ ...m.meta, Body: m.Body }))
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export const postBySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));

export const postSlugs = posts.map((p) => p.slug);
