// JS Lanjutan

// ! video 1 - object(review) -
// object literal
// tidak efektif untuk object yang banyak
// let mhs = {
//   nama: "wildan",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`halo ${this.nama}, selamat makan!`);
//   },
// };

// function declaration
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     // this.energi = this.energi + porsi;
//     this.energi += porsi;
//     console.log(`halo ${this.nama}, selamat makan!`);
//   };

//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`halo ${this.nama}, selamat beramain!`);
//   };

//   return mahasiswa;
// }

// let mahasiswa1 = Mahasiswa("wildan", 10);

// constructor function
// keyword new

// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     // this.energi = this.energi + porsi;
//     this.energi += porsi;
//     console.log(`halo ${this.nama}, selamat makan!`);
//   };

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`halo ${this.nama}, selamat beramain!`);
//   };
// }

// let mahasiswa1 = new Mahasiswa("wildan", 10);

// ! video 2 - Object.create() -
// Object.create() --> ini merupakan tambahan dari cara membuat object dengan function declaration.

// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`halo ${this.nama}, selamat makan`);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`halo ${this.nama}, selamat bermain`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`halo ${this.nama}, selamat tidur`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   // mahasiswa.makan = methodMahasiswa.makan;
//   // mahasiswa.main = methodMahasiswa.main;
//   // mahasiswa.tidur = methodMahasiswa.tidur;

//   return mahasiswa;
// }

// let mahasiswa1 = Mahasiswa("wildan", 10);

// ! video 3 - prototype -

// function Mahasiswa(nama, energi) {
//   // let mahasiswa = Object.create(methodMahasiswa);
//   // let mahasiswa = {};
//   // let this = Object.create(Mahasiswa.prototype);
//   this.nama = nama;
//   this.energi = energi;
//   // return mahasiswa;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `halo ${this.nama}, selamat makan!`;
// };

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `halo ${this.nama}, selamat bermain!`;
// };

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `halo ${this.nama}, selamat tidur`;
// };

// let mahasiswa1 = new Mahasiswa("wildan", 10);

//? class memiliki konsep yang sama dengan prototype
// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }

//   makan(porsi) {
//     this.energi += porsi;
//     return `halo ${this.nama}, selamat makan!`;
//   }

//   main(jam) {
//     this.energi -= jam;
//     return `halo ${this.nama}, selamat bermain!`;
//   }

//   tidur(jam) {
//     this.energi += jam * 2;
//     return `halo ${this.nama}, selamat tidur`;
//   }
// }

// let mahasiswa1 = new Mahasiswa("wildan", 10);

// var angka = new Number();

// ! video 4 - Execution Context, Hoisting & Scope -

// Execution Context
// console.log(nama);
// var nama = "wildan";

// ? creation phase pada global context

// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// ? execution phase
// console.log(sayHello());

// var nama = "wildan";
// var umur = 17;

// function sayHello() {
//   return `halo, nama saya ${nama}, umur saya ${umur}.`;
// }

// function membuat local execution context
// yang didalamnya terdapat creation and execution context
// window
// arguments
// hoisting

// var nama = "Wildan Firdaus";
// var username = "@wildanf.30";

// function cetakURL() {
//   var instagramURL = "http://instagram.com/";
//   return instagramURL + username;
// }

// console.log(cetakURL("hdzaaa_"));

// function a() {
//   console.log("ini a");
//   function b() {
//     console.log("ini b");
//     function c() {
//       console.log("íni c");
//     }
//     c();
//   }
//   b();
// }
// a();

// function satu() {
//   var nama = "wildan";
//   console.log(nama);
// }

// function dua() {
//   console.log(nama);
// }

// console.log(nama);
// var nama = "hudza";
// satu();
// dua("aziz");
// console.log(nama);

// ! video 5 - closure -

// // lexical scope
// function init() {
//   let nama = "wildan"; // local variable
//   function tampilNama() {
//     // inner function
//     console.log(nama); // akses ke parent variable
//   }
//   tampilNama();
// }
// init();

