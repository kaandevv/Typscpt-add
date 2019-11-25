class Ev {
    _odaSayisi: number; 
    _pencereSayisi: number;
    _kat: number;  // --> buradaki 3 degere asagıdakı constructorun ıcınde thıs keywordu ıle ulasırız.
    //constructor tanımlayalım.
    constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
        this._kat = odaSayisi
        this._kat = kat
        this._pencereSayisi = pencereSayisi

    }
    yemekYe() {
        console.log(this._kat + "katli evde" + "yemek yiyildi.")
    }
}

let ev = new Ev(3, 4, 6)
ev.yemekYe()
console.log(ev._kat)

            // -------------INHERİTANCE----------------------

class kisi {
    protected isim:string
    private prdeger :number

    kaydet(){
        console.log("kisi kaydedildi.")
    }
}
class Musteri extends kisi{
  
    satis(){
        this.isim="ka"      
        console.log("satis yapildi.")
    }
}
class Personel extends kisi {
    maasOde(){
        console.log("maas ödendi.")
    }

}
console.log("yenı musteri olusturuluyor.")
let musteri = new Musteri();
musteri.kaydet()
musteri.satis();

console.log("yenı personel olusturuluyor.")
let personel = new Personel();
personel.kaydet();
personel.maasOde();


//  ---------PRİVATE - PROTECTED- PUBLİC--------------

//private sadece ve sadece tanımlandıgı class ıcersinde kullanılabılır...
class Ev2 {
    private oda:number
    private pencere:number
}

//Protected neden kullanılır ???? 
//mesela authentication bir string olur onu hem musteri 
//hem kisi kullanabılır gibidurumlarda protected



//----------Getter ve Setter ile calısmak ---------------

//artık private bir deger verırken  _ ile basla isim verirken _isim gibi.

class Bilgisayar{
    private _isimm :string
    get isim():string{
        return "bu pc nin markasi : " + this._isimm;
    
    }
    set isim(ad:string){
        this._isimm=ad;

    }
    kaydet(){
        console.log("bilgisayar kaydedildi.")
    }
}
class Monitor extends Bilgisayar{
    satis(){     
        console.log("monitor satisi yapildi.")
    }
}

class klavye extends Bilgisayar {
    Klavyecalisti(){
        console.log("calisti .")
    }

}

let bilgisayar = new Bilgisayar()
bilgisayar.isim="acer"
console.log(bilgisayar.isim)

