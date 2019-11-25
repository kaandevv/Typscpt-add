var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ev = /** @class */ (function () {
    //constructor tanımlayalım.
    function Ev(odaSayisi, pencereSayisi, kat) {
        this._kat = odaSayisi;
        this._kat = kat;
        this._pencereSayisi = pencereSayisi;
    }
    Ev.prototype.yemekYe = function () {
        console.log(this._kat + "katli evde" + "yemek yiyildi.");
    };
    return Ev;
}());
var ev = new Ev(3, 4, 6);
ev.yemekYe();
console.log(ev._kat);
// -------------INHERİTANCE----------------------
var kisi = /** @class */ (function () {
    function kisi() {
    }
    kisi.prototype.kaydet = function () {
        console.log("kisi kaydedildi.");
    };
    return kisi;
}());
var Musteri = /** @class */ (function (_super) {
    __extends(Musteri, _super);
    function Musteri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Musteri.prototype.satis = function () {
        this.isim = "ka";
        console.log("satis yapildi.");
    };
    return Musteri;
}(kisi));
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.maasOde = function () {
        console.log("maas ödendi.");
    };
    return Personel;
}(kisi));
console.log("yenı musteri olusturuluyor.");
var musteri = new Musteri();
musteri.kaydet();
musteri.satis();
console.log("yenı personel olusturuluyor.");
var personel = new Personel();
personel.kaydet();
personel.maasOde();
//  ---------PRİVATE - PROTECTED- PUBLİC--------------
//private sadece ve sadece tanımlandıgı class ıcersinde kullanılabılır...
var Ev2 = /** @class */ (function () {
    function Ev2() {
    }
    return Ev2;
}());
//Protected neden kullanılır ???? 
//mesela authentication bir string olur onu hem musteri 
//hem kisi kullanabılır gibidurumlarda protected
//----------Getter ve Setter ile calısmak ---------------
//artık private bir deger verırken  _ ile basla isim verirken _isim gibi.
var Bilgisayar = /** @class */ (function () {
    function Bilgisayar() {
    }
    Object.defineProperty(Bilgisayar.prototype, "isim", {
        get: function () {
            return "bu pc nin markasi : " + this._isimm;
        },
        set: function (ad) {
            this._isimm = ad;
        },
        enumerable: true,
        configurable: true
    });
    Bilgisayar.prototype.kaydet = function () {
        console.log("bilgisayar kaydedildi.");
    };
    return Bilgisayar;
}());
var Monitor = /** @class */ (function (_super) {
    __extends(Monitor, _super);
    function Monitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Monitor.prototype.satis = function () {
        console.log("monitor satisi yapildi.");
    };
    return Monitor;
}(Bilgisayar));
var klavye = /** @class */ (function (_super) {
    __extends(klavye, _super);
    function klavye() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    klavye.prototype.Klavyecalisti = function () {
        console.log("calisti .");
    };
    return klavye;
}(Bilgisayar));
var bilgisayar = new Bilgisayar();
bilgisayar.isim = "acer";
console.log(bilgisayar.isim);
