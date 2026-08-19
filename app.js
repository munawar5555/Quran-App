const SURAHS = [
  [1,'الفاتحة','Al-Fatiha',7],[2,'البقرة','Al-Baqarah',286],[3,'آل عمران','Aal-Imran',200],
  [4,'النساء','An-Nisa',176],[5,'المائدة','Al-Maidah',120],[6,'الأنعام','Al-Anam',165],
  [7,'الأعراف','Al-Araf',206],[8,'الأنفال','Al-Anfal',75],[9,'التوبة','At-Tawbah',129],
  [10,'يونس','Yunus',109],[11,'هود','Hud',123],[12,'يوسف','Yusuf',111],
  [13,'الرعد','Ar-Rad',43],[14,'إبراهيم','Ibrahim',52],[15,'الحجر','Al-Hijr',99],
  [16,'النحل','An-Nahl',128],[17,'الإسراء','Al-Isra',111],[18,'الكهف','Al-Kahf',110],
  [19,'مريم','Maryam',98],[20,'طه','Ta-Ha',135],[21,'الأنبياء','Al-Anbiya',112],
  [22,'الحج','Al-Hajj',78],[23,'المؤمنون','Al-Muminun',118],[24,'النور','An-Nur',64],
  [25,'الفرقان','Al-Furqan',77],[26,'الشعراء','Ash-Shuara',227],[27,'النمل','An-Naml',93],
  [28,'القصص','Al-Qasas',88],[29,'العنكبوت','Al-Ankabut',69],[30,'الروم','Ar-Rum',60],
  [31,'لقمان','Luqman',34],[32,'السجدة','As-Sajdah',30],[33,'الأحزاب','Al-Ahzab',73],
  [34,'سبأ','Saba',54],[35,'فاطر','Fatir',45],[36,'يس','Ya-Sin',83],
  [37,'الصافات','As-Saffat',182],[38,'ص','Sad',88],[39,'الزمر','Az-Zumar',75],
  [40,'غافر','Ghafir',85],[41,'فصلت','Fussilat',54],[42,'الشورى','Ash-Shura',53],
  [43,'الزخرف','Az-Zukhruf',89],[44,'الدخان','Ad-Dukhan',59],[45,'الجاثية','Al-Jathiyah',37],
  [46,'الأحقاف','Al-Ahqaf',35],[47,'محمد','Muhammad',38],[48,'الفتح','Al-Fath',29],
  [49,'الحجرات','Al-Hujurat',18],[50,'ق','Qaf',45],[51,'الذاريات','Adh-Dhariyat',60],
  [52,'الطور','At-Tur',49],[53,'النجم','An-Najm',62],[54,'القمر','Al-Qamar',55],
  [55,'الرحمن','Ar-Rahman',78],[56,'الواقعة','Al-Waqiah',96],[57,'الحديد','Al-Hadid',29],
  [58,'المجادلة','Al-Mujadila',22],[59,'الحشر','Al-Hashr',24],[60,'الممتحنة','Al-Mumtahanah',13],
  [61,'الصف','As-Saff',14],[62,'الجمعة','Al-Jumuah',11],[63,'المنافقون','Al-Munafiqun',11],
  [64,'التغابن','At-Taghabun',18],[65,'الطلاق','At-Talaq',12],[66,'التحريم','At-Tahrim',12],
  [67,'الملك','Al-Mulk',30],[68,'القلم','Al-Qalam',52],[69,'الحاقة','Al-Haqqah',52],
  [70,'المعارج','Al-Maarij',44],[71,'نوح','Nuh',28],[72,'الجن','Al-Jinn',28],
  [73,'المزمل','Al-Muzzammil',20],[74,'المدثر','Al-Muddaththir',56],[75,'القيامة','Al-Qiyamah',40],
  [76,'الإنسان','Al-Insan',31],[77,'المرسلات','Al-Mursalat',50],[78,'النبأ','An-Naba',40],
  [79,'النازعات','An-Naziat',46],[80,'عبس','Abasa',42],[81,'التكوير','At-Takwir',29],
  [82,'الانفطار','Al-Infitar',19],[83,'المطففين','Al-Mutaffifin',36],[84,'الانشقاق','Al-Inshiqaq',25],
  [85,'البروج','Al-Buruj',22],[86,'الطارق','At-Tariq',17],[87,'الأعلى','Al-Ala',19],
  [88,'الغاشية','Al-Ghashiyah',26],[89,'الفجر','Al-Fajr',30],[90,'البلد','Al-Balad',20],
  [91,'الشمس','Ash-Shams',15],[92,'الليل','Al-Layl',21],[93,'الضحى','Ad-Duhaa',11],
  [94,'الشرح','Ash-Sharh',8],[95,'التين','At-Tin',8],[96,'العلق','Al-Alaq',19],
  [97,'القدر','Al-Qadr',5],[98,'البينة','Al-Bayyinah',8],[99,'الزلزلة','Az-Zalzalah',8],
  [100,'العاديات','Al-Adiyat',11],[101,'القارعة','Al-Qariah',11],[102,'التكاثر','At-Takathur',8],
  [103,'العصر','Al-Asr',3],[104,'الهمزة','Al-Humazah',9],[105,'الفيل','Al-Fil',5],
  [106,'قريش','Quraysh',4],[107,'الماعون','Al-Maun',7],[108,'الكوثر','Al-Kawthar',3],
  [109,'الكافرون','Al-Kafirun',6],[110,'النصر','An-Nasr',3],[111,'المسد','Al-Masad',5],
  [112,'الإخلاص','Al-Ikhlas',4],[113,'الفلق','Al-Falaq',5],[114,'الناس','Al-Nas',6]
];

