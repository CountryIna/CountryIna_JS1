//Hasil IF
let motor = 200
let mobil = 500
    if(mobil > motor) {
    console.log("mobil lebih mahal daripada motor")
    }

//Hasil IF..ELSE
var baju = prompt("Harga:")
    if (baju < 100000) {
		document.write("MURAH")
	} else{
        document.write("MAHALLLL")
	}

//HasiL NASTED IF
<p id="hasil"></p>
    var mantan = prompt("Sifat Mantan: ")

    if (mantan == "Selingkuh") {
        document.getElementById("hasil").innerHTML = "Benci Dia";

    } else if (mantan == "Bohong"){
        document.getElementById("hasil").innerHTML = "Lupakan";

    } else if (mantan == "Mokondo"){
        document.getElementById("hasil").innerHTML = "Kasih Pelajaran";

    } else {
        document.getElementById("hasil").innerHTML = "Cari Yang Baru";
  }

//HasiL SWITCH CASE
var warna = prompt("Pilih Warna MeJiKuHiBiNiU:"); 
var kata = "";         

    switch (warna) {
        case "Merah":
            kata = "I Love You";
            break;
        case "Jingga":
            kata = "Aku Sayang Kamu";
            break;
        case "Kuning":
            kata = "Sate Pecel Iwak Tongkol. I Love You Polll";
            break;
        case "Hijau":
            kata = "Sayangkuuuu";
            break;
        case "Biru":
            kata = "Semangat ay";
            break;
        case "Nila":
            kata = "Cebelapa imut ci aku?";
            break;
        case "Ungu":
            kata = "Wleee";
            break;
        default:
            document.write("Anda Salah Warna")
        }
        if(kata === ""){
            document.write(" Atu Ngambek");
        } else {
            document.write(kata + "  HEHEHEHE");
        }

//HasiL FOR
var buah = ["apel", "mangga", "jeruk", "pisang"];

    for (let i = 0; i < buah.length; i++) {
        document.write(buah[i] + "<br>");
    }
    
//HasiL WHILE
let lagi = true;
var ulangi = confirm("Apakah anda mau mengulang?");
var counter = 0;

        while (lagi) {
        const jawaban = prompt('Ibukota Indonesia');
        if (jawaban === 'Jakarta') {
            window.alert('BENAR! Anda hebat!');
        } else {
            window.alert('SALAH! Ulangi lagi!');
        }

        while(ulangi){
            counter++;
            ulangi = confirm("Apakah anda mau mengulang?");
        }

        document.write("Perulangan sudah dilakuakn sebanyak "+ counter +" kali");
    }

//HasiL WHILE DO
let teks = "";
let angka = 0;
        do{
            teks += "<br>Ini adalah angka " + angka;
            angka++;
        }
        while(angka <= 10);

        document.write(teks);

//HasiL FUNCTION
let angka = FunctionKali(4, 3);
document.write(angka);

    function FunctionHitung(angka1, angka2) {
        return angka1 * angka2;
    }