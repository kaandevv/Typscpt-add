function s(isim) {
    return "merhaba" + isim;
}
var mesaj = s('engin 2 ');
console.log(mesaj);
var sayi = 122;
sayi = 10;
sayi = 10.4;
var sehir = "ankara";
sehir = "İstanbul ";
sehir = "ankara";
var dogrumu;
dogrumu = true;
dogrumu = false;
var sayilar = [1, 2, 3, 4];
var sayilar2 = [1, 2, 3];
//tuple tanımlama tyspcriptte.
var dizi = [2, "ankara"];
//yukarıdakını soylede yapabilrisin.
var dizi2 = [2, "ankara"];
var dizi3 = [2, "istanbul", true];
var value1 = dizi2[0].toString();
console.log("value nun tipi:" + typeof (value1));
//typescriptin getirdiği  en guzel veritiplerinden "enum" 'lar
//class lar gibi oldugundan ilk harf buyuk
var Renk;
(function (Renk) {
    Renk[Renk["Kirmizi"] = 1] = "Kirmizi";
    Renk[Renk["siyah"] = 2] = "siyah";
    Renk[Renk["mavi"] = 3] = "mavi";
})(Renk || (Renk = {}));
var renk = Renk.Kirmizi;
console.log(renk);
/* any kullanımı ---> (bize gelcek datanın
veri tipinden emin olmadıgımızda kullanırız.) örnegın
amazondakı urunlerın listesini cekiyosun veya youtubedan api ile bir veri cekiyosun ama gelecek datanın
hangı veri tipinde gelecegınden fıkrın yok ozaman any kullan!*/
var deger = "Ankara";
deger = 2;
deger = {}; //objede olabılır.
// void veritipi 
var deger2 = undefined;
//fonksiyonlarda kullanımı 
//voidsiz fonksiyon kullanımı 
function selam() {
    console.log("merhaba");
    //buraya return de yazabılırız void olmadıgı ıcın 
    return "lessvoid";
}
//void'li fonksiyon 
function selam2() {
    // console.log("voidsiz")
}
//yukarida undefined kullandık undefined ile null farklı seyler 
//karıstırılmaması gerekiyor.
//undefined ve null karsılastırılması 
var yas; //----> bu undefined cunku deger atamadık.
var Musteri = /** @class */ (function () {
    function Musteri() {
    }
    return Musteri;
}()); // ---> burda new lemedik direk musteriye ulasmaya calısırsan bu null demektır.
//burdan sonra fonksiyonlara gecildi....
