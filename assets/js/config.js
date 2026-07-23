// ============================================================
// KONFIGURASI WEBSITE
// ============================================================
const SITE_NAME = 'Padukuhan Dawung';
const SITE_DESC = 'Kelurahan Serut, Kapanewon Gedangsari, Kabupaten Gunung Kidul';
const BASE_URL = 'http://localhost/Dukuh-Dawung/';

// ============================================================
// PROFIL PADUKUHAN
// ============================================================
const profilUmum = {
    nama: 'Padukuhan Dawung',
    kelurahan: 'Serut',
    kapanewon: 'Gedangsari',
    kabupaten: 'Gunung Kidul',
    provinsi: 'Daerah Istimewa Yogyakarta',
    kode_pos: '55863',
    luas_wilayah: '125 Ha',
    sejarah: 'Padukuhan Dawung memiliki sejarah panjang sebagai daerah pertanian. Nama "Dawung" berasal dari bahasa Jawa yang berarti "daun" atau "hijau", mencerminkan kesuburan tanahnya. Berdiri sejak tahun 1950, padukuhan ini terus berkembang menjadi pemukiman yang maju dan mandiri.',
    visi: 'Mewujudkan Padukuhan Dawung yang maju, mandiri, dan sejahtera berbasis pertanian dan budaya.',
    misi: [
        'Meningkatkan kualitas sumber daya manusia melalui pendidikan dan pelatihan',
        'Mengembangkan potensi pertanian dan pariwisata desa',
        'Melestarikan budaya dan kearifan lokal',
        'Mendorong pertumbuhan UMKM lokal',
        'Membangun infrastruktur yang memadai'
    ],
    batas_wilayah: {
        selatan: 'Desa Terbah',
        timur: 'Desa Sampang',
        utara: 'Desa Wangon',
        barat: 'Desa Gayamharjo'
    }
};

// ============================================================
// PERANGKAT DESA
// ============================================================
const perangkatDesa = {
    kepala_dusun: 'Bapak Giyana',
    rw: {
        'RW 03': 'Bapak Sumardi'
    },
    rt: {
        'RT 12': 'Bapak Samino',
        'RT 13': 'Bapak Marwanto',
        'RT 14': 'Bapak Kamari',
        'RT 15': 'Bapak Tugimin',
        'RT 16': 'Bapak Sagino'
    }
};

// ============================================================
// DATA PENDUDUK PER RT
// ============================================================
const dataPenduduk = {
    total_jiwa: 656,
    total_kk: 244,
    rt: [
        {
            nama: 'RT 12',
            kk: 42,
            laki: 54,
            perempuan: 51,
            total: 105,
            rw: 'RW 03',
            ketua: 'Bapak Samino'
        },
        {
            nama: 'RT 13',
            kk: 43,
            laki: 57,
            perempuan: 56,
            total: 113,
            rw: 'RW 03',
            ketua: 'Bapak Marwanto'
        },
        {
            nama: 'RT 14',
            kk: 49,
            laki: 66,
            perempuan: 73,
            total: 139,
            rw: 'RW 03',
            ketua: 'Bapak Kamari'
        },
        {
            nama: 'RT 15',
            kk: 66,
            laki: 86,
            perempuan: 80,
            total: 166,
            rw: 'RW 03',
            ketua: 'Bapak Tugimin'
        },
        {
            nama: 'RT 16',
            kk: 44,
            laki: 67,
            perempuan: 64,
            total: 131,
            rw: 'RW 03',
            ketua: 'Bapak Sagino'
        }
    ]
};

// ============================================================
// DATA SARANA & PRASARANA
// ============================================================
const saranaPrasarana = {
    pendidikan: [
        { nama: 'PAUD', jumlah: 1, kondisi: 'Baik', lokasi: 'Belakang Padukuhan' }
    ],
    kesehatan: [
        { nama: 'Pustu (Puskesmas Pembantu)', jumlah: 1, kondisi: 'Baik', lokasi: 'Dukuh Dawung' }
    ],
    ibadah: [
        { nama: 'Masjid', jumlah: 2, kondisi: 'Baik', lokasi: 'RT 14 dan RT 16' },
        { nama: 'Gereja GKJ', jumlah: 1, kondisi: 'Baik', lokasi: 'RT 12' },
        { nama: 'Gereja Katolik Kapel', jumlah: 1, kondisi: 'Baik', lokasi: 'RT 15' }
    ],
    air_bersih: [
        { nama: 'Sumur Bor', jumlah: 6, kondisi: 'Baik', lokasi: 'Tersebar di 6 titik' },
        { nama: 'PDAM', jumlah: 'Tidak Ada', kondisi: '-', lokasi: '-' }
    ],
    keamanan: [
        { nama: 'Pos Kampling', jumlah: 'Setiap RT', kondisi: 'Aktif', lokasi: 'Semua RT' }
    ]
};