// function init() {
//   // let nama = 'wildan';
//   return function (nama) {
//     console.log(nama);
//   };
// }

// let panggilNama = init();
// panggilNama("hudza");
// panggilNama("wildan");

// ? function factories
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`selamat ${waktu}, ${nama}. semoga harimu suram`);
//   };
// }

// let selamatPagi = ucapkanSalam("pagi");
// let selamatSiang = ucapkanSalam("siang");
// let selamatMalam = ucapkanSalam("malam");

// selamatPagi("gubenk");
// selamatSiang("junda");
// selamatMalam("fayyaz");

// ? private method

// let add = (function () { // ?immediately invoked function expression
//   let counter = 0; // --> private method
//   return function () {
//     return ++counter;
//   };
// })();

// counter = 100;

// // let a = add(); // ? agar tidak menampung function dalam variable
// console.log(add());
// console.log(add());
// console.log(add());

// ! video 7 - arrow function -
// const tampilNama = (nama) => {
//   return `halo ${nama}!`;
// };
// console.log(tampilNama("wildan"));

// ? implisit function
// const tampilNama = nama => `halo ${nama}`; // ini sama seperti yang diatas, bedanya kita tidak perlu menaruh parameter dalam kurung () dan aksi dalam kurung kurawal {}
// console.log(tampilNama('wildan'));

// ? kalo gak ada parameter wajib dengan kurung ()
// const tampilNama = () => `hello world`;
// console.log(tampilNama());

// let mahasiswa = ["wildan firdaus", "hudzaifah", "gubenk"];
// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

// ? mengembalikannya dalam bentuk object
// let jumlahHuruf = mahasiswa.map((nama) => ({ nama: nama, jmlHuruf: nama.length }));
// // console.log(jumlahHuruf);
// console.table(jumlahHuruf);

// ! video 8 - this pada arrow function -

// ? this pada constructor function
// const Mahasiswa = function () {
//   this.nama = "Wildan";
//   this.umur = 17;
//   this.sayHello = function () {
//     return console.log(`halo nama saya ${this.nama}, saya berumur ${this.umur} tahun`);
//   };
// };

// const wildan = new Mahasiswa();

// ? this pada arrow function
// arrow function tidak memiliki konsep this. jika menggunakan this pada arrow function, this tersebut akan mengacu pada window bukan pada objectnya
// const Mahasiswa = function () {
//   this.nama = "Wildan";
//   this.umur = 17;
//   this.sayHello = () => {
//     return console.log(`nama saya ${this.nama}, saya berumur ${this.umur}.`);
//   };

//   setInterval(() => {
//     console.log(this.umur++);
//     // karena arrow function tidak memiliki konsep this, maka this.umur akan melakukan lexical scope yaitu mencari variable ke parent scopenya
//   }, 1000);
// };
// const wildan = new Mahasiswa();

// mhs1 = {
//   nama: "wildan",
//   umur: 17,
//   sayHello: () => {
//     console.log(`nama saya ${this.nama}, saya berumur ${this.umur}.`);
//   },
//   // this akan mengacu ke window sehingga this.nama akan bernilai undefined
// };

// const box = document.querySelector(".box");
// box.addEventListener("click", function () {
//   let satu = "size";
//   let dua = "caption";

//   if (this.classList.contains(satu)) {
//     [satu, dua] = [dua, satu];
//   }

//   this.classList.toggle(satu);
//   setTimeout(() => {
//     this.classList.toggle(dua);
//   }, 1500);
// });

// ! video 9 - high order function -

// function kerjakanTugas(matkul, selesai) {
//   // kerjakanTugas sebagai Higher Order Function
//   // dan selesai sebagai Callback
//   console.log(`Mulai mnegerjakan tugas ${matkul}...`);
//   selesai();
// }

