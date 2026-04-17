const intensityDetails = {
  easyRun: {
    title: "Easy run",
    meaning:
      "Lari santai untuk membangun basis aerobik, menjaga tubuh aktif, dan mempercepat recovery.",
    description:
      "Easy run dipakai ketika tujuan utama adalah menambah volume tanpa menekan sistem saraf. Di trail run, sesi ini juga melatih efisiensi langkah, pernapasan, dan kebiasaan bergerak konsisten.",
    movements:
      "Lari ringan 30-70 menit, cadence santai, strides 4-6 x 15 detik di akhir bila badan segar.",
    reps: "30-70 menit total, 1-2 kali per minggu, effort terasa masih bisa ngobrol.",
    notes: [
      "Gunakan ritme yang sangat nyaman, bukan pace ego.",
      "Tujuannya menyimpan energi untuk sesi kualitas.",
      "Boleh dilakukan di jalan datar, tanah, atau tanjakan sangat ringan.",
    ],
  },
  tempoRun: {
    title: "Tempo run",
    meaning: "Lari stabil pada effort yang menantang tetapi masih terkontrol.",
    description:
      "Tempo run dipakai untuk menaikkan ambang laktat dan daya tahan menahan pace. Untuk trail, tempo sering dilakukan di jalur rolling atau tanjakan landai agar tubuh belajar mempertahankan usaha saat kontur berubah.",
    movements:
      "Pemanasan 10-15 menit, lalu 2 x 8-15 menit tempo, diakhiri pendinginan 10 menit.",
    reps: "15-30 menit kerja inti, misalnya 2 x 12 menit atau 3 x 8 menit dengan jeda 2-3 menit.",
    notes: [
      "Napas berat tapi masih stabil.",
      "Jangan sprint di awal tempo.",
      "Pertahankan postur tegak dan langkah efisien.",
    ],
  },
  interval: {
    title: "Interval",
    meaning:
      "Latihan cepat singkat untuk mengembangkan speed economy dan kemampuan memulihkan napas.",
    description:
      "Interval memberi stimulus intensitas tinggi dalam durasi pendek. Ini membantu kaki lebih responsif saat tanjakan, keluar dari tikungan, atau saat ingin menambah pace di race finish.",
    movements:
      "400 m, 600 m, 800 m, atau 1-4 menit lari cepat dengan recovery jog/jalan.",
    reps: "Contoh 6 x 400 m, 5 x 800 m, atau 4 x 3 menit sesuai fase program.",
    notes: [
      "Kecepatan konsisten lebih penting daripada all-out di repetisi awal.",
      "Jeda recovery harus cukup agar teknik tetap rapi.",
      "Pilih permukaan aman dan datar untuk kontrol.",
    ],
  },
  hillRepeat: {
    title: "Hill repeat",
    meaning:
      "Repetisi tanjakan untuk membangun power kaki, napas, dan toleransi effort di elevasi.",
    description:
      "Hill repeat adalah inti penting untuk trail runner karena medan lomba sering memaksa pelari menaikkan usaha tanpa bisa mempertahankan pace datar. Sesi ini menguatkan glute, betis, hamstring, dan kapasitas aerobik sekaligus.",
    movements:
      "Lari menanjak pendek dengan langkah pendek, badan sedikit condong, ayunan tangan aktif.",
    reps: "6-10 repetisi x 45-90 detik atau 4-6 repetisi x 3-5 menit, recovery turun/jalan.",
    notes: [
      "Jangan mengejar speed mentah, kejar form yang stabil.",
      "Turun pelan sebagai recovery dan latihan kontrol.",
      "Fokus ke napas, dorongan lutut, dan kontak kaki yang efisien.",
    ],
  },
  longRun: {
    title: "Long run",
    meaning:
      "Lari panjang untuk melatih ketahanan, pembakaran energi, dan simulasi fueling.",
    description:
      "Long run adalah sesi paling spesifik untuk race 18 km karena mengajarkan tubuh bertahan lama sambil menjaga ritme makan-minum. Pada trail, long run juga melatih ketahanan otot stabilizer dan pengambilan keputusan saat lelah.",
    movements:
      "Lari 75-150 menit di permukaan campuran, bisa diselingi hiking pada tanjakan curam.",
    reps: "1 sesi per minggu, durasi naik bertahap, long run puncak mendekati simulasi race.",
    notes: [
      "Jaga effort mudah sampai sedang.",
      "Latih gel, air, dan elektrolit di sesi ini.",
      "Usahakan rute mirip race jika memungkinkan.",
    ],
  },
  recoveryRun: {
    title: "Recovery run",
    meaning:
      "Lari sangat ringan untuk memperlancar sirkulasi dan menurunkan rasa pegal.",
    description:
      "Recovery run bukan sesi untuk menambah fitness besar, melainkan menjaga tubuh tetap bergerak dan memulihkan kaki setelah latihan keras. Di trail, ini sangat membantu menjaga ritme tanpa menambah stres berlebih.",
    movements:
      "Jog santai 20-45 menit, boleh diselingi jalan kaki jika kaki masih berat.",
    reps: "1-2 kali per minggu sesuai kebutuhan pemulihan.",
    notes: [
      "Tetap ringan dari awal sampai akhir.",
      "Gunakan untuk mengecek kondisi kaki dan sendi.",
      "Jika masih sangat lelah, ganti dengan jalan santai.",
    ],
  },
  hikingPowerClimb: {
    title: "Hiking power climb",
    meaning:
      "Jalan cepat menanjak dengan dorongan power untuk kondisi tanjakan curam.",
    description:
      "Saat tanjakan terlalu curam untuk tetap berlari efisien, hiking power climb melatih Anda memindahkan effort ke pola jalan cepat yang kuat dan stabil. Ini sangat relevan untuk trail dengan elevasi tajam.",
    movements:
      "Jalan cepat menanjak, step pendek, dorongan tumit kuat, badan condong dari pergelangan kaki.",
    reps: "30-60 menit total, atau 6-12 repetisi tanjakan 1-3 menit dengan recovery turun.",
    notes: [
      "Gunakan tangan aktif seperti mendaki.",
      "Jaga napas ritmis agar tidak meledak.",
      "Ideal dipakai saat sesi hill focus atau long run berbukit.",
    ],
  },
  strengthTraining: {
    title: "Strength training",
    meaning:
      "Latihan kekuatan untuk menopang langkah, stabilitas, dan proteksi cedera.",
    description:
      "Strength training membantu pelari trail mempertahankan form saat kaki mulai lelah. Fokusnya bukan body building, melainkan kekuatan fungsional untuk glute, core, betis, paha, dan ankle.",
    movements:
      "Squat, reverse lunge, step-up, single-leg RDL, calf raise, plank, side plank, dead bug.",
    reps: "2-4 set, 6-12 repetisi per gerakan, core 30-45 detik per set.",
    notes: [
      "Gunakan beban sedang dengan teknik rapi.",
      "Prioritaskan unilateral work dan core anti-rotasi.",
      "Jangan sampai strength mengganggu kualitas lari berikutnya.",
    ],
  },
  ringan: {
    title: "Intensitas ringan",
    meaning: "Zona aman untuk membangun volume tanpa banyak stres.",
    description:
      "Label ringan biasanya dipakai untuk easy run, recovery run, atau strength ringan di awal fase program. Fokusnya adalah menjaga tubuh tetap aktif dan siap menerima latihan berikutnya.",
    movements: "Easy jog, mobility flow, core ringan, activation drill.",
    reps: "20-60 menit, atau 2-3 set ringan dengan repetisi terkontrol.",
    notes: [
      "Buat sesi terasa mudah dan menyegarkan.",
      "Cocok saat tubuh masih beradaptasi.",
      "Jangan terlalu agresif mengejar pace.",
    ],
  },
  sedang: {
    title: "Intensitas sedang",
    meaning: "Zona kerja utama untuk progres tanpa terlalu menguras tubuh.",
    description:
      "Label sedang biasanya muncul pada tempo pendek, hill repeat terkontrol, atau strength menengah. Ini adalah zona yang paling sering dipakai untuk membangun fitness sekaligus menjaga recovery tetap masuk akal.",
    movements:
      "Tempo run, hill repeat moderat, strength menengah, hiking climb.",
    reps: "15-45 menit kerja inti, atau 3-4 set dengan repetisi sedang.",
    notes: [
      "Masih bisa dijaga tanpa mengorbankan bentuk gerak.",
      "Ideal dipakai saat tubuh sudah cukup segar.",
      "Pastikan ada hari pemulihan setelahnya bila diperlukan.",
    ],
  },
  berat: {
    title: "Intensitas berat",
    meaning: "Zona menantang yang dipakai terbatas untuk stimulus spesifik.",
    description:
      "Label berat biasanya muncul pada interval, hill repeat panjang, atau long run tertentu yang mendekati simulasi race. Penggunaannya harus terukur supaya adaptasi naik tanpa memicu overtraining.",
    movements:
      "Interval cepat, hill repeat panjang, tempo keras, simulasi long run berbukit.",
    reps: "Contoh 4-6 repetisi kerja keras atau 20-40 menit kerja total dengan recovery cukup.",
    notes: [
      "Gunakan hanya saat tubuh siap.",
      "Teknik harus tetap rapi meski effort tinggi.",
      "Butuh recovery yang lebih disiplin setelah sesi.",
    ],
  },
  recovery: {
    title: "Recovery",
    meaning:
      "Zona pemulihan untuk mengembalikan kesegaran dan mencegah penumpukan beban.",
    description:
      "Recovery dipakai ketika prioritas Anda adalah menyerap adaptasi latihan dan menurunkan stres fisik. Ini bisa berupa lari sangat ringan, jalan kaki, mobility, atau deload week.",
    movements: "Jog ringan, jalan kaki, stretching, mobility, foam rolling.",
    reps: "20-40 menit aktivitas ringan atau satu hari penuh istirahat aktif.",
    notes: [
      "Recovery adalah bagian dari program, bukan tanda malas.",
      "Gunakan saat kaki terasa berat atau setelah beban tinggi.",
      "Tanpa recovery, kualitas sesi berikutnya turun.",
    ],
  },
};