// ============================================================
// DATA KEGIATAN MASYARAKAT
// ============================================================
const kegiatan = {
    rutin: [
        {
            nama: 'Gotong Royong',
            jadwal: 'RT 12: Jumat Pagi, RT 14: Minggu Pagi 1x sebulan, RT 15: Jumat (tidak rutin)',
            tempat: 'Lingkungan masing-masing RT',
            deskripsi: 'Kegiatan gotong royong membersihkan lingkungan dan perbaikan fasilitas'
        },
        {
            nama: 'Arisan Ibu-ibu',
            jadwal: 'RT 12: Setiap 35 hari sekali (Senin Pon)',
            tempat: 'Rumah warga bergilir',
            deskripsi: 'Kegiatan arisan dan silaturahmi ibu-ibu'
        },
        {
            nama: 'Arisan Bapak-bapak',
            jadwal: 'RT 12: 1 bulan sekali (Senin Kliwon), RT 15: Kamis Legi/Senin Legi 1x sebulan',
            tempat: 'Rumah warga bergilir',
            deskripsi: 'Kegiatan arisan dan silaturahmi bapak-bapak'
        },
        {
            nama: 'Kegiatan Volunteer (ANT Charity)',
            jadwal: 'Setiap Sabtu',
            tempat: 'Dekat Posko/RT 12',
            deskripsi: 'Kegiatan belajar mengajar yang diajar oleh anak-anak sekolah'
        },
        {
            nama: 'Ronda Malam',
            jadwal: 'Setiap Malam (bergiliran)',
            tempat: 'Pos Kampling setiap RT',
            deskripsi: 'Jaga keamanan lingkungan secara bergiliran'
        },
        {
            nama: 'Doa Bersama',
            jadwal: 'Saat ada hajatan',
            tempat: 'Rumah warga',
            deskripsi: 'Doa bersama untuk warga yang memiliki hajatan'
        }
    ],
    tahunan: [
        {
            nama: 'HUT RI 17 Agustus',
            waktu: 'Bulan Agustus',
            deskripsi: 'Perayaan HUT RI dengan berbagai perlombaan (voli plastik, dll)'
        },
        {
            nama: 'Bersih Dusun',
            waktu: 'Tahunan',
            deskripsi: 'Kegiatan bersih-bersih seluruh dusun secara bersama-sama'
        },
        {
            nama: 'Pengajian Akbar',
            waktu: 'Tahunan',
            deskripsi: 'Pengajian besar yang diikuti seluruh warga padukuhan'
        },
        {
            nama: 'Rasulan',
            waktu: 'Tahunan',
            deskripsi: 'Acara syukuran desa dan doa bersama'
        }
    ],
    insidental: [
        {
            nama: 'Pemuda Malam Tanggal 11',
            deskripsi: 'Kegiatan pemuda setiap malam tanggal 11 (RT 15)'
        }
    ]
};

