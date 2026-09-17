/* ========================================================
   NIGHTMARE ESCAPES - 3 LEVEL HOROR DENGAN HANTU KHUSUS
   Level 1: Kamar Terkutuk -> Hantu dari asset/level1.png
   Level 2: Rumah Sakit Terbengkalai -> Hantu dari asset/level2.png
   Level 3: Sekolah Angker -> Hantu Guru / Janitor Sekolah (SVG)
   ======================================================== */

/* 1. ASSET VISUAL UNTUK MASING-MASING HANTU */

// LEVEL 1: Gambar dari asset/level1.png (Berkeliaran di ruangan)
const ghostLvl1Roaming = `
  <img src="asset/level1.png" alt="ghost" style="
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: brightness(0.55) saturate(1.2) drop-shadow(0 0 14px rgba(220,38,38,0.7));
  "/>
`;

// LEVEL 1: Jumpscare layar penuh menggunakan asset/level1.png
const ghostLvl1Jumpscare = `
  <img src="asset/level1.png" alt="jumpscare" style="
    width: 85vmin;
    height: 85vmin;
    object-fit: contain;
    filter: contrast(200%) brightness(0.8) saturate(1.8) drop-shadow(0 0 50px #ff0000);
  "/>
`;

// LEVEL 2: Gambar dari asset/level2.png (Berkeliaran di ruangan)
const ghostLvl2Roaming = `
  <img src="asset/level2.png" alt="ghost" style="
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: brightness(0.5) saturate(1.3) drop-shadow(0 0 16px rgba(220,38,38,0.8));
  "/>
`;

// LEVEL 2: Jumpscare layar penuh menggunakan asset/level2.png
const ghostLvl2Jumpscare = `
  <img src="asset/level2.png" alt="jumpscare" style="
    width: 85vmin;
    height: 85vmin;
    object-fit: contain;
    filter: contrast(200%) brightness(0.75) saturate(1.8) drop-shadow(0 0 55px #ff0000);
  "/>
`;

// LEVEL 3: HANTU GURU / JANITOR SEKOLAH
const ghostLvl3Roaming = `
  <svg viewBox="0 0 100 120" fill="none">
    <!-- Sosok Bungkuk Memakai Jas Tua / Baju Kerja Abu-abu -->
    <path d="M50 12 C32 12 18 30 18 65 C18 95 12 112 26 112 C36 112 42 98 50 98 C58 98 64 112 74 112 C88 112 82 95 82 65 C82 30 68 12 50 12 Z" fill="#334155" stroke="#1e293b" stroke-width="2"/>
    <!-- Rambut Abu-abu Botak Tengah -->
    <path d="M26 35 C18 20 32 8 50 8 C68 8 82 20 74 35" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
    <!-- Tongkat Penggaris Kayu Panjang / Tangkai Sapu -->
    <line x1="82" y1="40" x2="88" y2="115" stroke="#78350f" stroke-width="4"/>
    <!-- Kacamata Bulat Retak dengan Mata Kuning Menyala -->
    <circle cx="40" cy="40" r="9" stroke="#eab308" stroke-width="2" fill="#09090b"/>
    <circle cx="40" cy="40" r="3" fill="#facc15"/>
    <line x1="49" y1="40" x2="51" y2="40" stroke="#eab308" stroke-width="2"/>
    <circle cx="60" cy="40" r="9" stroke="#eab308" stroke-width="2" fill="#09090b"/>
    <circle cx="60" cy="40" r="3" fill="#facc15"/>
    <line x1="36" y1="36" x2="44" y2="44" stroke="#dc2626" stroke-width="1.5"/>
    <!-- Mulut Sinis dengan Gigi Menguning -->
    <path d="M38 60 Q50 72 62 60" stroke="#000" stroke-width="4" fill="none"/>
  </svg>
`;

const ghostLvl3Jumpscare = `
  <svg viewBox="0 0 200 200" fill="none">
    <!-- Wajah Guru / Janitor Tua Keriput Menyeramkan -->
    <path d="M100 15 C45 15 25 55 25 105 C25 145 42 185 100 185 C158 185 175 145 175 105 C175 55 155 15 100 15 Z" fill="#94a3b8" stroke="#1e293b" stroke-width="5"/>
    <!-- Kerutan Dahi Mendalam -->
    <path d="M60 40 Q100 25 140 40" stroke="#334155" stroke-width="3" fill="none"/>
    <path d="M65 52 Q100 38 135 52" stroke="#334155" stroke-width="3" fill="none"/>
    <!-- Kacamata Bulat Retak Berdarah -->
    <circle cx="65" cy="85" r="25" stroke="#ca8a04" stroke-width="4" fill="#050505"/>
    <circle cx="65" cy="85" r="8" fill="#facc15"/>
    <line x1="50" y1="70" x2="80" y2="100" stroke="#ef4444" stroke-width="3"/>
    <line x1="90" y1="85" x2="110" y2="85" stroke="#ca8a04" stroke-width="4"/>
    <circle cx="135" cy="85" r="25" stroke="#ca8a04" stroke-width="4" fill="#050505"/>
    <circle cx="135" cy="85" r="8" fill="#facc15"/>
    <line x1="120" y1="95" x2="150" y2="75" stroke="#ef4444" stroke-width="3"/>
    <!-- Hidung Keriput Besar -->
    <path d="M96 115 L100 95 L104 115 Z" fill="#1e293b"/>
    <!-- Dasi Sekolah Tercekik di Leher -->
    <polygon points="92,185 108,185 114,200 86,200" fill="#991b1b"/>
    <!-- Mulut Tua Menganga dengan Gigi Kuning Busuk -->
    <ellipse cx="100" cy="148" rx="36" ry="28" fill="#000" stroke="#450a0a" stroke-width="5"/>
    <rect x="80" y="132" width="8" height="12" fill="#fef08a" stroke="#ca8a04"/>
    <rect x="94" y="130" width="8" height="14" fill="#fef08a" stroke="#ca8a04"/>
    <rect x="108" y="132" width="7" height="11" fill="#fef08a" stroke="#ca8a04"/>
    <rect x="88" y="152" width="8" height="12" fill="#fef08a" stroke="#ca8a04"/>
    <rect x="102" y="150" width="8" height="14" fill="#fef08a" stroke="#ca8a04"/>
  </svg>
`;

