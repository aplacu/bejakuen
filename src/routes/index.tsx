import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Bot, Check, ChevronDown,
  CircleHelp, Gauge, Headset, Layers3, Menu, MessageCircle,
  MessagesSquare, Play, ShieldCheck, Sparkles, Target, TrendingUp, Users,
  Workflow, X, Zap,
} from 'lucide-react';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Bejakeun — AI sales workforce untuk bisnis yang ingin tumbuh' },
      { name: 'description', content: 'Bejakeun membantu bisnis merespons leads, memahami kebutuhan pelanggan, menindaklanjuti peluang, dan menjaga pipeline penjualan tetap bergerak.' },
      { property: 'og:title', content: 'Bejakeun — Turn conversations into customers' },
      { property: 'og:description', content: 'AI sales agent yang membantu tim Anda mengubah percakapan menjadi peluang penjualan.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Index,
});

type DemoTab = 'agent' | 'pipeline' | 'insights';

function Brand({ light = false }: { light?: boolean }) {
  return <span className={`brand-lockup ${light ? 'brand-lockup-light' : ''}`}><span className="brand-mark"><span /><span /><span /></span><span>bejakeun<span className="brand-period">.</span></span></span>;
}

function ProductDemo() {
  const [tab, setTab] = useState<DemoTab>('agent');
  const [showReply, setShowReply] = useState(false);
  const [leadStage, setLeadStage] = useState<'New' | 'Qualified' | 'Meeting'>('Qualified');
  const tabs: { id: DemoTab; label: string; icon: typeof Bot }[] = [
    { id: 'agent', label: 'AI sales agent', icon: Bot },
    { id: 'pipeline', label: 'Pipeline', icon: Workflow },
    { id: 'insights', label: 'Revenue insights', icon: Gauge },
  ];

  return <div className="product-demo">
    <div className="demo-chrome">
      <div className="demo-brand"><span className="demo-live-dot" /> Bejakeun workspace <span className="demo-env">LIVE PREVIEW</span></div>
      <div className="demo-avatar">AC</div>
    </div>
    <div className="demo-body">
      <aside className="demo-nav">
        <div className="demo-workspace-label">WORKSPACE</div>
        {tabs.map(item => <button key={item.id} className={`demo-nav-item ${tab === item.id ? 'active' : ''}`} onClick={() => setTab(item.id)}><item.icon size={15} />{item.label}{tab === item.id && <span className="demo-nav-indicator" />}</button>)}
        <div className="demo-nav-bottom"><div className="demo-mini-avatar">AC</div><div><strong>Acme Studio</strong><small>Growth plan</small></div><ChevronDown size={13} /></div>
      </aside>
      <div className="demo-main">
        {tab === 'agent' && <>
          <div className="demo-heading-row"><div><div className="demo-kicker">CONVERSATION INBOX</div><h3>Good morning, Alex <span>✦</span></h3><p>Your sales agent is taking care of new conversations.</p></div><span className="agent-status"><span /> Agent active</span></div>
          <div className="demo-stat-grid">
            <div className="demo-stat"><span>Conversations handled</span><strong>128</strong><small className="stat-up"><TrendingUp size={12} /> 18.6% <em>vs last week</em></small></div>
            <div className="demo-stat"><span>Qualified leads</span><strong>34</strong><small className="stat-up"><TrendingUp size={12} /> 12.4% <em>vs last week</em></small></div>
            <div className="demo-stat"><span>Meetings booked</span><strong>12</strong><small className="stat-up"><TrendingUp size={12} /> 8.2% <em>vs last week</em></small></div>
          </div>
          <div className="conversation-card">
            <div className="conversation-top"><div className="contact-avatar">RN</div><div className="contact-info"><strong>Rizky Nugraha</strong><span>Website inquiry · 2 min ago</span></div><span className={`lead-stage stage-${leadStage.toLowerCase()}`}>{leadStage}</span></div>
            <div className="chat-thread">
              <div className="chat-bubble customer-bubble">Hi, I’m looking for a solution for my sales team. Can you share the pricing?</div>
              <div className="chat-bubble agent-bubble"><span className="bubble-agent"><Sparkles size={11} /> BEJAKEUN AI</span>Absolutely, Rizky! I can help with that. To recommend the right plan, how many people are on your sales team today?</div>
              {showReply && <><div className="chat-bubble customer-bubble">We have 6 people handling inbound leads.</div><div className="chat-bubble agent-bubble"><span className="bubble-agent"><Sparkles size={11} /> BEJAKEUN AI</span>Thanks! A 6-person team can start with our Growth setup. I can arrange a short walkthrough with our team so we can map your workflow first.</div></>}
            </div>
            <div className="conversation-actions"><button onClick={() => setShowReply(v => !v)}><MessageCircle size={13} /> {showReply ? 'Hide example' : 'Continue conversation'}</button><button onClick={() => setLeadStage(s => s === 'New' ? 'Qualified' : s === 'Qualified' ? 'Meeting' : 'New')}><Check size={13} /> Move stage</button></div>
          </div>
          <div className="demo-disclaimer"><ShieldCheck size={13} /> Interactive product concept with fictional data. No messages are sent.</div>
        </>}
        {tab === 'pipeline' && <div className="demo-tab-content"><div className="demo-kicker">SALES PIPELINE</div><div className="demo-heading-row"><div><h3>Every lead has a next step.</h3><p>A simple view of opportunities in motion.</p></div><span className="pipeline-total">24 open leads</span></div><div className="mini-pipeline">{[{title:'New',count:8,names:['Maya Putri','Dito Rahman','Nadia S.']},{title:'Qualified',count:10,names:['Rizky Nugraha','Tania Wijaya','Fajar A.']},{title:'Meeting',count:6,names:['Ari Pratama','Sinta Dewi']}].map((col,i)=><div className="mini-pipeline-col" key={col.title}><div className="mini-pipeline-head"><span>{col.title}</span><b>{col.count}</b></div>{col.names.map((name,j)=><div className="mini-lead" key={name}><span className={`mini-lead-avatar avatar-${i+j}`}>{name.split(' ').map(n=>n[0]).join('').slice(0,2)}</span><span><strong>{name}</strong><small>{['Inbound inquiry','Pricing requested','Follow-up due'][j]}</small></span></div>)}<div className="pipeline-more">+ {col.count-col.names.length} more</div></div>)}</div><div className="demo-disclaimer"><ShieldCheck size={13} /> Example pipeline. Data is fictional and stored nowhere.</div></div>}
        {tab === 'insights' && <div className="demo-tab-content"><div className="demo-kicker">REVENUE INTELLIGENCE</div><div className="demo-heading-row"><div><h3>See what moves revenue.</h3><p>Understand how conversations turn into opportunities.</p></div><span className="pipeline-total">Last 30 days</span></div><div className="insight-highlight"><div><span>Qualified lead rate</span><strong>26.6%</strong><small><TrendingUp size={12} /> +4.8% this month</small></div><div className="insight-bars">{[34,48,39,61,52,72,58,84,66,92,76,100].map((h,i)=><span key={i} style={{height:`${h}%`}} />)}</div></div><div className="insight-list"><div><span className="insight-icon"><Zap size={15} /></span><span><strong>Fast responses win attention</strong><small>Leads replied to within 5 minutes qualify more often.</small></span><ArrowUpRight size={15} /></div><div><span className="insight-icon"><MessagesSquare size={15} /></span><span><strong>Pricing questions are rising</strong><small>Update your product knowledge to answer consistently.</small></span><ArrowUpRight size={15} /></div><div><span className="insight-icon"><Target size={15} /></span><span><strong>Follow-up opportunities</strong><small>7 qualified leads are waiting for a next step.</small></span><ArrowUpRight size={15} /></div></div><div className="demo-disclaimer"><ShieldCheck size={13} /> Illustrative insights, not measured customer outcomes.</div></div>}
      </div>
    </div>
  </div>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const nav = [{ href: '#platform', label: 'Platform' }, { href: '#how-it-works', label: 'How it works' }, { href: '#industries', label: 'For your industry' }, { href: '#faq', label: 'FAQ' }];

  return <div className="marketing-site">
    <a href="#main-content" className="skip-link">Skip to content</a>
    <header className="marketing-header">
      <div className="marketing-wrap header-inner">
        <a href="#" aria-label="Bejakeun home"><Brand /></a>
        <nav className="desktop-nav" aria-label="Main navigation">{nav.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
        <div className="header-actions"><a href="#platform" className="header-login">Explore platform</a><a href="#get-started" className="button-primary button-small">Talk to us <ArrowRight size={15} /></a></div>
        <button className="mobile-menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{nav.map(item => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}<a href="#get-started" className="button-primary" onClick={() => setMenuOpen(false)}>Talk to us <ArrowRight size={15} /></a></nav>}
    </header>

    <main id="main-content">
      <section className="hero-section">
        <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
        <div className="marketing-wrap hero-layout">
          <div className="hero-copy">
            <div className="hero-eyebrow"><span className="eyebrow-spark"><Sparkles size={12} /></span> YOUR AI SALES WORKFORCE</div>
            <h1>Turn every<br /><span>conversation</span> into<br />an opportunity.</h1>
            <p className="hero-description">Meet the AI sales agent that responds, qualifies, and follows up with your leads, so your team can focus on closing the right deals.</p>
            <div className="hero-buttons"><a className="button-primary" href="#get-started">Build your sales workflow <ArrowRight size={16} /></a><a className="button-secondary" href="#platform"><Play size={14} /> Explore the platform</a></div>
            <div className="hero-proof"><div className="proof-avatars"><span>SA</span><span>MK</span><span>RN</span></div><span>Built for teams that want to <strong>sell smarter.</strong></span></div>
          </div>
          <div className="hero-visual"><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="hero-core"><div className="core-grid" /><div className="core-icon"><Brand /></div><div className="core-caption">AI SALES AGENT</div><div className="core-pulse pulse-one" /><div className="core-pulse pulse-two" /></div>
            <div className="floating-card float-card-top"><span className="float-icon purple"><MessageCircle size={16} /></span><span><strong>New lead captured</strong><small>Website · just now</small></span><span className="float-check"><Check size={12} /></span></div>
            <div className="floating-card float-card-right"><span className="float-icon green"><Target size={16} /></span><span><strong>Lead qualified</strong><small>Intent + budget matched</small></span></div>
            <div className="floating-card float-card-bottom"><span className="float-icon amber"><CalendarIcon /></span><span><strong>Meeting booked</strong><small>Tomorrow, 10:30 AM</small></span><span className="float-arrow"><ArrowUpRight size={15} /></span></div>
            <div className="hero-visual-note"><span className="demo-live-dot" /> ALWAYS-ON SALES OPERATIONS</div>
          </div>
        </div>
        <div className="hero-bottom marketing-wrap"><span>ONE PLATFORM. MANY WORKFLOWS.</span><div className="hero-bottom-line" /><span>BUILT TO GROW WITH YOU <ArrowDownRight size={13} /></span></div>
      </section>

      <section className="value-strip"><div className="marketing-wrap value-strip-grid"><div><span className="value-icon"><MessageCircle size={17} /></span><span><strong>Respond faster</strong><small>Keep every inquiry moving.</small></span></div><div><span className="value-icon"><Target size={17} /></span><span><strong>Qualify smarter</strong><small>Find the leads that fit.</small></span></div><div><span className="value-icon"><Workflow size={17} /></span><span><strong>Follow up consistently</strong><small>Give every lead a next step.</small></span></div><div><span className="value-icon"><TrendingUp size={17} /></span><span><strong>Learn what converts</strong><small>Turn activity into insight.</small></span></div></div></section>

      <section id="platform" className="platform-section section-space"><div className="marketing-wrap"><div className="section-intro"><div className="section-eyebrow">A SALES TEAM THAT NEVER LOSES THE THREAD</div><h2>More than a chatbot.<br /><span>A better way to sell.</span></h2><p>Bejakeun connects conversations, lead qualification, follow-up, and sales visibility into one practical workflow.</p></div><ProductDemo /></div></section>

      <section id="how-it-works" className="workflow-section section-space"><div className="marketing-wrap"><div className="workflow-intro"><div><div className="section-eyebrow">FROM FIRST HELLO TO NEXT STEP</div><h2>A sales workflow that<br />keeps moving.</h2></div><p>Start with one repeatable process. Bejakeun helps handle the routine work while your team stays in control of important decisions.</p></div><div className="workflow-grid">
        {[{num:'01',icon:MessagesSquare,title:'Capture the conversation',text:'Bring inbound questions into a clear, organized flow, with context attached to every lead.'},{num:'02',icon:Bot,title:'Understand and qualify',text:'Use your approved business knowledge to answer questions and identify intent, fit, and urgency.'},{num:'03',icon:Workflow,title:'Move the deal forward',text:'Prepare follow-ups, update lead stages, and schedule the next step based on your rules.'},{num:'04',icon:Gauge,title:'Learn from the outcome',text:'See what gets attention, where leads stall, and which parts of your process need improvement.'}].map(step=><article className="workflow-card" key={step.num}><div className="workflow-card-top"><span className="workflow-num">{step.num}</span><span className="workflow-icon"><step.icon size={19} /></span></div><h3>{step.title}</h3><p>{step.text}</p><span className="workflow-card-line" /></article>)}
      </div></div></section>

      <section id="industries" className="industries-section section-space"><div className="marketing-wrap industries-layout"><div className="industries-copy"><div className="section-eyebrow">ONE BRAND. MANY INDUSTRIES.</div><h2>Built around your<br /><span>way of selling.</span></h2><p>Bejakeun is designed as a flexible platform. Start with one sales workflow, then adapt it to the conversations your customers already have.</p><a href="#get-started" className="text-link">Find your first workflow <ArrowRight size={15} /></a></div><div className="industry-list">
        {[{icon:Layers3,name:'Property & real estate',desc:'Qualify buyer intent and coordinate viewings',tag:'Lead qualification'},{icon:Zap,name:'E-commerce & retail',desc:'Answer product questions and guide purchases',tag:'Product inquiries'},{icon:Target,name:'Automotive & dealerships',desc:'Route inquiries and schedule test drives',tag:'Appointment booking'},{icon:Users,name:'Education & services',desc:'Guide inquiries from interest to enrollment',tag:'Consultative sales'},{icon:Workflow,name:'B2B & distribution',desc:'Organize requests, quotes, and repeat orders',tag:'Sales operations'}].map((industry,i)=><div className="industry-row" key={industry.name}><span className="industry-icon"><industry.icon size={18} /></span><span className="industry-main"><strong>{industry.name}</strong><small>{industry.desc}</small></span><span className="industry-tag">{industry.tag}</span><ArrowUpRight size={15} className="industry-arrow" /></div>)}
      </div></div></section>

      <section className="trust-section"><div className="marketing-wrap trust-layout"><div><div className="section-eyebrow">AUTOMATION WITH GUARDRAILS</div><h2>AI that works<br />with your team.</h2><p>Useful automation should be clear, reviewable, and grounded in your business rules, not a black box making promises on your behalf.</p></div><div className="trust-points"><div><span><ShieldCheck size={18} /></span><div><strong>Your rules. Your approvals.</strong><p>Keep pricing, commitments, and sensitive actions under authorized control.</p></div></div><div><span><Layers3 size={18} /></span><div><strong>Grounded in your knowledge</strong><p>Give the agent approved product information, policies, and clear escalation paths.</p></div></div><div><span><Headset size={18} /></span><div><strong>Human handoff when it matters</strong><p>Let your team step in for complex questions, negotiation, and high-value decisions.</p></div></div></div></div></section>

      <section id="faq" className="faq-section section-space"><div className="marketing-wrap faq-layout"><div><div className="section-eyebrow">GOOD QUESTIONS, CLEAR ANSWERS</div><h2>Before we<br />get started.</h2><p>We believe in being clear about what Bejakeun can do today and what comes next.</p><div className="faq-aside"><CircleHelp size={17} /><span>Have a specific workflow in mind?<a href="#get-started"> Tell us about it.</a></span></div></div><div className="faq-list">{[
        {q:'Is Bejakeun just a chatbot?',a:'No. The product direction is an AI sales workforce: a system designed to qualify leads, coordinate follow-ups, maintain pipeline context, and help teams move opportunities forward. The first release will focus on one reliable workflow before expanding.'},
        {q:'Does the demo connect to real customers?',a:'No. This website contains an interactive product concept using fictional data. It does not send messages, call an AI model, connect to a CRM, or store customer information.'},
        {q:'Which industries can use Bejakeun?',a:'The long-term platform is designed to support many industries. We will start with a narrow, repeatable sales workflow and expand based on customer validation rather than claiming every use case is ready today.'},
        {q:'Will the AI make promises or negotiate on its own?',a:'The intended product includes business rules, approval boundaries, and human handoff. Actions such as changing prices, making binding commitments, or handling sensitive cases should require explicit authorization.'},
        {q:'How do we get started?',a:'Tell us about your business, where leads arrive, and which part of the sales process consumes the most time. We can assess the workflow and agree on a small, measurable pilot before any implementation or payment.'},
      ].map((item,i)=><div className={`faq-item ${faqOpen===i?'open':''}`} key={item.q}><button aria-expanded={faqOpen===i} onClick={()=>setFaqOpen(faqOpen===i?null:i)}><span>{item.q}</span><ChevronDown size={17} /></button>{faqOpen===i&&<p>{item.a}</p>}</div>)}</div></div></section>

      <section id="get-started" className="closing-section"><div className="closing-orb closing-orb-one" /><div className="closing-orb closing-orb-two" /><div className="marketing-wrap closing-content"><div className="closing-badge"><Sparkles size={13} /> START WITH ONE WORKFLOW</div><h2>Let's make every<br />lead <span>count.</span></h2><p>Tell us where conversations get stuck. We'll map a practical first workflow, define what success looks like, and keep the scope clear.</p><a href="mailto:hello@bejakeun.com?subject=Let's%20build%20a%20Bejakeun%20sales%20workflow" className="button-light">Discuss your workflow <ArrowRight size={16} /></a><small>No exaggerated promises. Just a clear first step.</small></div></section>
    </main>

    <footer className="marketing-footer"><div className="marketing-wrap footer-main"><div><a href="#"><Brand /></a><p>AI sales workforce.<br />Built to move business forward.</p></div><div className="footer-links"><a href="#platform">Platform</a><a href="#how-it-works">How it works</a><a href="#industries">Industries</a><a href="#faq">FAQ</a></div><a className="footer-contact" href="mailto:hello@bejakeun.com">hello@bejakeun.com <ArrowUpRight size={14} /></a></div><div className="marketing-wrap footer-bottom"><span>© {new Date().getFullYear()} Bejakeun. All rights reserved.</span><span>Built for conversations that go somewhere.</span></div></footer>
  </div>;
}

function CalendarIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /></svg>;
}