const weeks = [
  {
    week: "Minggu 1",
    phase: "base",
    intensity: "ringan",
    focus: "Base building, adaptasi ritme, dan membentuk kebiasaan latihan.",
    total: "22-28 km",
    badge: "Ringan",
    days: [
      "Senin: recovery / mobility 20 menit",
      "Selasa: easy run 5 km + strides",
      "Rabu: strength ringan + core",
      "Kamis: tempo pendek 2 x 8 menit",
      "Jumat: rest aktif / mobility",
      "Sabtu: long run trail 8-10 km",
      "Minggu: recovery jog atau hike 30 menit",
    ],
  },
  {
    week: "Minggu 2",
    phase: "base",
    intensity: "ringan",
    focus: "Menambah volume ringan dan menjaga tubuh tetap segar.",
    total: "24-30 km",
    badge: "Ringan",
    days: [
      "Senin: mobility + ankle drill",
      "Selasa: easy run 6 km",
      "Rabu: strength kaki dan glute",
      "Kamis: interval ringan 6 x 400 m",
      "Jumat: rest / core singkat",
      "Sabtu: long run trail 9-11 km",
      "Minggu: recovery jog 25-35 menit",
    ],
  },
  {
    week: "Minggu 3",
    phase: "base",
    intensity: "sedang",
    focus: "Mulai mengenalkan tanjakan kecil dan kontrol cadence.",
    total: "26-32 km",
    badge: "Sedang",
    days: [
      "Senin: recovery / stretching",
      "Selasa: easy run 6-7 km",
      "Rabu: strength + balance",
      "Kamis: hill repeat 6 x 60 detik",
      "Jumat: rest aktif",
      "Sabtu: long run trail 10-12 km",
      "Minggu: recovery jog atau hike",
    ],
  },
  {
    week: "Minggu 4",
    phase: "base",
    intensity: "recovery",
    focus: "Deload ringan untuk menguatkan adaptasi sebelum naik fase.",
    total: "20-26 km",
    badge: "Recovery",
    days: [
      "Senin: mobility / core",
      "Selasa: easy run 5 km",
      "Rabu: strength ringan",
      "Kamis: tempo ringan 15 menit",
      "Jumat: rest",
      "Sabtu: long run pendek 8-9 km",
      "Minggu: jalan santai atau hike ringan",
    ],
  },
  {
    week: "Minggu 5",
    phase: "strength",
    intensity: "sedang",
    focus:
      "Strength & climbing adaptation dimulai dengan hill work lebih jelas.",
    total: "28-35 km",
    badge: "Sedang",
    days: [
      "Senin: recovery / ankle stability",
      "Selasa: easy run 7 km",
      "Rabu: strength kaki + glute",
      "Kamis: hill repeat 8 x 75 detik",
      "Jumat: rest / core",
      "Sabtu: long run trail 12-13 km",
      "Minggu: recovery jog 30 menit",
    ],
  },
  {
    week: "Minggu 6",
    phase: "strength",
    intensity: "berat",
    focus: "Menaikkan toleransi tanjakan dan kerja otot kaki.",
    total: "30-38 km",
    badge: "Berat",
    days: [
      "Senin: mobility + foam roll",
      "Selasa: easy run 6-7 km + strides",
      "Rabu: strength menengah",
      "Kamis: interval hill 5 x 3 menit",
      "Jumat: rest aktif",
      "Sabtu: long run trail 13-14 km",
      "Minggu: recovery hike atau jog",
    ],
  },
  {
    week: "Minggu 7",
    phase: "strength",
    intensity: "sedang",
    focus: "Kombinasi tempo dan climbing untuk membangun kontrol effort.",
    total: "32-40 km",
    badge: "Sedang",
    days: [
      "Senin: recovery / stretch",
      "Selasa: easy run 7 km",
      "Rabu: strength + core",
      "Kamis: tempo trail 20 menit",
      "Jumat: rest",
      "Sabtu: long run trail 14-15 km",
      "Minggu: recovery jog 30-40 menit",
    ],
  },
  {
    week: "Minggu 8",
    phase: "strength",
    intensity: "recovery",
    focus: "Deload dan menjaga kaki tetap segar untuk fase spesifik.",
    total: "24-30 km",
    badge: "Recovery",
    days: [
      "Senin: mobility",
      "Selasa: easy run 5-6 km",
      "Rabu: strength ringan",
      "Kamis: hill repeat pendek 6 x 45 detik",
      "Jumat: rest",
      "Sabtu: long run trail 10-11 km",
      "Minggu: hike santai",
    ],
  },
  {
    week: "Minggu 9",
    phase: "specific",
    intensity: "sedang",
    focus: "Endurance & race specificity dengan kontur yang makin mirip lomba.",
    total: "34-42 km",
    badge: "Sedang",
    days: [
      "Senin: recovery / mobility",
      "Selasa: easy run 7-8 km",
      "Rabu: strength maintenance",
      "Kamis: tempo 2 x 12 menit",
      "Jumat: rest / core",
      "Sabtu: long run trail 15-16 km",
      "Minggu: recovery jog atau hike",
    ],
  },
  {
    week: "Minggu 10",
    phase: "specific",
    intensity: "berat",
    focus: "Latihan fueling saat long run dan peningkatan daya tahan climbing.",
    total: "36-44 km",
    badge: "Berat",
    days: [
      "Senin: mobility + foot drill",
      "Selasa: easy run 7 km",
      "Rabu: strength singkat",
      "Kamis: hill repeat 10 x 60 detik",
      "Jumat: rest",
      "Sabtu: long run trail 16-17 km dengan fueling",
      "Minggu: recovery jog",
    ],
  },
  {
    week: "Minggu 11",
    phase: "specific",
    intensity: "sedang",
    focus: "Meningkatkan ketahanan tempo di medan campuran.",
    total: "34-42 km",
    badge: "Sedang",
    days: [
      "Senin: recovery",
      "Selasa: easy run 8 km",
      "Rabu: strength maintenance",
      "Kamis: tempo trail 25 menit",
      "Jumat: rest / mobility",
      "Sabtu: long run trail 15-16 km",
      "Minggu: hike atau recovery run",
    ],
  },
  {
    week: "Minggu 12",
    phase: "specific",
    intensity: "recovery",
    focus: "Deload terkontrol untuk menjaga adaptasi tetap tumbuh.",
    total: "26-32 km",
    badge: "Recovery",
    days: [
      "Senin: mobility",
      "Selasa: easy run 6 km",
      "Rabu: core + balance",
      "Kamis: hill pendek 5 x 60 detik",
      "Jumat: rest",
      "Sabtu: long run 11-12 km",
      "Minggu: jalan santai / recovery jog",
    ],
  },
  {
    week: "Minggu 13",
    phase: "peak",
    intensity: "berat",
    focus: "Peak block dengan simulasi race effort dan manajemen energi.",
    total: "34-40 km",
    badge: "Berat",
    days: [
      "Senin: recovery / stretch",
      "Selasa: easy run 7 km",
      "Rabu: strength ringan",
      "Kamis: tempo 3 x 8 menit",
      "Jumat: rest",
      "Sabtu: long run trail 16-18 km simulasi race",
      "Minggu: recovery jog",
    ],
  },
  {
    week: "Minggu 14",
    phase: "peak",
    intensity: "berat",
    focus: "Puncak adaptasi dan kontrol downhill dengan kelelahan terukur.",
    total: "32-38 km",
    badge: "Berat",
    days: [
      "Senin: mobility",
      "Selasa: easy run 7 km",
      "Rabu: hill repeat 8 x 90 detik",
      "Kamis: recovery run 5 km",
      "Jumat: rest / core",
      "Sabtu: long run trail 14-16 km",
      "Minggu: hike recovery",
    ],
  },
  {
    week: "Minggu 15",
    phase: "peak",
    intensity: "sedang",
    focus: "Mulai taper, volume turun tetapi rasa tajam tetap dijaga.",
    total: "24-30 km",
    badge: "Sedang",
    days: [
      "Senin: recovery",
      "Selasa: easy run 6 km + strides",
      "Rabu: strength sangat ringan",
      "Kamis: tempo singkat 15 menit",
      "Jumat: rest",
      "Sabtu: long run trail 10-12 km",
      "Minggu: recovery jog",
    ],
  },
  {
    week: "Minggu 16",
    phase: "peak",
    intensity: "recovery",
    focus: "Race week taper, kaki segar, mental siap, nutrisi terkendali.",
    total: "12-20 km + race",
    badge: "Recovery",
    days: [
      "Senin: mobility ringan",
      "Selasa: easy run 5 km",
      "Rabu: rest / activation",
      "Kamis: strides 20 menit ringan",
      "Jumat: rest total, fokus tidur",
      "Sabtu: race day BTS Ultra 18KM 2026",
      "Minggu: recovery walk dan rehidrasi",
    ],
  },
];