/* 2. DATA 3 LEVEL & KONFIGURASI HANTU */
const levelsData = [
  {
    id: 1,
    title: "KAMAR TERKUTUK",
    subtitle: "Level 1: Kamar Bawah Tanah Angker",
    themeClass: "theme-bedroom",
    ghostName: "Alvi",
    roamingSvg: ghostLvl1Roaming,
    jumpscareSvg: ghostLvl1Jumpscare,
    soundType: "banshee",
    scratches: ["JANGAN SOROT TEPAT KE WAJAHNYA", "DIA MERASAKAN KETIKAMU MENCARI"],
    spots: [
      {
        id: "lukisan",
        name: "Lukisan Miring",
        style: "top: 14%; left: 16%;",
        html: `
          <div class="furniture-visual painting">
            <svg viewBox="0 0 60 70" fill="none">
              <rect width="60" height="70" fill="#2d1b1b" stroke="#78350f" stroke-width="4"/>
              <circle cx="30" cy="28" r="14" fill="#1c1917"/>
              <ellipse cx="25" cy="26" rx="2" ry="3" fill="#ef4444"/>
              <ellipse cx="35" cy="26" rx="2" ry="3" fill="#ef4444"/>
            </svg>
          </div>
        `
      },
      {
        id: "lemari",
        name: "Lemari Tua",
        style: "top: 24%; right: 10%;",
        html: `
          <div class="furniture-visual wardrobe">
            <div class="wardrobe-door"></div>
            <div class="wardrobe-door"><div class="door-knob"></div></div>
          </div>
        `
      },
      {
        id: "kasur",
        name: "Bawah Kasur",
        style: "bottom: 9%; left: 8%;",
        html: `
          <div class="furniture-visual bed">
            <div class="bed-mattress">
              <div class="pillow"></div>
              <div class="blood-stain"></div>
            </div>
          </div>
        `
      },
      {
        id: "cermin",
        name: "Meja Cermin",
        style: "bottom: 12%; left: 45%;",
        html: `
          <div class="furniture-visual vanity">
            <div class="mirror"><div class="crack-line"></div></div>
            <div class="desk"></div>
          </div>
        `
      },
      {
        id: "laci",
        name: "Laci Meja",
        style: "bottom: 22%; left: 33%;",
        html: `
          <div class="furniture-visual nightstand">
            <div class="drawer"></div>
            <div class="drawer"></div>
          </div>
        `
      },
      {
        id: "kotak",
        name: "Kotak Usang",
        style: "bottom: 10%; right: 30%;",
        html: `
          <div class="furniture-visual wooden-box">
            <div class="box-lid"></div>
            <div class="box-lock"></div>
          </div>
        `
      }
    ]
  },
  {
    id: 2,
    title: "RUMAH SAKIT TERBENGKALAI",
    subtitle: "Level 2: Ruang Rawat & Operasi 404",
    themeClass: "theme-hospital",
    ghostName: "Bu Pras",
    roamingSvg: ghostLvl2Roaming,
    jumpscareSvg: ghostLvl2Jumpscare,
    soundType: "nurse",
    scratches: ["PASIEN RUANG 404 MATI", "SUSTER MASIH BERKELIARAN DISINI"],
    spots: [
      {
        id: "stretcher",
        name: "Ranjang Pasien",
        style: "bottom: 10%; left: 8%;",
        html: `
          <div class="furniture-visual stretcher">
            <div class="stretcher-sheet"></div>
            <div class="stretcher-blood"></div>
          </div>
        `
      },
      {
        id: "medcabinet",
        name: "Lemari Obat",
        style: "top: 18%; left: 20%;",
        html: `
          <div class="furniture-visual med-cabinet">
            <div class="med-cross"></div>
          </div>
        `
      },
      {
        id: "wheelchair",
        name: "Kursi Roda",
        style: "bottom: 14%; left: 38%;",
        html: `
          <div class="furniture-visual wheelchair">
            <div class="wheelchair-wheel"></div>
          </div>
        `
      },
      {
        id: "opdesk",
        name: "Meja Operasi",
        style: "bottom: 18%; right: 32%;",
        html: `
          <div class="furniture-visual op-desk">
            <div class="op-tools"></div>
          </div>
        `
      },
      {
        id: "curtain",
        name: "Tirai Pasien",
        style: "top: 20%; right: 12%;",
        html: `
          <div class="furniture-visual hospital-curtain"></div>
        `
      },
      {
        id: "ecgmonitor",
        name: "Monitor ECG",
        style: "bottom: 12%; right: 18%;",
        html: `
          <div class="furniture-visual ecg-monitor">
            <div class="ecg-line"></div>
          </div>
        `
      }
    ]
  },
  {
    id: 3,
    title: "SEKOLAH ANGKER MALAM HARI",
    subtitle: "Level 3: Ruang Kelas Terkutuk 13",
    themeClass: "theme-school",
    ghostName: "Calvin Lucas",
    roamingSvg: ghostLvl3Roaming,
    jumpscareSvg: ghostLvl3Jumpscare,
    soundType: "teacher",
    scratches: ["JANGAN MENOLEH KE BELAKANG", "BEL KEMATIAN BERBUNYI"],
    spots: [
      {
        id: "blackboard",
        name: "Papan Tulis Darah",
        style: "top: 14%; left: 16%;",
        html: `
          <div class="furniture-visual blackboard">
            JANGAN BUKA LOKER
          </div>
        `
      },
      {
        id: "teacherdesk",
        name: "Meja Guru",
        style: "bottom: 15%; left: 35%;",
        html: `
          <div class="furniture-visual teacher-desk">
            <div class="desk-books"></div>
          </div>
        `
      },
      {
        id: "schoollocker",
        name: "Loker Siswa",
        style: "top: 22%; right: 10%;",
        html: `
          <div class="furniture-visual school-locker">
            <div class="locker-vent"></div>
            <div class="locker-vent"></div>
            <div class="locker-vent"></div>
          </div>
        `
      },
      {
        id: "backpack",
        name: "Tas Murid Robek",
        style: "bottom: 10%; left: 12%;",
        html: `
          <div class="furniture-visual backpack">
            <div class="backpack-zipper"></div>
          </div>
        `
      },
      {
        id: "wallclock",
        name: "Jam Dinding Mati",
        style: "top: 10%; left: 45%;",
        html: `
          <div class="furniture-visual wall-clock">
            <div class="clock-hand-hour"></div>
            <div class="clock-hand-min"></div>
          </div>
        `
      },
      {
        id: "trophycase",
        name: "Lemari Piala",
        style: "bottom: 12%; right: 28%;",
        html: `
          <div class="furniture-visual trophy-case">
            <div class="trophy-cup"></div>
          </div>
        `
      }
    ]
  }
];

