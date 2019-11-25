function sum(x, y) { //--> normal js fonksiyon
    return x + y
}

function sum1(x: number, y: number): number {
    return x + y
}/*---> yukarıdaki 3. number fonksiyondan donen 
degerınde number oldugunu gosterıyor.*/

sum(2, "sad") //burda ne tipte oldugu onemlı degıl
sum1(2, 3) // bu fonksiyonda onemlı

//anonim fonksiyon tanımlama 
let sum3 = function (x: number, y: number): number {
    return x + y;
}

console.log(sum(2, 3))
console.log(sum(2, "ankara"))
console.log(sum1(2, 3))
console.log(sum3(4, 8))


//Optional and default parameters
function sum4(x: number, y: number = 4): number {
    return x + y
}
console.log(sum4(3, 6)) //eger burda y icin 6 vermeseydık y default 4 olucaktı.


function sum5(x: number, z?: number): number {
    if (z) { //-->bu  z tanımlı ıse demek! tanımlı ıse y nın ıcındekını yap.
        return x + z
    }
    return x
}
console.log(sum5(3)) //-->NaN döncek(not a number döncek)
console.log(sum5(7, 4)) //--> bu sefer NaN donmez cunku  y yi verdik


//Rest Parameters 
//aynı  tipte alacagınız parametre sayısı bellı degılse bu rest kullanılıyor
//c# daki params ile aynı

function davetEt(ilkDavetli: string, ...digerleri: string[]): string {
    return ilkDavetli + " " + digerleri.join(" ")
}

console.log(davetEt("k","salih","sada","sadadadafew"))



//ama illa ilk değeri vermek zorunda değiliz 
function davetEt2(...digerleri: string[]): string {
    return  digerleri.join(" ")
}
console.log(davetEt2("k","salih","sada","sadadadafew"))