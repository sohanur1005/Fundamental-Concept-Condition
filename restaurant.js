const age=18;
price=500;

if(age<=12)
{
    console.log('Eat Free')
}
else if(age>=50)
{
    // 50%
    const discount=price * 50/100;
    const payAmount=price-discount;
    console.log(payAmount)
}
else{

    console.log(price)
}