/* 3. STATE GAME UTAMA */
let currentLevelIndex = 0;
let isGameRunning = false;
let lives = 3;
let keysFound = 0;
const totalKeys = 3;
let locksOpened = 0;
const totalLocks = 3;
let isGameOver = false;
let isInvulnerable = false;
let isPaused = false;

// Posisi Kursor & Hantu
let mouseX = -500;
let mouseY = -500;
let ghostX = 400;
let ghostY = 250;

// State Menggeledah (Hold M1)
let isSearching = false;
let activeSpotId = null;
let activeSpotEl = null;
let searchProgress = 0;
const searchDuration = 2200;
let searchInterval = null;
let ghostWanderInterval = null;

let activeSpotsData = {};

/* 4. REFERENSI ELEMEN DOM */
const room = document.getElementById('room');
const ghost = document.getElementById('ghost');
const ghostContent = document.getElementById('ghost-content');
const furnitureLayer = document.getElementById('furniture-layer');
const levelDisplay = document.getElementById('level-display');
const levelTitleDecor = document.getElementById('level-title-decor');
const wallScratch1 = document.getElementById('wall-scratch-1');
const wallScratch2 = document.getElementById('wall-scratch-2');
const keysCountText = document.getElementById('keys-count');
const infoNotification = document.getElementById('info-notification');

const startScreen = document.getElementById('start-screen');
const levelCompleteScreen = document.getElementById('level-complete-screen');
const levelCompleteMessage = document.getElementById('level-complete-message');
const winScreen = document.getElementById('win-screen');
const gameoverScreen = document.getElementById('gameover-screen');
const pauseScreen = document.getElementById('pause-screen');
const btnResume = document.getElementById('btn-resume');
const btnPauseRetry = document.getElementById('btn-pause-retry');
const btnPauseMainMenu = document.getElementById('btn-pause-mainmenu');
const jumpscareOverlay = document.getElementById('jumpscare-overlay');
const jumpscareFaceContainer = document.getElementById('jumpscare-face-container');
const flashlightOverlay = document.getElementById('flashlight-overlay');

const searchHud = document.getElementById('search-hud');
const searchHudTitle = document.getElementById('search-hud-title');
const searchBarFill = document.getElementById('search-bar-fill');
const proximityContainer = document.getElementById('proximity-container');
const proximityText = document.getElementById('proximity-text');
const proximityFill = document.getElementById('proximity-fill');

const gameContainer = document.getElementById('game-container');
const exitDoor = document.getElementById('exit-door');
const doorStatusBadge = document.getElementById('door-status-badge');
const medkit = document.getElementById('medkit');

// State Medkit Pemulih Nyawa
let medkitX = 300;
let medkitY = 400;
let isMedkitActive = false;
let medkitMoveInterval = null;
let medkitRespawnTimeout = null;

const btnStart = document.getElementById('btn-start');
const btnNextLevel = document.getElementById('btn-next-level');
const btnRestart = document.getElementById('btn-restart');
const btnRetry = document.getElementById('btn-retry');

/* 5. SISTEM AUDIO (FILE EKSTERNAL MP3 & SYNTHESIZER FALLBACK) */
let audioCtx = null;

const AUDIO_CONFIG = {
  // Backsound Berbeda per Level
  bgmLevels: [
    'audio/bgm1.mp3', // Level 1 (Kamar Terkutuk)
    'audio/bgm2.mp3', // Level 2 (Rumah Sakit Terbengkalai)
    'audio/bgm3.mp3'  // Level 3 (Sekolah Angker)
  ],
  bgmDefault: 'audio/bgm.mp3',   // Fallback jika hanya ada 1 file bgm.mp3
  jumpscare: 'audio/jumpscare.mp3' // 1 file jumpscare untuk semua level
};

let bgmPlayer = null;
let bgmVolume = 0.35;
let sfxVolume = 0.95;
let isBgmMuted = false;

function startLevelBGM(levelIdx) {
  try {
    if (bgmPlayer) {
      bgmPlayer.pause();
      bgmPlayer.currentTime = 0;
    }

    const trackPath = AUDIO_CONFIG.bgmLevels[levelIdx] || AUDIO_CONFIG.bgmDefault;
    bgmPlayer = new Audio(trackPath);
    bgmPlayer.loop = true;
    bgmPlayer.volume = isBgmMuted ? 0 : bgmVolume;

    bgmPlayer.play().catch(() => {
      // Jika bgm1/bgm2/bgm3 tidak ditemukan, coba bgm.mp3
      if (trackPath !== AUDIO_CONFIG.bgmDefault) {
        bgmPlayer = new Audio(AUDIO_CONFIG.bgmDefault);
        bgmPlayer.loop = true;
        bgmPlayer.volume = isBgmMuted ? 0 : bgmVolume;
        bgmPlayer.play().catch(() => {});
      }
    });
  } catch (e) {}
}

function stopBGM() {
  if (bgmPlayer) {
    bgmPlayer.pause();
    bgmPlayer.currentTime = 0;
  }
}

function setBgmVolume(val) {
  bgmVolume = val;
  if (bgmPlayer && !isBgmMuted) {
    bgmPlayer.volume = bgmVolume;
  }
}

function setSfxVolume(val) {
  sfxVolume = val;
}

function toggleBgmMute(muted) {
  isBgmMuted = muted;
  if (bgmPlayer) {
    bgmPlayer.volume = isBgmMuted ? 0 : bgmVolume;
  }
}

