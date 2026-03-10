// ambil semua elemen vide)
const videos = Array.from(document.querySelectorAll('[data-duration]'));
console.log(videos);

// pilih hanya yang "JAVASCRIPT LANJUTAN"
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing2 video
.map(item => item.dataset.duration)

// ubah durasi jadi int, ubah menit jadi detik
.map(waktu => {
    // 10:10 -> [10, 10]
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parseInt(parts[0] * 60) + parseInt(parts[1]));

})


// jumlahkan semua detik
.reduce((total, detik) => total + detik);

// ubah format nya jadi jam
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `Durasi: ${jam} Jam, ${menit} Menit, ${detik} Detik`;

const pJumlah = document.querySelector('.jumlah-video');

let jmlhVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length

pJumlah.textContent = `Jumlah video: 
${jmlhVideo}`;