// function selesai() {
//   alert(`selesai mengerjakan tugas`);
// }

// kerjakanTugas("pemrograman web", selesai);

// function repeat(n, action) {
//   for (let i = 0; i < n; i++) {
//     action(i + 1);
//   }
// }
// repeat(1, alert);

// ! video 10 - filter, map, & reduce -
// const angka = [-1, 2, 3, 4, -5, -4, 8, 9, 5, -9];
// membuat angka >= 3
// for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }

// console.log(newAngka);
// // menggunakan filter

// const newAngka = angka.filter(function (a) {
//   return a >= 3;
// });

// // arrow function
// const newAngka = angka.filter((a) => a >= 3);

// // menggunakan map
// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

// menggunakan reduce
// jumlahkan seluruh elemen pada array
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);

// // method chaining

// const hasil = angka
//   // angka >= 4
//   .filter((a) => a >= 4)
//   // angka * 3
//   .map((a) => a * 3)
//   // jumlahkan angka
//   .reduce((acc, cur) => acc + cur);

// console.log(hasil);

//! Video 11 - latihan filter, map, & reduce-

// // ambil semua elemen video
// const liVideos = Array.from(document.querySelectorAll("ul li"));
// // pilih yang hanya 'JAVASCRIPT LANJUTAN'
// let liVideo = liVideos
//   .filter((video) => video.innerHTML.includes("JAVASCRIPT LANJUTAN"))
//   // ambil durasi masing - masing video
//   .map((item) => item.dataset.duration)
//   // ubah durasi menjadi float, ubah menit menjadi detik
//   .map((waktu) => {
//     // 10:30 => (10, 30) split
//     const parts = waktu.split(":").map((part) => parseFloat(part));
//     return parts[0] * 60 + parts[1];
//   })
//   // jumlahkan semua detik
//   .reduce((total, detik) => total + detik);
// // ubah formatnya menjadi jam, menit, detik
// const jam = Math.floor(liVideo / 3600);
// liVideo = liVideo - jam * 3600;
// const menit = Math.floor(liVideo / 60);
// liVideo = liVideo - menit * 60;
// const detik = liVideo;
// // simpan di DOM
// const pJmlVideo = document.querySelector(".jumlah-video");
// const jmlVideo = liVideos.filter((video) => video.innerHTML.includes("JAVASCRIPT LANJUTAN")).length;
// pJmlVideo.innerHTML = `${jmlVideo} Video`;

// const totalDurasi = document.querySelector(".total-durasi");
// totalDurasi.innerHTML = `${jam} jam ${menit} menit ${detik} detik`;

//! video 12 - Template Literals -

// Multiline String
// console.log(`text 1
// text 2
// text 3`);

// Embedded Expression
// const nama = `wildan`;
// const umur = 17;
// console.log(`halo, nama saya ${nama}, dan saya berumur ${umur} tahun`);

// multiline String HTML Fragments
// const mhs = {
//   nama: `wildan`,
//   umur: 17,
//   nrp: `0847532454`,
//   email: `wildan@gmail.com`,
// };

// let mhs1 = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nrp}</span>
// </div>`;

// console.log(mhs1);
// // Expression Interpolation
// let a = 10;
// let b = 5;
// console.log(`hasil penjumlahan dari 10 + 5 itu ${a + b}, bukan ${2 * a + b}`);
// console.log(`apakah kamu sehat? ${alert(`sehat`)}`);

// let c = 10;
// console.log(`tampilkan genap atau ganjil, saat ${c} dibagi 2 ${alert((hasil = c % 2 == 0 ? `genap` : `ganjil`))}`);

// video 13 - latihan template literals -

// const mhs = {
//	nama: `wildan`,
// 	umur: 17
// }

//	const el = `<div class="mhs">
//	<p>nama : ${mhs.nama}.</p>
//	<p>umur : ${mhs.umur}.</p>
// </div>`;

// looping

