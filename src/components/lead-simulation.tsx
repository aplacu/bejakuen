import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  Clipboard,
  Inbox,
  LayoutGrid,
  ListFilter,
  MessageSquare,
  Plus,
  RotateCcw,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Status = "baru" | "lanjut" | "jadwal";
type Lead = {
  id: number;
  name: string;
  interest: string;
  source: string;
  status: Status;
  time: string;
};
const initialLeads: Lead[] = [
  {
    id: 1,
    name: "Rina Pratiwi",
    interest: "Rumah 2 kamar di Bandung",
    source: "Chat masuk",
    status: "baru",
    time: "Baru masuk",
  },
  {
    id: 2,
    name: "Budi Santoso",
    interest: "Jasa renovasi dapur",
    source: "Formulir",
    status: "baru",
    time: "30 menit lalu",
  },
  {
    id: 3,
    name: "Andi Wijaya",
    interest: "Ruko di area Dago",
    source: "Chat masuk",
    status: "lanjut",
    time: "Tindak lanjut hari ini",
  },
  {
    id: 4,
    name: "Sari Dewi",
    interest: "Jasa desain interior",
    source: "Referensi",
    status: "lanjut",
    time: "Tindak lanjut besok",
  },
  {
    id: 5,
    name: "Dimas Putra",
    interest: "Survei rumah di Antapani",
    source: "Chat masuk",
    status: "jadwal",
    time: "Jadwal disepakati",
  },
];
const columns: { status: Status; label: string; icon: typeof Inbox }[] = [
  { status: "baru", label: "Prospek baru", icon: Inbox },
  { status: "lanjut", label: "Tindak lanjut", icon: MessageSquare },
  { status: "jadwal", label: "Terjadwal", icon: Check },
];
export async function copyText(text: string): Promise<boolean> {
  try {
    if (!navigator.clipboard?.writeText) return false;
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
export function LeadSimulation() {
  const [leads, setLeads] = useState(initialLeads);
  const [selectedId, setSelectedId] = useState(3);
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [tone, setTone] = useState("ramah");
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState("");
  const selected = leads.find((lead) => lead.id === selectedId);
  const selectLead = (lead: Lead) => {
    setSelectedId(lead.id);
    setMessage("");
    setNotice("");
  };
  const generate = () => {
    if (!selected) return;
    setMessage(
      tone === "ringkas"
        ? `Halo Kak ${selected.name.split(" ")[0]}, apakah masih tertarik dengan ${selected.interest.toLowerCase()}? Saya siap membantu jika ada pertanyaan. Terima kasih.`
        : `Halo Kak ${selected.name.split(" ")[0]}, semoga harinya menyenangkan. Saya ingin menindaklanjuti pertanyaan Kakak tentang ${selected.interest.toLowerCase()}. Apakah ada informasi tambahan yang bisa saya bantu? Silakan balas saat berkenan, ya. Terima kasih!`,
    );
    setNotice("Contoh dibuat dari templat, bukan AI langsung. Tidak ada pesan yang dikirim.");
  };
  const move = () => {
    if (!selected || selected.status === "jadwal") return;
    const next: Status = selected.status === "baru" ? "lanjut" : "jadwal";
    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === selected.id
          ? {
              ...lead,
              status: next,
              time: next === "lanjut" ? "Tindak lanjut hari ini" : "Jadwal disepakati",
            }
          : lead,
      ),
    );
    setNotice("Status prospek simulasi diperbarui.");
  };
  return (
    <div className="demo-window">
      <div className="demo-topbar grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="font-display text-sm font-extrabold">bejakeun</span>
          <span className="hidden text-border sm:inline">/</span>
          <span className="hidden text-xs text-muted-foreground sm:inline">Ruang kerja contoh</span>
        </div>
        <span className="sim-label shrink-0">SIMULASI · DATA FIKTIF</span>
      </div>
      <div className="grid md:grid-cols-[160px_minmax(0,1fr)]">
        <aside className="demo-sidebar hidden md:block" aria-label="Ringkasan ruang kerja">
          <div className="px-2.5 pb-4 text-[9px] font-semibold text-muted-foreground">
            RUANG KERJA
          </div>
          <div className="demo-sidebar-item active">
            <LayoutGrid size={14} /> Alur prospek
          </div>
          <div className="demo-sidebar-item">
            <Users size={14} /> Usaha contoh
          </div>
          <div className="mt-40 border-t pt-4">
            <div className="demo-sidebar-item">
              <span className="lead-avatar">UC</span>
              <div>
                Usaha Contoh<div className="mt-0.5 text-[9px] font-normal">Mode simulasi</div>
              </div>
            </div>
          </div>
        </aside>
        <div className="min-w-0 p-4 sm:p-6">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-2">
            <div className="min-w-0">
              <h3 className="text-base font-bold">Alur prospek</h3>
              <p className="mt-1 text-[11px] text-muted-foreground">
                Setiap percakapan, punya langkah berikutnya.
              </p>
            </div>
            <Button
              variant="brand"
              size="sm"
              onClick={() => setAdding(!adding)}
              aria-expanded={adding}
            >
              <Plus />
              <span className="hidden sm:inline">Tambah prospek</span>
              <span className="sm:hidden">Tambah</span>
            </Button>
          </div>
          <div className="my-5 grid grid-cols-3 gap-2 sm:gap-3">
            {[
              { label: "Total prospek", value: leads.length, icon: Users },
              {
                label: "Perlu tindak lanjut",
                value: leads.filter((l) => l.status === "lanjut").length,
                icon: MessageSquare,
              },
              {
                label: "Terjadwal",
                value: leads.filter((l) => l.status === "jadwal").length,
                icon: BarChart3,
              },
            ].map((metric) => (
              <div key={metric.label} className="metric">
                <div className="flex items-center justify-between gap-1 text-muted-foreground">
                  <span className="text-[10px] leading-snug">{metric.label}</span>
                  <metric.icon size={13} className="hidden shrink-0 sm:block" />
                </div>
                <div className="metric-value mt-1">{metric.value.toString().padStart(2, "0")}</div>
                <div className="mt-1 text-[8px] text-muted-foreground">METRIK SIMULASI</div>
              </div>
            ))}
          </div>
          {adding && (
            <form
              className="mb-5 grid gap-3 rounded-md border bg-secondary p-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                const newLead: Lead = {
                  id: Math.max(0, ...leads.map((l) => l.id)) + 1,
                  name: name.trim(),
                  interest: interest.trim(),
                  source: "Contoh manual",
                  status: "baru",
                  time: "Baru masuk",
                };
                if (!newLead.name || !newLead.interest) return;
                setLeads((prev) => [...prev, newLead]);
                selectLead(newLead);
                setAdding(false);
                setName("");
                setInterest("");
                setNotice(
                  "Prospek contoh ditambahkan. Data hanya tersimpan selama halaman ini dibuka.",
                );
              }}
            >
              <label className="text-xs">
                Nama fiktif
                <input
                  className="field mt-1"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  maxLength={50}
                  placeholder="Misalnya: Nia Putri"
                />
              </label>
              <label className="text-xs">
                Kebutuhan contoh
                <input
                  className="field mt-1"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  required
                  maxLength={90}
                  placeholder="Misalnya: Konsultasi renovasi"
                />
              </label>
              <p className="text-[10px] text-muted-foreground sm:col-span-2">
                Gunakan data fiktif, bukan informasi pelanggan asli.
              </p>
              <div className="flex gap-2">
                <Button size="sm" type="submit">
                  Simpan contoh
                </Button>
                <Button size="sm" variant="ghost" type="button" onClick={() => setAdding(false)}>
                  Batal
                </Button>
              </div>
            </form>
          )}
          <div className="mb-3 flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
              <ListFilter size={12} /> Semua prospek
            </span>
            <Button
              variant="quiet"
              size="sm"
              className="h-6 text-[10px]"
              onClick={() => {
                setLeads(initialLeads);
                setSelectedId(3);
                setMessage("");
                setNotice("Simulasi dikembalikan ke data awal.");
                setAdding(false);
              }}
            >
              <RotateCcw size={12} /> Atur ulang
            </Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {columns.map((column) => (
              <div className="pipeline-column" key={column.status}>
                <div className="mb-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-[10px] font-semibold">
                    <column.icon
                      size={12}
                      className={column.status === "jadwal" ? "text-teal" : "text-muted-foreground"}
                    />
                    {column.label}
                    <span className="ml-1 text-muted-foreground">
                      {leads.filter((l) => l.status === column.status).length}
                    </span>
                  </div>
                  <span className="text-muted-foreground">···</span>
                </div>
                <div className="space-y-2">
                  {leads
                    .filter((l) => l.status === column.status)
                    .map((lead) => (
                      <Button
                        variant="ghost"
                        key={lead.id}
                        onClick={() => selectLead(lead)}
                        aria-pressed={selectedId === lead.id}
                        className={`lead-card block h-auto whitespace-normal hover:bg-card ${selectedId === lead.id ? "selected" : ""}`}
                      >
                        <span className="flex items-center gap-2">
                          <span
                            className={`lead-avatar shrink-0 ${lead.id % 2 === 0 ? "warm" : ""}`}
                          >
                            {lead.name
                              .split(" ")
                              .map((n) => n[0])
                              .slice(0, 2)
                              .join("")}
                          </span>
                          <span className="min-w-0 text-[11px] font-semibold break-words">
                            {lead.name}
                          </span>
                        </span>
                        <span className="mt-2 block text-[10px] font-normal leading-relaxed text-muted-foreground">
                          {lead.interest}
                        </span>
                        <span className="mt-3 flex flex-wrap items-center justify-between gap-1">
                          <span className="lead-source">{lead.source}</span>
                          <span className="text-[8px] font-normal text-muted-foreground">
                            {lead.time}
                          </span>
                        </span>
                      </Button>
                    ))}
                  {leads.every((l) => l.status !== column.status) && (
                    <div className="py-8 text-center">
                      <Inbox size={20} className="mx-auto mb-2 text-muted-foreground" />
                      <p className="text-[10px] text-muted-foreground">
                        Belum ada prospek di tahap ini.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="template-panel">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles size={15} className="text-teal" />
              <h4 className="text-xs font-bold">Asisten tindak lanjut</h4>
              <span className="sim-label">TEMPLAT</span>
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
              {selected ? (
                <>
                  Contoh pesan untuk <strong className="text-foreground">{selected.name}</strong>.
                  Ditinjau dan dikirim sendiri.
                </>
              ) : (
                "Pilih prospek untuk menyiapkan contoh pesan."
              )}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <label className="sr-only" htmlFor="tone">
                Gaya pesan
              </label>
              <select
                id="tone"
                className="field w-auto"
                value={tone}
                onChange={(e) => {
                  setTone(e.target.value);
                  setMessage("");
                }}
              >
                <option value="ramah">Ramah & personal</option>
                <option value="ringkas">Singkat & jelas</option>
              </select>
              <Button size="sm" variant="brand" onClick={generate} disabled={!selected}>
                <Sparkles /> Buat contoh pesan
              </Button>
            </div>
            {selected && (
              <Button
                size="sm"
                className="mt-2 px-0 text-[10px]"
                variant="quiet"
                disabled={selected.status === "jadwal"}
                onClick={move}
              >
                {selected.status === "jadwal" ? <Check /> : <ArrowRight />}
                {selected.status === "baru"
                  ? "Pindahkan ke tindak lanjut"
                  : selected.status === "lanjut"
                    ? "Tandai terjadwal"
                    : "Prospek sudah terjadwal"}
              </Button>
            )}
          </div>
          <div className="rounded-md border bg-secondary p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[9px] font-semibold text-muted-foreground">
                PRATINJAU PESAN
              </span>
              {message && (
                <Button
                  variant="quiet"
                  size="icon"
                  className="h-6 w-6"
                  aria-label="Salin contoh pesan"
                  title="Salin contoh pesan"
                  onClick={async () => {
                    setNotice(
                      (await copyText(message))
                        ? "Contoh pesan disalin. Tidak ada pesan yang dikirim."
                        : "Penyalinan tidak tersedia. Pilih dan salin teks pratinjau secara manual.",
                    );
                  }}
                >
                  <Clipboard size={12} />
                </Button>
              )}
            </div>
            <p className="select-text text-[11px] leading-relaxed text-muted-foreground">
              {message || "Belum ada contoh pesan."}
            </p>
          </div>
        </div>
        <p role="status" className="mt-3 text-[10px] leading-relaxed text-teal">
          {notice ||
            "Simulasi lokal. Tidak terhubung ke akun komunikasi, AI langsung, atau data pelanggan nyata."}
        </p>
      </div>
    </div>
  );
}
