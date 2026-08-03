## 1. Apa itu Code Smells?

**Code Smells** bukan berarti kode itu **error** atau **bug**. Kodenya tetap **jalan** dan berfungsi normal. Tapi ada "bau" atau tanda-tanda bahwa struktur di dalamnya **buruk**, sehingga berpotensi menimbulkan masalah di masa depan (susah di-maintain, gampang muncul bug baru, susah dikembangkan).

Kalau ada "bau" seperti ini, itu tandanya kode tersebut **butuh di-refactor**.

### Ciri-ciri / Tanda-tanda Code Smells

| No | Nama Smell | Ciri-cirinya |
|----|-----------|---------------|
| 1 | **Duplicated Code** | Ada blok kode yang sama/mirip muncul berkali-kali di tempat berbeda. |
| 2 | **Long Method** | Satu fungsi/method isinya terlalu panjang (puluhan-ratusan baris) dan ngerjain banyak hal sekaligus. |
| 3 | **Large Class / God Object** | Satu class melakukan terlalu banyak tanggung jawab—jadi "dewa" yang tahu & ngatur segalanya. |
| 4 | **Long Parameter List** | Fungsi punya terlalu banyak parameter (misal 6-7 parameter), susah dibaca & dipanggil. |
| 5 | **Feature Envy** | Sebuah method lebih sering "mengintip"/memakai data dari class lain dibanding data class-nya sendiri. |
| 6 | **Divergent Change** | Satu class harus diubah karena banyak alasan berbeda yang tidak berhubungan. |
| 7 | **Shotgun Surgery** | Sebaliknya: satu perubahan kecil malah memaksa kita mengubah banyak class/file sekaligus. |
| 8 | **Data Clumps** | Sekumpulan variabel/data yang selalu muncul bersamaan di banyak tempat, tapi belum dijadikan satu objek. |
| 9 | **Primitive Obsession** | Kecanduan pakai tipe data primitif (string, int) untuk merepresentasikan konsep kompleks, padahal harusnya jadi objek/class sendiri. |
| 10 | **Switch Statements / Nested Conditionals** | Terlalu banyak `if-else` atau `switch-case` bersarang yang berulang di banyak tempat. |
| 11 | **Lazy Class** | Class yang dibuat tapi isinya terlalu sedikit/nggak ngapa-ngapain, jadi nggak perlu dipisah jadi class sendiri. |
| 12 | **Speculative Generality** | Membuat kode/struktur "jaga-jaga" untuk kebutuhan masa depan yang sebenarnya belum tentu ada (lihat **YAGNI** di bawah). |
| 13 | **Message Chains** | Kode manggil method secara berantai panjang, contoh: `a.getB().getC().getD().doSomething()`. |
| 14 | **Comments Berlebihan** | Butuh banyak komentar untuk menjelaskan kode yang membingungkan—harusnya kode itu sendiri sudah jelas (self-explanatory). |

### Kapan harus refactor?
- Kalau kamu mau nambah fitur baru, tapi mikirnya lebih lama ke "gimana caranya nggak merusak yang lain" daripada ke fitur itu sendiri.
- Kalau ada bug yang sama muncul berulang di tempat berbeda (karena kodenya duplikat).
- Kalau developer baru butuh waktu lama banget cuma buat paham alur satu fungsi.

---

## 2. Kenapa Ada Istilah-istilah Kayak Gini?

Istilah seperti *Code Smells* itu **jargon/metaphor** dalam software engineering. Tujuannya bukan buat gaya-gayaan, tapi buat **mempercepat komunikasi** antar developer—daripada jelasin panjang lebar, cukup sebut satu istilah dan semua orang di tim langsung paham maksudnya.

---

## 3. Glossary Istilah Penting

### 🍝 Kategori: Kondisi Kode

| Istilah | Penjelasan |
|---|---|
| **Spaghetti Code** | Alur kode berantakan, saling tumpang tindih, susah dilacak—mirip mie spageti yang terbelit-belit. |
| **Lasagna Code** | Kode punya terlalu banyak lapisan (layer/abstraction). Untuk 1 hal simpel, data harus lewat 10 kelas/file. |
| **Rube Goldberg Code** | Hal sederhana dikerjakan dengan cara yang super rumit dan berbelit-belit. |
| **Big Ball of Mud** | Sistem tanpa arsitektur jelas, dibuat asal jadi; sentuh satu bagian, bagian lain ikut rusak. |