const faqData = [
  [
    "Apakah pemula bisa ikut program ini?",
    "Bisa, selama sudah punya kebiasaan bergerak rutin. Program ini cocok untuk pemula aktif karena progresnya bertahap dan ada fase recovery yang jelas.",
  ],
  [
    "Berapa kali latihan per minggu?",
    "Idealnya 5-6 hari aktif per minggu, termasuk 2 sesi kualitas, 1 long run, 1-2 strength, dan 1-2 hari recovery.",
  ],
  [
    "Apakah harus selalu latihan di gunung?",
    "Tidak. Jika tidak ada gunung, gunakan tanjakan pendek, treadmill incline, jembatan, tangga, atau loop berbukit untuk stimulasi climbing.",
  ],
  [
    "Bagaimana jika saya tidak punya elevasi?",
    "Anda tetap bisa berlatih dengan hill repeats, hiking power climb, stairs, dan strength kaki untuk mengganti stimulus elevasi.",
  ],
  [
    "Kapan waktu taper?",
    "Taper idealnya dimulai sekitar 2 minggu sebelum race dengan penurunan volume bertahap, sambil mempertahankan sentuhan intensitas ringan.",
  ],
  [
    "Bagaimana mengatur pace?",
    "Gunakan effort dan napas sebagai panduan utama. Pace trail harus fleksibel karena kontur, permukaan, dan elevasi akan mengubah kecepatan.",
  ],
  [
    "Apakah long run harus selalu lebih panjang?",
    "Tidak selalu. Long run harus progresif, lalu diselingi deload agar tubuh sempat menyerap adaptasi.",
  ],
  [
    "Apa tanda latihan terlalu berat?",
    "Jika kualitas tidur menurun, kaki terasa berat terus-menerus, denyut istirahat naik, atau motivasi turun drastis, kurangi beban.",
  ],
  [
    "Apakah strength training wajib?",
    "Wajib bila Anda ingin lebih aman dan stabil di trail. Strength membantu lutut, ankle, glute, dan core bekerja lebih efisien.",
  ],
  [
    "Apa yang harus dilakukan jika nyeri muncul?",
    "Hentikan sesi intensitas, evaluasi gerak, dan beri waktu recovery. Nyeri tajam atau bengkak sebaiknya tidak dipaksakan.",
  ],
];