const FATIHA = [
  {n:1, t:'بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ'},
  {n:2, t:'اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ'},
  {n:3, t:'الرَّحْمٰنِ الرَّحِيْمِ'},
  {n:4, t:'مٰلِكِ يَوْمِ الدِّيْنِ'},
  {n:5, t:'اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُ'},
  {n:6, t:'اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَ'},
  {n:7, t:'صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّآلِّيْنَ'}
];

const $ = s => document.querySelector(s);
const body = $('#reader-body');
const audio = $('#audio');
const nameEl = $('#surah-name');
const playBtn = $('#btn-play');

let currentSurah = 1;
let ayahs = [];
let currentIdx = 0;
let playing = false;
let wakeLock = null;

async function requestWakeLock() {
  if ('wakeLock' in navigator) {
    try {
      if (wakeLock === null) {
        wakeLock = await navigator.wakeLock.request('screen');
      }
    } catch (err) {}
  }
}

async function releaseWakeLock() {
  if (wakeLock !== null) {
    try {
      await wakeLock.release();
    } catch (err) {}
    wakeLock = null;
  }
}

document.addEventListener('visibilitychange', async () => {
  if (wakeLock !== null && document.visibilityState === 'visible') {
    await requestWakeLock();
  }
});

const settings = Object.assign({
  volume: 80,
  speed: 1,
  voice: 'Alafasy_128kbps',
  font: 'IndoPak'
}, JSON.parse(localStorage.getItem('quran-ui-s') || '{}'));

$('#vol').value = settings.volume;
$('#vol-val').textContent = settings.volume;
$('#spd').value = settings.speed;
$('#spd-val').textContent = settings.speed.toFixed(1);
$('#voice').value = settings.voice;
audio.volume = settings.volume / 100;
audio.playbackRate = settings.speed;

function save() {
  localStorage.setItem('quran-ui-s', JSON.stringify(settings));
}

function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (id === 'reader') {
    requestWakeLock();
  }
}

$('#btn-open-settings').onclick = () => show('settings');
$('#btn-close-settings').onclick = () => show('reader');
$('#btn-menu').onclick = () => show('surah-list-screen');
$('#btn-close-surahs').onclick = () => show('reader');

$('#vol').oninput = e => {
  settings.volume = +e.target.value;
  $('#vol-val').textContent = settings.volume;
  audio.volume = settings.volume / 100;
  save();
};
$('#spd').oninput = e => {
  settings.speed = +e.target.value;
  $('#spd-val').textContent = settings.speed.toFixed(1);
  audio.playbackRate = settings.speed;
  save();
};
$('#voice').onchange = e => {
  settings.voice = e.target.value;
  save();
  if (playing) playFrom(currentIdx);
};

const list = $('#surah-list');
list.innerHTML = SURAHS.map(([id, ar, en, cnt]) =>
  `<button class="surah-item" data-id="${id}">
    <span class="num">${id}</span>
    <span class="ar">${ar}</span>
    <span class="en">${en} · ${cnt}</span>
  </button>`
).join('');

list.onclick = e => {
  const btn = e.target.closest('[data-id]');
  if (!btn) return;
  loadSurah(+btn.dataset.id);
  show('reader');
};

