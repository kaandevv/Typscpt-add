function s(isim:String){
    return "merhaba" +isim
}
let mesaj=s('engin 2 ')
console.log(mesaj)

let sayi:number=122
sayi=10
sayi=10.4

let sehir:string="ankara"
sehir="İstanbul "
sehir="ankara"

let dogrumu :boolean
dogrumu=true
dogrumu=false

let sayilar:number[]=[1,2,3,4]
let sayilar2:Array<number>=[1,2,3]

//tuple tanımlama tyspcriptte.
let dizi=[2,"ankara"]
//yukarıdakını soylede yapabilrisin.
let dizi2:[number,string]=[2,"ankara"]
let dizi3:[number,string,boolean]=[2,"istanbul",true]
let value1=dizi2[0].toString()
console.log("value nun tipi:"+typeof(value1))


//typescriptin getirdiği  en guzel veritiplerinden "enum" 'lar
//class lar gibi oldugundan ilk harf buyuk
enum Renk{Kirmizi=1,siyah,mavi}
let renk :Renk =Renk.Kirmizi
console.log(renk)

/* any kullanımı ---> (bize gelcek datanın 
veri tipinden emin olmadıgımızda kullanırız.) örnegın 
amazondakı urunlerın listesini cekiyosun veya youtubedan api ile bir veri cekiyosun ama gelecek datanın 
hangı veri tipinde gelecegınden fıkrın yok ozaman any kullan!*/

let deger: any = "Ankara"
deger=2
deger ={} //objede olabılır.


// void veritipi 
let deger2 : void =undefined
//fonksiyonlarda kullanımı 
//voidsiz fonksiyon kullanımı 
function selam(){
    console.log("merhaba") 
    //buraya return de yazabılırız void olmadıgı ıcın 
    return "lessvoid"
}
//void'li fonksiyon 

function selam2():void{
   // console.log("voidsiz")
}

//yukarida undefined kullandık undefined ile null farklı seyler 
//karıstırılmaması gerekiyor.

//undefined ve null karsılastırılması 

let yas :number; //----> bu undefined cunku deger atamadık.

class Musteri {

} // ---> burda new lemedik direk musteriye ulasmaya calısırsan bu null demektır.

//burdan sonra fonksiyonlara gecildi....