const weeksGrid = document.getElementById("weeksGrid");
const phaseButtons = [...document.querySelectorAll(".phase-btn")];
const intensityModal = document.getElementById("intensityModal");
const intensityModalTitle = document.getElementById("intensityModalTitle");
const intensityModalMeaning = document.getElementById("intensityModalMeaning");
const intensityModalDescription = document.getElementById(
  "intensityModalDescription",
);
const intensityModalMovements = document.getElementById(
  "intensityModalMovements",
);
const intensityModalReps = document.getElementById("intensityModalReps");
const intensityModalNotes = document.getElementById("intensityModalNotes");

function hasLucide() {
  return window.lucide && typeof window.lucide.createIcons === "function";
}

function refreshIcons() {
  if (!hasLucide()) return;
  try {
    window.lucide.createIcons();
  } catch (error) {
    console.warn("Lucide icon refresh failed", error);
  }
}

function openIntensityModal(key) {
  if (!intensityModal) return;
  const data = intensityDetails[key];
  if (!data) return;
  if (
    !intensityModalTitle ||
    !intensityModalMeaning ||
    !intensityModalDescription ||
    !intensityModalMovements ||
    !intensityModalReps ||
    !intensityModalNotes
  ) {
    return;
  }

  intensityModalTitle.textContent = data.title;
  intensityModalMeaning.textContent = data.meaning;
  intensityModalDescription.textContent = data.description;
  intensityModalMovements.textContent = data.movements;
  intensityModalReps.textContent = data.reps;
  intensityModalNotes.innerHTML = data.notes
    .map(
      (note) => `
                <li class="flex gap-3">
                    <i data-lucide="check-circle-2" class="mt-1 h-5 w-5 shrink-0 text-ember-300"></i>
                    <span>${note}</span>
                </li>
            `,
    )
    .join("");

  intensityModal.classList.remove("hidden");
  intensityModal.classList.add("flex");
  intensityModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("overflow-hidden");
  refreshIcons();
}

