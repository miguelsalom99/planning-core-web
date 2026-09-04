import { SECTORS } from './sectors.js';

/** English translations — Spanish is the server-rendered default */
export const EN = {
  // Navigation
  'nav.inicio':        'Home',
  'nav.producto':      'Product',
  'nav.comparativa':   'Comparison',
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
  'footer.link.compare':'Comparison',
  'footer.link.pilot': '12-week pilot',
  'footer.link.demo':  'Request demo',

  // ── INDEX ──────────────────────────────────────────────────────────────────
  'home.hero.badge':   'The "optimal" plan breaks on Tuesday',
  'home.hero.title':   'Pick a plan that holds,<br/><span class="hero__accent">not one that just looks good.</span>',
  'home.hero.sub':     `Every planning tool hands you one "optimal" plan: flawless on paper,
      brittle on the floor. Planning Core generates three, simulates hundreds of disruptions
      against each and gives you its <span class="hero__relief">robustness score</span>:
      you pick the one that matches your risk tolerance, with data, not gut feel.`,
  'home.hero.cta1':    'I want to see it with my data →',
  'home.hero.cta2':    'See robustness in action',
  'home.hero.trust1':  'Robustness measured, not assumed',
  'home.hero.trust2':  'Without replacing your ERP',
  'home.hero.trust3':  'Live in 12 weeks',

  'home.demo.frame':     'Planning Core · Weekly planning',
  'home.demo.finish':    'Plan finish',
  'home.demo.finishVal': 'Thu · S1',
  'home.demo.buffer':    'Buffer between ops.',
  'home.demo.bufferVal': '1 shift',
  'home.demo.robust':    'Monte Carlo robustness',
  'home.gantt.opt':    'Optimal',
  'home.gantt.bal':    'Balanced',
  'home.gantt.con':    'Conservative',

  'home.proof.sectors':   'pre-configured sectors',
  'home.proof.pilotN':    '12 wk',
  'home.proof.pilot':     'from pilot to production',
  'home.proof.scenarios': 'to replan the week',
  'home.proof.sims':      'disruptions simulated per plan',

  'home.how.label': 'How it works',
  'home.how.title': 'A Gantt that decides,<br/>not just draws',
  'home.how.sub':   'Planning Core lives on top of your ERP. You define the resources and constraints; the engine builds the plan and keeps it current.',
  'home.steps.0.title': 'Define your resources',
  'home.steps.0.desc':  'Machines, workers, shifts and sequence constraints. No code, no IT, in less than a week.',
  'home.steps.1.title': 'The engine plans and simulates',
  'home.steps.1.desc':  'It builds the optimal plan respecting every constraint, then runs hundreds of Monte Carlo simulations to score how well it holds up against the unexpected.',
  'home.steps.2.title': 'Compare 3 scenarios',
  'home.steps.2.desc':  'Optimal, Balanced and Conservative, each with its finish date, its buffer against disruptions and its robustness score. You choose with data, not by gut.',
  'home.steps.3.title': 'Execute and measure',
  'home.steps.3.desc':  'Real-time Gantt, bottleneck alerts before they hit and an impact scorecard from day one.',

  'home.stress.label':  'Stress-test it',
  'home.stress.title':  "A plan you haven't stress-tested<br/>isn't a plan. It's a bet.",
  'home.stress.sub':    'Trigger a disruption and watch how each scenario responds. The robustness score already predicted which one would hold.',
  'home.stress.trigger':      'Trigger a disruption:',
  'home.stress.d.autoclave':  'Autoclave breakdown · 2 shifts',
  'home.stress.d.rush':       'Rush order · 48 h delivery',
  'home.stress.d.sick':       'Key operator off sick · 1 shift',
  'home.stress.reset':        'Reset',
  'home.stress.rob':          'Robustness',
  'home.stress.idle':         'Plan published · ready',
  'home.stress.held':         'Absorbed',
  'home.stress.broke':        'Dates broken',
  'home.stress.caption':      'Sample data. With your data, robustness is computed on your real plant.',
  'home.stress.cta':          'See how it compares to the usual →',

  'home.sectors.label': 'Sectors',
  'home.sectors.title': 'Designed for your industry,<br/>not all at once',
  'home.sectors.sub':   "Each sector has its own constraints. Planning Core arrives pre-configured with yours.",

  'home.value.label': 'Why Planning Core',
  'home.value.title': 'Not another ERP.<br/>The missing layer.',
  'home.value.sub':   'Your ERP records what happened. Planning Core decides what to produce tomorrow, on top of your current system, no migrations, no consultants.',
  'home.value.0.title': 'Replans in seconds',
  'home.value.0.desc':  "A surprise doesn't cost a two-hour meeting. It costs three seconds.",
  'home.value.1.title': 'Robustness measured, not assumed',
  'home.value.1.desc':  'Every scenario carries its Monte Carlo score: you know which one holds before you pick it.',
  'home.value.2.title': "Your sector's logic, already inside",
  'home.value.2.desc':  'Autoclave cycle, maintenance windows, GxP traceability, all pre-configured.',
  'home.value.3.title': 'Without touching your ERP',
  'home.value.3.desc':  'API integration in days. Scales from one machine to hundreds of resources.',

  'home.comp.withoutLabel': 'Without Planning Core',
  'home.comp.withLabel':    'With Planning Core',
  'home.comp.old.0': 'Excel by shift, truth by person',
  'home.comp.old.1': 'The bottleneck is caught too late',
  'home.comp.old.2': 'Plan made Monday, useless Tuesday',
  'home.comp.old.3': 'Two-hour meeting to replan',
  'home.comp.old.4': "The plan lives in the shift manager's head",
  'home.comp.new.0': 'One real-time plan for the whole team',
  'home.comp.new.1': 'Automatic alert before it happens',
  'home.comp.new.2': 'The Gantt updates itself',
  'home.comp.new.3': 'Replanning in seconds, with measured robustness',
  'home.comp.new.4': 'Visibility for the whole plant',

  'home.pilot.label': '12-week pilot',
  'home.pilot.title': 'From Excel to smart Gantt<br/>in 12 weeks',
  'home.pilot.sub':   "We map your resources in week 1, validate the plan in week 8 and go live with real metrics before week 12. If it doesn't generate value, there's no contract.",
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
  'prod.f1.alert': 'Collision detected on Line B, Wk 3',

  'prod.f2.label':      'Simulation scenarios',
  'prod.f2.title':      '3 plans in seconds.<br/>You choose which to run.',
  'prod.f2.desc':       'The engine builds three versions of the plan (Optimal, Balanced and Conservative) and runs each through hundreds of Monte Carlo simulations. Every card carries its finish date, its buffer against the unexpected and its robustness score. You choose with data.',
  'prod.f2.li.0':       'Optimal: finishes sooner, no buffer between operations',
  'prod.f2.li.1':       'Balanced: 1 shift of buffer, throughput and robustness at once',
  'prod.f2.li.2':       'Conservative: maximum buffer against disruptions',
  'prod.f2.li.3':       'Monte Carlo robustness scored on every scenario',
  'prod.f2.m.otd':      'OTD compliance',
  'prod.f2.sc.0.label': 'Optimal',
  'prod.f2.sc.1.label': 'Balanced',
  'prod.f2.sc.2.label': 'Conservative',
  'prod.f2.recommended':'Recommended',

  'prod.f3.label':       'Smart replanning',
  'prod.f3.title':       'Reality changes.<br/>The plan too.',
  'prod.f3.desc':        'Breakdown, urgent order, sick worker. Planning Core detects the deviation and generates a new plan in seconds, without missing committed dates.',
  'prod.f3.li.0':        'One-click replanning',
  'prod.f3.li.1':        'Maintains regulatory and quality constraints',
  'prod.f3.li.2':        'Change audit with timestamp',
  'prod.f3.li.3':        'Impact simulation before confirming',
  'prod.f3.breakdown':   'Breakdown detected',
  'prod.f3.lineA':       'Line A, afternoon shift',
  'prod.f3.replanning':  'Replanning…',
  'prod.f3.ready':       'New plan ready',
  'prod.f3.result':      '3 WOs reassigned · OTD 96% maintained',

  'prod.int.label': 'Integrations',
  'prod.int.title': 'On top of what you already have',
  'prod.int.sub':   'Planning Core doesn\'t replace your ERP. It connects via API and adds the intelligent planning layer it was missing.',
  'prod.int.note':  'Your ERP not on the list? Contact us. Integration usually takes less than a week.',

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
  'precios.phase.0.badge': 'Weeks 1-2',
  'precios.phase.0.title': 'Mapping and configuration',
  'precios.phase.0.desc':  'We map your machines, shifts, workers and constraints. No code, no IT. You define, we configure.',
  'precios.phase.1.badge': 'Weeks 3-5',
  'precios.phase.1.title': 'Constraints and validation',
  'precios.phase.1.desc':  'We configure your sector logic: sequences, bottlenecks, maintenance windows. Generated plan vs. your reality.',
  'precios.phase.2.badge': 'Weeks 6-8',
  'precios.phase.2.title': 'Parallel use',
  'precios.phase.2.desc':  'You run Planning Core in parallel with your current system. Compare the generated plan with what you actually execute.',
  'precios.phase.3.badge': 'Weeks 9-12',
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
  'contacto.form.sectorOther':   'Other sector',
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
  'sectorDetail.diffs.bar':      '✓  100% customizable to your needs and requirements. No code. No consultants. In weeks.',
  'sectorDetail.pilot.label':    '12-week pilot',
  'sectorDetail.pilot.title':    'From zero to production in 3 months',
  'sectorDetail.kpis.label':     'KPIs measured',
  'sectorDetail.kpis.title':     'Measurable impact from week 1',
  'sectorDetail.comp.label':     'Competition',
  'sectorDetail.comp.title':     'Why not the alternatives',
  'sectorDetail.comp.headerAlt': 'Alternative',
  'sectorDetail.comp.headerWhy': 'Why not',
  'sectorDetail.comp.usWhy':     'Visual Gantt · Scenarios with measured robustness · No ERP replacement · 12-week pilot',
  'sectorDetail.bottom.title':   'Ready to start the pilot?',
  'sectorDetail.bottom.sub':     '12 weeks. No risk. Measurable ROI.',
  'sectorDetail.bottom.cta':     'Request free demo →',

  // ── COMPARISON (comparativa.astro) ────────────────────────────────────────
  'comp.hero.label': 'Comparison',
  'comp.hero.title': 'The planning tool that measures<br/>what the others assume',
  'comp.hero.sub':   'Excel, a classic APS or your ERP\'s MRP give you one plan and ask you to trust it. Planning Core gives you three, each with its robustness score, and lets you choose with data, in 12 weeks and without replacing anything.',

  'comp.col.dim':   'What we compare',
  'comp.col.excel': 'Excel / manual',
  'comp.col.aps':   'Traditional APS',
  'comp.col.erp':   'ERP module',
  'comp.col.pc':    'Planning Core',

  'comp.row.time.dim':   'Time to production',
  'comp.row.time.excel': 'Weeks of manual setup',
  'comp.row.time.aps':   '12-18 months',
  'comp.row.time.erp':   'Months + integrator',
  'comp.row.time.pc':    '12 weeks',
  'comp.row.cost.dim':   'Startup cost',
  'comp.row.cost.excel': 'Cheap to license, expensive in hours',
  'comp.row.cost.aps':   'Six figures + consultants',
  'comp.row.cost.erp':   'License + integration project',
  'comp.row.cost.pc':    'Pilot with no implementation cost',
  'comp.row.who.dim':    'Who operates it',
  'comp.row.who.excel':  'Every shift lead, their own way',
  'comp.row.who.aps':    'A full-time dedicated planner',
  'comp.row.who.erp':    'IT and an outside consultant',
  'comp.row.who.pc':     'Your planners, no code',
  'comp.row.replan.dim':   'Replanning after a disruption',
  'comp.row.replan.excel': 'Redo it by hand',
  'comp.row.replan.aps':   'Recompute: slow and manual',
  'comp.row.replan.erp':   'Batch MRP, usually overnight',
  'comp.row.replan.pc':    'Seconds, one click',
  'comp.row.scenarios.dim':   'Plan scenarios',
  'comp.row.scenarios.excel': 'One, the one in your head',
  'comp.row.scenarios.aps':   'One "optimal"',
  'comp.row.scenarios.erp':   'One',
  'comp.row.scenarios.pc':    'Three, with an explicit trade-off',
  'comp.row.robust.dim':   'Plan robustness',
  'comp.row.robust.excel': 'Unknown',
  'comp.row.robust.aps':   'Unknown',
  'comp.row.robust.erp':   'Unknown',
  'comp.row.robust.pc':    'Monte Carlo score per scenario',
  'comp.row.erpRel.dim':   'Relationship with your ERP',
  'comp.row.erpRel.excel': 'Lives on the side',
  'comp.row.erpRel.aps':   'Replaces it',
  'comp.row.erpRel.erp':   'Ties you deeper into it',
  'comp.row.erpRel.pc':    'On top, via API',
  'comp.row.sector.dim':   "Your sector's logic",
  'comp.row.sector.excel': 'You build it',
  'comp.row.sector.aps':   'A configuration project',
  'comp.row.sector.erp':   'Generic',
  'comp.row.sector.pc':    'Pre-configured',

  'comp.vs.label': 'In detail',
  'comp.vs.title': 'What you compete with today',
  'comp.vs.excel.title': 'vs. Excel and manual planning',
  'comp.vs.excel.body':  "Excel doesn't lie out of malice: it lies because it doesn't know. The moment a machine stops, Monday's plan stops describing your plant, and nobody knows until Tuesday's meeting. Planning Core keeps one plan alive and tells you, before you publish it, how much it can take.",
  'comp.vs.aps.title':   'vs. traditional APS',
  'comp.vs.aps.body':    'A classic APS solves the whole problem: it rewrites your data model, ties up a full-time planner and takes over a year to deliver value. And when it finally works, it hands you an "optimal", brittle plan. Planning Core does less, on purpose: plans that hold, in 12 weeks, run by your team.',
  'comp.vs.erp.title':   "vs. your ERP's planning module",
  'comp.vs.erp.body':    "Your ERP's MRP records and recomputes in batches; it's not a decision tool on the floor. It has no visual Gantt, doesn't compare scenarios and doesn't measure risk. Planning Core connects via API and adds exactly that layer, without tying you deeper into the ERP.",

  'comp.not.label': 'Honesty',
  'comp.not.title': "What Planning Core doesn't do",
  'comp.not.0': "We don't optimize every second of your plant to the millimetre.",
  'comp.not.1': "We don't replace your ERP or your MES.",
  'comp.not.2': "We don't promise an AI that plans on its own.",
  'comp.not.3': 'We do one thing: plans that hold, fast, run by your people.',

  'comp.cta.title': 'See where it fits in your plant?',
  'comp.cta.sub':   'A 30-min call and a demo with your real constraints.',
  'comp.cta.btn1':  'Request demo →',
  'comp.cta.btn2':  'See the 12-week pilot',
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
