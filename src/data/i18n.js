import { SECTORS } from './sectors.js';

/** English translations — Spanish is the server-rendered default */
export const EN = {
  // Navigation
  'nav.inicio':        'Home',
  'nav.producto':      'Product',
  'nav.industrias':    'Industries',
  'nav.piloto':        'Pilot',
  'nav.viewAll':       'View all sectors →',
  'nav.ind.composites':'Composites & Aerospace',
  'nav.ind.print':     'Printing & Packaging',
  'nav.ind.metal':     'Foundry & Metallurgy',
  'header.login':      'Sign in',
  'header.demo':       'Request demo',

  // Footer
  'footer.tagline1':   'The smart Gantt for industrial manufacturing.',
  'footer.tagline2':   'No code. No IT. In weeks.',
  'footer.col.product':'Product',
  'footer.col.sectors':'Sectors',
  'footer.link.how':   'How it works',
  'footer.link.pilot': '12-week pilot',
  'footer.link.demo':  'Request demo',

  // ── INDEX ──────────────────────────────────────────────────────────────────
  'home.hero.badge':   '⚠ This afternoon\'s bottleneck already exists',
  'home.hero.title':   'Your team works with<br/><span class="hero__accent">Monday\'s plan.</span>',
  'home.hero.sub':     `The plant has been something else for hours. Your shift manager
      has already made three decisions without data, by gut feel — and you'll find out
      tomorrow in the production meeting.
      <br/><br/>
      <span class="hero__relief">Planning Core changes that:</span> a single
      real-time plan, alerts before the damage occurs, and three
      replanning scenarios ready in seconds.`,
  'home.hero.cta1':    'I want visibility now →',
  'home.hero.cta2':    'See how it works',
  'home.hero.trust1':  '✓ Without replacing your ERP',
  'home.hero.trust2':  '✓ Live in 12 weeks',
  'home.hero.trust3':  '✓ Measurable ROI from day 1',

  'home.gantt.title':  'Production plan — Week 21',
  'home.gantt.opt':    'Optimal',
  'home.gantt.bal':    'Balanced',
  'home.gantt.con':    'Conservative',
  'home.gantt.oee':    'OEE: 87%',
  'home.gantt.load':   'Load: 94%',
  'home.gantt.warn':   '2 bottlenecks detected',
  'home.gantt.morning':'Morning shift',

  'home.proof.sectors': 'industrial sectors',
  'home.proof.pilot':   'pilot to production',
  'home.proof.code':    'lines of code',
  'home.proof.scenarios':'scenarios in seconds',

  'home.how.label': 'How it works',
  'home.how.title': 'A Gantt that makes decisions,<br/>not just shows them',
  'home.how.sub':   'Planning Core lives on top of your ERP. You define resources and constraints; the engine generates the optimal plan and shows you three scenarios in seconds.',
  'home.steps.0.title': 'Define your resources',
  'home.steps.0.desc':  'Machines, workers, shifts and constraints. No code, no IT. In less than a week.',
  'home.steps.1.title': 'The engine plans',
  'home.steps.1.desc':  'Scheduling algorithm generates the optimal plan respecting all your plant constraints.',
  'home.steps.2.title': 'Compare 3 scenarios',
  'home.steps.2.desc':  'Optimal, Balanced and Conservative. Choose what fits real daily demand.',
  'home.steps.3.title': 'Execute and measure',
  'home.steps.3.desc':  'Real-time Gantt, bottleneck alerts and impact scorecard from day one.',
  'home.steps.cta':     'See the product in detail →',

  'home.sectors.label': 'Sectors',
  'home.sectors.title': 'Designed for your industry,<br/>not all at once',
  'home.sectors.sub':   'Each sector has its own constraints. Planning Core comes pre-configured with your industry\'s logic.',

  'home.value.label': 'Why Planning Core',
  'home.value.title': 'Not another ERP.<br/>The missing layer.',
  'home.value.sub':   'Your ERP records what happened. Planning Core decides what to produce tomorrow. It lives on top of your current system, no migrations, no consultants, no risk.',
  'home.value.0.title': 'Without replacing your ERP',
  'home.value.0.desc':  'API integration in days, not months.',
  'home.value.1.title': '100% customizable',
  'home.value.1.desc':  'Adapted to your real resources and constraints.',
  'home.value.2.title': 'Measurable results',
  'home.value.2.desc':  'Impact scorecard from week 1 of the pilot.',
  'home.value.3.title': 'Scales with you',
  'home.value.3.desc':  'From one machine to hundreds of resources.',

  'home.comp.withoutLabel': 'Without Planning Core',
  'home.comp.withLabel':    'With Planning Core',
  'home.comp.old.0': 'Excel by shift, truth by person',
  'home.comp.old.1': 'Bottleneck detected too late',
  'home.comp.old.2': 'Plan made Monday, useless Tuesday',
  'home.comp.old.3': '2-hour meeting to replan',
  'home.comp.old.4': 'Manager carries the plan in their head',
  'home.comp.new.0': 'Single real-time plan for everyone',
  'home.comp.new.1': 'Automatic alert before it happens',
  'home.comp.new.2': 'Gantt that updates itself',
  'home.comp.new.3': 'Replanning in seconds',
  'home.comp.new.4': 'Visibility for the whole team',

  'home.pilot.label': '12-week pilot',
  'home.pilot.title': 'From Excel to smart Gantt<br/>in 12 weeks',
  'home.pilot.sub':   'We map your resources in week 1, validate the plan in week 8 and go live with real metrics before week 12.',
  'home.pilot.cta1':  'See the pilot →',
  'home.pilot.cta2':  'Talk to sales',

  // ── PRODUCTO ────────────────────────────────────────────────────────────────
  'prod.hero.label': 'The product',
  'prod.hero.title': 'A Gantt that decides,<br/>not just draws',
  'prod.hero.sub':   'Planning Core is the planning layer your ERP doesn\'t have. Manage resources, simulate scenarios and replan in seconds when reality changes.',

  'prod.f1.label': 'Real-time Gantt',
  'prod.f1.title': 'Total visibility<br/>of your plant',
  'prod.f1.desc':  'See all your machines, lines and workers on a single screen. The plan updates automatically when something changes in production. No manual refreshes, no outdated versions.',
  'prod.f1.li.0':  'Drag and drop to reorder operations',
  'prod.f1.li.1':  'Automatic resource collision alerts',
  'prod.f1.li.2':  'View by shift, day or week',
  'prod.f1.li.3':  'Export to PDF or integration via API',
  'prod.f1.row.0': 'Line A',
  'prod.f1.row.1': 'Line B',
  'prod.f1.row.2': 'Line C',
  'prod.f1.row.3': 'Workers',
  'prod.f1.alert': '⚠ Collision detected on Line B — Wk 3',

  'prod.f2.label':      'Simulation scenarios',
  'prod.f2.title':      '3 plans in seconds.<br/>You choose which to run.',
  'prod.f2.desc':       'The engine automatically generates three plan versions: Optimal (max throughput), Balanced (load-delivery balance) and Conservative (minimum risk). Compare and decide in seconds, not meeting hours.',
  'prod.f2.li.0':       'Optimal: maximizes production and OEE',
  'prod.f2.li.1':       'Balanced: balances load between resources',
  'prod.f2.li.2':       'Conservative: prioritizes delivery dates',
  'prod.f2.li.3':       'Save and compare historical scenarios',
  'prod.f2.sc.0.label': 'Optimal',
  'prod.f2.sc.0.desc':  'Max throughput',
  'prod.f2.sc.1.label': 'Balanced',
  'prod.f2.sc.1.desc':  'Recommended balance',
  'prod.f2.sc.2.label': 'Conservative',
  'prod.f2.sc.2.desc':  'Minimum risk',
  'prod.f2.recommended':'Recommended',

  'prod.f3.label':       'Smart replanning',
  'prod.f3.title':       'Reality changes.<br/>The plan too.',
  'prod.f3.desc':        'Breakdown, urgent order, sick worker. Planning Core detects the deviation and generates a new plan in seconds, without missing committed dates.',
  'prod.f3.li.0':        'One-click replanning',
  'prod.f3.li.1':        'Maintains regulatory and quality constraints',
  'prod.f3.li.2':        'Change audit with timestamp',
  'prod.f3.li.3':        'Impact simulation before confirming',
  'prod.f3.breakdown':   'Breakdown detected',
  'prod.f3.lineA':       'Line A — Afternoon shift',
  'prod.f3.replanning':  '↓ Replanning...',
  'prod.f3.ready':       'New plan ready',
  'prod.f3.result':      '3 WOs reassigned · OTD: 96% maintained',

  'prod.int.label': 'Integrations',
  'prod.int.title': 'On top of what you already have',
  'prod.int.sub':   'Planning Core doesn\'t replace your ERP. It connects via API and adds the intelligent planning layer it was missing.',
  'prod.int.note':  'Your ERP not on the list? Contact us — integration usually takes less than a week.',

  'prod.cta.title': 'Ready to see Planning Core<br/>in your plant?',
  'prod.cta.sub':   'Personalized demo for your sector and real constraints.',
  'prod.cta.btn1':  'Request demo →',
  'prod.cta.btn2':  'See pilot pricing',

  // ── PRECIOS ─────────────────────────────────────────────────────────────────
  'precios.hero.label': '12-week pilot',
  'precios.hero.title': 'From zero to production<br/>in 3 months.',
  'precios.hero.sub':   'We start with a 12-week pilot to prove ROI with your own data. If it doesn\'t generate value, there\'s no contract. Simple as that.',

  'precios.phases.label': 'How the pilot works',
  'precios.phases.title': '12 weeks from zero to go-live',
  'precios.phase.0.badge': 'Weeks 1–2',
  'precios.phase.0.title': 'Mapping and configuration',
  'precios.phase.0.desc':  'We map your machines, shifts, workers and constraints. No code, no IT. You define, we configure.',
  'precios.phase.1.badge': 'Weeks 3–5',
  'precios.phase.1.title': 'Constraints and validation',
  'precios.phase.1.desc':  'We configure your sector logic: sequences, bottlenecks, maintenance windows. Generated plan vs. your reality.',
  'precios.phase.2.badge': 'Weeks 6–8',
  'precios.phase.2.title': 'Parallel use',
  'precios.phase.2.desc':  'You run Planning Core in parallel with your current system. Compare the generated plan with what you actually execute.',
  'precios.phase.3.badge': 'Weeks 9–12',
  'precios.phase.3.title': 'Go-live and scorecard',
  'precios.phase.3.desc':  'Full go-live. Weekly impact scorecard with agreed metrics. ROI measured with your own data.',

  'precios.inc.label':   "What's included",
  'precios.inc.title':   'Everything you need<br/>to get started',
  'precios.inc.0.title': 'Dedicated onboarding',
  'precios.inc.0.desc':  'Guided configuration sessions with our team.',
  'precios.inc.1.title': 'ERP integration',
  'precios.inc.1.desc':  'We connect via API or CSV import depending on your system.',
  'precios.inc.2.title': 'Pilot support',
  'precios.inc.2.desc':  'Direct channel with CS team throughout the 12 weeks.',
  'precios.inc.3.title': 'Impact scorecard',
  'precios.inc.3.desc':  'KPIs measured with your real data, week by week.',
  'precios.inc.4.title': 'Unlimited users',
  'precios.inc.4.desc':  'All roles in your plant can access.',
  'precios.inc.5.title': 'Updates included',
  'precios.inc.5.desc':  'No additional cost for new features.',

  'precios.guarantee.label': 'Our commitment',
  'precios.guarantee.title': 'No risk. No ties.',
  'precios.guarantee.0': 'No implementation cost',
  'precios.guarantee.1': 'No external consultants',
  'precios.guarantee.2': 'No minimum commitment',
  'precios.guarantee.3': 'No cancellation penalty',
  'precios.guarantee.4': 'No replacing your current ERP',

  'precios.cta.title': 'Shall we talk about your case?',
  'precios.cta.sub':   'A 30-min call to see if Planning Core fits your plant.',
  'precios.cta.btn':   'Request a call →',

  // ── CONTACTO ────────────────────────────────────────────────────────────────
  'contacto.hero.label': 'Contact',
  'contacto.hero.title': 'Let\'s talk about your plant',
  'contacto.hero.sub':   'A 30-min call to understand your constraints and see if Planning Core fits. No commitment. Response within 24h.',

  'contacto.form.title':         'Request a demo',
  'contacto.form.sub':           'Tell us your sector and main challenge. We\'ll respond within 24h.',
  'contacto.form.name':          'Name *',
  'contacto.form.company':       'Company *',
  'contacto.form.email':         'Email *',
  'contacto.form.phone':         'Phone',
  'contacto.form.sector':        'Sector *',
  'contacto.form.sectorDefault': 'Select your sector',
  'contacto.form.role':          'Role',
  'contacto.form.challenge':     'Tell us your main challenge *',
  'contacto.form.namePH':        'Your name',
  'contacto.form.companyPH':     'Company name',
  'contacto.form.consent':       'I agree that Planning Core may use my data to contact me about the demo.',
  'contacto.form.submit':        'Request free demo →',

  'contacto.success.title': 'Request received!',
  'contacto.success.sub':   'We\'ll contact you within 24h to schedule the demo.',

  'contacto.sidebar.next':         'What happens next',
  'contacto.sidebar.s1.title':     'We confirm your request',
  'contacto.sidebar.s1.desc':      'Email within 2 hours during business hours.',
  'contacto.sidebar.s2.title':     'Discovery call (30 min)',
  'contacto.sidebar.s2.desc':      'We understand your sector, resources and main challenge.',
  'contacto.sidebar.s3.title':     'Personalized demo',
  'contacto.sidebar.s3.desc':      'Planning Core configured with your data and real constraints.',
  'contacto.sidebar.s4.title':     'Pilot proposal',
  'contacto.sidebar.s4.desc':      'If it fits, we design the 12-week pilot with agreed KPIs.',
  'contacto.sidebar.direct':       'Direct contact',
  'contacto.sidebar.note':         'We respond within 24h on business days.',
  'contacto.sidebar.why.title':    'Why start with a pilot',
  'contacto.sidebar.why.0':        'Measurable ROI with your own data',
  'contacto.sidebar.why.1':        'No lock-in or long contract',
  'contacto.sidebar.why.2':        'Guided onboarding by our team',
  'contacto.sidebar.why.3':        'If it doesn\'t generate value, no contract',

  // ── SECTORES ────────────────────────────────────────────────────────────────
  'sectores.hero.label': 'Industrial sectors',
  'sectores.hero.title': 'Designed for your industry,<br/>not all at once',
  'sectores.hero.sub':   'Each industrial sector has different constraints: maintenance windows, bottlenecks, regulatory traceability, 24h shifts. Planning Core comes pre-configured with your sector\'s logic.',
  'sectores.meta.cycle': 'Implementation cycle',

  // ── SECTOR DETAIL (shared labels, [slug].astro) ───────────────────────────
  'sectorDetail.cta.demo':       'Request demo →',
  'sectorDetail.cta.pilot':      'See 12-week pilot',
  'sectorDetail.meta.marketEs':  'Spain market',
  'sectorDetail.meta.marketEu':  'EU market',
  'sectorDetail.meta.deployment':'Deployment',
  'sectorDetail.meta.icp':       'ICP',
  'sectorDetail.pains.label':      'The problem',
  'sectorDetail.pains.titlePrefix':'Pains of',
  'sectorDetail.diffs.label':    'Why Planning Core',
  'sectorDetail.diffs.title':    'The solution that fits',
  'sectorDetail.diffs.bar':      '✓  100% customizable to your needs and requirements  —  No code. No consultants. In weeks.',
  'sectorDetail.pilot.label':    '12-week pilot',
  'sectorDetail.pilot.title':    'From zero to production in 3 months',
  'sectorDetail.kpis.label':     'KPIs measured',
  'sectorDetail.kpis.title':     'Measurable impact from week 1',
  'sectorDetail.comp.label':     'Competition',
  'sectorDetail.comp.title':     'Why not the alternatives',
  'sectorDetail.comp.headerAlt': 'Alternative',
  'sectorDetail.comp.headerWhy': 'Why not',
  'sectorDetail.comp.usWhy':     'Visual Gantt · Scenarios · No ERP replacement · 12-week pilot',
  'sectorDetail.bottom.title':   'Ready to start the pilot?',
  'sectorDetail.bottom.sub':     '12 weeks. No risk. Measurable ROI.',
  'sectorDetail.bottom.cta':     'Request free demo →',
};

