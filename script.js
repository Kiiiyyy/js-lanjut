// // cara membuat object pada javascript
// // 1. Object Literal
// let mahasiswa1 = {
//     nama: "Dzaky",
//     energi: 10,
//     makan: function(porsi) {
//         this.energi+= porsi;
//         console.log(`Selamat datang ${this.nama}, Selamat makan!`)
//     }
// }

// let mahasiswa2 = {
//     nama: "Dzaky",
//     energi: 10,
//     makan: function(porsi) {
//         this.energi+= porsi;
//         console.log(`Selamat datang ${this.nama}, Selamat makan!`)
//     }
// }

// // 2. Function Declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi; 

//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Selamat datang ${this.nama}, Selamat makan!`);
//     }

//     mahasiswa.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Selamat datang ${this.nama}, Selamat bermain!`);
//     }

//     return mahasiswa;
// }


// // 3. Object Declaration
// // keywordd new
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Selamat datang ${this.nama}, Selamat makan!`);
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Selamat datang ${this.nama}, Selamat bermain!`);
//     }

// }

// let Dzaky = new Mahasiswa("Dzaky", 10);



// Object.create

// object literal for method
// let methodMahasiswa = {
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Selamat datang ${this.nama}, Selamat makan!`);
//     },
//     main: function(jam) {
//         this.energi -= jam;
//         console.log(`Selamat datang ${this.nama}, Selamat bermain!`);
//     },
//     tidur: function(jam) {
//         this.energi += jam * 2;
//         console.log(`Selamat datang ${this.nama}, Selamat tidur!`);
//     },
//     kerja: function(jam) {
//         this.energi -= jam * 2;
//         console.log(`Selamat datang ${this.nama}, Selamat bekerja!`);
//     }
// }

// // 2. Function Declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi; 

//     return mahasiswa;
// }

// let Dzaky = Mahasiswa("Dzaky", 10);

// == PROTOTYPE ==

// // 2. Function Declaration
// function Mahasiswa(nama, energi) {
//     // let mahasiswa = Object.create(methodMahasiswa);
//     // let mahasiswa = {};
//     // let this = Object.create(Mahasiswa.prototype);
//     this.nama = nama;
//     this.energi = energi; 

//     // return mahasiswa;
//     // return this;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `Selamat datang ${this.nama}, Selamat makan!`;
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam;
//     return `Selamat datang ${this.nama}, Selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam * 2;
//     return `Selamat datang ${this.nama}, Selamat tidur!`;
// }

// Mahasiswa.prototype.kerja = function(jam) {
//     this.energi -= jam * 2;
//     return `Selamat datang ${this.nama}, Selamat bekerja!`;
// }

// let Dzaky = new Mahasiswa("Dzaky", 10);

// versi class
// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }

//     makan(prosi) {
//         this.energi += prosi;
//         return `Selamat datang ${this.nama}, Selamat makan!`;
//     }

//     main(jam) {
//         this.energi -= jam;
//         return `Selamat datang ${this.nama}, Selamat bermain!`;
//     }

//     tidur(jam) {
//         this.energi += jam * 2;
//         return `Selamat datang ${this.nama}, Selamat tidur!`;
//     }

//     kerja(jam) {
//         this.energi -= jam * 2;
//         return `Selamat datang ${this.nama}, Selamat bekerja!`;
//     }
// }

// == EXECUTION CONTEXT, HOISTING & SCOPE ==
// Fase
// 1. Creation Phase
// 2. Execution Phase

// var nama = "Dzaky"; 
// console.log(nama);

// creation phase global execution context
// nama var = undefined
// nama function = fn()
// hoisting 
// window = global Object
// this = window

// execution phase


// var nama = "Dzaky";
// var umur = 20;

// console.log(sayHello());

// function sayHello() {
//     return(`Hello ${nama}, umur kamu ${umur} tahun`);
// }

// function membuat local execution context
// yang didalamnya terdapat creation phase dan execution phase
// window
// arguments
// hoisting

// var nama = "Dzaky";
// var username = "@jakiii";

// console.log(cetakurl("@joktingkir","@jokowidodo"));

