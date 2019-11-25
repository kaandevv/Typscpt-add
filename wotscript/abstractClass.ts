//----------ABSTRACT SINIFLAR ---------------
/* tek baslarına kullanılmazlar yalnızca ınheritance 
yontemi ile kullanılırlar.*/

abstract class KrediBase {
    constructor() {
        
    }
    kaydet():void{ //her yerde ortak fonksiyon 
        console.log("kaydedildi.")
    }
    abstract hesapla():void;  // her yede ortak olmayan fonksiyon icini doldurmuyosak abstract 

}
//eger abstract class ı  extends ediyorsan onun ıcındekı abstract fonk tekrar yazman gerekir.
class TuketiciKredisi extends KrediBase {
    hesapla(): void {
        console.log("tuketici kredisine göre  hesap yapılıyor.")
    }
    constructor() {
        super();
    }
}

class MortageKredisi extends KrediBase {
    hesapla(): void {
        console.log("Mortage  kredisine göre  hesap yapılıyor.")
    }
    constructor() {
        super();
    }

    baskabirOperasyon(){
        console.log("mortage a özel bir fonksiyon.")
    }
}

let tuketiciKredisi = new TuketiciKredisi();
tuketiciKredisi.hesapla()
tuketiciKredisi.kaydet()


let mortagekredisi = new MortageKredisi();
mortagekredisi.hesapla()
mortagekredisi.kaydet()


//Daha surdurulebilri sistemler kodlanırken asagıdakı sekılde oluyor nesne bu sekılde olusuturuluyor.

let kredi :KrediBase
kredi = new TuketiciKredisi() //burada kredi = new KrediBase yapamayız cunku o abstract class!

kredi = new MortageKredisi()
