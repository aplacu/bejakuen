import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowDown, ArrowRight, Check, CheckCheck, Clipboard, Clock3, FileText, Layers3, Menu, MessageSquare, Plus, ShieldCheck, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LeadSimulation, copyText } from '@/components/lead-simulation';
import heroImage from '@/assets/pilot-sculpture.jpg';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'bejakeun — Tindak lanjut lebih terarah untuk usaha Anda' },
    { name: 'description', content: 'Jangan biarkan calon pelanggan hilang tanpa tindak lanjut. Coba simulasi bejakeun dan pelajari pilot pendampingan 7 hari seharga Rp299.000.' },
    { property: 'og:title', content: 'bejakeun — Setiap prospek, langkah berikutnya' },
    { property: 'og:description', content: 'Simulasi alur prospek dan program pilot human-assisted untuk usaha kecil Indonesia. Ruang lingkup disepakati sebelum pembayaran.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});
const inquiry = 'Halo, saya tertarik dengan Program Pilot bejakeun (Rp299.000 untuk setup + pendampingan 7 hari). Usaha saya bergerak di [jenis usaha]. Saat ini calon pelanggan masuk melalui [kanal komunikasi]. Saya ingin mendiskusikan kecocokan, ruang lingkup, dan hasil kerja yang disepakati sebelum pembayaran.';
function Brand() {
  return <span className="wordmark"><svg className="brand-symbol" viewBox="0 0 32 34" fill="none" aria-hidden="true"><path d="M8 5v23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M8 20a9 9 0 1 1 0 1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>bejakeun</span>;
}
function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');
  const nav = [{ href: '#cara-kerja', label: 'Mengapa bejakeun' }, { href: '#simulasi', label: 'Simulasi' }, { href: '#pilot', label: 'Program pilot' }, { href: '#faq', label: 'FAQ' }];
  return <>
    <a href="#konten" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-background focus:p-4">Langsung ke konten</a>
    <header className="site-header relative z-20">
      <div className="page-wrap grid h-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:flex md:justify-between">
        <a href="#" aria-label="bejakeun, kembali ke atas" className="min-w-0"><Brand /></a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navigasi utama">{nav.map(item => <a key={item.href} href={item.href} className="nav-link">{item.label}</a>)}</nav>
        <Button asChild variant="brand" size="sm" className="hidden h-10 md:inline-flex"><a href="#minat">Diskusikan kebutuhan <ArrowRight /></a></Button>
        <Button variant="ghost" size="icon" className="shrink-0 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-nav" aria-label={menuOpen ? 'Tutup navigasi' : 'Buka navigasi'}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav id="mobile-nav" className="absolute left-0 right-0 top-full flex flex-col gap-5 border-b bg-background px-5 py-6 md:hidden" aria-label="Navigasi seluler">{nav.map(item => <a href={item.href} key={item.href} className="nav-link" onClick={() => setMenuOpen(false)}>{item.label}</a>)}<Button asChild><a href="#minat" onClick={() => setMenuOpen(false)}>Diskusikan kebutuhan <ArrowRight /></a></Button></nav>}
    </header>
    <main id="konten">
      <section className="hero">
        <img src={heroImage} className="hero-image" alt="" width={1920} height={1024} fetchPriority="high" />
        <div className="page-wrap hero-content">
          <div className="pilot-pill mb-7"><span className="status-dot" /> PROGRAM PILOT · GELOMBANG AWAL</div>
          <h1>Jangan biarkan calon<br className="hidden sm:block" /> pelanggan hilang<br className="hidden sm:block" /> <span>tanpa tindak lanjut.</span></h1>
          <p className="mt-5 max-w-[510px] text-[15px] leading-[1.85] text-muted-foreground">Rapikan pertanyaan yang masuk, catat kebutuhan calon pelanggan, dan siapkan tindak lanjut yang lebih terarah.<br className="hidden sm:block" /> Mulai sederhana, bersama bejakeun.</p>
          <div className="mt-7 flex flex-wrap items-center gap-3"><Button variant="brand" asChild className="h-11 px-5"><a href="#simulasi">Lihat simulasi <ArrowRight /></a></Button><Button variant="outline" asChild className="h-11 bg-background/60 px-5"><a href="#pilot">Pelajari program pilot <ArrowDown /></a></Button></div>
          <p className="mt-5 flex max-w-[500px] items-start gap-2 text-[11px] leading-relaxed text-muted-foreground"><ShieldCheck size={14} className="mt-0.5 shrink-0 text-teal" />Pilot dengan pendampingan manusia. Bukan platform AI otomatis yang sudah berjalan.</p>
        </div>
      </section>
      <div className="border-b bg-background"><div className="page-wrap flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-[11px] text-muted-foreground"><span>DIRANCANG UNTUK USAHA KECIL</span><span className="flex items-center gap-2"><Layers3 size={14} /> Agen properti</span><span className="flex items-center gap-2"><MessageSquare size={14} /> Penyedia jasa lokal</span><span className="flex items-center gap-2"><UsersIcon /> Usaha berbasis konsultasi</span></div></div>
      <section id="cara-kerja" className="section page-wrap">
        <div className="eyebrow mb-3 text-teal"><span className="status-dot" /> MASALAH YANG AKRAB</div>
        <div className="grid gap-4 md:grid-cols-[1.2fr_1fr] md:items-end"><h2 className="section-title">Peluang masuk.<br />Tindak lanjut sering tertinggal.</h2><p className="section-description max-w-[420px]">Saat Anda sibuk melayani pelanggan, percakapan baru mudah tenggelam. Bukan kurang usaha — alurnya belum tertata.</p></div>
        <div className="mt-7 grid gap-6 sm:grid-cols-3">
          {[{ icon: MessageSquare, title: 'Chat belum terjawab', copy: 'Pertanyaan masuk saat Anda sibuk. Balasan tertunda, calon pelanggan pun menunggu.' }, { icon: Clock3, title: 'Lupa menindaklanjuti', copy: '“Nanti saya hubungi lagi” mudah terlupakan tanpa catatan dan langkah berikutnya.' }, { icon: FileText, title: 'Catatan tersebar', copy: 'Kebutuhan pelanggan tersimpan di banyak percakapan. Sulit tahu siapa perlu dibantu hari ini.' }].map(pain => <article key={pain.title} className="pain-item"><div className="pain-icon"><pain.icon size={18} strokeWidth={1.6} /></div><h3 className="text-[15px] font-bold">{pain.title}</h3><p className="mt-2 text-[13px] leading-[1.8] text-muted-foreground">{pain.copy}</p></article>)}
        </div>
      </section>
      <section id="simulasi" className="section demo-band">
        <div className="page-wrap">
          <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end"><div className="min-w-0"><div className="eyebrow mb-3 text-teal"><span className="status-dot" /> COBA ALURNYA</div><h2 className="section-title">Dari percakapan ke langkah berikutnya.</h2><p className="section-description mt-3">Gambaran alur kerja yang bisa kita susun untuk usaha Anda.</p></div><span className="pilot-pill w-fit"><span className="status-dot" /> Prototipe interaktif</span></div>
          <LeadSimulation />
          <div className="mt-5 flex items-start justify-center gap-2 text-[11px] leading-relaxed text-muted-foreground"><ShieldCheck size={14} className="mt-0.5 shrink-0" /><p>Seluruh nama, aktivitas, dan angka di atas adalah fiktif. Bukan hasil pelanggan atau layanan AI yang aktif.</p></div>
        </div>
      </section>
      <section id="pilot" className="section offer-band">
        <div className="page-wrap offer-grid">
          <div><div className="eyebrow mb-4"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> MULAI DARI ALUR YANG TEPAT</div><h2 className="section-title">Program Pilot bejakeun</h2><p className="section-description mt-4 max-w-[440px]">Untuk pelaku usaha di gelombang awal yang ingin membangun kebiasaan tindak lanjut — dengan setup sederhana dan pendampingan langsung.</p><div className="mt-7 flex items-baseline gap-2"><span className="offer-price">Rp299.000</span><span className="text-xs text-primary-foreground/60">/ pilot</span></div><p className="mt-2 text-sm text-primary-foreground/80">Setup + 7 hari pendampingan</p><Button variant="teal" asChild className="mt-7 h-11 px-5"><a href="#minat">Diskusikan kecocokan usaha <ArrowRight /></a></Button><p className="mt-4 max-w-[390px] text-[11px] leading-relaxed text-primary-foreground/60">Kecocokan, ruang lingkup, dan hasil kerja disepakati sebelum pembayaran. Tidak ada jaminan hasil atau omzet.</p></div>
          <div className="pt-1"><h3 className="mb-5 text-[14px] font-semibold">Yang kita kerjakan bersama</h3><div className="space-y-5">{[{ title: 'Petakan alur pertanyaan pelanggan', text: 'Dari pertanyaan pertama hingga langkah tindak lanjut.' }, { title: 'Susun pencatat prospek sederhana', text: 'Catat kebutuhan, status, dan langkah berikutnya.' }, { title: 'Siapkan templat tindak lanjut', text: 'Contoh pesan yang relevan dengan layanan Anda.' }, { title: 'Setup terpandu & tinjauan alur', text: 'Pendampingan selama 7 hari dalam lingkup yang disepakati.' }].map(item => <div key={item.title} className="flex gap-3"><CheckCheck size={17} className="offer-check mt-0.5" /><div><h4 className="text-[13px] font-semibold">{item.title}</h4><p className="mt-1 text-[11px] leading-relaxed text-primary-foreground/60">{item.text}</p></div></div>)}</div><div className="offer-detail mt-7"><p className="flex items-start gap-2 text-[11px] leading-relaxed text-primary-foreground/70"><ShieldCheck size={16} className="offer-check mt-0.5" />Anda menyediakan akun komunikasi sendiri dan menyetujui semua pesan. Tidak ada spam, pesan tanpa izin, atau akses akun otomatis. Lingkup awal terbatas pada alur yang kita sepakati.</p></div></div>
        </div>
      </section>
      <section id="faq" className="section page-wrap">
        <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr]"><div><div className="eyebrow mb-3 text-teal"><span className="status-dot" /> SEBELUM MEMULAI</div><h2 className="section-title">Jelas sejak awal.</h2><p className="section-description mt-3 max-w-[310px]">Beberapa hal penting tentang cara program pilot ini berjalan.</p></div><div>{[
          { q: 'Apakah bejakeun sudah sepenuhnya otomatis?', a: 'Belum. Pilot pertama dibantu manusia untuk merancang alur, setup, dan tinjauan. Otomasi dan bantuan AI baru diperkenalkan setelah alur tervalidasi dan disepakati bersama. Demo di halaman ini memakai templat lokal, bukan AI langsung.' },
          { q: 'Apakah saya harus membayar sebelum lingkupnya jelas?', a: 'Tidak. Kecocokan usaha, ruang lingkup, dan hasil kerja yang akan diberikan disepakati terlebih dahulu. Pembayaran dilakukan setelah kesepakatan itu jelas.' },
          { q: 'Apakah ada jaminan omzet atau penjualan meningkat?', a: 'Tidak. bejakeun membantu menata proses tindak lanjut, bukan menjamin penjualan atau omzet. Hasil bergantung pada kebutuhan pelanggan, penawaran, dan pelaksanaan usaha Anda.' },
          { q: 'Siapa yang mengirim pesan kepada calon pelanggan?', a: 'Anda tetap menggunakan akun komunikasi milik Anda, meninjau, menyetujui, dan mengirim setiap pesan. Pilot tidak mengirim pesan otomatis dan tidak menghubungi siapa pun tanpa izin.' },
        ].map(faq => <details key={faq.q} className="faq-row"><summary>{faq.q}<Plus size={17} className="shrink-0 text-muted-foreground transition-transform" /></summary><p>{faq.a}</p></details>)}</div></div>
      </section>
      <section id="minat" className="section border-t bg-secondary">
        <div className="page-wrap mx-auto max-w-[720px] text-center"><div className="eyebrow mb-4 justify-center text-teal"><span className="status-dot" /> LANGKAH PERTAMA, TANPA KOMITMEN</div><h2 className="section-title">Mulai dengan percakapan.</h2><p className="section-description mx-auto mt-3 max-w-[490px]">Ceritakan usaha Anda. Kita lihat bersama apakah program pilot ini cocok dengan kebutuhan Anda.</p><div className="inquiry-message mt-7 select-text">{inquiry}</div><Button variant="brand" className="mt-5 h-11 px-6" onClick={async () => setCopyStatus(await copyText(inquiry) ? 'Pesan berhasil disalin. Sesuaikan bagian dalam kurung dengan usaha Anda.' : 'Penyalinan otomatis tidak tersedia. Pilih dan salin teks pesan di atas secara manual.')}><Clipboard />Salin pesan minat</Button><p role="status" className="mt-3 text-xs text-teal">{copyStatus}</p><p className="mx-auto mt-3 max-w-[480px] text-xs leading-[1.8] text-muted-foreground">Sesuaikan bagian dalam kurung, lalu kirim melalui kanal tempat Anda menemukan halaman ini. Tombol ini hanya menyalin, tidak mengirim pesan.</p></div>
      </section>
    </main>
    <footer className="site-footer"><div className="page-wrap grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"><div><a href="#" aria-label="bejakeun, kembali ke atas"><Brand /></a><p className="mt-2 text-[10px] text-muted-foreground">Langkah kecil. Tindak lanjut lebih terarah.</p></div><div className="text-[10px] leading-relaxed text-muted-foreground sm:text-right"><p>© 2026 Project bejakeun</p><p className="mt-1">Program pilot & prototipe · Bukan platform otomasi aktif</p></div></div></footer>
  </>;
}
function UsersIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>; }