// function cetakurl() {
//     console.log(arguments);
//     let username = "@jokoanwar"
//     var instagramURL = "https://www.instagram.com/";
//     return instagramURL + username;
// }

// function a() {
//     console.log("ini a");

//     function b() {
//         console.log("ini b");

//         function c() {
//             console.log("ini c");
//         }
//         c();
//     }
//     b();
// }
// a();

// kesimpulan : function yang dibuat selalu di hoisting terlebih dahulu, sehingga kita bisa memanggil function sebelum kita mendeklarasikan function tersebut.

// == CLOSURE ==

// Meripakan sebuah function yang bisa mengakses variabel di luar scope nya, walaupun function tersebut sudah dieksekusi.

// // lexical scope = kemampuan function untuk mengakses variabel di luar scope nya

// function init() {
//     // let nama = "Dzaky";
//     function tampilNama(nama) {
//         console.log(nama);
//     }
//     return tampilNama;
// }

// let panggilNama = init();
// panggilNama("Jokotingkir");
// panggilNama("Jokowidodo");

// // kenapa pake closures? untuk membuat private method, untuk membuat function factory, untuk membuat module pattern.

// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Selamat ${waktu}, ${nama} semoga harimu senin terus`);
//     }
// }

// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatSore = ucapkanSalam("Sore");
// let selamatMalam = ucapkanSalam("Malam");
// selamatPagi("Dzaky");
// selamatSiang("jokotingkir");
// selamatSore("jokowidodo");
// selamatMalam("jokoanwar");

// console.dir(selamatPagi);

// let add = (function() {
//   let counter = 0;
//     return function() {
//         return ++counter;
//     }
// })();

// counter = 1000;
// console.log(add());
// console.log(add());
// console.log(add());

// == VAR VS LET VS CONST ==

// var i = 10;
// console.log(i);

// IIFE (Immediately Invoked Function Expression)


// // SIAF (Self Invoking Anonymous Function)
// (function() {
//     for(var i = 0; i < 5; i++) {
//         console.log(i);
//     }
// })();

// // console.log(i); // error karena i tidak bisa diakses diluar function, karena menggunakan var, jika menggunakan let maka i tidak bisa diakses diluar function.
// // solusi : pake let

// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i); // error karena i tidak bisa diakses diluar function, karena menggunakan let, jika menggunakan var maka i bisa diakses diluar function.

// gimana kalo mau i nya gabisa diubah2?
// solusi : pake const

// for(const i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i); // error karena i tidak bisa diakses diluar function, karena menggunakan const, jika menggunakan var maka i bisa diakses diluar function.

// const mhs = {
//     nama: "jokotingkir",
//     umur: 20,
// }

// // masih bisa 
// mhs.umur = 17;

// // gabisa
// mhs = {
//     nama: "jokowidodo",
//     umur: 20,
// }

// == ARROW FUNCTION ==
// bentuk lain yang lebih ringkas dari function expression

// const tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// }

// console.log(tampilNama("Dzaky"));

// arrow function 
// const tampilNama = (nama, waktu = "pagi") => {
//     return `Halo, ${nama}, selamat ${waktu}`;
// }

// console.log(tampilNama("Dzaky"));

// // jika hanya memiliki satu parameter, kita bisa menghilangkan tanda kurung
// const tampilNama2 = nama => {
//     return `Halo, ${nama}`
// }

// console.log(tampilNama2("Dzaky"));

// // implisit return
// const tampilNama3 = nama => `Halo, ${nama}`;

// console.log(tampilNama3("Dzaky"));

// // tanpa parameter
// const tampilNama4 = () => `Hello lord`;

// console.log(tampilNama4());

// let mahasiswa = ["Dzaky", "Jokotingkir", "Jokowidodo", "Jokoanwar"];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });

// console.log(jumlahHuruf);

// arrow function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);

// console.log(jumlahHuruf);

// return nya jadi object
// let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jmlHuruf: nama.length}))

// console.table(jumlahHuruf);

// == THIS PADA ARROW FUNCTION ==

// constructor function
// const Mahasiswa = function() {
//     this.nama = "Dzaky";
//     this.umur = 20;
//     this.sayhello = () => {
//         console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun`);
//     }
// }

