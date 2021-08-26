// update price 
function getUpdatePrice(inputId, price) {
    const inputValue = document.getElementById(inputId);
    inputValue.innerText = price;

    totalPrice()
}

// input cost 
function getInputCost(inputId) {
    const inputPrice = document.getElementById(inputId).innerText;
    const inputPriceFloat = parseFloat(inputPrice);
    return inputPriceFloat;
}

// total price
function totalPrice() {
    // best price
    const bestPrice = getInputCost('bestPrice');

    // memory cost 
    const memoryCost = getInputCost('memoryCost');

    // storage cost 
    const storageCost = getInputCost('storageCost');

    // delivery cost 
    const deliveryCharge = getInputCost('deliveryCharge');

    // total price
    const totalPrice = bestPrice + memoryCost + storageCost + deliveryCharge;
    document.getElementById('totalPrice').innerText = totalPrice;

    // total 
    document.getElementById('totalAmount').innerText = totalPrice;
}

// memory 
document.getElementById('memory8Btn').addEventListener('click', function(){
    getUpdatePrice('memoryCost', 0)
})
document.getElementById('memory16Btn').addEventListener('click', function(){
    getUpdatePrice('memoryCost', 180)
})

// Storage
document.getElementById('storage256Btn').addEventListener('click', function(){
    getUpdatePrice('storageCost', 0)
})
document.getElementById('storage512Btn').addEventListener('click', function(){
    getUpdatePrice('storageCost', 100)
})
document.getElementById('storage1TbBtn').addEventListener('click', function(){
    getUpdatePrice('storageCost', 180)
})

// delivery charge
document.getElementById('freeDeliveryBtn').addEventListener('click', function(){
    getUpdatePrice('deliveryCharge', 0)
})
document.getElementById('extraDeliveryBtn').addEventListener('click', function(){
    getUpdatePrice('deliveryCharge', 20)
})

// promo code discount
document.getElementById('applyBtn').addEventListener('click', function () {
    const promoInput = document.getElementById('promoInput');
    const totalPrice = getInputCost('totalPrice');
    const totalAmount = document.getElementById('totalAmount');
    if(promoInput.value == 'stevekaku'){ 
        const discount = totalPrice * .20;
        const total = totalPrice - discount;
        
        totalAmount.innerText = total;

    }
    // clear data
    promoInput.value = '';
})