function playMenuClickSound() {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(320, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(640, audioCtx.currentTime + 0.08);
  gain.gain.setValueAtTime(0.18 * sfxVolume, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.08);
}

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// Suara pemulihan nyawa saat mengambil Medkit
function playHealSound() {
  if (!audioCtx) return;
  const now = audioCtx.currentTime;
  const notes = [523.25, 659.25, 783.99, 1046.50];
  notes.forEach((freq, idx) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now + idx * 0.08);
    gain.gain.setValueAtTime(0.25, now + idx * 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.3);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now + idx * 0.08);
    osc.stop(now + idx * 0.08 + 0.3);
  });
}

function playKeyPickupSound() {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(520, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(980, audioCtx.currentTime + 0.25);

  gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);

  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.3);
}

function playRummageTick() {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(80, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.08);

  gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);

  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.08);
}

function playHeartbeatSound() {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(70, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(35, audioCtx.currentTime + 0.12);

  gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.12);

  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.12);
}

function playUnlockPadlockSound() {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(300, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(750, audioCtx.currentTime + 0.15);

  gain.gain.setValueAtTime(0.35, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);

  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.25);
}

function playDoorOpenSound() {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(140, audioCtx.currentTime);
  osc.frequency.linearRampToValueAtTime(90, audioCtx.currentTime + 0.7);

  gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.8);

  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.8);
}

function playInspectSound() {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(130, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + 0.15);

  gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);

  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.15);
}

// SUARA JUMPSCARE (1 FILE audio/jumpscare.mp3 ATAU SYNTHESIZER FALLBACK DENGAN CALLBACK ENDED)
function playJumpscareSound(soundType, onEndedCallback) {
  let finished = false;
  const finish = () => {
    if (!finished) {
      finished = true;
      if (typeof onEndedCallback === 'function') {
        onEndedCallback();
      }
    }
  };

  const audioObj = new Audio(AUDIO_CONFIG.jumpscare);
  audioObj.volume = 0.95;

  // Selesai saat audio MP3 selesai berputar
  audioObj.addEventListener('ended', () => {
    finish();
  });

  audioObj.addEventListener('error', () => {
    playSynthesizerJumpscare(soundType);
    setTimeout(finish, 2000);
  });

  audioObj.play()
    .catch(() => {
      // Jika file audio/jumpscare.mp3 belum ada atau diblokir browser
      playSynthesizerJumpscare(soundType);
      setTimeout(finish, 2000);
    });

  // Safety timer: maksimal 8 detik
  setTimeout(finish, 8000);
}

function playSynthesizerJumpscare(soundType) {
  if (!audioCtx) return;
  const now = audioCtx.currentTime;

  if (soundType === 'banshee') {
    // LEVEL 1: Jeritan Kuntilanak Melengking Tajam
    const osc = audioCtx.createOscillator();
    const oscGain = audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(1300, now);
    osc.frequency.linearRampToValueAtTime(200, now + 1.2);

    oscGain.gain.setValueAtTime(0.85, now);
    oscGain.gain.exponentialRampToValueAtTime(0.01, now + 1.2);
    osc.connect(oscGain);
    oscGain.connect(audioCtx.destination);
    osc.start();
    osc.stop(now + 1.2);
  } else if (soundType === 'nurse') {
    // LEVEL 2: Suster Berdarah (Nada Flatline Rumah Sakit + Jeritan Syringe)
    const osc = audioCtx.createOscillator();
    const oscGain = audioCtx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.linearRampToValueAtTime(440, now + 1.2);

    oscGain.gain.setValueAtTime(0.75, now);
    oscGain.gain.exponentialRampToValueAtTime(0.01, now + 1.2);
    osc.connect(oscGain);
    oscGain.connect(audioCtx.destination);
    osc.start();
    osc.stop(now + 1.2);
  } else {
    // LEVEL 3: Guru / Janitor Sekolah (Bel Sekolah Menggelegar + Raungan Berat)
    const osc = audioCtx.createOscillator();
    const oscGain = audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(450, now);
    osc.frequency.linearRampToValueAtTime(90, now + 1.3);

    oscGain.gain.setValueAtTime(0.95, now);
    oscGain.gain.exponentialRampToValueAtTime(0.01, now + 1.3);
    osc.connect(oscGain);
    oscGain.connect(audioCtx.destination);
    osc.start();
    osc.stop(now + 1.3);
  }

  // Lapisan White Noise Kasar
  const bufferSize = audioCtx.sampleRate * 1.2;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = audioCtx.createBufferSource();
  noise.buffer = buffer;

  const filter = audioCtx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = (soundType === 'nurse') ? 2200 : 1600;
  filter.Q.value = 2;

  const noiseGain = audioCtx.createGain();
  noiseGain.gain.setValueAtTime(0.9, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 1.2);

  noise.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(audioCtx.destination);

  noise.start();
  noise.stop(now + 1.2);
}

/* 6. KONTROL MOUSE & DETEKSI TENGAH SENTER */
window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  document.documentElement.style.setProperty('--x', `${mouseX}px`);
  document.documentElement.style.setProperty('--y', `${mouseY}px`);

  if (!isGameRunning || isGameOver || isInvulnerable || isPaused) return;

  checkFlashlightHitGhost();
});

function checkFlashlightHitGhost() {
  if (!isGameRunning || isInvulnerable || isGameOver || isPaused) return;

  const ghostCenterX = ghostX + 42;
  const ghostCenterY = ghostY + 52;
  const distance = Math.hypot(mouseX - ghostCenterX, mouseY - ghostCenterY);

  // Hanya memicu jumpscare jika senter TEPAT di titik tengah hantu (< 48px)
  if (distance < 48) {
    triggerJumpscare('ghost_flashlight');
  }
}

/* 7. PERILAKU HANTU (AI) */
function moveGhostRandomly() {
  if (!isGameRunning || isGameOver || isSearching || isPaused) return;

  const marginX = 120;
  const marginY = 120;
  const maxX = window.innerWidth - marginX - 100;
  const maxY = window.innerHeight - marginY - 120;

  ghostX = Math.floor(Math.random() * (maxX - marginX) + marginX);
  ghostY = Math.floor(Math.random() * (maxY - marginY) + marginY);

  ghost.style.left = `${ghostX}px`;
  ghost.style.top = `${ghostY}px`;
}