// const Dzaky = new Mahasiswa();
// Dzaky.sayhello();


// Object literal
// const mhs = {
//     nama : "Dzaky",
//     umur : 20,
//     sayHello : () => {
//         console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun`);
//     }
// }

// mhs.sayHello(); // hasilnya undefined karena this pada arrow function tidak memiliki this, sehingga this.nama dan this.umur tidak bisa diakses.


// const Mahasiswa = function() {
//     this.nama = "Dzaky";
//     this.umur = 20;
//     this.sayhello = () => {
//         console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun`);
//     }
//     // arow function tidak memiliki this, sehingga this pada arrow function akan mengacu pada this di luar arrow function, yaitu this pada constructor function, sehingga this.nama dan this.umur bisa diakses.
//     // setInterval(() => {
//     //     console.log(this.umur++);
//     // }, 500);

//     // function biasa memiliki this sendiri, sehingga this pada function biasa akan mengacu pada this di dalam function biasa, sehingga this.umur tidak bisa diakses, karena this pada function biasa tidak memiliki umur, sehingga hasilnya akan error.
//     // setInterval(function() {
//     //     // this pada function biasa akan mengacu pada window, kenapa window? karena function biasa memiliki this sendiri, sehingga this pada function biasa akan mengacu pada this di dalam function biasa, sehingga this.umur tidak bisa diakses, karena this pada function biasa tidak memiliki umur, sehingga hasilnya akan error.
//     //     console.log(this.umur);
//     // }, 500);

// }

// const Dzaky = new Mahasiswa();
// Dzaky.sayhello();


// const box = document.querySelector(".box");
// box.addEventListener("click", function() {
//     console.log(this); // this pada event listener akan mengacu pada element yang di klik, yaitu box, sehingga this.style.backgroundColor bisa diakses.

//     let satu = "size";
//     let dua = "caption";

//     if(this.classList.contains(satu)) {
//         [satu, dua] = [dua, satu];
//     }

//     this.classList.toggle("size");
//     setTimeout(() => {
//         this.classList.toggle("caption");
//     }, 600);
// });

// == HIGHER ORDER FUNCTION ==

// function yang bisa menerima function lain sebagai parameter atau mengembalikan function lain sebagai return value.

// function diperlakukan sebagai OBJECT, artinya function bisa disimpan dalam variabel, bisa dikirim sebagai parameter, dan bisa dikembalikan sebagai return value.

// function kerjakanTugas(mataKuliah, selesai) {
//     console.log(`Mulai mengerjakan tugas ${mataKuliah}...`);
//     setTimeout(() => {
//         selesai();    
//     }, 3000);
// }

// function selesai() {
//     console.log("Selesai mengerjakan tugas!");
// }

// kerjakanTugas("Matematika", selesai);

// penjelasan : function kerjakanTugas menerima parameter mataKuliah dan selesai, dimana mataKuliah adalah string yang berisi nama mata kuliah, dan selesai adalah function yang akan dipanggil setelah tugas selesai dikerjakan. Sehingga ketika kita memanggil function kerjakanTugas dengan parameter "Matematika" dan function selesai, maka akan menampilkan "Mulai mengerjakan tugas Matematika..." dan setelah itu akan memanggil function selesai yang akan menampilkan "Selesai mengerjakan tugas!".

// kenapa pake higher order function?
// untuk abstraksi : kita bisa membuat function yang lebih umum, sehingga bisa digunakan untuk berbagai macam kasus, sehingga kita tidak perlu membuat function yang sama berulang-ulang untuk kasus yang berbeda.
// untuk callback : kita bisa membuat function yang akan dipanggil setelah function lain selesai dijalankan, sehingga kita bisa mengatur urutan eksekusi function dengan lebih baik, sehingga kita tidak perlu menggunakan setTimeout atau setInterval untuk mengatur urutan eksekusi function.
// functional programming : kita bisa membuat function yang lebih kecil dan lebih spesifik, sehingga kita bisa menggabungkan function-function tersebut untuk membuat function yang lebih kompleks, sehingga kita bisa membuat code yang lebih modular dan lebih mudah untuk di maintenance.

