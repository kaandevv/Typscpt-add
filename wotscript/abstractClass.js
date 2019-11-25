//----------ABSTRACT SINIFLAR ---------------
/* tek baslarına kullanılmazlar yalnızca ınheritance
yontemi ile kullanılırlar.*/
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
var KrediBase = /** @class */ (function () {
    function KrediBase() {
    }
    KrediBase.prototype.kaydet = function () {
        console.log("kaydedildi.");
    };
    return KrediBase;
}());
//eger abstract class ı  extends ediyorsan onun ıcındekı abstract fonk tekrar yazman gerekir.
var TuketiciKredisi = /** @class */ (function (_super) {
    __extends(TuketiciKredisi, _super);
    function TuketiciKredisi() {
        return _super.call(this) || this;
    }
    TuketiciKredisi.prototype.hesapla = function () {
        console.log("tuketici kredisine göre  hesap yapılıyor.");
    };
    return TuketiciKredisi;
}(KrediBase));
var MortageKredisi = /** @class */ (function (_super) {
    __extends(MortageKredisi, _super);
    function MortageKredisi() {
        return _super.call(this) || this;
    }
    MortageKredisi.prototype.hesapla = function () {
        console.log("Mortage  kredisine göre  hesap yapılıyor.");
    };
    MortageKredisi.prototype.baskabirOperasyon = function () {
        console.log("mortage a özel bir fonksiyon.");
    };
    return MortageKredisi;
}(KrediBase));
var tuketiciKredisi = new TuketiciKredisi();
tuketiciKredisi.hesapla();
tuketiciKredisi.kaydet();
var mortagekredisi = new MortageKredisi();
mortagekredisi.hesapla();
mortagekredisi.kaydet();
//Daha surdurulebilri sistemler kodlanırken asagıdakı sekılde oluyor nesne bu sekılde olusuturuluyor.
var kredi;
kredi = new TuketiciKredisi(); //burada kredi = new KrediBase yapamayız cunku o abstract class!
kredi = new MortageKredisi();