function creepGhostTowardsPlayer() {
  const ghostCenterX = ghostX + 42;
  const ghostCenterY = ghostY + 52;

  const dx = mouseX - ghostCenterX;
  const dy = mouseY - ghostCenterY;
  const distance = Math.hypot(dx, dy);

  const creepSpeed = 3.8;

  if (distance > 10) {
    ghostX += (dx / distance) * creepSpeed;
    ghostY += (dy / distance) * creepSpeed;
    ghost.style.left = `${ghostX}px`;
    ghost.style.top = `${ghostY}px`;
  }

  updateProximityIndicator(distance);

  if (distance < 180) {
    if (Math.random() < 0.65) playHeartbeatSound();
  } else if (distance < 320) {
    if (Math.random() < 0.35) playHeartbeatSound();
  } else {
    if (Math.random() < 0.15) playHeartbeatSound();
  }

  if (distance < 48) {
    triggerJumpscare('ghost_caught_searching');
  }
}

function updateProximityIndicator(distance) {
  if (!proximityContainer || !proximityText || !proximityFill) return;

  const approxMeters = Math.max(1, Math.round((distance - 50) / 32));
  const closenessPercent = Math.min(100, Math.max(5, Math.round((1 - (distance - 55) / 550) * 100)));
  proximityFill.style.width = `${closenessPercent}%`;

  if (distance > 380) {
    proximityContainer.className = 'proximity-safe';
    proximityText.innerText = `JARAK HANTU: AMAN (~${approxMeters}m)`;
  } else if (distance > 240) {
    proximityContainer.className = 'proximity-warning';
    proximityText.innerText = `JARAK HANTU: MENDEKAT (~${approxMeters}m)`;
  } else if (distance > 140) {
    proximityContainer.className = 'proximity-danger';
    proximityText.innerText = `JARAK HANTU: BAHAYA! (~${approxMeters}m)`;
  } else {
    proximityContainer.className = 'proximity-critical';
    proximityText.innerText = `⚠️ AWAS! HANTU SANGAT DEKAT (~${approxMeters}m)!`;
  }
}

function startGhostWanderLoop() {
  moveGhostRandomly();
  if (ghostWanderInterval) clearInterval(ghostWanderInterval);
  ghostWanderInterval = setInterval(() => {
    moveGhostRandomly();
  }, 3800);
}

/* 8. MEMUAT LEVEL & MEMASANG VISUAL HANTU KHUSUS */
function loadLevel(levelIdx) {
  currentLevelIndex = levelIdx;
  const level = levelsData[levelIdx];

  levelDisplay.innerText = `${level.id} / ${levelsData.length}`;
  levelTitleDecor.innerText = level.title;
  wallScratch1.innerText = level.scratches[0];
  wallScratch2.innerText = level.scratches[1];

  room.className = level.themeClass;

  // Pasang Visual Hantu Khusus yang Berkeliaran di Level Ini
  ghostContent.innerHTML = level.roamingSvg;

  // Pasang Visual Wajah Jumpscare Khusus Level Ini
  jumpscareFaceContainer.innerHTML = level.jumpscareSvg;

  // Render 6 Perabotan Level
  furnitureLayer.innerHTML = '';
  activeSpotsData = {};

  const spotIds = level.spots.map(s => s.id);
  const shuffled = [...spotIds].sort(() => 0.5 - Math.random());

  const keySpots = [shuffled[0], shuffled[1], shuffled[2]];
  const fakeSpot = shuffled[3];

  level.spots.forEach(spot => {
    let content = 'empty';
    if (keySpots.includes(spot.id)) content = 'key';
    else if (spot.id === fakeSpot) content = 'fake_key';

    activeSpotsData[spot.id] = {
      name: spot.name,
      searched: false,
      content: content
    };

    const spotDiv = document.createElement('div');
    spotDiv.className = 'furniture-spot';
    spotDiv.id = `spot-${spot.id}`;
    spotDiv.setAttribute('data-id', spot.id);
    spotDiv.style.cssText = spot.style;

    spotDiv.innerHTML = `
      ${spot.html}
      <div class="spot-label">${spot.name}</div>
      <div class="spot-action-hint">Tahan M1</div>
    `;

    spotDiv.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      if (!isGameRunning || isGameOver || isInvulnerable || isPaused) return;

      const sData = activeSpotsData[spot.id];
      if (sData.searched) {
        infoNotification.innerText = `${sData.name} sudah diperiksa, tidak ada apa-apa lagi.`;
        infoNotification.style.color = '#94a3b8';
        return;
      }

      startSearching(spot.id, spotDiv);
    });

    furnitureLayer.appendChild(spotDiv);
  });

  // Reset Gembok Pintu Exit
  exitDoor.classList.remove('ready-to-unlock');
  doorStatusBadge.innerText = '3 GEMBOK TERKUNCI';
  for (let i = 1; i <= 3; i++) {
    const lockEl = document.getElementById(`lock-${i}`);
    if (lockEl) {
      lockEl.className = 'door-lock locked';
      lockEl.innerText = '🔒';
    }
  }
}

/* 9. SISTEM TAHAN M1 MENGGELEDAH */
function startSearching(spotId, spotEl) {
  isSearching = true;
  activeSpotId = spotId;
  activeSpotEl = spotEl;
  searchProgress = 0;

  const spot = activeSpotsData[spotId];
  searchHudTitle.innerText = `SEDANG MENGGELEDAH ${spot.name.toUpperCase()}...`;
  searchBarFill.style.width = '0%';
  searchHud.style.display = 'flex';

  const ghostCenterX = ghostX + 42;
  const ghostCenterY = ghostY + 52;
  const initialDist = Math.hypot(mouseX - ghostCenterX, mouseY - ghostCenterY);
  updateProximityIndicator(initialDist);

  ghost.classList.add('stalking');
  infoNotification.innerText = `⚠️ Sedang menggeledah ${spot.name}! Hantu diam-diam merayap mendekat!`;
  infoNotification.style.color = '#f87171';

  const tickInterval = 50;
  const progressIncrement = (tickInterval / searchDuration) * 100;

  if (searchInterval) clearInterval(searchInterval);
  searchInterval = setInterval(() => {
    if (!isSearching || !isGameRunning || isGameOver || isInvulnerable || isPaused) {
      clearInterval(searchInterval);
      return;
    }

    searchProgress += progressIncrement;
    searchBarFill.style.width = `${Math.min(100, searchProgress)}%`;
    playRummageTick();

    creepGhostTowardsPlayer();

    if (searchProgress >= 100) {
      clearInterval(searchInterval);
      finishSearching();
    }
  }, tickInterval);
}

