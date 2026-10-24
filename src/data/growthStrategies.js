// Each entry is an actionable experiment, not a promised business outcome.
const chapters = [
  {
    id: 'fondasi', title: 'Fondasi & arah bisnis', goal: 'Fondasi',
    intro: 'Temukan kebocoran terbesar sebelum menambah aktivitas marketing.',
    entries: `Pilih satu pelanggan utama|Petakan pelanggan paling menguntungkan, kebutuhannya, dan alasan membeli. Fokuskan satu penawaran untuk segmen ini.|Katering memprioritaskan kantor dengan pesanan makan siang berulang.|Laba kontribusi per segmen|Ringan
Wawancarai pembeli terakhir|Tanyakan pemicu pembelian, alternatif yang dipertimbangkan, dan keraguan sebelum membayar. Gunakan kata pelanggan dalam materi penjualan.|Pemilik kursus menelepon lima orang tua setelah pendaftaran.|Pola alasan membeli|Ringan
Pelajari transaksi yang batal|Catat alasan batal berdasarkan percakapan nyata. Pisahkan kendala harga, waktu, kecocokan, dan kurangnya kepercayaan.|Vendor interior membedakan proyek tertunda dari penawaran yang kalah.|Proporsi batal per alasan|Ringan
Tulis janji nilai yang spesifik|Jelaskan siapa yang dibantu, masalah yang diselesaikan, dan cara kerja. Hindari janji hasil yang belum bisa dibuktikan.|Laundry menawarkan antar-jemput terjadwal untuk penghuni apartemen sekitar.|Rasio pertanyaan relevan|Ringan
Peta kompetitor dari sudut pelanggan|Bandingkan harga total, waktu layanan, bukti, dan kemudahan membeli. Cari kebutuhan yang belum dilayani dengan baik.|Bengkel menemukan pelanggan membutuhkan estimasi tertulis sebelum servis.|Alasan menang atau kalah|Menengah
Tentukan batas kapasitas|Hitung pesanan yang bisa dilayani tanpa menurunkan kualitas. Sesuaikan promosi dengan stok dan kapasitas tim.|Bakery membatasi slot hampers per tanggal pengiriman.|Pesanan terlambat|Ringan
Audit perjalanan pelanggan|Coba membeli sendiri dari tautan Instagram sampai pembayaran. Catat langkah yang membingungkan dan perbaiki hambatan terbesar.|Pemilik salon menemukan tautan reservasi mengarah ke nomor lama.|Transaksi selesai per inquiry|Ringan
Pilih satu sasaran 90 hari|Tentukan satu hasil bisnis dan angka awalnya. Turunkan menjadi target mingguan yang bisa dikendalikan tim.|Distributor mengejar pelanggan aktif berulang, bukan sekadar database baru.|Kemajuan sasaran mingguan|Ringan
Prioritaskan satu hambatan pertumbuhan|Petakan kunjungan, inquiry, penawaran, transaksi, dan repeat order. Kerjakan titik dengan kehilangan peluang paling besar.|Toko ramai chat tetapi lambat mengirim rincian ongkir.|Konversi tahap terlemah|Ringan`,
  },
  {
    id: 'penawaran', title: 'Penawaran & harga', goal: 'Fondasi',
    intro: 'Buat alasan membeli lebih jelas sambil menjaga margin setiap transaksi.',
    entries: `Susun paket berdasarkan kebutuhan|Kelompokkan layanan menjadi paket dengan hasil dan ruang lingkup berbeda. Jelaskan batas revisi atau penggunaan.|Studio foto membedakan paket katalog, kampanye, dan retainer bulanan.|Laba per paket|Menengah
Buat produk pintu masuk|Tawarkan pembelian awal dengan ruang lingkup kecil dan kualitas utuh. Pastikan ada jalur ke kebutuhan lanjutan.|Konsultan menawarkan audit satu cabang sebelum pendampingan jaringan.|Pembeli awal ke layanan inti|Menengah
Bundel produk yang saling melengkapi|Gabungkan barang yang memang dipakai bersama. Bandingkan margin bundel dengan pembelian terpisah.|Kedai menjual paket kopi dan sarapan untuk jam berangkat kerja.|Laba kontribusi per keranjang|Ringan
Uji nilai tambah sebelum diskon|Tambahkan kemudahan atau dukungan yang biayanya terkendali. Uji apakah nilai tambah membantu keputusan.|Toko furnitur menawarkan konsultasi ukuran ruangan, bukan potongan merata.|Konversi dan margin bersih promo|Menengah
Tampilkan harga total sejak awal|Jelaskan biaya pengiriman, pemasangan, pajak bila berlaku, dan komponen tambahan sebelum pembayaran.|Penyedia AC memisahkan unit, instalasi standar, dan tambahan pipa.|Pembatalan karena biaya tambahan|Ringan
Sediakan perbandingan paket|Tunjukkan perbedaan paket dengan bahasa pelanggan. Hindari pilihan palsu atau paket mahal yang sengaja tidak berguna.|Kursus membandingkan jadwal, ukuran kelas, dan bentuk pendampingan.|Konversi per paket|Ringan
Tetapkan ambang gratis ongkir|Hitung subsidi maksimum dari margin dan ongkir aktual. Uji ambang belanja tanpa membuat pesanan merugi.|Brand makanan beku membatasi subsidi untuk area pengiriman tertentu.|Laba setelah subsidi ongkir|Menengah
Kurangi risiko dengan syarat jelas|Tulis kebijakan retur, komplain, atau pengerjaan ulang yang benar-benar bisa dipenuhi. Tampilkan sebelum transaksi.|Percetakan menjelaskan prosedur penggantian untuk cacat produksi.|Komplain dan biaya pemulihan|Ringan
Uji kenaikan harga secara terkendali|Tawarkan harga baru pada produk atau periode terbatas. Nilai laba total bersama konversi dan kepuasan pelanggan.|Jasa detailing menguji paket baru dengan proses inspeksi lebih lengkap.|Laba kontribusi per inquiry|Menengah`,
  },
  {
    id: 'konten', title: 'Konten & social media', goal: 'Akuisisi',
    intro: 'Bangun perhatian yang terhubung dengan kebutuhan dan keputusan pembeli.',
    entries: `Pilih satu kanal utama|Pilih kanal berdasarkan kebiasaan pembeli, tujuan bisnis, dan kapasitas produksi. Tambah kanal setelah alur pertama terbukti.|Pemasok mesin memulai dari LinkedIn dan percakapan penjualan B2B.|Inquiry berkualitas per kanal|Ringan
Bangun tiga pilar konten|Bagi tema menjadi masalah pelanggan, bukti kerja, dan penawaran. Hubungkan setiap tema ke produk yang relevan.|Kontraktor membahas kesalahan renovasi, progres proyek, dan konsultasi.|Inquiry dari setiap pilar|Ringan
Jawab pertanyaan dari chat|Ubah pertanyaan yang berulang menjadi video atau carousel. Arahkan pembaca ke penjelasan lanjutan yang relevan.|Toko cat membahas kebutuhan liter untuk ukuran kamar tertentu.|Chat berulang yang terjawab|Ringan
Uji tiga pembuka video|Rekam isi yang sama dengan tiga pembuka berbeda. Bandingkan retensi awal dan tindakan setelah menonton.|Kursus menguji pembuka tentang jadwal, biaya, dan tujuan belajar.|Retensi awal dan inquiry|Menengah
Tampilkan proses di balik hasil|Dokumentasikan langkah kerja yang menjelaskan kualitas. Minta izin sebelum menampilkan pelanggan atau lokasi privat.|Produsen sambal memperlihatkan pengecekan segel sebelum pengiriman.|Pertanyaan terkait kualitas|Ringan
Terbitkan studi kasus berizin|Ceritakan kondisi awal, tindakan, hasil terverifikasi, serta konteksnya. Jangan menghapus faktor lain yang memengaruhi hasil.|Agensi menampilkan perubahan alur follow-up beserta periode pengamatan.|Inquiry yang menyebut studi kasus|Menengah
Ubah satu materi menjadi seri|Pecah satu pembahasan mendalam menjadi video singkat, carousel, dan FAQ. Sesuaikan format dengan tiap kanal.|Webinar distributor menjadi seri cara memilih mesin untuk UMKM.|Inquiry per jam produksi|Menengah
Jadikan profil sebagai pintu masuk|Perjelas siapa yang dilayani, area layanan, bukti, dan satu langkah berikutnya. Periksa semua tautan profil.|Profil wedding vendor mengarah ke katalog paket dan jadwal konsultasi.|Kunjungan profil ke tindakan|Ringan
Audit konten berdasarkan niat beli|Pisahkan konten yang menghasilkan perhatian dari konten yang mendatangkan calon pembeli. Ulangi pola yang relevan secara komersial.|Reels lucu ramai, tetapi demo produk menghasilkan permintaan katalog.|Inquiry layak per konten|Menengah`,
  },
  {
    id: 'komunitas', title: 'Komunitas & kreator', goal: 'Akuisisi',
    intro: 'Pinjam relevansi dan bangun hubungan tanpa bergantung pada jumlah pengikut.',
    entries: `Pilih kreator berdasarkan audiens|Periksa lokasi, topik, kualitas interaksi, dan kecocokan pelanggan. Minta contoh performa konten yang relevan.|Restoran memilih kreator kuliner yang audiensnya berada di area outlet.|Kunjungan atau pesanan terlacak|Menengah
Uji kolaborasi kecil dahulu|Mulai dengan lingkup terbatas dan satu tujuan terukur. Tetapkan hak penggunaan materi sebelum produksi.|Brand tas menguji satu video demo sebelum kontrak bulanan.|Biaya per pembelian terlacak|Menengah
Beri brief berbasis pengalaman|Jelaskan masalah pelanggan, fakta produk, batas klaim, dan ajakan tindakan. Beri ruang gaya kreator serta ungkapkan kerja sama.|Kreator mencoba proses pesan katering dan menandai konten berbayar.|Inquiry relevan dari kolaborasi|Menengah
Gunakan kode atribusi per partner|Buat kode atau tautan unik dan tanyakan sumber pembeli. Perlakukan atribusi sebagai petunjuk, bukan gambaran seluruh dampak.|Setiap komunitas olahraga memiliki kode pemesanan kelas berbeda.|Transaksi dan margin per kode|Ringan
Bangun kelompok pelanggan bertopik|Buat ruang untuk satu manfaat yang jelas. Minta persetujuan bergabung dan tetapkan aturan agar tidak menjadi ruang spam.|Toko tanaman membuka grup perawatan tanaman untuk pembeli yang berminat.|Anggota aktif dan repeat order|Menengah
Kolaborasi dengan bisnis pelengkap|Cari partner dengan pelanggan serupa dan penawaran berbeda. Buat kegiatan bersama dengan pembagian tanggung jawab jelas.|Studio yoga dan katering sehat mengadakan sesi pengenalan bersama.|Pelanggan baru dari partner|Menengah
Adakan sesi tanya jawab terjadwal|Kumpulkan pertanyaan sebelum sesi dan jawab masalah yang dekat dengan produk. Berikan langkah lanjutan tanpa memaksa pembelian.|Toko alat baking mengadakan klinik adonan untuk pelanggan pemula.|Peserta ke percakapan relevan|Menengah
Minta konten pelanggan dengan izin|Undang pelanggan berbagi penggunaan produk secara sukarela. Minta izin terpisah sebelum memakai ulang materi sebagai iklan.|Brand pakaian meminta izin menampilkan foto ukuran dan gaya pelanggan.|Materi berizin dan konversinya|Ringan
Bangun program duta pelanggan|Pilih pelanggan yang aktif dan benar-benar menggunakan produk. Jelaskan imbalan serta aturan rekomendasi secara terbuka.|Penyedia kelas mengajak alumni menjadi narahubung komunitas lokal.|Pelanggan layak dari duta|Intensif`,
  },
  {
    id: 'pencarian', title: 'Pencarian & pasar lokal', goal: 'Akuisisi',
    intro: 'Hadir saat orang sudah mencari solusi, lokasi, atau produk tertentu.',
    entries: `Lengkapi Google Business Profile|Untuk bisnis yang memenuhi syarat, isi kategori, lokasi atau area layanan, nomor, dan jam buka secara akurat.|Bengkel mencantumkan layanan utama dan jam operasional hari libur.|Telepon dan permintaan arah|Ringan
Minta ulasan asli setelah layanan|Kirim tautan ulasan setelah pekerjaan selesai tanpa imbalan atau penyaringan pelanggan. Tanggapi masukan dengan sopan.|Salon mengundang semua pelanggan memberi ulasan pengalaman aktual.|Ulasan asli dan tema keluhan|Ringan
Buat halaman layanan per lokasi nyata|Tulis layanan, cakupan, bukti lokal, dan cara menghubungi untuk area yang benar-benar dilayani. Hindari halaman kota hasil salin-tempel.|Jasa pest control menjelaskan area cakupan Tangerang beserta jadwal.|Inquiry organik per area|Menengah
Jawab pencarian sebelum membeli|Tulis panduan biaya, perbandingan, dan cara memilih yang jujur. Jelaskan kondisi yang membuat produk kurang cocok.|Vendor kanopi membandingkan material menurut panas, perawatan, dan anggaran.|Inquiry organik yang relevan|Menengah
Rapikan judul produk marketplace|Gunakan nama produk, tipe, ukuran, dan kegunaan yang benar. Cocokkan judul dengan foto dan spesifikasi.|Toko kemasan mencantumkan volume, bahan, dan jumlah isi dus.|Kunjungan produk ke transaksi|Ringan
Perbaiki foto dan informasi produk|Tampilkan ukuran, detail, variasi, serta isi paket. Jawab hal yang biasanya memicu chat atau retur.|Penjual rak menampilkan dimensi dan foto rak di ruangan nyata.|Konversi dan retur produk|Menengah
Buat halaman perbandingan yang jujur|Bandingkan pilihan berdasarkan kebutuhan dan biaya pemakaian. Gunakan informasi yang bisa diverifikasi, bukan klaim menjatuhkan.|Penyedia software membandingkan spreadsheet dan aplikasi untuk ukuran tim berbeda.|Demo dari halaman perbandingan|Menengah
Hubungkan artikel dengan layanan|Tambahkan tautan kontekstual dari panduan ke halaman produk yang membantu pembaca. Hindari tautan yang tidak sesuai topik.|Artikel perawatan sofa mengarah ke rincian jasa cuci sofa.|Artikel ke inquiry layanan|Ringan
Pantau pertanyaan pencarian aktual|Gunakan data Search Console dan pertanyaan pelanggan untuk memilih pembaruan konten. Dahulukan halaman yang relevan dengan penjualan.|Toko sepeda memperjelas halaman ukuran setelah melihat query pelanggan.|Klik relevan dan transaksi organik|Menengah`,
  },
  {
    id: 'iklan', title: 'Iklan & akuisisi berbayar', goal: 'Akuisisi',
    intro: 'Beli pembelajaran yang terukur sebelum memperbesar anggaran.',
    entries: `Tetapkan batas biaya akuisisi|Hitung batas biaya pelanggan dari laba kontribusi dan kemampuan kas. Gunakan data repeat order yang terbukti, bukan harapan.|Katering menghitung biaya akuisisi dari pesanan awal dan repeat aktual.|CAC dibanding laba kontribusi|Menengah
Pisahkan kampanye menurut niat|Bedakan orang yang baru mengenal bisnis dengan pencari solusi yang siap membeli. Sesuaikan pesan dan halaman tujuan.|Penyedia ERP membedakan konten edukasi dan permintaan demo.|Pelanggan layak per kelompok|Menengah
Uji sudut pesan yang berbeda|Bandingkan masalah, penggunaan, dan bukti sebagai hipotesis terpisah. Jangan hanya mengganti warna materi iklan.|Laundry menguji pesan hemat waktu, antar-jemput, dan perawatan pakaian.|Biaya per pelanggan layak|Menengah
Samakan iklan dan landing page|Pastikan janji, produk, harga, dan CTA iklan muncul konsisten di halaman tujuan. Periksa pengalaman dari ponsel.|Iklan paket ulang tahun langsung membuka rincian paket tersebut.|Klik iklan ke transaksi|Ringan
Batasi area sesuai kemampuan layanan|Targetkan area yang mampu dilayani dan verifikasi alamat inquiry. Pertimbangkan ongkir, waktu tempuh, dan jam operasional.|Jasa cuci sofa membatasi iklan ke area jadwal teknisi tersedia.|Inquiry di area layanan|Ringan
Tutup loop dengan data penjualan|Hubungkan sumber inquiry dengan status layak, transaksi, dan nilai pesanan. Kirim data ke platform hanya dengan dasar izin yang sesuai.|Admin mencatat asal iklan sampai invoice dibayar di CRM.|Biaya per pelanggan membayar|Intensif
Retarget sesuai konteks kebutuhan|Bila tersedia dan sesuai izin, bedakan pengunjung produk dari pelanggan lama. Hindari mengejar pembeli dengan penawaran yang sudah dibeli.|Pengunjung katalog mendapat penjelasan bahan, pelanggan mendapat panduan pakai.|Konversi dan frekuensi tayang|Menengah
Uji pencarian dengan niat tinggi|Mulai dari kata yang menjelaskan kebutuhan membeli. Tinjau istilah pencarian dan keluarkan yang tidak relevan.|Vendor genset fokus pada sewa genset untuk acara di area layanan.|Biaya per inquiry layak|Menengah
Naikkan anggaran setelah kualitas stabil|Tambah belanja bertahap setelah konversi, margin, dan kapasitas memadai. Tetapkan batas evaluasi serta kriteria menghentikan uji.|Brand skincare memeriksa stok dan retur sebelum memperluas kampanye.|CAC, margin, dan pemenuhan|Intensif`,
  },
  {
    id: 'website', title: 'Website & landing page', goal: 'Konversi',
    intro: 'Buat pengunjung cepat memahami, percaya, dan mengambil langkah berikutnya.',
    entries: `Buat satu halaman untuk satu kebutuhan|Arahkan satu segmen ke penawaran yang relevan. Pilih satu tindakan utama yang sesuai kesiapan pembeli.|Iklan katering kantor menuju halaman langganan makan siang kantor.|Pengunjung ke inquiry layak|Menengah
Perjelas layar pertama|Tampilkan siapa yang dibantu, manfaat spesifik, area layanan, dan langkah berikutnya. Pastikan terbaca pada ponsel.|Jasa pindahan menampilkan kota layanan dan tombol minta estimasi.|Klik CTA dan inquiry layak|Ringan
Letakkan bukti dekat keputusan|Pasangkan klaim dengan foto kerja, spesifikasi, ulasan berizin, atau studi kasus yang relevan. Hindari logo tanpa hubungan nyata.|Vendor booth menampilkan dokumentasi proyek dekat formulir brief.|Formulir selesai per pengunjung|Ringan
Ringkas formulir awal|Minta hanya data yang dibutuhkan untuk langkah berikutnya. Jelaskan tujuan pengumpulan dan pisahkan persetujuan marketing.|Vendor pelatihan meminta perusahaan, kebutuhan, dan kontak untuk konsultasi.|Formulir dimulai ke selesai|Ringan
Permudah pengalaman ponsel|Uji tombol, menu, keyboard, dan formulir di ponsel. Hilangkan pop-up yang menutup informasi penting.|Toko bunga membuat pilihan tanggal mudah digunakan satu tangan.|Konversi pengunjung ponsel|Menengah
Percepat aset halaman|Kompres gambar, tentukan dimensinya, dan muat aset nonutama saat diperlukan. Ukur sebelum dan sesudah perubahan.|Galeri interior memakai thumbnail ringan dengan foto detail terpisah.|Waktu muat dan konversi ponsel|Menengah
Jawab keberatan sebelum CTA|Tulis FAQ dari pertanyaan aktual tentang biaya, waktu, proses, dan dukungan. Jawab keterbatasan secara terbuka.|Kursus menjelaskan penggantian jadwal dan prasyarat belajar.|Inquiry berulang dan konversi|Ringan
Jelaskan langkah setelah pengiriman|Tampilkan konfirmasi, perkiraan respons yang sanggup dipenuhi, dan kontak alternatif. Hindari membiarkan pengunjung menebak statusnya.|Form renovasi menjelaskan kapan tim menghubungi untuk klarifikasi.|Inquiry yang berhasil dihubungi|Ringan
Uji satu perubahan konversi|Pilih hipotesis, satu perubahan, dan metrik bisnis. Jika trafik kecil, mulai dari observasi pengguna dan data percakapan.|Vendor kursi menguji kejelasan ongkir sebelum merombak seluruh situs.|Transaksi per pengunjung relevan|Menengah`,
  },
  {
    id: 'whatsapp', title: 'WhatsApp & penjualan', goal: 'Konversi',
    intro: 'Ubah percakapan menjadi keputusan dengan respons yang jelas dan relevan.',
    entries: `Tulis pesan pembuka berkonteks|Isi tautan chat dengan produk atau kebutuhan yang dipilih pengunjung. Jangan sertakan data pribadi di URL.|Tombol katalog mengisi pesan minat paket katering kantor.|Chat yang konteksnya lengkap|Ringan
Tetapkan standar respons realistis|Sesuaikan waktu respons dengan jam layanan dan jumlah admin. Gunakan pesan otomatis untuk menjelaskan jam operasional.|Toko furnitur memberi tahu kapan admin kembali dan apa yang perlu disiapkan.|Waktu respons pertama|Ringan
Gunakan pertanyaan kualifikasi singkat|Tanyakan kebutuhan, lokasi, waktu, dan kendala utama secara bertahap. Jangan menginterogasi sebelum memberi informasi dasar.|Vendor acara menanyakan tanggal dan jumlah tamu sebelum mengirim paket.|Chat ke penawaran relevan|Ringan
Siapkan balasan cepat yang manusiawi|Buat template harga, spesifikasi, dan proses lalu sesuaikan dengan pertanyaan pelanggan. Periksa agar tidak mengirim jawaban salah.|Admin percetakan menyesuaikan estimasi dengan bahan dan jumlah aktual.|Waktu respons dan kepuasan chat|Ringan
Kirim penawaran dengan pilihan jelas|Rangkum kebutuhan pelanggan, solusi, harga total, masa berlaku nyata, dan langkah persetujuan. Hindari katalog panjang tanpa arahan.|Vendor website menawarkan dua lingkup sesuai kebutuhan bisnis calon klien.|Penawaran ke transaksi|Menengah
Follow-up dengan nilai baru|Sepakati waktu tindak lanjut dan kirim jawaban atau bukti yang relevan. Hentikan bila calon pembeli menolak.|Admin interior mengirim contoh material yang menjawab keraguan terakhir.|Respons dan transaksi follow-up|Ringan
Pisahkan status pipeline|Gunakan label inquiry baru, layak, penawaran, menunggu, menang, dan batal. Tetapkan satu penanggung jawab per peluang.|Distributor mencegah dua sales menghubungi prospek yang sama.|Peluang tanpa tindak lanjut|Ringan
Tinjau percakapan yang kehilangan penjualan|Baca sampel chat secara terbatas dengan menjaga privasi. Cari pola respons lambat, pertanyaan terlewat, dan janji tidak jelas.|Supervisor kursus menemukan admin belum menjelaskan pilihan jadwal.|Konversi chat layak|Menengah
Minta izin sebelum pesan promosi|Jelaskan jenis pesan dan minta persetujuan, simpan catatannya, serta sediakan cara berhenti. Jangan memakai daftar nomor hasil beli.|Kasir menawarkan pendaftaran info restock tanpa mewajibkannya untuk transaksi.|Opt-in, opt-out, dan keluhan|Ringan`,
  },
  {
    id: 'retensi', title: 'Retensi & nilai pelanggan', goal: 'Retensi',
    intro: 'Bantu pelanggan mendapat manfaat dan punya alasan yang tepat untuk kembali.',
    entries: `Rancang pengalaman setelah membeli|Kirim instruksi penggunaan, jadwal, atau cara mendapat bantuan. Pastikan pelanggan bisa merasakan manfaat pembelian pertamanya.|Brand alat kopi memberikan panduan seduh sesuai produk.|Aktivasi dan komplain awal|Ringan
Petakan waktu pembelian ulang|Gunakan riwayat transaksi untuk memperkirakan interval repeat. Hubungi pelanggan yang setuju di waktu yang relevan.|Toko pakan mengingatkan pembelian ulang berdasarkan ukuran kemasan.|Repeat order per kelompok|Menengah
Tawarkan pelengkap setelah kebutuhan jelas|Rekomendasikan tambahan yang benar-benar membantu penggunaan produk. Jangan membebani pelanggan dengan add-on yang tidak diperlukan.|Penjual printer menawarkan tinta sesuai model dan volume cetak.|Laba tambahan per pelanggan|Ringan
Buat paket berlangganan fleksibel|Tentukan manfaat rutin, harga, jadwal, serta cara jeda atau berhenti yang jelas. Pastikan operasional mampu memenuhinya.|Katering menawarkan jadwal mingguan dengan batas perubahan pesanan.|Retensi dan margin langganan|Intensif
Pulihkan pelanggan yang kecewa|Catat keluhan, tentukan penanggung jawab, dan berikan penyelesaian sesuai kebijakan. Konfirmasi apakah masalah benar-benar selesai.|Laundry mengganti kerusakan yang terbukti sesuai ketentuan yang disepakati.|Keluhan selesai dan repeat|Menengah
Aktifkan kembali pelanggan lama|Pilah pelanggan yang belum kembali berdasarkan kebutuhannya. Untuk yang menyetujui pesan marketing, tawarkan alasan relevan untuk kembali.|Salon memberi kabar slot perawatan yang cocok dengan riwayat layanan.|Pelanggan aktif kembali|Menengah
Beri penghargaan yang menjaga margin|Rancang manfaat loyalitas dengan biaya yang dihitung. Hindari poin yang sulit dipahami atau tidak bisa digunakan.|Kedai memberi manfaat kunjungan rutin dengan syarat yang transparan.|Repeat dan laba setelah manfaat|Menengah
Segmentasikan pelanggan berdasarkan perilaku|Bedakan pelanggan baru, rutin, bernilai tinggi, dan berisiko berhenti. Sesuaikan layanan tanpa mengabaikan pelanggan kecil.|Distributor memisahkan toko rutin dari toko yang berhenti memesan.|Retensi per segmen|Menengah
Tanyakan manfaat yang belum tercapai|Hubungi pelanggan untuk mengetahui kendala penggunaan. Perbaiki pengalaman sebelum menawarkan produk berikutnya.|Penyedia aplikasi membantu toko menyelesaikan impor produk pertama.|Penggunaan aktif dan retensi|Menengah`,
  },
  {
    id: 'kemitraan', title: 'Referral & pertumbuhan B2B', goal: 'Akuisisi',
    intro: 'Bangun jalur pelanggan baru melalui hubungan yang relevan dan saling menguntungkan.',
    entries: `Minta referral pada momen tepat|Undang rekomendasi setelah manfaat terasa. Beri cara mengenalkan bisnis tanpa meminta kontak pihak lain tanpa izin.|Klien puas meneruskan tautan jasa akuntansi ke rekannya.|Referral ke pelanggan membayar|Ringan
Jelaskan imbalan referral terbuka|Tulis syarat, nilai manfaat, waktu pemberian, dan batas program. Periksa margin dan aturan yang berlaku untuk bidang usaha.|Studio memberi kredit layanan setelah proyek rujukan selesai dibayar.|Laba setelah imbalan referral|Menengah
Bangun daftar akun B2B terpilih|Pilih perusahaan berdasarkan kecocokan kebutuhan, skala, dan kemampuan melayani. Teliti konteks sebelum pendekatan.|Vendor packaging fokus pada produsen makanan yang membutuhkan kemasan rutin.|Akun layak ke pertemuan|Menengah
Kirim pendekatan berbasis kebutuhan|Gunakan kanal bisnis yang sesuai, pesan singkat, dan alasan spesifik. Hormati penolakan serta hindari pesan massal berulang.|Pemasok menawarkan contoh kemasan terkait lini produk calon klien.|Balasan relevan per pendekatan|Menengah
Sediakan sampel dengan tujuan jelas|Tentukan siapa yang cocok menerima sampel, cara evaluasi, dan tindak lanjut yang disepakati. Hitung biaya sampel.|Produsen seragam mengirim swatch setelah memahami kebutuhan pengadaan.|Sampel ke pesanan menguntungkan|Menengah
Buat proposal yang membantu keputusan|Rangkum masalah, ruang lingkup, jadwal, tanggung jawab, harga, dan kriteria selesai. Sesuaikan dengan pihak yang menyetujui.|Vendor software menampilkan kebutuhan pengguna dan tahapan implementasi.|Proposal disetujui per akun|Menengah
Bangun jaringan reseller terukur|Tentukan area, harga, dukungan, dan standar layanan. Uji dengan sedikit partner sebelum memperluas jaringan.|Produsen makanan beku memulai dari reseller dengan penyimpanan yang sesuai.|Reseller aktif dan repeat|Intensif
Ikut acara dengan rencana tindak lanjut|Pilih acara yang dihadiri pembeli relevan dan sepakati percakapan lanjutan. Catat izin kontak serta kebutuhan yang dibahas.|Vendor peralatan dapur menjadwalkan demo setelah pameran kuliner.|Pertemuan ke transaksi|Menengah
Perluas akun pelanggan yang cocok|Tinjau kebutuhan cabang, divisi, atau produk tambahan bersama pelanggan aktif. Pastikan tim mampu menjaga kualitas.|Vendor pelatihan menambah program untuk divisi lain setelah evaluasi awal.|Pendapatan dan margin per akun|Intensif`,
  },
  {
    id: 'data', title: 'Data & eksperimen', goal: 'Sistem',
    intro: 'Bedakan aktivitas yang terlihat sibuk dari perubahan yang memperbaiki bisnis.',
    entries: `Buat dashboard mingguan sederhana|Gabungkan inquiry layak, penjualan, margin, dan repeat dalam satu tampilan. Tetapkan pemilik serta sumber setiap angka.|Owner toko meninjau POS, ongkir, dan biaya iklan tiap pekan.|Laba kontribusi mingguan|Menengah
Standarkan sumber pelanggan|Gunakan penamaan tautan kampanye yang konsisten dan tanyakan asal pembeli. Catat bila sumber tidak diketahui.|Admin membedakan Instagram organik, iklan, dan referral di CRM.|Transaksi dengan sumber tercatat|Ringan
Pisahkan inquiry dan inquiry layak|Definisikan kriteria layak berdasarkan kecocokan produk, area, dan kebutuhan. Terapkan definisi yang sama untuk marketing dan sales.|Jasa renovasi memisahkan pencari kerja dari pemilik proyek.|Proporsi inquiry layak|Ringan
Hitung konversi tiap tahap|Pantau perpindahan inquiry ke penawaran, pembayaran, dan repeat. Bandingkan kelompok dari periode yang sepadan.|Kursus melihat banyak trial tetapi sedikit pendaftaran berbayar.|Konversi per tahap funnel|Menengah
Tulis hipotesis sebelum eksperimen|Catat perubahan, alasan, metrik, periode, dan batas biaya sebelum uji. Jangan mengganti banyak variabel sekaligus.|Toko menguji foto ukuran karena pelanggan sering ragu dimensi.|Hasil terhadap hipotesis awal|Ringan
Gunakan cohort untuk membaca retensi|Kelompokkan pelanggan berdasarkan waktu pembelian pertama. Bandingkan repeat pada umur pelanggan yang sama.|Brand suplemen membandingkan repeat bulan kedua tiap kelompok pembeli.|Retensi cohort seumur|Menengah
Periksa kualitas data transaksi|Samakan ID pesanan, buang duplikasi, dan pisahkan pembatalan serta refund. Cocokkan dashboard dengan pembayaran aktual.|Owner menemukan pesanan COD gagal masih dihitung sebagai omzet.|Selisih laporan dan kas masuk|Menengah
Tinjau hasil dengan batas atribusi|Bandingkan laporan platform dengan transaksi aktual dan sumber lain. Jangan menjumlahkan klaim konversi platform begitu saja.|Pembelian yang sama muncul di laporan dua kanal iklan.|Penjualan unik dan biaya total|Menengah
Simpan pembelajaran dalam log|Catat apa yang diuji, hasil, keterbatasan data, dan keputusan berikutnya. Tinjau sebelum mengulang ide lama.|Tim mencatat bahwa diskon menaikkan volume tetapi mengurangi laba.|Eksperimen yang menghasilkan keputusan|Ringan`,
  },
  {
    id: 'operasional', title: 'Operasional & kesiapan scale', goal: 'Sistem',
    intro: 'Perbesar bisnis setelah layanan, margin, dan sistem kerja sanggup menopangnya.',
    entries: `Dokumentasikan proses yang paling sering|Tulis langkah kerja singkat beserta contoh hasil yang benar. Mulai dari proses yang paling sering salah atau berulang.|Admin toko memakai SOP konfirmasi pesanan dan alamat.|Kesalahan per pesanan|Menengah
Buat pemeriksaan kualitas sebelum kirim|Gunakan checklist produk, jumlah, alamat, dan kondisi kemasan. Berikan tanggung jawab yang jelas.|Tim hampers memeriksa kartu ucapan serta isi sebelum segel.|Komplain akibat salah kirim|Ringan
Atur pemesanan ulang stok|Gunakan penjualan, waktu pasokan, dan variasi permintaan untuk menentukan titik pemesanan. Tinjau produk lambat bergerak.|Toko kopi menyiapkan stok berdasarkan jadwal pemasok dan penjualan aktual.|Kehabisan stok dan stok mati|Menengah
Otomatiskan tugas yang sudah stabil|Mulai dari pengingat atau pemindahan data yang aturannya jelas. Tetapkan pengecekan dan jalur penanganan ketika gagal.|Invoice lunas memicu tugas persiapan pesanan dengan pemeriksaan admin.|Waktu kerja dan tingkat kesalahan|Menengah
Gunakan AI dengan pemeriksaan manusia|Pakai AI untuk draf atau rangkuman tanpa memasukkan data pelanggan sensitif. Verifikasi fakta, harga, dan klaim sebelum dipakai.|Tim merangkum FAQ lalu admin memeriksa jawaban terhadap SOP.|Waktu hemat dan koreksi diperlukan|Menengah
Pisahkan uang usaha dan pribadi|Catat pemasukan, pengeluaran, dan penarikan pemilik secara terpisah. Tinjau kas yang tersedia untuk operasional.|Owner retail membuat pencatatan rekening usaha dan jadwal penarikan.|Ketepatan pencatatan kas|Menengah
Rencanakan kampanye sesuai kalender lokal|Siapkan pasokan, materi, dan kapasitas sebelum Ramadan, Lebaran, atau momen lokal yang relevan. Gunakan data musim sebelumnya.|Produsen hampers membuka pesanan sesuai kapasitas produksi dan kurir.|Margin musiman dan ketepatan kirim|Intensif
Latih tim melalui simulasi nyata|Gunakan contoh kasus, role-play, dan evaluasi hasil. Tetapkan kapan tim harus mengeskalasi masalah ke pemilik.|Admin berlatih menangani refund dan keterlambatan berdasarkan kebijakan.|Kasus selesai tanpa eskalasi ulang|Menengah
Uji ekspansi dengan pilot terbatas|Uji wilayah, produk, atau cabang baru dalam lingkup kecil. Tetapkan target margin, kapasitas, dan kriteria berhenti sebelum mulai.|Katering menguji satu area antar baru sebelum menyewa dapur tambahan.|Laba pilot dan kualitas layanan|Intensif`,
  },
];

let nextId = 1;
export const strategyChapters = chapters.map(({ entries, ...chapter }) => ({
  ...chapter,
  strategies: entries.split('\n').map((entry) => {
    const [title, action, example, metric, effort] = entry.split('|');
    return { id: nextId++, title, action, example, metric, effort, chapter: chapter.id, goal: chapter.goal };
  }),
}));

export const growthStrategies = strategyChapters.flatMap((chapter) => chapter.strategies);