// ============================================================
// DATA ORGANISASI
// ============================================================
const organisasi = {
    pemerintahan: [
        {
            nama: 'Pemerintahan Padukuhan Dawung',
            ketua: 'Bapak Giyana (Kepala Dusun)',
            anggota: '5 RT, 1 RW',
            keterangan: 'Struktur pemerintahan tingkat padukuhan'
        }
    ],
    keagamaan: [
        {
            nama: 'Takmir Masjid',
            ketua: '-',
            anggota: '-',
            keterangan: 'Pengurus masjid di RT 14 dan RT 16'
        },
        {
            nama: 'PKK (Pemberdayaan Kesejahteraan Keluarga)',
            ketua: '-',
            anggota: '-',
            keterangan: 'Pemberdayaan perempuan dan keluarga'
        }
    ],
    sosial_budaya: [
        {
            nama: 'Karang Taruna Dawung Central',
            ketua: '-',
            anggota: '-',
            keterangan: 'Organisasi pemuda Padukuhan Dawung'
        },
        {
            nama: 'Karang Taruna Ngudi Rukun',
            ketua: '-',
            anggota: '-',
            keterangan: 'Organisasi pemuda Padukuhan Dawung'
        },
        {
            nama: 'Sedulur Dawung Official',
            ketua: '-',
            anggota: '-',
            keterangan: 'Organisasi pemuda Padukuhan Dawung'
        },
        {
            nama: 'Kelompok Bapak-bapak',
            ketua: '-',
            anggota: '-',
            keterangan: 'Kelompok bapak-bapak untuk kegiatan sosial'
        },
        {
            nama: 'Kelompok Tani',
            ketua: '-',
            anggota: '-',
            keterangan: 'Kelompok petani untuk peningkatan hasil pertanian'
        }
    ]
};

// ============================================================
// DATA UMKM
// ============================================================
const umkm = [
    {
        nama: 'Tempe Kedelai, Benguk & Tape',
        pemilik: 'Mbah Yati / Yanto',
        kategori: 'Kuliner',
        deskripsi: 'Produksi tempe kedelai, tempe benguk, dan tape',
        kontak: '-',
        alamat: 'RT 12',
        rt: 'RT 12'
    },
    {
        nama: 'Tempe & Tape',
        pemilik: 'Bapak Subari',
        kategori: 'Kuliner',
        deskripsi: 'Produksi tempe dan tape',
        kontak: '-',
        alamat: 'RT 13',
        rt: 'RT 13'
    },
    {
        nama: 'Bakmi',
        pemilik: 'Bu Narni',
        kategori: 'Kuliner',
        deskripsi: 'Produksi bakmi',
        kontak: '-',
        alamat: 'RT 14',
        rt: 'RT 14'
    },
    {
        nama: 'Tempe',
        pemilik: 'Bu Sularni',
        kategori: 'Kuliner',
        deskripsi: 'Produksi tempe',
        kontak: '-',
        alamat: 'RT 15',
        rt: 'RT 15'
    },
    {
        nama: 'Kue Pisang (Tim Dawung)',
        pemilik: 'Bu Tatik',
        kategori: 'Kuliner',
        deskripsi: 'Produksi kue pisang',
        kontak: '-',
        alamat: 'RT 15',
        rt: 'RT 15'
    },
    {
        nama: 'Rengginang',
        pemilik: 'Mba Wahyuni',
        kategori: 'Kuliner',
        deskripsi: 'Produksi rengginang',
        kontak: '-',
        alamat: 'RT 16',
        rt: 'RT 16'
    },
    {
        nama: 'Tempe Benguk',
        pemilik: 'Mbak Mujiem',
        kategori: 'Kuliner',
        deskripsi: 'Produksi tempe benguk',
        kontak: '-',
        alamat: 'RT 16',
        rt: 'RT 16'
    },
    {
        nama: 'Lempeng & Crimping Pisang',
        pemilik: 'Pak Sumardi',
        kategori: 'Kuliner',
        deskripsi: 'Produksi lempeng dan crimping pisang',
        kontak: '-',
        alamat: 'RT 16',
        rt: 'RT 16'
    },
    {
        nama: 'Keripik Singkong',
        pemilik: 'Warga RT 14',
        kategori: 'Kuliner',
        deskripsi: 'Produksi keripik singkong',
        kontak: '-',
        alamat: 'RT 14',
        rt: 'RT 14'
    },
    {
        nama: 'Sayur Mayur',
        pemilik: 'Warga RT 15',
        kategori: 'Pertanian',
        deskripsi: 'Budidaya sayur mayur',
        kontak: '-',
        alamat: 'RT 15',
        rt: 'RT 15'
    }
];

