interface Product {
    id:number;
    name:string;
    unitprice:number;
}
class Product2 {
    id:number;
    name:string;
    unitprice:number;
}

function save(product:Product){
    console.log(product.name+"kaydedildi.")
}

function save2(product2:Product2){
    console.log(product2.name+"kaydedildi.")
}
/* eger bız kullanıcı classta olusturdgumuz her değeri girsin diyorsak onu ınterface tanımlamalıyız
eger  sadece kendı ıstdıgı seylerı gırmesını ıstıyorsak class olmalı .*/
save({id:1 ,name:"kaan",unitprice:29})
 //mesela asagıda Product2 classından nesne tanımladıgımızda sadece mouse nesnesının ısmını versekde problem cıkmıyor. 
let mouse =new Product2()
mouse.name="logitech"  

 /* save2 fonksiyonnu cagırdıgımız zaman nesne gırınce ıcıne 
butun ozellıklerını gırmek zorunda degılız.
eger boyle butun degerlerı vermek zorunda olmadıgımız
sekıldeyse durum  class tanımlarız yoksa ınterface.!!!!!!!11111
 */

save2({2,"keyboard"}) //mesela burda 3. parametreyi 3.özelliği girmedik.


/*// bu şey demek kım personelservice i 
implemente ediyorsa save i barındırmak zorunda !
abstract class gıbı*/
interface IPersonelService{ 
    save(){

    }
}
//customerService classs personelService i implemente ettiğinden save metodunu yazmak zorunda!
class CustomerService implements IPersonelService{ 
    save() {
        throw new Error("Method not implemented.");
    }
    
}