function closeIntensityModal() {
  if (!intensityModal) return;
  intensityModal.classList.add("hidden");
  intensityModal.classList.remove("flex");
  intensityModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("overflow-hidden");
}

function intensityClass(intensity) {
  if (intensity === "berat")
    return "bg-rose-500/15 text-rose-200 ring-1 ring-rose-400/30";
  if (intensity === "sedang")
    return "bg-amber-500/15 text-amber-100 ring-1 ring-amber-400/30";
  if (intensity === "recovery")
    return "bg-sky-500/15 text-sky-100 ring-1 ring-sky-400/30";
  return "bg-emerald-500/15 text-emerald-100 ring-1 ring-emerald-400/30";
}

function phaseLabel(phase) {
  return (
    {
      base: "Minggu 1-4 · Base Building",
      strength: "Minggu 5-8 · Strength & Climbing",
      specific: "Minggu 9-12 · Endurance & Specific",
      peak: "Minggu 13-16 · Peak + Taper",
    }[phase] || phase
  );
}

function renderWeeks(filter = "all") {
  if (!weeksGrid) return;
  weeksGrid.innerHTML = weeks
    .filter((week) => (filter === "all" ? true : week.phase === filter))
    .map(
      (week) => `
                <article class="week-card rounded-[1.5rem] bg-white p-5 text-slate-800 shadow-soft ring-1 ring-slate-200" data-phase="${week.phase}">
                    <div class="flex items-start justify-between gap-4">
                        <div>
                            <div class="text-xs font-bold uppercase tracking-[0.22em] text-ember-600">${phaseLabel(week.phase)}</div>
                            <h3 class="mt-2 text-2xl font-black text-slate-950">${week.week}</h3>
                        </div>
                        <button type="button" data-intensity-modal="${week.intensity}" class="rounded-full px-3 py-1 text-xs font-bold ${intensityClass(week.intensity)} transition hover:scale-105">${week.badge}</button>
                    </div>
                    <p class="mt-4 text-sm leading-7 text-slate-600">${week.focus}</p>
                    <div class="mt-4 flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm">
                        <span class="font-semibold text-slate-700">Estimasi jarak</span>
                        <span class="font-black text-slate-900">${week.total}</span>
                    </div>
                    <div class="mt-4 space-y-2">
                        ${week.days.map((day) => `<div class="rounded-xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">${day}</div>`).join("")}
                    </div>
                </article>
            `,
    )
    .join("");

  requestAnimationFrame(() => {
    try {
      observeReveal();
    } catch (error) {
      console.warn("Reveal observer failed", error);
    }
  });
}

