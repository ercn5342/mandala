const QUESTIONS = [
  {
    category: "DASAR KOMPUTER",
    question: "Komponen komputer yang berfungsi sebagai tempat penyimpanan sementara saat program berjalan adalah ...",
    options: ["SSD", "RAM", "ROM", "Motherboard"],
    answer: 1,
    explanation: "RAM menyimpan data sementara yang sedang digunakan CPU. Isinya dapat berubah dan akan hilang saat komputer dimatikan."
  },
  {
    category: "JARINGAN KOMPUTER",
    question: "Perangkat yang menghubungkan beberapa jaringan dan meneruskan paket data ke tujuan yang tepat adalah ...",
    options: ["Router", "Keyboard", "Monitor", "Scanner"],
    answer: 0,
    explanation: "Router meneruskan paket data antarjaringan berdasarkan informasi alamat tujuan."
  },
  {
    category: "PEMROGRAMAN",
    question: "Apa hasil dari ekspresi JavaScript berikut: 10 % 3?",
    options: ["3", "1", "0", "10"],
    answer: 1,
    explanation: "Operator % menghasilkan sisa pembagian. 10 dibagi 3 bersisa 1."
  },
  {
    category: "SISTEM OPERASI",
    question: "Manakah contoh sistem operasi yang bersifat open-source?",
    options: ["Microsoft Windows", "macOS", "Ubuntu Linux", "iOS"],
    answer: 2,
    explanation: "Ubuntu merupakan distribusi Linux yang dikembangkan sebagai perangkat lunak open-source."
  },
  {
    category: "BASIS DATA",
    question: "Dalam tabel database relasional, kolom yang digunakan untuk mengidentifikasi setiap baris secara unik disebut ...",
    options: ["Foreign key", "Primary key", "Index file", "Query"],
    answer: 1,
    explanation: "Primary key memiliki nilai unik untuk membedakan setiap record dalam sebuah tabel."
  },
  {
    category: "KEAMANAN DIGITAL",
    question: "Tindakan paling tepat ketika menerima email mencurigakan yang meminta kata sandi adalah ...",
    options: ["Membalas dengan kata sandi", "Membuka semua lampiran", "Mengabaikan tautan dan memeriksa pengirim", "Meneruskan ke semua kontak"],
    answer: 2,
    explanation: "Email seperti itu bisa menjadi phishing. Jangan klik tautan atau memberikan data rahasia, dan periksa pengirim melalui kanal resmi."
  },
  {
    category: "INTERNET",
    question: "Apa kepanjangan dari URL?",
    options: ["Uniform Resource Locator", "Universal Read Link", "United Router Line", "User Reference List"],
    answer: 0,
    explanation: "URL adalah alamat yang digunakan untuk menemukan sumber daya di internet."
  },
  {
    category: "PEMROGRAMAN",
    question: "Struktur kontrol yang digunakan untuk menjalankan kode berdasarkan suatu kondisi adalah ...",
    options: ["if-else", "import", "comment", "print"],
    answer: 0,
    explanation: "if-else memilih blok kode yang dijalankan berdasarkan apakah kondisi bernilai benar atau salah."
  },
  {
    category: "HARDWARE",
    question: "Komponen yang bertugas mengeksekusi instruksi dan mengolah data pada komputer adalah ...",
    options: ["CPU", "Casing", "Speaker", "Power supply"],
    answer: 0,
    explanation: "CPU (Central Processing Unit) menjalankan instruksi program dan melakukan operasi pemrosesan data."
  },
  {
    category: "JARINGAN KOMPUTER",
    question: "Alamat IP 127.0.0.1 umumnya merujuk pada ...",
    options: ["Alamat broadcast", "Loopback atau komputer sendiri", "DNS publik", "Gateway Wi-Fi"],
    answer: 1,
    explanation: "127.0.0.1 adalah alamat loopback yang mengarah kembali ke perangkat itu sendiri."
  },
  {
    category: "BASIS DATA",
    question: "Perintah SQL untuk mengambil data dari tabel adalah ...",
    options: ["GET", "SELECT", "PULL", "OPEN"],
    answer: 1,
    explanation: "SELECT digunakan untuk membaca atau mengambil data dari satu atau beberapa tabel."
  },
  {
    category: "PENGEMBANGAN WEB",
    question: "Bahasa yang digunakan untuk mengatur tampilan dan tata letak halaman web adalah ...",
    options: ["HTML", "CSS", "SQL", "PHP"],
    answer: 1,
    explanation: "CSS mengatur presentasi halaman, seperti warna, ukuran, jarak, dan tata letak."
  },
  {
    category: "PENGEMBANGAN WEB",
    question: "HTML merupakan singkatan dari ...",
    options: ["HyperText Markup Language", "High Transfer Machine Language", "Hyperlink Text Main Logic", "Home Tool Markup Language"],
    answer: 0,
    explanation: "HTML adalah bahasa markup untuk menyusun struktur dan konten halaman web."
  },
  {
    category: "ALGORITMA",
    question: "Urutan langkah logis dan sistematis untuk menyelesaikan masalah disebut ...",
    options: ["Algoritma", "Bandwidth", "Protokol", "Enkripsi"],
    answer: 0,
    explanation: "Algoritma adalah rangkaian langkah terdefinisi untuk menyelesaikan masalah atau mencapai tujuan."
  },
  {
    category: "JARINGAN KOMPUTER",
    question: "Protokol yang umum digunakan untuk mengakses halaman web secara aman adalah ...",
    options: ["FTP", "HTTPS", "SMTP", "DHCP"],
    answer: 1,
    explanation: "HTTPS menggunakan enkripsi TLS untuk melindungi komunikasi antara browser dan server web."
  },
  {
    category: "SISTEM OPERASI",
    question: "Fungsi utama sistem operasi adalah ...",
    options: ["Mengelola sumber daya komputer", "Mencetak dokumen saja", "Membuat koneksi listrik", "Menggantikan semua aplikasi"],
    answer: 0,
    explanation: "Sistem operasi mengelola CPU, memori, penyimpanan, perangkat, serta menyediakan layanan bagi aplikasi."
  },
  {
    category: "PEMROGRAMAN",
    question: "Dalam pemrograman, variabel digunakan untuk ...",
    options: ["Menyimpan nilai atau data", "Menghapus sistem operasi", "Mempercepat koneksi internet", "Mengganti perangkat keras"],
    answer: 0,
    explanation: "Variabel adalah nama yang merujuk pada tempat penyimpanan nilai yang dapat digunakan dalam program."
  },
  {
    category: "KEAMANAN DIGITAL",
    question: "Manakah contoh kata sandi yang paling kuat?",
    options: ["12345678", "password", "namasaya", "Kopi!Langit7-Biru"],
    answer: 3,
    explanation: "Kata sandi yang panjang dan tidak mudah ditebak, dengan kombinasi karakter, umumnya lebih kuat. Jangan gunakan contoh ini sebagai kata sandi pribadi."
  },
  {
    category: "JARINGAN KOMPUTER",
    question: "Perangkat yang mengubah sinyal agar perangkat dapat terhubung melalui jaringan penyedia layanan internet disebut ...",
    options: ["Modem", "Joystick", "Projector", "Plotter"],
    answer: 0,
    explanation: "Modem melakukan modulasi dan demodulasi sinyal untuk komunikasi melalui media jaringan tertentu."
  },
  {
    category: "PEMROGRAMAN",
    question: "Tipe data yang hanya memiliki dua kemungkinan nilai, true atau false, adalah ...",
    options: ["String", "Boolean", "Integer", "Float"],
    answer: 1,
    explanation: "Boolean merepresentasikan dua keadaan logika: true dan false."
  },
  {
    category: "PENGEMBANGAN WEB",
    question: "JavaScript pada halaman web paling umum digunakan untuk ...",
    options: ["Menambahkan interaksi dan perilaku dinamis", "Mengganti fungsi CPU", "Menyimpan listrik", "Membuat kabel jaringan"],
    answer: 0,
    explanation: "JavaScript dapat merespons tindakan pengguna, memvalidasi formulir, dan memperbarui tampilan halaman."
  },
  {
    category: "JARINGAN KOMPUTER",
    question: "Apa fungsi DNS dalam jaringan internet?",
    options: ["Menerjemahkan nama domain menjadi alamat IP", "Mengenkripsi seluruh file komputer", "Mengatur kecerahan monitor", "Menyimpan kata sandi browser"],
    answer: 0,
    explanation: "DNS membantu menemukan alamat IP yang terkait dengan nama domain, misalnya saat membuka sebuah situs."
  },
  {
    category: "HARDWARE",
    question: "Manakah perangkat keluaran (output device)?",
    options: ["Mouse", "Keyboard", "Monitor", "Microphone"],
    answer: 2,
    explanation: "Monitor menampilkan informasi dari komputer sehingga termasuk perangkat output."
  },
  {
    category: "REKAYASA PERANGKAT LUNAK",
    question: "Dalam Git, perintah untuk melihat status perubahan file pada repository adalah ...",
    options: ["git status", "git remove", "git launch", "git showtime"],
    answer: 0,
    explanation: "git status menampilkan kondisi working tree dan staging area, termasuk file yang berubah atau belum dilacak."
  },
  {
    category: "BASIS DATA",
    question: "Hubungan antartabel dalam database relasional biasanya dibangun menggunakan ...",
    options: ["Foreign key", "Font size", "File audio", "Cache browser"],
    answer: 0,
    explanation: "Foreign key menghubungkan record pada satu tabel dengan primary key di tabel lain."
  }
];