// Per-sector content (name, pains, differentiators, kpis, etc.) is translated
// alongside the Spanish copy in sectors.js and flattened into EN here so both
// /sectores pages can drive their data-i18n attributes off a single dictionary.
for (const s of SECTORS) {
  if (!s.en) continue;
  const base = `sector.${s.slug}`;
  for (const field of ['name', 'short', 'badge', 'tagline', 'marketEs', 'marketEu', 'price', 'cycle', 'icp', 'roiHeadline']) {
    if (s.en[field] != null) EN[`${base}.${field}`] = s.en[field];
  }
  (s.en.pains || []).forEach(([title, desc], i) => {
    EN[`${base}.pain.${i}.title`] = title;
    EN[`${base}.pain.${i}.desc`] = desc;
  });
  (s.en.differentiators || []).forEach(([title, desc], i) => {
    EN[`${base}.diff.${i}.title`] = title;
    EN[`${base}.diff.${i}.desc`] = desc;
  });
  (s.en.pilotSteps || []).forEach(([phase, desc], i) => {
    EN[`${base}.pilot.${i}.phase`] = phase;
    EN[`${base}.pilot.${i}.desc`] = desc;
  });
  (s.en.kpis || []).forEach((kpi, i) => {
    EN[`${base}.kpi.${i}`] = kpi;
  });
  (s.en.competitors || []).forEach(([name, why], i) => {
    EN[`${base}.comp.${i}.name`] = name;
    EN[`${base}.comp.${i}.why`] = why;
  });
}