function render(list, title) {
  ayahs = list;
  nameEl.textContent = title;
  body.innerHTML = '<div class="quran-container"></div>';
  const box = body.querySelector('.quran-container');

  list.forEach((a, i) => {
    const div = document.createElement('div');
    div.className = 'ayah';
    div.dataset.idx = i;
    const isBismillah = (currentSurah === 1 && i === 0);
    if (isBismillah) div.classList.add('bismillah');
    div.innerHTML = `${a.t} <span class="ayah-number">۝${toArabic(a.n)}</span>`;
    div.onclick = () => playFrom(i);
    box.appendChild(div);
  });
  currentIdx = 0;
  stopPlay();
}

function toArabic(n) {
  return String(n).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
}

async function loadSurah(id) {
  currentSurah = id;
  const meta = SURAHS.find(s => s[0] === id);
  const title = meta ? meta[1] : 'سورة';

  if (id === 1) {
    render(FATIHA, title);
  } else {
    body.innerHTML = '<div class="quran-container"><div class="ayah" style="opacity:.5">جاري التحميل…</div></div>';
    nameEl.textContent = title;
  }

  try {
    const res = await fetch(`https://api.alquran.cloud/v1/surah/${id}`);
    const data = await res.json();
    if (data.code === 200 && data.data && data.data.ayahs) {
      const list = data.data.ayahs.map(a => ({ n: a.numberInSurah, t: a.text }));
      render(list, data.data.name || title);
      return;
    }
  } catch (e) {}

  if (id !== 1) {
    body.innerHTML = '<div class="quran-container"><div class="ayah">تعذر التحميل — تحقق من الإنترنت</div></div>';
  }
}

function audioUrl(surah, ayah) {
  const s = String(surah).padStart(3, '0');
  const a = String(ayah).padStart(3, '0');
  return `https://everyayah.com/data/${settings.voice}/${s}${a}.mp3`;
}

