// Aggregates all post modules. Each post file exports { meta, Body }.
import * as dental from './dental-clinic-multi-branch-growth.jsx';
import * as kicaufest from './aboitiz-gold-coin-kicaufest.jsx';
import * as wse from './wall-street-english-turnaround.jsx';
import * as bpr from './bpr-triastra-rebrand.jsx';
import * as hypebuzz from './hypebuzz-brand-from-zero.jsx';
import * as hacktiv8 from './hacktiv8-scholarship-pr-campaign.jsx';
import * as growthCurve from './growth-curve-method-2026.jsx';
import * as xniper from './xniper-hybrid-behavioral-synthetic-modeling.jsx';
import * as seaSocial from './sea-social-behaviour-2026.jsx';
import * as andromeda from './andromeda-ads-engine-what-matters.jsx';
import * as messyMiddle from './google-messy-middle-funnel-checkpoints.jsx';
import * as b2bBuyerMap from './b2b-buyer-map-end-user-champion.jsx';
import * as funnel from './why-funnel-is-not-dead.jsx';

const modules = [b2bBuyerMap, messyMiddle, andromeda, seaSocial, dental, kicaufest, wse, bpr, hypebuzz, hacktiv8, growthCurve, xniper, funnel];

// Newest first.
export const posts = modules
  .map((m) => ({
    ...m.meta,
    Body: m.Body,
    // Every article exposes the language feature; untranslated bodies fall back to English.
    BodyId: m.BodyId || m.Body,
    titleId: m.meta.titleId,
    standfirstId: m.meta.standfirstId,
  }))
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export const postBySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));

export const postSlugs = posts.map((p) => p.slug);
