function sum(x, y) {
    return x + y;
}
function sum1(x, y) {
    return x + y;
} /*---> yukarıdaki 3. number fonksiyondan donen
degerınde number oldugunu gosterıyor.*/
sum(2, "sad"); //burda ne tipte oldugu onemlı degıl
sum1(2, 3); // bu fonksiyonda onemlı
//anonim fonksiyon tanımlama 
var sum3 = function (x, y) {
    return x + y;
};
console.log(sum(2, 3));
console.log(sum(2, "ankara"));
console.log(sum1(2, 3));
console.log(sum3(4, 8));
//Optional and default parameters
function sum4(x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
}
console.log(sum4(3, 6)); //eger burda y icin 6 vermeseydık y default 4 olucaktı.
function sum5(x, z) {
    if (z) { //-->bu  z tanımlı ıse demek!
        return x + z;
    }
    return x;
}
console.log(sum5(3)); //-->NaN döncek(not a number döncek)
console.log(sum5(7, 4)); //--> bu sefer NaN donmez cunku  y yi verdik
