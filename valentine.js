document.getElementById('kitkat-buy-btn').addEventListener('click',function(){
    const Quantity= getValue('kitkat-quantity');
    const kitKatCost = Quantity *200;
    setInnerText('chocolate', kitKatCost);
    document.getElementById("kitkat-quantity").value = "";
    total()
})
document.getElementById('rose-buy-btn').addEventListener('click',function(){
    const roseQuantity = getValue('rose-quantity');
    const totalCost = roseQuantity  *100;
   setInnerText('rose',totalCost);
   document.getElementById('rose-quantity').value="";
   total()
    
})
document.getElementById('diary-buy-btn').addEventListener('click',function(){
    const diaryQuantity = getValue('diary-quantity');
    const totalCost = diaryQuantity  * 100;
   setInnerText('diary',totalCost);
   document.getElementById('diary-quantity').value="";
   total()
   
    
})

document.getElementById("promoCode").addEventListener('click',function(){
    const promo_Code =document.getElementById('promo-code').value;
    if(promo_Code == 101){
       const totals =document.getElementById("total").innerText;
       const sum = totals - totals * 0.1;
      
       setInnerText('all-total',sum);
      
    }
    else{
        alert('"promo code is not correct"')
    }
})

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
    
}

function getValue(id){
   const inputValue = document.getElementById(id).value;

   return inputValue;
}

function stringToNumberConverter(id) {
    const element = document.getElementById(id).innerText;
    return parseFloat(element);
  }

function total(){
    const kitkat =stringToNumberConverter('chocolate');
    const rose =stringToNumberConverter('rose');
    const diary =stringToNumberConverter('diary');
    const total = kitkat + rose + diary;
    setInnerText('total', total);

}