// const mhs = [
//	{
//		nama: `Wildan`,
//		email: `wildan@gmail.com`
//	},
//	{
//		nama: `hudza`,
//		email: `hudza@gmail.com`
//	},
//	{
//		nama: `aziz`,
//		email: `aziz@gmail.com`
//	}
// ];

// const el = `<div class="mhs">
//	${mhs.map(m =>
//	`<ul>
//		<li>${m.nama}</li>
//		<li>${m.email}</li>
//	</ul>`).join('')}
// </div>`;

// const lagu = {
//   judul: "setiap hari",
//   penyanyi: "judika",
// };

// const el = `<div class="lagu">
// 	<ul>
// 		<li>${lagu.penyanyi}</li>
// 		<li>${lagu.judul} ${lagu.feat ? `feat. ${lagu.feat}` : ""}</li>
// 	</ul>
// </div>`;

// document.body.innerHTML = el;

// const mhs = {
//   nama: `wildan`,
//   semester: 5,
//   mataKuliah: ["matematika", "teknik jaringan komputer", "bahasa", "desain komunikasi visual"],
// };

// function cetakMataKuliah(mataKuliah) {
//   return `<ol>
// 		${mataKuliah.map((m) => `<li>${m}</li>`).join("")}
// 	</ol>`;
// }

// const elemen = `<div class="mahasiswa">
// 	<span>nama : ${mhs.nama}</span>
// 	<p>kelas : ${mhs.semester}</p>
// 	<h3>mata kuliah</h3>
// 	${cetakMataKuliah(mhs.mataKuliah)}
// </div>`;

// document.body.innerHTML = elemen;

//! video 14 - tagged template -

// const nama = "Wildan";
// const umur = 17;
// const email = "wildan@gmail.com";

// function coba(strings, ...expression) {
//   // let hasil = ``;
//   // strings.forEach((str, i) => {
//   //   hasil += `${str}${expression[i] || ""}`;
//   // });
//   // return hasil;

//  return strings.reduce((a, b, i) => `${a}${b}${expression[i] || ""}`, "");
// }

// const str = coba`Halo, Nama Saya ${nama}, saya berumur ${umur} tahun.`;
// console.log(str);

// highlight
// function highlight(strings, ...expression) {
//   return strings.reduce((a, b, i) => `${a}${b}<span class="hl">${expression[i] || ""}</span>`, "");
// }
// const str = highlight`Halo, Nama Saya ${nama}, saya berumur ${umur} tahun. dan email saya ${email}`;

// document.body.innerHTML = str;

//!  video 15 - Destructuring Assignment / Destructuring Variable -

//? Destructuring Array
// const santri = ["wildan", "Hudza", "Aziz", "Hendrik"];
// const [a, b, c, d] = santri;

// skipping items
// const [a, , , d] = santri;
// console.log(d);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);

// rest parameter
// const a = [1,2,3,4,5,6];
// const [b, ...values] = a;
// console.log(b);
// console.log(values);

//? Destructuring Object
// mhs = {
//   nama: "wildan",
//   umur: 17,
//   email: "wildan@gmail.com",
// };

// const { nama, umur, email } = mhs;
// console.log(nama);

// Assignment tanpa deklarasi object
// ({ nama, umur } = { nama: "wildan", umur: 17 });
// console.log(umur);

// Assign ke variable baru
// mhs = {
//     nama: "wildan",
//     umur: 17,
//   };

//   const { nama: n, umur: u } = mhs;
//   console.log(n);

// memberikan default value
// mhs = {
//   nama: "wildan",
//   umur: 17,
//   email: 'wildan@gmail.com'
// };

// const { nama, umur, email = 'email@default.com' } = mhs;
// console.log(email);

// memberi nilai default + assign ke variabel baru
// mhs = {
//   nama: "wildan",
//   umur: 17,
//   email: 'wildan@gmail.com'
// };