function cancelSearching(reason) {
  if (!isSearching) return;
  isSearching = false;
  activeSpotId = null;
  activeSpotEl = null;
  searchProgress = 0;

  if (searchInterval) clearInterval(searchInterval);
  searchHud.style.display = 'none';
  ghost.classList.remove('stalking');

  infoNotification.innerText = reason;
  infoNotification.style.color = '#94a3b8';
}

function finishSearching() {
  const spotId = activeSpotId;
  const spotEl = activeSpotEl;

  isSearching = false;
  activeSpotId = null;
  activeSpotEl = null;

  searchHud.style.display = 'none';
  ghost.classList.remove('stalking');

  const spot = activeSpotsData[spotId];
  spot.searched = true;
  spotEl.classList.add('searched');

  if (spot.content === 'key') {
    keysFound++;
    keysCountText.innerText = keysFound;
    playKeyPickupSound();

    if (keysFound >= totalKeys) {
      exitDoor.classList.add('ready-to-unlock');
      doorStatusBadge.innerText = 'KLIK UNTUK BUKA GEMBOK (0/3)';
      infoNotification.innerText = `KUNCI LENGKAP (3/3)! Cepat lari ke PINTU EXIT dan buka 3 gembok baja!`;
      infoNotification.style.color = '#4ade80';
    } else {
      infoNotification.innerText = `Kamu menemukan KUNCI EMAS di ${spot.name}! (${keysFound}/3)`;
      infoNotification.style.color = '#fbbf24';
    }
  } else if (spot.content === 'fake_key') {
    triggerJumpscare('fake_key_trap');
  } else {
    playInspectSound();
    infoNotification.innerText = `Selesai memeriksa ${spot.name}... hanya ada debu dan kotoran.`;
    infoNotification.style.color = '#cbd5e1';
  }
}

window.addEventListener('mouseup', (e) => {
  if (e.button === 0 && isSearching) {
    cancelSearching('Penggeledahan dibatalkan!');
  }
});

window.addEventListener('blur', () => {
  if (isSearching) cancelSearching('Penggeledahan terputus!');
});

/* 10. SISTEM PINTU EXIT & TRANSISI */
exitDoor.addEventListener('click', (e) => {
  e.stopPropagation();
  if (!isGameRunning || isGameOver || isInvulnerable || isPaused) return;

  if (keysFound < totalKeys) {
    playInspectSound();
    infoNotification.innerText = `Pintu terkunci 3 gembok baja! Kamu baru punya ${keysFound}/3 kunci.`;
    infoNotification.style.color = '#ef4444';
    return;
  }

  if (locksOpened < totalLocks) {
    locksOpened++;
    const lockEl = document.getElementById(`lock-${locksOpened}`);
    if (lockEl) {
      lockEl.classList.remove('locked');
      lockEl.classList.add('unlocked');
      lockEl.innerText = '🔓';
    }
    playUnlockPadlockSound();

    if (locksOpened < totalLocks) {
      doorStatusBadge.innerText = `GEMBOK TERBUKA (${locksOpened}/3)`;
      infoNotification.innerText = `Gembok ke-${locksOpened} berhasil dibuka! Buka sisa gemboknya!`;
      infoNotification.style.color = '#22c55e';
    } else {
      doorStatusBadge.innerText = 'SEMUA GEMBOK TERBUKA!';
      infoNotification.innerText = 'Semua gembok terbuka! Pintu besi berderit membuka lebar!';
      infoNotification.style.color = '#4ade80';
      playDoorOpenSound();

      setTimeout(() => {
        onLevelCompleted();
      }, 700);
    }
  }
});

function onLevelCompleted() {
  isGameRunning = false;
  if (gameContainer) gameContainer.classList.remove('playing');
  stopBGM();
  if (ghostWanderInterval) clearInterval(ghostWanderInterval);
  if (searchInterval) clearInterval(searchInterval);
  searchHud.style.display = 'none';
  despawnMedkit(0);

  if (currentLevelIndex < levelsData.length - 1) {
    const currentLvl = levelsData[currentLevelIndex];
    const nextLvl = levelsData[currentLevelIndex + 1];
    levelCompleteMessage.innerHTML = `
      Kamu berhasil membuka semua gembok dan kabur dari <b>${currentLvl.title}</b>!<br><br>
      Tantangan berikutnya: <b>${nextLvl.subtitle}</b>. Hati-hati dengan <b>${nextLvl.ghostName}</b>!
    `;
    levelCompleteScreen.style.display = 'flex';
  } else {
    winScreen.style.display = 'flex';
  }
}

/* 11. SISTEM MEDKIT PEMULIH NYAWA (TERSEBAR ACAK DI RUANGAN) */
function spawnMedkit() {
  if (!isGameRunning || isGameOver) return;
  isMedkitActive = true;
  if (medkit) {
    medkit.style.display = 'flex';
    // Letakkan langsung di posisi acak di ruangan
    placeMedkitRandomly();
  }

  if (medkitMoveInterval) clearInterval(medkitMoveInterval);
  // Medkit melayang berpindah tempat acak setiap 6 detik
  medkitMoveInterval = setInterval(() => {
    if (isMedkitActive && isGameRunning && !isGameOver) {
      placeMedkitRandomly();
    }
  }, 6000);
}