// ============================================================
// DATA POTENSI
// ============================================================
const potensi = {
    pertanian: [
        {
            nama: 'Padi',
            deskripsi: 'Tanaman padi dengan skala besar',
            luas_lahan: 'Variatif',
            produksi: 'Skala besar'
        },
        {
            nama: 'Ketela',
            deskripsi: 'Tanaman ketela dengan skala besar',
            luas_lahan: 'Variatif',
            produksi: 'Skala besar'
        },
        {
            nama: 'Sayur Mayur',
            deskripsi: 'Budidaya sayur mayur (RT 15)',
            luas_lahan: 'Variatif',
            produksi: 'Variatif'
        }
    ],
    peternakan: [
        {
            nama: 'Peternakan PT Ayam',
            deskripsi: 'Peternakan ayam skala perusahaan terbatas',
            lokasi: 'RT 15',
            jumlah: '-'
        },
        {
            nama: 'Ternak Sapi & Kambing',
            deskripsi: 'Pemeliharaan sapi dan kambing oleh warga',
            lokasi: 'RT 13 dan lainnya',
            jumlah: '-'
        }
    ],
    umkm: umkm,
    wisata: [
        {
            nama: 'Potensi Balai Padukuhan',
            deskripsi: 'Rencana pembangunan balai padukuhan untuk event besar',
            potensi: 'Kegiatan masyarakat, event besar'
        }
    ]
};

// ============================================================
// DATA PERMASALAHAN
// ============================================================
const permasalahan = {
    air: [
        {
            masalah: 'Kekurangan Air di Musim Kemarau',
            deskripsi: 'Seluruh wilayah padukuhan mengalami kekurangan air saat musim kemarau. Juga terdampak saat industri pertanian berjalan.',
            solusi: 'Pembangunan sumur bor tambahan, penampungan air hujan',
            prioritas: 'Tinggi'
        }
    ],
    infrastruktur: [
        {
            masalah: 'Balai Padukuhan Belum Ada',
            deskripsi: 'Padukuhan belum memiliki balai yang memadai untuk event besar',
            solusi: 'Pembangunan balai padukuhan',
            prioritas: 'Sedang'
        }
    ],
    bencana: [
        {
            masalah: 'Tanah Longsor',
            deskripsi: 'Pernah terjadi bencana tanah longsor karena tanah di beberapa wilayah lapuk',
            solusi: 'Penghijauan dan perbaikan struktur tanah',
            prioritas: 'Tinggi'
        }
    ],
    ekonomi: [
        {
            masalah: 'Keterbatasan Modal UMKM',
            deskripsi: 'Pelaku UMKM kesulitan akses permodalan',
            solusi: 'Program koperasi dan bantuan modal',
            prioritas: 'Sedang'
        }
    ]
};

// ============================================================
// DATA KARANG TARUNA
// ============================================================
const karangTaruna = [
    {
        nama: 'Karang Taruna Dawung Central',
        ketua: '-',
        kegiatan: 'Rapat dan arisan setiap bulan, terlibat dalam HUT RI, lomba Agustusan, Rasulan',
        potensi: 'Potensi pemuda cukup baik, partisipasi perlu ditingkatkan',
        kendala: 'Keterbatasan dana, masih bergantung sponsor',
        harapan: 'Bisa kompak, memaksimalkan lapangan agar produktif untuk turnamen'
    },
    {
        nama: 'Karang Taruna Ngudi Rukun',
        ketua: '-',
        kegiatan: 'Kegiatan kepemudaan dan kemasyarakatan',
        potensi: 'Partisipasi pemuda di masing-masing RT',
        kendala: 'Keterbatasan dana',
        harapan: 'Pengembangan kegiatan pemuda'
    },
    {
        nama: 'Sedulur Dawung Official',
        ketua: '-',
        kegiatan: 'Kegiatan kepemudaan dan kemasyarakatan',
        potensi: 'Partisipasi pemuda di masing-masing RT',
        kendala: 'Keterbatasan dana',
        harapan: 'Pengembangan kegiatan pemuda'
    }
];

// ============================================================
// DATA GALERI
// ============================================================
const galeri = [
    { src: 'pemandangan.jpeg', caption: 'Pemandangan Sawah Padukuhan Dawung' },
    { src: 'gotong-royong2.jpeg', caption: 'Kegiatan Gotong Royong Warga' },
    { src: 'dangdut.jpeg', caption: 'Kegiatan Masyarakat' },
    { src: 'posyandu2.jpeg', caption: 'Posyandu' }
];