// const { nama : n, umur: u, email: e = 'email@default.com' } = mhs;
// console.log(e);

// rest parameter
// mhs = {
//   nama: "wildan",
//   umur: 17,
//   email: "wildan@gmail.com",
// };

// const { nama, ...value } = mhs;
// console.log(value);

// mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const mhs = {
//   id: 123,
//   nama: "Wildan Firdaus",
//   umur: 17,
//   email: "wildan@gmail.com",
// };

// function getIdMhs({ id }) {
//   return id;
// }

// console.log(getIdMhs(mhs));

//! Video 16 - Destructuring Function -

// function penjumlahanDanPerkalian(a, b) {
//   return [a + b, a * b];
// }

//? normal
// const tambah = penjumlahanDanPerkalian(2, 4)[0];
// const kali = penjumlahanDanPerkalian(2, 4)[1];

//? Dengan Destructuring
// const [tambah, kali] = penjumlahanDanPerkalian(2, 4);
// console.log(tambah);

//? Destructuring dengan banyak isi array
// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b,];
// }
// const [tambah, kurang, kali, bagi] = kalkulasi(2, 4);

//? dengan nilai default
// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2, 4);

//? kalo menggunakan array, variable akan diberikan urut sesuai index, kalo gak pengen urut, bisa menggunakan object

//? dengan return value
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }
// const { bagi, tambah, kali, kurang } = kalkulasi(2, 4);

//? dengan arguments

//? Normal
// const mhs = {
//   nama: "Wildan",
//   umur: 17,
//   email: "email@gmail.com",
//   nilai: {
//     tugas: 90,
//     uts: 85,
//     uas: 95,
//   },
// };

// function cetakMhs (nama, umur) {
//   return `halo, nama saya ${nama} dan saya berumur ${umur} tahun`;
// }

//? Dengan Destructuring
// function cetakMhs({ nama, umur }) {
//   return `halo, nama saya ${nama} dan saya berumur ${umur} tahun`;
// }

//? Bersarang
// function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
//   return `halo, nama saya ${nama} dan saya berumur ${umur} tahun. dan nilai akhir ujian saya ${uas}`;
// }
// console.log(cetakMhs(mhs));

//! video 17 - for..of & for..in -

//todo Array
// const mhs = ["Wildan", "Hudza", "Aziz"];
//? ragam looping
// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

//? forEach
// mhs.forEach((m) => console.log(m));

//? forEach dengan tambahan index sebagai parameter
// mhs.forEach((m, i) => console.log(`${m}, mahasiswa ke ${i + 1}`));

//? for..of
// for (const m of mhs) {
//   console.log(m);
// }

//? for..of dengan tambahan index sebagai parameter harus menggunakan method tambahan entries() dan parameter langsung di destruct
// for (const [i, m] of mhs.entries()) {
//   console.log(`${m}, mahasiswa ke - ${i + 1}`);
// }

//todo String
// const nama = 'wildan'
// for (const n of nama) {
//   console.log(n);
// }
// string tidak bisa menggunakan forEach karena bukan array

//todo NodeList
// const nama = document.querySelectorAll(".nama");

//? menggunakan forEach
// nama.forEach((n) => console.log(n.textContent));

//? menggunakan for..of
// for (const n of nama) {
//   console.log(n.innerHTML);
// }

//todo arguments
// function tambahAngka() {
//   // tidak bisa menggunakan reduce
//   // tidak bisa menggunakan forEach
//   let tambah = 0;
//   for (const a of arguments) {
//     tambah += a;
//   }
//   return tambah;
// }
// console.log(tambahAngka(1, 2, 3, 4, 5));

//? for..in
// const mhs = {
//   nama: "wildan",
//   umur: 17,
//   email: "wildan@gmail.com",
// };

// for (m in mhs) {
//   console.log(m);
// }

//todo untuk mengambil valuenya
// for (m in mhs) {
//   console.log(mhs[m]);
// }

