var price=5000;
if(price>5000)
{
    // 10%
    var discount=price * 10/100;
    var payAmount=price-discount;
    console.log(payAmount)
}
else if(price > 3000)
{
    var discount=price * 5/100;
    var payAmount=price-discount;
    console.log(payAmount)
}
else{
    console.log(price)
}