function renderFaq() {
  const faqList = document.getElementById("faqList");
  if (!faqList) return;

  faqList.innerHTML = faqData
    .map(
      ([question, answer], index) => `
                <div class="faq-item rounded-[1.25rem] border border-slate-200 bg-white shadow-soft">
                    <button class="faq-toggle flex w-full items-center justify-between gap-4 p-5 text-left" aria-expanded="false">
                        <span class="text-base font-semibold text-slate-900">${index + 1}. ${question}</span>
                        <span class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700"><i data-lucide="chevron-down" class="faq-icon h-4 w-4 transition-transform"></i></span>
                    </button>
                    <div class="faq-panel px-5 pb-5 text-sm leading-7 text-slate-600">${answer}</div>
                </div>
            `,
    )
    .join("");

  document.querySelectorAll(".faq-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const open = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach((other) => {
        other.classList.remove("open");
        other
          .querySelector(".faq-toggle")
          .setAttribute("aria-expanded", "false");
        other.querySelector(".faq-icon").style.transform = "rotate(0deg)";
      });
      if (!open) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        btn.querySelector(".faq-icon").style.transform = "rotate(180deg)";
      }
    });
  });
}

function observeReveal() {
  const items = document.querySelectorAll(".fade-in");
  const fills = document.querySelectorAll(".progress-fill");

  if (typeof IntersectionObserver === "undefined") {
    items.forEach((item) => item.classList.add("is-visible"));
    fills.forEach((fill) => fill.classList.add("animate"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.15 },
  );

  items.forEach((item) => observer.observe(item));

  fills.forEach((fill) => {
    observer.observe(fill.parentElement.parentElement);
    fill.parentElement.parentElement.classList.add("progress-observe");
  });

  const progressObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target
            .querySelectorAll(".progress-fill")
            .forEach((fill) => fill.classList.add("animate"));
        }
      });
    },
    { threshold: 0.4 },
  );

  document
    .querySelectorAll(".progress-observe")
    .forEach((section) => progressObserver.observe(section));
}