//! video 18 - Spread Operator -
//? mengubah iterables menjadi single element
// const mhs = ["Wildan", "Hudza", "Aziz"];
// // console.log(...mhs);
//todo mendestruct string
// console.log(...mhs[0]);

//? menggabungkan 2 array
// const mhs = ["Wildan", "Hudza", "Aziz"];
// const dosen = ["Hendrik", "Taqy", "Junda"];
// const gabung = [...mhs, ...dosen];
// console.log(gabung);

//? Mengcopy Array
// const mhs = ["Wildan", "Hudza", "Aziz"];
// const mhs1 = [...mhs];
// mhs1[0] = "Naufal";
// console.log(mhs);

//? mengambil elemen html lalu mengubahnya menjadi array
// const liMhs = document.querySelectorAll(".nama");

//todo dengan for biasa
// let mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }
//todo dengan map()
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);

//? latihan
// const nama = document.querySelector(".jeneng");
// const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
// console.log(huruf);
// nama.innerHTML = huruf;

//! video 19 - Rest Parameter -

// function myFunc(...args) {
//   // return Array.from(arguments);
//   // return [...arguments];
//   return args;
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...args) {
//todo for biasa
// let total = 0;
// for (let i = 0; i < args.length; i++) {
//   total += args[i];
// }
// return total;

//todo for..of
//   let total = 0;
//   for (const i of args) {
//     total += i;
//   }
//   return total;

//todo reduce
//   const total = args.reduce((a, i) => a + i);
//   return total;
// }
// console.log(jumlahkan(1, 2, 3, 4, 5, 6));

//? array destructuring
// const kelompok1 = ["mas Qoid", "Fadhil", "Wildan", "Hudza", "Aziz"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

//? object destructuring

// const team = {
//   pm: "amir",
//   frontEnd1: "hudza",
//   frontEnd2: "akram",
//   backEnd: "wildan",
//   devOps: "opi",
// };

// const { pm, ...myTeam } = team;
// console.log(myTeam);

//? filtering

// function filterBy(type, ...values) {
//   return values.filter((v) => typeof v === type);
// }

// console.log(filterBy("boolean", 1, 2, true, 10, false, "wildan", "hudza"));

//! video 20 - Asynchronous Programming -

// function kalikan(a, b) {
//   return a * b;
// }

// function hitungLuas(sisi) {
//   return kalikan(sisi, sisi);
// }

// function cetakAngka(sisi) {
//   const cetak = hitungLuas(sisi);
//   return console.log(cetak);
// }

// cetakAngka(5);

// console.log("satu");
// setTimeout(() => {
//   console.log("dua");
// }, 5000);
// console.log("tiga");

//! video 21 - Callbacks -

//? synchronous callback
// function halo(nama) {
//   return alert(`halo ${nama}!`);
// }

// function tampilNama(call) {
//   const nama = prompt("masukkan nama :");
//   call(nama);
// }

// tampilNama(halo);

//? ini juga
// const mhs = [
//   {
//     nama: "wildan",
//     email: "wildan@gmail.com",
//     nrp: "218273633",
//     jurusan: "programming",
//     idDosenEmail: 1,
//   },
//   {
//     nama: "hudza",
//     email: "hudza@gmail.com",
//     nrp: "218273634",
//     jurusan: "desain grafis",
//     idDosenEmail: 2,
//   },
//   {
//     nama: "aziz",
//     email: "aziz@gmail.com",
//     nrp: "218273635",
//     jurusan: "multimedia",
//     idDosenEmail: 3,
//   },
// ];

// mhs.forEach((m) => {
//   for (let i = 0; i < 1000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });

//? Asynchronous AJAX
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open("get", url);
//   xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa(
//   "data.json",
//   (results) => {
//     let mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
//   },
//   () => {}
// );
// console.log('selesai');

//? Asynchoronous AJAX dengan jQuery
// console.log("mulai");
// $.ajax({
//   url: "data.json",
//   success: (mhs) => {
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   error: (e) => {
//     console.log(e.responseText);
//   },
// });
// console.log("selesai");

//! video 22 - latihan Callbacks -
//! key API OMDB : 5eeab72a
//! http://www.omdbapi.com/?apikey=5eeab72a

$(".search-btn").on("click", function () {
  $.ajax({
    url: "http://www.omdbapi.com/?apikey=5eeab72a&s=" + $(".input-keyword").val(),
    success: (results) => {
      const movies = results.Search;
      let cards = ``;
      movies.forEach((movie) => {
        cards += showCards(movie);
        $(".movie-container").html(cards);

        // ketika tombol diklik
        $(".modal-detail-button").on("click", function () {
          $.ajax({
            url: "http://www.omdbapi.com/?apikey=5eeab72a&i=" + $(this).data("imdbid"),
            success: (m) => {
              const movieDetail = showMovieDetail(m);
              $(".modal-body").html(movieDetail);
            },
            error: (e) => {
              console.log(e.responseText);
            },
          });
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

//! video 23 - Promise -
// janji (terpenuhi / ingkar)
// states (fullfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)
// fetch("http://www.omdbapi.com/?apikey=5eeab72a&s=detective conan")
//   .then((r) => r.json())
//   .then((r) => console.log(r));

//? ajax with jQuery
// $.ajax({
// url: 'http://www.omdbapi.com/?apikey=5eeab72a&s=harry potter',
// success: movies => console.log(movies)
// });

// ajax with vanilla javasript
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if(xhr.status === 200) {
//         if(xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// }

// xhr.open('get', 'http://www.omdbapi.com/?apikey=5eeab72a&s=harry potter');
// xhr.send();

//? ajax with fetch
// fetch('http://www.omdbapi.com/?apikey=5eeab72a&s=harry potter').then(response => response.json()).then(response => console.log(response));

//? contoh promise1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji telah ditepati!');
//     } else {
//         reject('Ingkar Janji');
//     }
// });

// janji1.then( response => console.log('OK : ' + response)).catch(response => console.log('OK : ' + response));

//? contoh promise2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu!');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('tidak Ditepati setelah beberapa waktu!');
//         }, 2000);
//     }
// });

// console.log('mulai');
// // console.log(janji2.then(response => console.log('OK : ' + response)));
// // ^ kalo pake yang diatas, bakal terlihat prosesnya
// janji2
// .finally(() => console.log('selesai menunggu'))
// .then(response => console.log('OK : ' + response))
// .catch(response => console.log('OK : ' + response));
// console.log('selesai');

// contoh promise3 Promise.all()
// const film = new Promise(resolve => {
//   setTimeout(() => {
//   resolve([{
//       judul: 'harry potter',
//       sutradara: 'jk rowling',
//       pemeran: 'harry, potter'
//   }]);
// }, 1000);
// });

// const cuaca = new Promise(resolve => {
//   setTimeout(() => {
//       resolve([{
//           kota: 'solo',
//           temp: 27,
//           kondisi: 'Cerah'
//       }]);
//   }, 500);
// });

// // film.then(resolve => console.log(resolve));
// // cuaca.then(resolve => console.log(resolve));

// Promise.all([film, cuaca])
// // .then(resolve => console.log(resolve));
// .then( response => {
//   const [film, cuaca] = response;
//   console.log(cuaca);
//   console.log(film);
// });

//! video 24 - fetch -
// const btnCari = document.querySelector('.search-btn');
// btnCari.addEventListener('click', function() {

//   const inputKeyword = document.querySelector('.input-keyword');
//   fetch('http://www.omdbapi.com/?apikey=5eeab72a&s=' + inputKeyword.value)
//     .then(response => response.json())
//     .then(response => {

//       const movies = response.Search;
//       let cards = '';
//       movies.forEach(m => cards+= showCards(m));
//       const movieContainer = document.querySelector('.movie-container');
//       movieContainer.innerHTML = cards;
      
//?        saat tombol diklik
//       const movieDetailButton = document.querySelectorAll('.modal-detail-button');
//       movieDetailButton.forEach(movie => {
//         movie.addEventListener('click', function() {
//           const imdbid = this.dataset.imdbid;
//           fetch("http://www.omdbapi.com/?apikey=5eeab72a&i=" + imdbid)
//           .then(response => response.json())
//           .then(m => {
//             const movieDetail = showMovieDetail(m);
//             const modalBody = document.querySelector('.modal-body');
//             modalBody.innerHTML = movieDetail;
//           })
//           .catch( e => console.log(e.responseText));
//         });
//       });
//     })
//     .catch( e => console.log(e.responseText));
// });

//! video 25 - fetch (refactor) -
const btnCari = document.querySelector('.search-btn');
btnCari.addEventListener('click', async function () {
  try {
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
  } catch (err) {
    // alert(err);
    console.log(err)
  }
});

//? event binding
document.addEventListener('click', async function(e) {
  if(e.target.classList.contains('modal-detail-button')) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    updateUIDetail(movieDetail);
  }
});

function getMovies(keyword) {
   return fetch('http://www.omdbapi.com/?apikey=5eeab72a&s=' + keyword)
  .then(response => {
    if ( !response.ok ) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then(response => {
    if ( response.Response === "false" ) {
      throw new Error(response.Error)
    }
    return response.Search;
  });
}

function updateUI(movies) {
  let cards = '';
        movies.forEach(m => cards+= showCards(m));
        const movieContainer = document.querySelector('.movie-container');
        movieContainer.innerHTML = cards;
}

function getMovieDetail(imdbid) {
  return fetch('http://www.omdbapi.com/?apikey=5eeab72a&i=' + imdbid)
  .then(response => response.json())
  .then(m => m);
}

function updateUIDetail(m) {
  const movieDetail = showMovieDetail(m);
  const modalBody = document.querySelector('.modal-body');
  modalBody.innerHTML = movieDetail;
}

function showCards(movie) {
  return ` <div class="col-md-4 my-3">
            <div class="card">
              <img src="${movie.Poster}" class="card-img-top img-search" />
              <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                <a href="#" class="btn btn-warning modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${movie.imdbID}">More Details</a>
              </div>
            </div>
          </div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
            <div class="row">
              <div class="col-md-4">
                <img src="${m.Poster}" alt="" class="img-fluid" />
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                  <li class="list-group-item"><strong>Director :</strong> ${m.Director}</li>
                  <li class="list-group-item"><strong>Actor :</strong> ${m.Actors}</li>
                  <li class="list-group-item"><strong>Writer :</strong> ${m.Writer}</li>
                  <li class="list-group-item"><strong>Plot :</strong> ${m.Plot}</li>
                </ul>
              </div>
            </div>
          </div>`;
}

//! video 26 - async await -

//? cara asynchronous biasa
// const coba = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('selesai');
//   }, 2000);
// })
// // console.log(coba);
// .then(resolve => console.log(resolve));

//? cara asynchronous function
//  function cobaPromise() {
//  return new Promise((resolve, reject) => {
//    const waktu = 3000;
//     if(waktu < 3000) {
//       setTimeout(() => {
//         resolve('selesai');
//       }, waktu);
//     } else {
//     reject('kelamaan');
//   }
//   });
// }

//? menggunakan promise
// const coba = cobaPromise();
// coba
// .then(coba => console.log(coba))
// .catch(coba => console.log(coba));

//? menggunakan async dan await (try, catch)
// async function cobaAsync() {
//   try {
//     const coba = await cobaPromise();
//     console.log(coba);
//   } catch (error) {
//     console.error(error);
//   }
// }

// cobaAsync();

//! video 27 - error handling -

// fetch, di dalam block fetch