const TOTAL_QUESTIONS = 5;
const QUESTION_TIME = 20;
let selectedQuestions = [];
let currentIndex = 0;
let score = 0;
let timeLeft = QUESTION_TIME;
let timerInterval = null;
let answersHistory = [];
let hasAnswered = false;

const $ = (id) => document.getElementById(id);
const welcomeScreen = $("welcomeScreen");
const quizScreen = $("quizScreen");
const resultScreen = $("resultScreen");
const answerGrid = $("answerGrid");

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showScreen(screen) {
  [welcomeScreen, quizScreen, resultScreen].forEach((item) => item.classList.add("hidden"));
  screen.classList.remove("hidden");
}

function startQuiz() {
  selectedQuestions = shuffle(QUESTIONS).slice(0, TOTAL_QUESTIONS);
  currentIndex = 0;
  score = 0;
  answersHistory = [];
  $("scoreLabel").textContent = "Skor: 0";
  $("reviewList").classList.add("hidden");
  $("reviewList").innerHTML = "";
  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  clearInterval(timerInterval);
  hasAnswered = false;
  const question = selectedQuestions[currentIndex];
  const shuffledOptions = shuffle(question.options.map((text, originalIndex) => ({
    text,
    isCorrect: originalIndex === question.answer
  })));

  $("questionCounter").textContent = `PERTANYAAN ${currentIndex + 1} DARI ${TOTAL_QUESTIONS}`;
  $("progressFill").style.width = `${(currentIndex / TOTAL_QUESTIONS) * 100}%`;
  $("questionCategory").textContent = question.category;
  $("questionText").textContent = question.question;
  $("feedback").className = "feedback hidden";
  $("nextButton").disabled = true;
  $("nextButton").innerHTML = currentIndex === TOTAL_QUESTIONS - 1
    ? 'Lihat hasil <span aria-hidden="true">→</span>'
    : 'Berikutnya <span aria-hidden="true">→</span>';

  answerGrid.innerHTML = "";
  shuffledOptions.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span></span>`;
    button.querySelector("span:last-child").textContent = option.text;
    button.addEventListener("click", () => chooseAnswer(option, button, shuffledOptions));
    answerGrid.appendChild(button);
  });

  timeLeft = QUESTION_TIME;
  updateTimer();
  timerInterval = setInterval(() => {
    timeLeft -= 1;
    updateTimer();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeout();
    }
  }, 1000);
}

function updateTimer() {
  $("timer").textContent = timeLeft;
  $("timerBox").classList.toggle("warning", timeLeft <= 5);
}

function chooseAnswer(option, selectedButton, options) {
  if (hasAnswered) return;
  hasAnswered = true;
  clearInterval(timerInterval);

  const question = selectedQuestions[currentIndex];
  const buttons = [...answerGrid.querySelectorAll(".answer-option")];
  buttons.forEach((button, index) => {
    button.disabled = true;
    if (options[index].isCorrect) button.classList.add("correct");
  });

  const isCorrect = option.isCorrect;
  if (isCorrect) {
    score += 100;
    selectedButton.classList.add("correct");
  } else {
    selectedButton.classList.add("incorrect");
  }
  $("scoreLabel").textContent = `Skor: ${score}`;

  const feedback = $("feedback");
  feedback.textContent = `${isCorrect ? "Benar! " : "Belum tepat. "}${question.explanation}`;
  feedback.className = `feedback ${isCorrect ? "" : "incorrect-feedback"}`;

  answersHistory.push({
    question: question.question,
    chosen: option.text,
    correct: question.options[question.answer],
    isCorrect,
    explanation: question.explanation
  });
  $("nextButton").disabled = false;
}

function handleTimeout() {
  if (hasAnswered) return;
  hasAnswered = true;
  const question = selectedQuestions[currentIndex];
  const buttons = [...answerGrid.querySelectorAll(".answer-option")];
  buttons.forEach((button, index) => {
    button.disabled = true;
    const text = button.querySelector("span:last-child").textContent;
    if (text === question.options[question.answer]) button.classList.add("correct");
  });
  $("feedback").textContent = `Waktu habis! Jawaban yang benar: ${question.options[question.answer]}. ${question.explanation}`;
  $("feedback").className = "feedback incorrect-feedback";
  answersHistory.push({
    question: question.question,
    chosen: "Tidak menjawab (waktu habis)",
    correct: question.options[question.answer],
    isCorrect: false,
    explanation: question.explanation
  });
  $("nextButton").disabled = false;
}

function nextQuestion() {
  if (!hasAnswered) return;
  if (currentIndex < TOTAL_QUESTIONS - 1) {
    currentIndex += 1;
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  clearInterval(timerInterval);
  showScreen(resultScreen);
  const correctCount = answersHistory.filter((item) => item.isCorrect).length;
  const finalScore = Math.round((correctCount / TOTAL_QUESTIONS) * 100);
  $("finalScore").textContent = finalScore;
  $("scoreFraction").textContent = `${correctCount} dari ${TOTAL_QUESTIONS} jawaban benar`;

  let title = "Tetap semangat!";
  let description = "Setiap kuis adalah kesempatan untuk belajar hal baru.";
  let icon = "🌱";
  if (finalScore === 100) {
    title = "Sempurna!";
    description = "Luar biasa, semua jawabanmu benar!";
    icon = "🏆";
  } else if (finalScore >= 80) {
    title = "Hebat sekali!";
    description = "Pemahaman Informatikamu sudah kuat. Pertahankan!";
    icon = "🎉";
  } else if (finalScore >= 60) {
    title = "Kerja bagus!";
    description = "Kamu sudah memahami banyak hal. Terus tingkatkan!";
    icon = "👏";
  }
  $("resultTitle").textContent = title;
  $("resultDescription").textContent = description;
  $("resultIcon").textContent = icon;
}

function showReview() {
  const reviewList = $("reviewList");
  reviewList.classList.toggle("hidden");
  if (reviewList.dataset.loaded === "true") return;
  reviewList.innerHTML = answersHistory.map((item, index) => `
    <div class="review-item">
      <strong>${index + 1}. ${escapeHTML(item.question)}</strong>
      <p class="${item.isCorrect ? "review-correct" : "review-wrong"}">${item.isCorrect ? "✓ Benar" : "✕ Belum tepat"}</p>
      <p>Jawabanmu: ${escapeHTML(item.chosen)}</p>
      <p>Jawaban benar: ${escapeHTML(item.correct)}</p>
      <p>${escapeHTML(item.explanation)}</p>
    </div>
  `).join("");
  reviewList.dataset.loaded = "true";
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[char]);
}

$("startButton").addEventListener("click", startQuiz);
$("nextButton").addEventListener("click", nextQuestion);
$("restartButton").addEventListener("click", startQuiz);
$("reviewButton").addEventListener("click", showReview);