function playFrom(idx) {
  if (idx < 0 || idx >= ayahs.length) return;
  currentIdx = idx;
  requestWakeLock();

  document.querySelectorAll('.ayah').forEach(el => el.classList.remove('active'));
  const el = document.querySelector(`.ayah[data-idx="${idx}"]`);
  if (el) {
    el.classList.add('active');
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  const a = ayahs[idx];
  audio.src = audioUrl(currentSurah, a.n);
  audio.playbackRate = settings.speed;
  audio.volume = settings.volume / 100;
  audio.play().then(() => {
    playing = true;
    playBtn.textContent = '⏸';
  }).catch(() => {
    playing = false;
    playBtn.textContent = '▶';
  });
}

function stopPlay() {
  audio.pause();
  playing = false;
  playBtn.textContent = '▶';
}

playBtn.onclick = () => {
  if (playing) {
    stopPlay();
  } else if (ayahs.length) {
    playFrom(currentIdx);
  }
};

audio.addEventListener('ended', () => {
  if (currentIdx < ayahs.length - 1) {
    playFrom(currentIdx + 1);
  } else {
    stopPlay();
  }
});

loadSurah(1).then(async () => {
  requestWakeLock();
  const existing = await getSurahOffline(1);
  if (!existing) {
    await saveSurahOffline(1, FATIHA, 'الفاتحة');
  }
});

const DB_NAME = 'quran-offline-v1';
const STORE = 'surahs';

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: 'id' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function saveSurahOffline(id, verses, name) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).put({ id, verses, name, savedAt: Date.now() });
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function getSurahOffline(id) {
  try {
    const db = await openDB();
    return await new Promise((resolve) => {
      const tx = db.transaction(STORE, 'readonly');
      const req = tx.objectStore(STORE).get(id);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch (e) {
    return null;
  }
}

async function countOffline() {
  try {
    const db = await openDB();
    return await new Promise((resolve) => {
      const tx = db.transaction(STORE, 'readonly');
      const req = tx.objectStore(STORE).count();
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(0);
    });
  } catch (e) {
    return 0;
  }
}

const dlStatus = document.getElementById('dl-status');
function setStatus(msg) {
  if (dlStatus) dlStatus.textContent = msg;
}

const _origLoadSurah = loadSurah;
loadSurah = async function (id) {
  currentSurah = id;
  const meta = SURAHS.find(s => s[0] === id);
  const title = meta ? meta[1] : 'سورة';

  const cached = await getSurahOffline(id);
  if (cached && cached.verses && cached.verses.length) {
    render(cached.verses, cached.name || title);
    setStatus(`Surah ${id} loaded from offline storage`);
    return;
  }
  await _origLoadSurah(id);
};

const btnDlCurrent = document.getElementById('btn-download-current');
if (btnDlCurrent) {
  btnDlCurrent.onclick = async () => {
    setStatus('Downloading current surah…');
    btnDlCurrent.disabled = true;
    try {
      const res = await fetch(`https://api.alquran.cloud/v1/surah/${currentSurah}`);
      const data = await res.json();
      if (data.code === 200 && data.data && data.data.ayahs) {
        const verses = data.data.ayahs.map(a => ({ n: a.numberInSurah, t: a.text }));
        const name = data.data.name || (SURAHS.find(s => s[0] === currentSurah) || [])[1] || '';
        await saveSurahOffline(currentSurah, verses, name);
        const total = await countOffline();
        setStatus(`✓ Surah ${currentSurah} saved. Total offline: ${total}/114`);
      } else {
        setStatus('Download failed – try again');
      }
    } catch (e) {
      setStatus('No internet – cannot download');
    }
    btnDlCurrent.disabled = false;
  };
}

const btnDlAll = document.getElementById('btn-download-all');
if (btnDlAll) {
  btnDlAll.onclick = async () => {
    if (!confirm('Download all 114 surahs?')) return;
    btnDlAll.disabled = true;
    btnDlCurrent.disabled = true;
    let ok = 0;
    for (let id = 1; id <= 114; id++) {
      setStatus(`Downloading ${id}/114…`);
      try {
        const existing = await getSurahOffline(id);
        if (existing && existing.verses && existing.verses.length) {
          ok++;
          continue;
        }
        const res = await fetch(`https://api.alquran.cloud/v1/surah/${id}`);
        const data = await res.json();
        if (data.code === 200 && data.data && data.data.ayahs) {
          const verses = data.data.ayahs.map(a => ({ n: a.numberInSurah, t: a.text }));
          await saveSurahOffline(id, verses, data.data.name || '');
          ok++;
        }
      } catch (e) {}
      await new Promise(r => setTimeout(r, 120));
    }
    setStatus(`✓ Done. ${ok}/114 surahs saved offline`);
    btnDlAll.disabled = false;
    btnDlCurrent.disabled = false;
  };
}

$('#btn-open-settings').addEventListener('click', async () => {
  const n = await countOffline();
  if (n > 0) setStatus(`${n}/114 surahs available offline`);
  else setStatus('No surahs downloaded yet');
});

let zoom = parseInt(localStorage.getItem('quran-zoom') || '100', 10);
const zoomVal = document.getElementById('zoom-val');

let initialPinchDist = null;
let baseZoom = zoom;

body.addEventListener('touchstart', e => {
  requestWakeLock();
  if (e.touches.length === 2) {
    initialPinchDist = Math.hypot(
      e.touches[0].clientX - e.touches[1].clientX,
      e.touches[0].clientY - e.touches[1].clientY
    );
    baseZoom = zoom;
  }
}, { passive: true });

body.addEventListener('touchmove', e => {
  if (e.touches.length === 2 && initialPinchDist !== null) {
    const currentDist = Math.hypot(
      e.touches[0].clientX - e.touches[1].clientX,
      e.touches[0].clientY - e.touches[1].clientY
    );
    const scaleFactor = currentDist / initialPinchDist;
    zoom = Math.min(300, Math.max(60, Math.round(baseZoom * scaleFactor)));
    applyZoom();
  }
}, { passive: true });

body.addEventListener('touchend', e => {
  if (e.touches.length < 2) {
    initialPinchDist = null;
  }
}, { passive: true });

function applyZoom() {
  const baseSize = 34;
  const currentSize = Math.round(baseSize * (zoom / 100));

  document.querySelectorAll('.ayah').forEach(el => {
    if (el.classList.contains('bismillah')) {
      el.style.fontSize = Math.round(30 * (zoom / 100)) + 'px';
    } else {
      el.style.fontSize = currentSize + 'px';
    }
  });

  if (zoomVal) zoomVal.textContent = zoom + '%';
  localStorage.setItem('quran-zoom', zoom);
}

document.getElementById('zoom-in').onclick = () => {
  zoom = Math.min(300, zoom + 15);
  applyZoom();
};
document.getElementById('zoom-out').onclick = () => {
  zoom = Math.max(60, zoom - 15);
  applyZoom();
};

const _origRender = render;
render = function(list, title) {
  _origRender(list, title);
  applyZoom();
  markBookmarks();
};

let bookmarks = new Set(JSON.parse(localStorage.getItem('quran-bookmarks') || '[]'));

function bmKey(surah, ayah) {
  return surah + ':' + ayah;
}

function saveBookmarks() {
  localStorage.setItem('quran-bookmarks', JSON.stringify([...bookmarks]));
}

function markBookmarks() {
  document.querySelectorAll('.ayah').forEach(el => {
    const idx = +el.dataset.idx;
    if (isNaN(idx) || !ayahs[idx]) return;
    const key = bmKey(currentSurah, ayahs[idx].n);
    let btn = el.querySelector('.bm');
    if (!btn) {
      btn = document.createElement('button');
      btn.className = 'bm';
      btn.type = 'button';
      btn.textContent = '☆';
      btn.onclick = (e) => {
        e.stopPropagation();
        toggleBookmark(key, btn);
      };
      el.appendChild(btn);
    }
    if (bookmarks.has(key)) {
      btn.textContent = '★';
      btn.classList.add('on');
    } else {
      btn.textContent = '☆';
      btn.classList.remove('on');
    }
  });
}

function toggleBookmark(key, btn) {
  if (bookmarks.has(key)) {
    bookmarks.delete(key);
    if (btn) { btn.textContent = '☆'; btn.classList.remove('on'); }
  } else {
    bookmarks.add(key);
    if (btn) { btn.textContent = '★'; btn.classList.add('on'); }
  }
  saveBookmarks();
  updateBookmarkBtn();
}

function updateBookmarkBtn() {
  const btn = document.getElementById('btn-bookmark-toggle');
  if (!btn || !ayahs[currentIdx]) return;
  const key = bmKey(currentSurah, ayahs[currentIdx].n);
  if (bookmarks.has(key)) {
    btn.textContent = '★ Bookmarked';
  } else {
    btn.textContent = '☆ Bookmark';
  }
}

document.getElementById('btn-bookmark-toggle').onclick = () => {
  if (!ayahs[currentIdx]) return;
  const key = bmKey(currentSurah, ayahs[currentIdx].n);
  toggleBookmark(key);
  markBookmarks();
};

const _origPlayFrom = playFrom;
playFrom = function(idx) {
  _origPlayFrom(idx);
  updateBookmarkBtn();
};

document.getElementById('btn-bookmarks').onclick = () => {
  if (!bookmarks.size) {
    alert('No bookmarks yet.\nTap ☆ on any ayah.');
    return;
  }
  const sorted = [...bookmarks].sort((a, b) => {
    const [sa, aa] = a.split(':').map(Number);
    const [sb, ab] = b.split(':').map(Number);
    return sa - sb || aa - ab;
  });
  const choice = prompt('Bookmarks:\n' + sorted.join('\n') + '\n\nType a key (e.g. 2:255) to go there, or Cancel');
  if (choice && /^\d+:\d+$/.test(choice.trim())) {
    const [s, a] = choice.trim().split(':').map(Number);
    loadSurah(s).then(() => {
      show('reader');
      setTimeout(() => {
        const idx = ayahs.findIndex(x => x.n === a);
        if (idx >= 0) {
          const el = document.querySelector(`.ayah[data-idx="${idx}"]`);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          currentIdx = idx;
          updateBookmarkBtn();
        }
      }, 300);
    });
  }
};

let readingMode = localStorage.getItem('quran-reading-mode') || 'lines';
const modeBtn = document.getElementById('btn-mode-toggle');

function applyReadingMode() {
  const box = document.querySelector('.quran-container');
  if (!box) return;
  box.classList.toggle('paragraph-mode', readingMode === 'paragraph');
  if (modeBtn) {
    modeBtn.textContent = readingMode === 'paragraph' ? '≣ أسطر' : '☰ فقرات';
  }
}

if (modeBtn) {
  modeBtn.onclick = () => {
    readingMode = readingMode === 'paragraph' ? 'lines' : 'paragraph';
    localStorage.setItem('quran-reading-mode', readingMode);
    applyReadingMode();
  };
}

const _origRenderFinal = render;
render = function (list, title) {
  _origRenderFinal(list, title);
  applyReadingMode();
};