function placeMedkitRandomly() {
  if (!medkit || !isMedkitActive) return;
  const paddingX = 90;
  const paddingY = 100;
  const maxX = Math.max(paddingX + 100, window.innerWidth - paddingX - 60);
  const maxY = Math.max(paddingY + 100, window.innerHeight - paddingY - 80);

  medkitX = Math.floor(Math.random() * (maxX - paddingX) + paddingX);
  medkitY = Math.floor(Math.random() * (maxY - paddingY) + paddingY);

  medkit.style.left = `${medkitX}px`;
  medkit.style.top = `${medkitY}px`;
}

function despawnMedkit(respawnDelayMs) {
  isMedkitActive = false;
  if (medkit) medkit.style.display = 'none';
  if (medkitMoveInterval) clearInterval(medkitMoveInterval);
  if (medkitRespawnTimeout) clearTimeout(medkitRespawnTimeout);

  if (respawnDelayMs > 0) {
    medkitRespawnTimeout = setTimeout(() => {
      if (isGameRunning && !isGameOver) {
        spawnMedkit();
      }
    }, respawnDelayMs);
  }
}

if (medkit) {
  medkit.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!isGameRunning || isGameOver || isInvulnerable || isPaused || !isMedkitActive) return;

    if (lives < 3) {
      lives++;
      updateLivesUI();
      playHealSound();
      infoNotification.innerText = `Kamu mengambil Medkit! Nyawa bertambah 1! (❤️ ${lives}/3)`;
      infoNotification.style.color = '#4ade80';
      // Sembunyikan dan muncul lagi 14 detik kemudian di tempat lain
      despawnMedkit(14000);
    } else {
      playInspectSound();
      infoNotification.innerText = `Nyawa kamu sudah penuh (3/3)! Simpan Medkit untuk nanti.`;
      infoNotification.style.color = '#38bdf8';
    }
  });
}

/* 12. JUMPSCARE & NYAWA */
function updateLivesUI() {
  for (let i = 1; i <= 3; i++) {
    const heartEl = document.getElementById(`heart-${i}`);
    if (i <= lives) {
      heartEl.classList.remove('lost');
      heartEl.innerText = '❤️';
    } else {
      heartEl.classList.add('lost');
      heartEl.innerText = '🖤';
    }
  }
}

function triggerJumpscare(cause) {
  if (!isGameRunning || isGameOver || isInvulnerable) return;

  cancelSearching('Diserang saat menggeledah!');

  isInvulnerable = true;
  lives--;
  updateLivesUI();

  // Matikan sementara BGM agar jeritan jumpscare keras & mengagetkan
  if (bgmPlayer) {
    bgmPlayer.pause();
  }

  const currentLevel = levelsData[currentLevelIndex];
  jumpscareOverlay.style.display = 'flex';
  moveGhostRandomly();

  // Adegan jumpscare selesai tepat saat audio jumpscare selesai
  playJumpscareSound(currentLevel.soundType, () => {
    jumpscareOverlay.style.display = 'none';

    if (lives <= 0) {
      gameOver();
    } else {
      isInvulnerable = false;
      // Lanjutkan kembali BGM jika masih ada sisa nyawa
      if (bgmPlayer && isGameRunning && !isGameOver) {
        bgmPlayer.play().catch(() => {});
      }
      let msg = '';
      if (cause === 'ghost_caught_searching') {
        msg = `${currentLevel.ghostName.toUpperCase()} MENYERGAPMU SAAT MENGGELEDAH! Sisa nyawa: ${lives}`;
      } else if (cause === 'fake_key_trap') {
        msg = `KAU MENYENTUH KUNCI PALSU JELMAAN ${currentLevel.ghostName.toUpperCase()}! Sisa nyawa: ${lives}`;
      } else {
        msg = `SENTER MENYOROT TEPAT KE WAJAH ${currentLevel.ghostName.toUpperCase()}! Sisa nyawa: ${lives}`;
      }
      infoNotification.innerText = msg;
      infoNotification.style.color = '#ef4444';
    }
  });
}

function gameOver() {
  isGameOver = true;
  isGameRunning = false;
  if (gameContainer) gameContainer.classList.remove('playing');
  stopBGM();
  if (ghostWanderInterval) clearInterval(ghostWanderInterval);
  if (searchInterval) clearInterval(searchInterval);
  searchHud.style.display = 'none';
  despawnMedkit(0);
  gameoverScreen.style.display = 'flex';
}

/* 13. SIKLUS GAME & EVENT TOMBOL */
function startLevelGame(levelIdx) {
  initAudio();
  startLevelBGM(levelIdx); // Putar backsound khusus untuk level ini
  isGameRunning = true;
  if (gameContainer) gameContainer.classList.add('playing');
  isGameOver = false;
  isInvulnerable = false;
  isPaused = false;
  isSearching = false;
  lives = 3;
  keysFound = 0;
  locksOpened = 0;

  keysCountText.innerText = '0';
  updateLivesUI();

  startScreen.style.display = 'none';
  levelCompleteScreen.style.display = 'none';
  winScreen.style.display = 'none';
  gameoverScreen.style.display = 'none';
  jumpscareOverlay.style.display = 'none';
  searchHud.style.display = 'none';
  if (pauseScreen) pauseScreen.style.display = 'none';

  loadLevel(levelIdx);

  const level = levelsData[levelIdx];
  infoNotification.innerText = `Waspada terhadap ${level.ghostName}! Tahan M1 untuk mencari 3 kunci. Ada Medkit berkeliaran untuk pulihkan nyawa!`;
  infoNotification.style.color = '#e2e8f0';

  startGhostWanderLoop();
  spawnMedkit();
}

/* ========================================================
   14. EVENT LISTENER MENU UTAMA, MODAL, & PENGATURAN
   ======================================================== */

// Tombol Mulai Permainan dari Menu Utama
const btnStartGame = document.getElementById('btn-start-game');
if (btnStartGame) {
  btnStartGame.addEventListener('click', () => {
    playMenuClickSound();
    startLevelGame(0);
  });
}

// Buka Modal-modal Menu
const modalLevels = document.getElementById('modal-levels');
const modalHowToPlay = document.getElementById('modal-howtoplay');
const modalSettings = document.getElementById('modal-settings');
const modalCredits = document.getElementById('modal-credits');

