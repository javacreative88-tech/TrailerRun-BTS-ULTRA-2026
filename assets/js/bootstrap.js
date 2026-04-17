(function () {
  const fragments = [
    ["fragment-hero", "fragments/hero-about-target.html"],
    ["fragment-program", "fragments/program-intensity.html"],
    ["fragment-support", "fragments/support-cta.html"],
    ["fragment-faq-footer", "fragments/faq-footer.html"],
  ];

  const fragmentFallbacks = {
    "fragment-hero": `
<section class="relative overflow-hidden">
    <div class="absolute inset-0 mountain-bg"></div>
    <div class="absolute inset-0 grid-pattern opacity-60"></div>
    <div
        class="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20"
    >
        <div class="fade-in text-white">
            <div
                class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] ring-1 ring-white/15"
            >
                <i data-lucide="mountain" class="h-4 w-4"></i>
                Trail Run Training Guide
            </div>
            <h1
                class="mt-6 text-4xl font-black tracking-tight sm:text-5xl xl:text-6xl"
            >
                Latihan Trail Run BTS Ultra 18KM 2026
            </h1>
            <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
                Panduan latihan 16 minggu yang dibuat untuk membangun base,
                strength, climbing, endurance, dan taper dengan alur yang jelas.
                Semua dikemas agar tetap ringan dan siap upload ke hosting
                biasa.
            </p>
            <div class="mt-8 flex flex-wrap gap-4">
                <a
                    href="#program"
                    class="inline-flex items-center gap-2 rounded-full bg-ember-500 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-ember-400"
                >
                    <i data-lucide="play" class="h-4 w-4"></i>
                    Lihat Program
                </a>
                <a
                    href="#faq"
                    class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/15"
                >
                    <i data-lucide="message-circle" class="h-4 w-4"></i>
                    Tanya Jawab
                </a>
            </div>
        </div>

        <div
            id="tentang"
            class="fade-in rounded-[2rem] bg-white/90 p-6 text-slate-800 shadow-soft ring-1 ring-white/40 backdrop-blur-md"
        >
            <p
                class="text-sm font-bold uppercase tracking-[0.26em] text-ember-600"
            >
                Tentang Program
            </p>
            <h2 class="mt-3 text-3xl font-black text-slate-950">
                Struktur latihan dibuat bertahap, realistis, dan mudah diikuti.
            </h2>
            <p class="mt-4 text-sm leading-7 text-slate-600">
                Fokus utamanya adalah progres yang rapi, bukan sekadar kerja
                keras. Anda akan bergerak dari adaptasi, ke penguatan, ke
                spesifik race, lalu masuk taper dengan tubuh yang lebih siap.
            </p>
            <div class="mt-6 grid gap-3 sm:grid-cols-2">
                <div class="rounded-2xl bg-forest-50 p-4">
                    <div class="text-sm font-bold text-forest-900">
                        16 minggu
                    </div>
                    <p class="mt-1 text-sm leading-6 text-slate-700">
                        Dibagi menjadi base, strength, specific, dan peak.
                    </p>
                </div>
                <div class="rounded-2xl bg-ember-50 p-4">
                    <div class="text-sm font-bold text-ember-900">
                        Fleksibel
                    </div>
                    <p class="mt-1 text-sm leading-6 text-slate-700">
                        Bisa disesuaikan dengan kondisi dan medan latihan.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<section
    id="target"
    class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 fade-in"
>
    <div class="grid gap-5 md:grid-cols-3">
        <div
            class="rounded-[1.5rem] bg-white p-6 shadow-soft ring-1 ring-slate-200"
        >
            <p
                class="text-sm font-bold uppercase tracking-[0.22em] text-ember-600"
            >
                Ringkasan Target
            </p>
            <h2 class="mt-3 text-2xl font-black text-slate-900">
                Sampai garis start dengan kapasitas yang lebih stabil.
            </h2>
            <p class="mt-4 text-sm leading-7 text-slate-600">
                Targetnya bukan hanya finish, tetapi finish dengan kontrol pace,
                napas, dan keputusan yang lebih tenang.
            </p>
        </div>
        <div class="rounded-[1.5rem] bg-forest-900 p-6 text-white shadow-soft">
            <p
                class="text-sm font-bold uppercase tracking-[0.22em] text-ember-200"
            >
                Prinsip Latihan
            </p>
            <h3 class="mt-3 text-2xl font-black">
                Progressive overload tanpa memotong recovery.
            </h3>
            <p class="mt-4 text-sm leading-7 text-slate-200">
                Volume naik secara bertahap, sementara recovery tetap menjadi
                bagian utama dari program.
            </p>
        </div>
        <div class="rounded-[1.5rem] bg-slate-950 p-6 text-white shadow-soft">
            <p
                class="text-sm font-bold uppercase tracking-[0.22em] text-ember-200"
            >
                Untuk Siapa
            </p>
            <h3 class="mt-3 text-2xl font-black">
                Pelari aktif yang ingin lebih siap di medan trail.
            </h3>
            <p class="mt-4 text-sm leading-7 text-slate-300">
                Cocok untuk pemula aktif maupun pelari yang ingin struktur
                latihan lebih rapi menuju event 18 km.
            </p>
        </div>
    </div>
</section>
        `,
    "fragment-program": `
<section
    id="program"
    class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
>
    <div
        class="rounded-[1.75rem] bg-gradient-to-br from-forest-900 via-slate-950 to-ember-700 p-6 text-white shadow-soft lg:p-8"
    >
        <p class="text-sm font-bold uppercase tracking-[0.26em] text-ember-200">
            Program 16 Minggu
        </p>
        <h2 class="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Rangkaian latihan dibuat per fase agar progresnya terasa jelas.
        </h2>
        <p class="mt-4 max-w-3xl text-sm leading-7 text-slate-200">
            Pilih fase untuk menyaring blok latihan. Kartu minggu di bawah akan
            dirender oleh JavaScript agar file HTML tetap lebih ringan.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
            <button
                class="phase-btn rounded-full bg-ember-500 px-4 py-2 text-sm font-semibold text-white"
                data-phase="all"
            >
                Semua
            </button>
            <button
                class="phase-btn rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15"
                data-phase="base"
            >
                Base
            </button>
            <button
                class="phase-btn rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15"
                data-phase="strength"
            >
                Strength
            </button>
            <button
                class="phase-btn rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15"
                data-phase="specific"
            >
                Specific
            </button>
            <button
                class="phase-btn rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15"
                data-phase="peak"
            >
                Peak & Taper
            </button>
        </div>
        <div
            class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
            id="weeksGrid"
        ></div>
    </div>
</section>

<section
    id="intensitas"
    class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 fade-in"
>
    <div
        class="rounded-[1.75rem] bg-white p-6 shadow-soft ring-1 ring-slate-200 lg:p-8"
    >
        <p class="text-sm font-bold uppercase tracking-[0.26em] text-ember-600">
            Zona Intensitas Latihan
        </p>
        <h2 class="mt-3 text-3xl font-black text-slate-900">
            Klik label untuk melihat arti tiap zona.
        </h2>
        <div class="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <button
                type="button"
                class="rounded-2xl bg-forest-50 p-5 text-left transition hover:shadow-soft"
                data-intensity-modal="ringan"
            >
                <div class="text-sm font-bold text-forest-900">Ringan</div>
                <p class="mt-2 text-sm leading-7 text-slate-600">
                    Easy run, recovery, dan aktivasi ringan.
                </p>
            </button>
            <button
                type="button"
                class="rounded-2xl bg-amber-50 p-5 text-left transition hover:shadow-soft"
                data-intensity-modal="sedang"
            >
                <div class="text-sm font-bold text-amber-900">Sedang</div>
                <p class="mt-2 text-sm leading-7 text-slate-600">
                    Tempo pendek, hill repeat terkontrol, dan strength menengah.
                </p>
            </button>
            <button
                type="button"
                class="rounded-2xl bg-rose-50 p-5 text-left transition hover:shadow-soft"
                data-intensity-modal="berat"
            >
                <div class="text-sm font-bold text-rose-900">Berat</div>
                <p class="mt-2 text-sm leading-7 text-slate-600">
                    Interval, simulasi race effort, dan hill repeat panjang.
                </p>
            </button>
            <button
                type="button"
                class="rounded-2xl bg-sky-50 p-5 text-left transition hover:shadow-soft"
                data-intensity-modal="recovery"
            >
                <div class="text-sm font-bold text-sky-900">Recovery</div>
                <p class="mt-2 text-sm leading-7 text-slate-600">
                    Pemulihan aktif, mobility, dan hari ringan.
                </p>
            </button>
        </div>
    </div>
</section>

<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 fade-in">
    <div class="grid gap-6 lg:grid-cols-3">
        <div
            class="rounded-[1.5rem] bg-white p-6 shadow-soft ring-1 ring-slate-200"
        >
            <p
                class="text-sm font-bold uppercase tracking-[0.22em] text-ember-600"
            >
                Jadwal Harian Contoh
            </p>
            <ul class="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>
                    <strong class="text-slate-900">Senin:</strong> recovery /
                    mobility
                </li>
                <li>
                    <strong class="text-slate-900">Selasa:</strong> easy run +
                    strides
                </li>
                <li>
                    <strong class="text-slate-900">Kamis:</strong> tempo atau
                    hill repeat
                </li>
                <li>
                    <strong class="text-slate-900">Sabtu:</strong> long run
                    trail
                </li>
            </ul>
        </div>
        <div
            class="rounded-[1.5rem] bg-forest-50 p-6 shadow-soft ring-1 ring-forest-100"
        >
            <p
                class="text-sm font-bold uppercase tracking-[0.22em] text-forest-800"
            >
                Persiapan Fisik Penunjang
            </p>
            <p class="mt-4 text-sm leading-7 text-slate-700">
                Strength, balance, ankle stability, dan core menjadi fondasi
                agar tubuh tetap efisien di tanjakan maupun turunan.
            </p>
        </div>
        <div class="rounded-[1.5rem] bg-slate-950 p-6 text-white shadow-soft">
            <p
                class="text-sm font-bold uppercase tracking-[0.22em] text-ember-200"
            >
                Prinsip Aman
            </p>
            <p class="mt-4 text-sm leading-7 text-slate-300">
                Kalau kaki terasa terlalu berat, turunkan beban, bukan memaksa
                kualitas tetap tinggi setiap hari.
            </p>
        </div>
    </div>
</section>
        `,
    "fragment-support": `
<section id="gear" class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 fade-in">
    <div class="grid gap-6 lg:grid-cols-2">
        <div
            class="rounded-[1.75rem] bg-white p-6 shadow-soft ring-1 ring-slate-200 lg:p-8"
        >
            <p
                class="text-sm font-bold uppercase tracking-[0.26em] text-ember-600"
            >
                Gear & Perlengkapan
            </p>
            <h2 class="mt-3 text-3xl font-black text-slate-900">
                Sepatu, vest, dan perlengkapan harus mendukung, bukan membebani.
            </h2>
            <ul class="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                <li>
                    <strong class="text-slate-900">Sepatu trail:</strong> grip
                    yang cocok dengan medan.
                </li>
                <li>
                    <strong class="text-slate-900">Hydration pack:</strong>
                    stabil saat dipakai lama.
                </li>
                <li>
                    <strong class="text-slate-900">Aksesori:</strong> cap, sock,
                    dan pole bila perlu.
                </li>
            </ul>
        </div>
        <div
            class="rounded-[1.75rem] bg-gradient-to-br from-forest-900 to-slate-950 p-6 text-white shadow-soft lg:p-8"
        >
            <p
                class="text-sm font-bold uppercase tracking-[0.26em] text-ember-200"
            >
                Nutrisi & Hidrasi
            </p>
            <h3 class="mt-3 text-2xl font-black">
                Latih fueling di long run sebelum race day.
            </h3>
            <p class="mt-4 text-sm leading-7 text-slate-300">
                Gunakan long run untuk uji gel, elektrolit, dan jadwal minum
                agar strategi race lebih matang.
            </p>
        </div>
    </div>
</section>

<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 fade-in">
    <div class="grid gap-6 lg:grid-cols-2">
        <div
            class="rounded-[1.75rem] bg-white p-6 shadow-soft ring-1 ring-slate-200 lg:p-8"
        >
            <p
                class="text-sm font-bold uppercase tracking-[0.26em] text-ember-600"
            >
                Recovery & Pencegahan Cedera
            </p>
            <h2 class="mt-3 text-3xl font-black text-slate-900">
                Recovery adalah bagian dari progres, bukan jeda kosong.
            </h2>
            <p class="mt-4 text-sm leading-7 text-slate-600">
                Jaga tidur, mobility, foam rolling, dan hari ringan supaya
                kualitas latihan tetap terangkat tanpa menumpuk stres
                berlebihan.
            </p>
        </div>
        <div
            class="rounded-[1.75rem] bg-white p-6 shadow-soft ring-1 ring-slate-200 lg:p-8"
        >
            <p
                class="text-sm font-bold uppercase tracking-[0.26em] text-ember-600"
            >
                Race Strategy
            </p>
            <h3 class="mt-3 text-2xl font-black text-slate-900">
                Pace konservatif di awal, progresif di akhir.
            </h3>
            <p class="mt-4 text-sm leading-7 text-slate-600">
                Gunakan effort, napas, dan kondisi kaki sebagai panduan. Jangan
                memaksa pace datar di medan trail yang berubah-ubah.
            </p>
        </div>
    </div>
</section>

<section id="cta" class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 fade-in">
    <div
        class="overflow-hidden rounded-[2rem] bg-gradient-to-br from-forest-900 via-slate-950 to-ember-700 p-8 text-white shadow-soft lg:p-12"
    >
        <div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
                <p
                    class="text-sm font-bold uppercase tracking-[0.26em] text-ember-200"
                >
                    CTA Penutup
                </p>
                <h2 class="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                    Latihan yang rapi hari ini akan terasa di garis start.
                </h2>
                <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
                    Bangun kapasitas fisik, jaga recovery, dan masuk race dengan
                    strategi yang jelas. Berlatihlah dengan arah yang tepat.
                </p>
            </div>
            <div
                class="rounded-[1.75rem] bg-white/10 p-6 ring-1 ring-white/10 backdrop-blur-md"
            >
                <div class="flex items-center gap-3 text-ember-200">
                    <i data-lucide="award" class="h-5 w-5"></i>
                    <span class="font-bold uppercase tracking-[0.2em]"
                        >Target mindset</span
                    >
                </div>
                <p class="mt-4 text-sm leading-7 text-slate-200">
                    Hari race adalah tempat mengeksekusi latihan yang sudah
                    disusun, bukan tempat mengejar ego.
                </p>
            </div>
        </div>
    </div>
</section>
        `,
    "fragment-faq-footer": `
<section id="faq" class="bg-white/85 py-16 lg:py-20 fade-in">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
            <p
                class="text-sm font-bold uppercase tracking-[0.26em] text-ember-600"
            >
                FAQ
            </p>
            <h2
                class="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl"
            >
                Pertanyaan yang paling sering muncul sebelum mulai latihan trail
                18 km.
            </h2>
        </div>
        <div class="mt-10 space-y-4" id="faqList"></div>
    </div>
</section>

<footer class="border-t border-slate-200 bg-white py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div>
                <div
                    class="text-sm font-bold uppercase tracking-[0.22em] text-forest-800"
                >
                    Latihan Trail Run BTS Ultra 18KM 2026
                </div>
                <p class="mt-3 text-sm leading-7 text-slate-600">
                    Landing page panduan latihan premium yang dipisah menjadi
                    fragment HTML agar index utama lebih ringan.
                </p>
            </div>
            <div>
                <div class="text-sm font-semibold text-slate-900">
                    Navigasi singkat
                </div>
                <div class="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600">
                    <a href="#tentang" class="hover:text-ember-700">Tentang</a>
                    <a href="#program" class="hover:text-ember-700">Program</a>
                    <a href="#gear" class="hover:text-ember-700">Gear</a>
                    <a href="#faq" class="hover:text-ember-700">FAQ</a>
                </div>
            </div>
            <div>
                <div class="text-sm font-semibold text-slate-900">Catatan</div>
                <p class="mt-3 text-sm leading-7 text-slate-600">
                    Program tetap dapat disesuaikan dengan kondisi peserta,
                    riwayat cedera, dan karakter rute lomba.
                </p>
            </div>
        </div>
        <div
            class="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between"
        >
            <p>
                © 2026 Latihan Trail Run BTS Ultra 18KM. Semua hak dilindungi.
            </p>
            <p>
                Disusun untuk kebutuhan landing page event dan training planner
                profesional.
            </p>
        </div>
    </div>
</footer>

<button
    id="backToTop"
    class="fixed bottom-5 right-5 z-50 hidden rounded-full bg-forest-800 p-4 text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-forest-700"
    aria-label="Kembali ke atas"
>
    <i data-lucide="arrow-up" class="h-5 w-5"></i>
</button>

<div
    id="intensityModal"
    class="fixed inset-0 z-[60] hidden items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm"
    aria-hidden="true"
    role="dialog"
    aria-modal="true"
    aria-labelledby="intensityModalTitle"
>
    <div class="absolute inset-0" data-modal-close></div>
    <div
        class="relative w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white shadow-soft"
    >
        <div
            class="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6"
        >
            <div>
                <p
                    class="text-xs font-bold uppercase tracking-[0.26em] text-ember-600"
                >
                    Detail Zona Latihan
                </p>
                <h3
                    id="intensityModalTitle"
                    class="mt-2 text-2xl font-black text-slate-900"
                ></h3>
            </div>
            <button
                type="button"
                class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
                data-modal-close
                aria-label="Tutup modal"
            >
                <i data-lucide="x" class="h-5 w-5"></i>
            </button>
        </div>
        <div class="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
                <p
                    id="intensityModalMeaning"
                    class="text-sm font-semibold uppercase tracking-[0.22em] text-forest-700"
                ></p>
                <p
                    id="intensityModalDescription"
                    class="mt-4 text-sm leading-7 text-slate-600"
                ></p>
                <div class="mt-6 grid gap-3 sm:grid-cols-2">
                    <div class="rounded-2xl bg-slate-50 p-4">
                        <div
                            class="text-xs font-bold uppercase tracking-[0.2em] text-slate-500"
                        >
                            Contoh gerakan
                        </div>
                        <p
                            id="intensityModalMovements"
                            class="mt-2 text-sm leading-7 text-slate-700"
                        ></p>
                    </div>
                    <div class="rounded-2xl bg-slate-50 p-4">
                        <div
                            class="text-xs font-bold uppercase tracking-[0.2em] text-slate-500"
                        >
                            Repetisi / durasi
                        </div>
                        <p
                            id="intensityModalReps"
                            class="mt-2 text-sm leading-7 text-slate-700"
                        ></p>
                    </div>
                </div>
            </div>
            <div
                class="rounded-[1.5rem] bg-gradient-to-br from-forest-900 to-slate-950 p-5 text-white"
            >
                <div class="flex items-center gap-2 text-ember-300">
                    <i data-lucide="sparkles" class="h-5 w-5"></i>
                    <span class="text-sm font-bold uppercase tracking-[0.2em]"
                        >Catatan pelaksanaan</span
                    >
                </div>
                <ul
                    id="intensityModalNotes"
                    class="mt-4 space-y-3 text-sm leading-7 text-slate-300"
                ></ul>
            </div>
        </div>
    </div>
</div>
        `,
  };

  async function loadFragment(targetId, url) {
    const target = document.getElementById(targetId);
    if (!target) return;

    const fallback = fragmentFallbacks[targetId];

    try {
      if (window.location.protocol === "file:") {
        throw new Error("Fragment fetch is not available on file://");
      }

      const response = await fetch(url, { cache: "no-cache" });
      if (!response.ok) {
        throw new Error(`Gagal memuat ${url}`);
      }

      target.innerHTML = await response.text();
    } catch (error) {
      if (!fallback) {
        throw error;
      }

      console.warn(`Memakai fallback fragment untuk ${targetId}`, error);
      target.innerHTML = fallback;
    }
  }

  function loadMainScript() {
    const script = document.createElement("script");
    script.src = "assets/js/main.js";
    document.body.appendChild(script);
  }

  window.addEventListener("DOMContentLoaded", async () => {
    try {
      for (const [targetId, url] of fragments) {
        await loadFragment(targetId, url);
      }
      loadMainScript();
    } catch (error) {
      console.error("Fragment loader failed", error);
      const app = document.getElementById("fragment-hero");
      if (app) {
        app.innerHTML = `
                    <section class="mx-auto max-w-3xl px-4 py-16 text-center text-slate-700">
                        <h1 class="text-3xl font-black text-slate-900">Gagal memuat halaman</h1>
                        <p class="mt-4 text-sm leading-7">Pastikan file dijalankan melalui hosting atau server lokal agar fetch fragment HTML bisa bekerja.</p>
                    </section>
                `;
      }
    }
  });
})();
