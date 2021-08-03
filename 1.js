
let kuraKura = 9.999;
let kuraKuraMati = 21.1 / 100;
let hariKelahiran = 365 / 90;

let sisaKuraKura = kuraKura * kuraKuraMati;
document.writeln("<p> 9.999 * 21.1% = " + sisaKuraKura + "</p>");
document.writeln("Setiap 90 Hari Lahir 1 Anak");
document.writeln("<p> Selama 365 Hari lahir: " + hariKelahiran + " kali" + "</p>");
document.writeln("<p> Jumlah Sisa KuraKura: " + sisaKuraKura + "</p>");

let totalKuraKura = sisaKuraKura * hariKelahiran;
document.writeln("Total Kura-Kura Setelah 365 Hari : " + totalKuraKura);