// == FILTER, MAP, REDUCE ==
const angka = [3, 4, 6, 7, -3, 4, 3, 2, 3, 10];

// mencari angka yang lebih besar dari 3
// for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }

// console.log(newAngka);

// filter 
// const newAngka = angka.filter((a) => a >= 3);

// console.log(newAngka);

// map
// kalikan semua angka dengan 2
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

// reduce 
// jumlahkan semua angka 
// const newAngka = angka.reduce((accumulator, curentValue) => accumulator + curentValue);
// console.log(newAngka);

// method chaining
// Cari angka > 5
// kalikan 3
// jumlahkan

// const hasil = angka.filter(a => a > 5).
//                 map(a => a * 3).
//                 reduce((acc, curr) => acc + curr);

// console.log(hasil);


// == TEMPLATE LITERAL ==
// Multi lane String
// console.log(`joko
//     anwar`);

// const nama = "Dzaky";
// const umur = 20;

// console.log(`Halo, nama saya ${nama}, Umur saya ${umur} Tahun`)

// // Embeded Expression 
// console.log(`${1 + 1}`);
// console.log(`${alert("anjay")}`);
// const z = 11;
// console.log(`${(z % 2 == 0) ? 'genap' : 'ganjil' }`)

// HTML Fragment
// const mhs = [{
//     nama: 'Joko',
//     email: 'joko@gmail.com'
//     },
//     {
//         nama: 'Dzaky',
//         email: 'dzaky@gmail.com'
//     },
//     {
//         nama: 'Jeki',
//         email: 'jeki@gmail.com'
//     }
// ]

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//             <li>${m.nama}</li>
//             <li>${m.email}</li>
//         </ul>`).join('')}
// </div>`

// 3. Conditioning
// ternary 
// const lagu = {
//     judul : 'kau adalah jawa ku',
//     penyanyi : 'ahmad syahroni',
// }

// const el = `<div class = "lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${(lagu.feat ? `(feat. ${lagu.feat})` : ``)}</li>
//     </ul>
// </div>`


//4. nested
// const mhs = {
//     nama: 'Dzaky rama',
//     semester: 4,
//     matakuliah: ['Rekayasa web', 'analisis sistem perancangan', 'pemrograman berbasis object', 'pancasila']
// }

// function cetakMatakuliah(matkul) {
//     return `
//     <ol>
//         ${matkul.map(mk => `<li>${mk}</li>`).join('')}
//     </ol>`
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="semester"> Semester : ${mhs.semester}</span>
//     <h4>Mata Kuliah :</h4>
//     ${cetakMatakuliah(mhs.matakuliah)}
// </div>`

// document.body.innerHTML = el;

// == TAGGED TEMPLATE ==
// const nama = 'Dzaky Ramadhani';
// const umur = 20;

// const str = coba`Halo, nama saya ${nama}, umur saya ${umur} tahun`;

// console.log(str);

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`
//     // });
//     // return result

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '')
// }

// const nama = 'Dzaky Ramadhani';
// const umur = 20;

// const str = highlight`Halo, nama saya ${nama}, umur saya ${umur} tahun`;

// console.log(str);

// function highlight(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`
//     // });
//     // return result

//     return strings.reduce((result, str, i) => `${result}${str}<b>${values[i] || ''}</b>`, '')
// }

// document.body.innerHTML = str;

// == DESTRUCTURING ASSIGNMENT ==

// Desc array

// const perkenalan = ['Halo', 'nama', 'saya', 'joko'];
// const [salam, , , nama] = perkenalan;
// console.log(nama)

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a]
// console.log(a);
// console.log(b)

// return value pada function
// function coba() {
//     return[1, 2];
// }

// const [a, b] = coba();
// console.log(b);

// Rest parameter
// const [a, ...values] = [1,2,3,4, 5, 6, 7]
// console.log(a)
// console.log(values)

// Destructuring object
// const mhs = {
//     nama: 'Dzaky',
//     umur: 33
// }

// const {nama, umur}= mhs
// console.log(nama)

// Assignment tanpa deklarasi object
({nama, umur} = {nama: 'Dzaky', umur : 20});
console.log(nama)