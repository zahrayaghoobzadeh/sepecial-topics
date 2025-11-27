// 1- با استفاده از ساختار switch، مقدار  عدیی seasonNumber را 
// بر اساس یکی از چهار فصل (بهار، تابستان، پاییز، زمستان) تعیین کنید.
let seasonNumber = 2;
let seasonName;
switch (seasonNumber) {
    case 1:
        seasonName = "بهار";
        console.log("فصل " + seasonName);
        break;
    case 2:
        seasonName = "تابستان";
        console.log("فصل " + seasonName);
        break;
    case 3:
        seasonName = "پاییز";
        console.log("فصل " + seasonName);
        break;
    case 4:
        seasonName = "زمستان";
        console.log("فصل " + seasonName);
        break;
}

// سوال 2 --------------------------------------
let x = 5;
let y = 10;
if (x + y * 2 > 20 && !(y + 3 === 1)) {
    console.log("P");
} else {
    console.log("Q");
}
// سوال 3 --------------------------------------
let a = 0;
let b = 10;
let c = 20;
let final = a || (b && c);
console.log(final)
// سوال 4 --------------------------------------
let count = 3;
if (count++ + 2 < 6 && count-- > 3) {
    console.log("First");
} else {
    console.log("Second")
}
// 5-	هزینه ارسال یک سفارش بر اساس کل قیمت خرید (totalPrice) مشتری و طبق جدول زیر تعیین می‌شود.
//  با استفاده از ساختار if/else if/else و عملگرهای منطقی ، مقدار نهایی shippingCost را تعیین کنید.
let totalPrice;
let shippingCost;
let price = 125000;
if (price < 100000) {
    console.log("هزینه ارسال شما 20 هزارتومان است")
} else if (price >= 100000 && price <= 200000) {
    console.log("هزینه ارسال شما 10 هزارتومان است")
} else {
    console.log("هزینه ارسال شما رایگان(0) است")
}