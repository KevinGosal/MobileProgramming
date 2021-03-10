// Variabel dan tipe data

console.log("Hello World");         
console.log("welcome to Mobile Programming");
let namaDepan = "Kevin";
let namaBelakang = "Gosal";
const usia = 33;
let umur = 33;
umur = "tiga puluh tiga tahun";
let alamat = "Bitung";
let apakahSudahMenikah = true;

console.log(namaDepan);
console.log(namaBelakang);
console.log(namaDepan + " " + namaBelakang + " " + usia);
console.log(usia);
console.log(umur);
console.log(alamat);
console.log(apakahSudahMenikah);
console.log(" ");

//Operator

console.log(10==10);
console.log(10=="10"); // loose equality
console.log(10!=="10"); // true
console.log(10!==10); // false
console.log(10===9); // false
console.log(" ");

//TEMPORARY OPERATOR

const x = 12
let jawaban = x % 2 === 0 ? "Genap" : "Ganjil";
console.log(jawaban);

let z = 10
if(z%2==0)
{
    console.log("Genap");
}
else
{
    console.log("Ganjil");
}
console.log(" ");

//FUNCTION

//function declaration
function Kevin()
{
    console.log("pakai fungsi deklarasi");
}
Kevin();
function Gosal()
{
    return "pakai fungsi deklarasi dengan return";
}
console.log(Gosal());
//function expression
const Pre = function()
{
    console.log("pakai fungsi expresi");
}
Pre();
const kamu = function()
{
    return "pakai fungsi expresi dengan return";
}
console.log(kamu());
console.log(" ");

// PARAMETER DAN ARGUMEN

const persegiPanjang =  function(panjang, lebar) //parameter
{
    return panjang * lebar;
}
console.log(persegiPanjang(4,5)); // argumen
