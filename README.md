# bejakeun

Website bejakeun untuk membantu usaha merapikan pencatatan prospek dan tindak lanjut pelanggan. Kode aplikasi berada langsung di repository ini.

## Teknologi
- React + TypeScript
- TanStack Start dan TanStack Router
- Vite
- Tailwind CSS

## Jalankan secara lokal
Prasyarat: Bun atau Node.js yang kompatibel dengan Vite.

```bash
bun install
bun run dev
```

## Pemeriksaan
```bash
bun run test
bun run build
bun run lint
```

## Routing
- `/`: halaman utama bejakeun
- Anchor halaman: `#cara-kerja`, `#simulasi`, `#pilot`, `#faq`, dan `#minat`.

Route utama ada di `src/routes/index.tsx`; root layout dan metadata global berada di `src/routes/__root.tsx`.