function bindEvents() {
  phaseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      phaseButtons.forEach((btn) => {
        btn.classList.remove("bg-ember-500", "text-white");
        btn.classList.add(
          "bg-white/10",
          "text-white",
          "ring-1",
          "ring-white/15",
        );
      });
      button.classList.add("bg-ember-500", "text-white");
      button.classList.remove("bg-white/10", "ring-1", "ring-white/15");
      renderWeeks(button.dataset.phase);
    });
  });

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-intensity-modal]");
    if (trigger) {
      openIntensityModal(trigger.getAttribute("data-intensity-modal"));
      return;
    }

    if (
      event.target.matches("[data-modal-close]") ||
      event.target.closest("[data-modal-close]")
    ) {
      closeIntensityModal();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      intensityModal &&
      !intensityModal.classList.contains("hidden")
    ) {
      closeIntensityModal();
    }
  });

  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.toggle("hidden");
      menuBtn.setAttribute("aria-expanded", String(!isHidden));
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");
      if (id.length > 1 && document.querySelector(id)) {
        event.preventDefault();
        document
          .querySelector(id)
          .scrollIntoView({ behavior: "smooth", block: "start" });
        mobileMenu.classList.add("hidden");
        if (menuBtn) {
          menuBtn.setAttribute("aria-expanded", "false");
        }
      }
    });
  });

  const navLinks = [...document.querySelectorAll(".nav-link")];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (typeof IntersectionObserver !== "undefined") {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove("active"));
            const active = navLinks.find(
              (link) => link.getAttribute("href") === `#${entry.target.id}`,
            );
            if (active) active.classList.add("active");
          }
        });
      },
      { threshold: 0.35, rootMargin: "-15% 0px -55% 0px" },
    );
    sections.forEach((section) => navObserver.observe(section));
  }

  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener(
      "scroll",
      () => {
        backToTop.classList.toggle("hidden", window.scrollY < 700);
      },
      { passive: true },
    );
    backToTop.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" }),
    );
  }
}

function init() {
  document.documentElement.classList.add("js");
  renderWeeks("all");
  renderFaq();
  bindEvents();
  refreshIcons();

  try {
    observeReveal();
  } catch (error) {
    console.warn("Initial reveal setup failed", error);
  }
}

init();