const btnOpenLevels = document.getElementById('btn-open-levels');
if (btnOpenLevels) {
  btnOpenLevels.addEventListener('click', () => {
    playMenuClickSound();
    if (modalLevels) modalLevels.style.display = 'flex';
  });
}

const btnOpenHowToPlay = document.getElementById('btn-open-howtoplay');
if (btnOpenHowToPlay) {
  btnOpenHowToPlay.addEventListener('click', () => {
    playMenuClickSound();
    if (modalHowToPlay) modalHowToPlay.style.display = 'flex';
  });
}

const btnOpenSettings = document.getElementById('btn-open-settings');
if (btnOpenSettings) {
  btnOpenSettings.addEventListener('click', () => {
    playMenuClickSound();
    if (modalSettings) modalSettings.style.display = 'flex';
  });
}

const btnOpenCredits = document.getElementById('btn-open-credits');
if (btnOpenCredits) {
  btnOpenCredits.addEventListener('click', () => {
    playMenuClickSound();
    if (modalCredits) modalCredits.style.display = 'flex';
  });
}

// Tutup Modal via Tombol Close / Kembali
document.querySelectorAll('[data-close]').forEach(btn => {
  btn.addEventListener('click', () => {
    playMenuClickSound();
    const targetId = btn.getAttribute('data-close');
    const targetModal = document.getElementById(targetId);
    if (targetModal) targetModal.style.display = 'none';
  });
});

// Pilih & Mainkan Level Langsung dari Modal Level
document.querySelectorAll('.level-select-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    playMenuClickSound();
    const lvl = parseInt(btn.getAttribute('data-level'), 10) || 0;
    if (modalLevels) modalLevels.style.display = 'none';
    startLevelGame(lvl);
  });
});

// Tombol Kembali ke Menu Utama dari Layar Game Over
const btnToMainMenu = document.getElementById('btn-to-mainmenu');
if (btnToMainMenu) {
  btnToMainMenu.addEventListener('click', () => {
    playMenuClickSound();
    if (gameContainer) gameContainer.classList.remove('playing');
    gameoverScreen.style.display = 'none';
    startScreen.style.display = 'flex';
  });
}

// Pengaturan Volume BGM & SFX
const bgmSlider = document.getElementById('bgm-volume');
const bgmValText = document.getElementById('bgm-volume-val');
if (bgmSlider && bgmValText) {
  bgmSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    bgmValText.innerText = `${val}%`;
    setBgmVolume(val / 100);
  });
}

const sfxSlider = document.getElementById('sfx-volume');
const sfxValText = document.getElementById('sfx-volume-val');
if (sfxSlider && sfxValText) {
  sfxSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    sfxValText.innerText = `${val}%`;
    setSfxVolume(val / 100);
  });
}

const muteCheckbox = document.getElementById('mute-bgm-checkbox');
if (muteCheckbox) {
  muteCheckbox.addEventListener('change', (e) => {
    toggleBgmMute(e.target.checked);
  });
}

// Tombol Next Level, Retry, Restart
if (btnNextLevel) {
  btnNextLevel.addEventListener('click', () => {
    playMenuClickSound();
    startLevelGame(currentLevelIndex + 1);
  });
}

if (btnRetry) {
  btnRetry.addEventListener('click', () => {
    playMenuClickSound();
    startLevelGame(currentLevelIndex);
  });
}

if (btnRestart) {
  btnRestart.addEventListener('click', () => {
    playMenuClickSound();
    if (gameContainer) gameContainer.classList.remove('playing');
    winScreen.style.display = 'none';
    startScreen.style.display = 'flex';
  });
}

/* ========================================================
   15. SISTEM PAUSE (TEKAN ESC UNTUK JEDA)
   ======================================================== */
function pauseGame() {
  if (!isGameRunning || isGameOver || isPaused) return;

  // Batalkan penggeledahan yang sedang berjalan agar tidak nyangkut
  if (isSearching) cancelSearching('Penggeledahan terputus karena dijeda!');

  isPaused = true;
  if (ghostWanderInterval) clearInterval(ghostWanderInterval);
  if (medkitMoveInterval) clearInterval(medkitMoveInterval);
  if (bgmPlayer) bgmPlayer.pause();

  if (pauseScreen) pauseScreen.style.display = 'flex';
}

function resumeGame() {
  if (!isGameRunning || isGameOver || !isPaused) return;

  isPaused = false;
  if (pauseScreen) pauseScreen.style.display = 'none';

  startGhostWanderLoop();
  if (isMedkitActive) {
    if (medkitMoveInterval) clearInterval(medkitMoveInterval);
    medkitMoveInterval = setInterval(() => {
      if (isMedkitActive && isGameRunning && !isGameOver && !isPaused) {
        placeMedkitRandomly();
      }
    }, 6000);
  }
  if (bgmPlayer && !isGameOver) bgmPlayer.play().catch(() => {});
}

function togglePause() {
  if (isPaused) {
    playMenuClickSound();
    resumeGame();
  } else {
    pauseGame();
  }
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' || e.key === 'Esc') {
    if (!isGameRunning || isGameOver) return;
    togglePause();
  }
});

if (btnResume) {
  btnResume.addEventListener('click', () => {
    playMenuClickSound();
    resumeGame();
  });
}

if (btnPauseRetry) {
  btnPauseRetry.addEventListener('click', () => {
    playMenuClickSound();
    isPaused = false;
    if (pauseScreen) pauseScreen.style.display = 'none';
    startLevelGame(currentLevelIndex);
  });
}

if (btnPauseMainMenu) {
  btnPauseMainMenu.addEventListener('click', () => {
    playMenuClickSound();
    isPaused = false;
    isGameRunning = false;
    if (pauseScreen) pauseScreen.style.display = 'none';
    if (gameContainer) gameContainer.classList.remove('playing');
    stopBGM();
    if (ghostWanderInterval) clearInterval(ghostWanderInterval);
    if (searchInterval) clearInterval(searchInterval);
    despawnMedkit(0);
    searchHud.style.display = 'none';
    startScreen.style.display = 'flex';
  });
}