### 🎯 Kategori: Prinsip Desain & Kualitas Kode

| Istilah | Penjelasan |
|---|---|
| **DRY** (Don't Repeat Yourself) | Jangan menulis kode yang sama berulang-ulang. Kalau sama, jadikan satu fungsi/objek. |
| **WET** (Write Everything Twice / Waste Everyone's Time) | Kebalikan DRY—kebiasaan copy-paste kode di mana-mana. |
| **KISS** (Keep It Simple, Stupid) | Buat kode sesederhana & sejelas mungkin, jangan sok "canggih" tapi bikin pusing orang lain. |
| **YAGNI** (You Ain't Gonna Need It) | Jangan bikin fitur/struktur rumit untuk "mungkin dibutuhkan nanti". Buat yang dibutuhkan sekarang saja. |

### 🦆 Kategori: Fenomena & Budaya Koding

| Istilah | Penjelasan |
|---|---|
| **Technical Debt** (Hutang Teknis) | Ambil "jalan pintas" nulis kode asal cepat demi deadline. Makin lama ditunda diperbaiki, "bunganya" makin besar (bug nambah, biaya perbaikan makin mahal). |
| **Refactoring** | "Melunasi" technical debt—merapikan kode tanpa mengubah fiturnya. |
| **Rubber Duck Debugging** | Teknik debugging dengan menjelaskan kode baris demi baris ke benda mati (bebek karet). Sering kali saat menjelaskan, otak tiba-tiba nemu letak error-nya sendiri. |
| **Yak Shaving** | Mau selesaikan masalah A, eh harus kerjain B dulu, B butuh C, C butuh D... sampai lupa masalah utama A. |

### 🏗️ Kategori: Pola Desain & Arsitektur

| Istilah | Penjelasan |
|---|---|
| **Design Patterns** | Solusi standar yang sudah teruji untuk masalah umum dalam desain software (contoh: Singleton, Factory, Observer). |
| **Anti-Pattern** | Kebalikan Design Pattern—"solusi" yang kelihatan bagus di awal, tapi terbukti konsisten menciptakan masalah baru. |

### 🐛 Kategori: Bug & Debugging

| Istilah | Penjelasan |
|---|---|
| **Heisenbug** | Bug aneh yang hilang/berubah perilakunya begitu kamu coba deteksi/debug (misal pas ditambahin `print()` bug-nya malah nggak muncul). |
| **Race Condition** | Bug yang muncul karena dua proses/thread saling "balapan" mengakses data yang sama, hasilnya jadi tidak konsisten/tidak terduga. |
| **Works On My Machine (WOMM)** | Ungkapan sarkastik ketika kode error di komputer orang lain/server, padahal di laptop developer-nya sendiri jalan mulus. |
| **Schrödinger's Bug** | Bug yang secara teori ada (kelihatan di kode), tapi belum ketahuan apakah beneran muncul di production sampai benar-benar dicek. |

### 🏚️ Kategori: Kondisi Codebase & Proyek

| Istilah | Penjelasan |
|---|---|
| **Bit Rot / Code Rot** | Kode yang tadinya jalan normal, lama-lama "membusuk" performanya/makin error karena dependency, environment, atau library sekitarnya berubah, padahal kodenya sendiri tidak disentuh. |
| **Dead Code** | Kode yang masih ada di file tapi sudah tidak pernah dipanggil/dieksekusi lagi. Biasanya lupa dihapus. |
| **Boat Anchor** | Bagian kode/komponen/library yang masih nangkring di project padahal sudah tidak dipakai—cuma "jadi beban", ibarat jangkar kapal yang nggak berguna. |
| **Zombie Code** | Mirip dead code, tapi kadang "hidup lagi" tiba-tiba karena ternyata masih dipanggil di satu tempat tersembunyi. |
| **Franken-code** | Kode hasil "tempelan" dari banyak sumber berbeda (potongan Stack Overflow, tutorial, project lain) yang digabung asal jadi tanpa dipikir konsistensinya. |
| **Legacy Code** | Kode lama (biasanya tanpa dokumentasi/test yang cukup) yang masih dipakai di production, sering bikin takut untuk diubah. |

### 🙈 Kategori: Kebiasaan/Perilaku Developer (Anti-Pattern Perilaku)

| Istilah | Penjelasan |
|---|---|
| **Cargo Cult Programming** | Meniru pola/kode orang lain tanpa paham kenapa itu dipakai—asal ikut-ikutan karena "katanya bagus", padahal konteksnya beda. |
| **Copy-Paste Programming** | Kebiasaan copy kode dari tempat lain (StackOverflow, project lama) tanpa benar-benar memahami cara kerjanya. |
| **Golden Hammer** | Kecenderungan pakai satu tools/teknologi/pattern favorit untuk semua masalah, padahal belum tentu cocok ("kalau cuma punya palu, semua masalah kelihatan kayak paku"). |
| **Not Invented Here (NIH) Syndrome** | Keengganan pakai library/solusi orang lain, maunya bikin sendiri dari nol walau sebenarnya sudah ada solusi bagus yang tersedia. |
| **Gold Plating** | Menambahkan fitur/detail berlebihan yang sebenarnya tidak diminta/dibutuhkan, buang-buang waktu & resource (mirip YAGNI tapi dari sisi kebiasaan). |
| **Bikeshedding** | Diskusi tim jadi lama & berlarut-larut cuma buat hal sepele (misal: warna tombol), sementara isu besar yang lebih penting malah kurang dibahas. |
| **Boy Scout Rule** | Prinsip: "tinggalkan kode lebih rapi dari saat kamu ketemu pertama kali"—dikit-dikit dirapikan tiap kali sentuh file lama. |
| **Chesterton's Fence** | Prinsip kehati-hatian: jangan hapus/ubah kode/aturan yang kelihatan "aneh" atau "tidak perlu" sebelum kamu benar-benar paham kenapa itu awalnya dipasang di sana. |

### 🏢 Kategori: Manajemen Proyek & Tim

| Istilah | Penjelasan |
|---|---|
| **Scope Creep** | Fitur/requirement proyek terus bertambah sedikit demi sedikit di luar rencana awal, tanpa disadari jadi jauh melebar dari target semula. |
| **Analysis Paralysis** | Kebanyakan mikir & menganalisis pilihan/opsi sampai-sampai tidak jadi-jadi eksekusi/ambil keputusan. |
| **Death March** | Fase proyek yang sangat menekan—deadline mepet, lembur terus-menerus, tim kelelahan, biasanya menjelang rilis besar. |
| **Bus Factor** | Jumlah minimum orang yang kalau "hilang" (resign/sakit/ketabrak bus) bisa bikin proyek berhenti total karena cuma dia yang paham kodenya. Bus factor rendah = risiko tinggi. |
| **Hero Culture** | Budaya tim yang mengandalkan 1-2 orang "pahlawan" yang selalu menyelamatkan proyek di detik-detik terakhir—kelihatan keren tapi sebenarnya tanda proses tim yang buruk. |
| **Premature Optimization** | Buru-buru mengoptimasi kode/performa sebelum benar-benar tahu bagian mana yang jadi bottleneck—sering membuang waktu & bikin kode lebih rumit tanpa manfaat nyata. |

### 🔢 Kategori: Istilah Teknis Umum Lainnya

| Istilah | Penjelasan |
|---|---|
| **Magic Numbers** | Angka/nilai yang ditulis langsung di tengah kode tanpa penjelasan (misal `if (status == 3)`), bikin orang lain bingung angka itu artinya apa. Sebaiknya dijadikan konstanta bernama. |
| **Boilerplate Code** | Kode "template" standar yang harus ditulis berulang di banyak tempat/proyek walau isinya hampir selalu sama (misal setup config, import, dll). |
| **Vendor Lock-in** | Kondisi terlalu bergantung ke satu penyedia layanan/tools (cloud, library, framework) sampai susah pindah ke yang lain kalau suatu saat dibutuhkan. |
| **Silver Bullet** | Istilah untuk "solusi ajaib" yang katanya bisa menyelesaikan semua masalah software sekaligus—dalam praktiknya, hal seperti ini nyaris tidak pernah ada. |

---

*Catatan: dokumen ini bisa terus ditambah kalau nemu istilah baru lagi.*