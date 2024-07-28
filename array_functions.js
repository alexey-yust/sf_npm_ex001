

// функция расчета скидки по прайсу
// пример входных данных discountPrices([100, 200, 500], .5), где .5 размер скидки
function discountPrices (prices, discount) {
  var discounted = []

  for (var i = 0; i < prices.length; i++) {
    var discountedPrice = prices[i] * (1 - discount)
    var finalPrice = Math.round(discountedPrice * 100) / 100
    discounted.push(finalPrice)
  }

  console.log(i) // 3
  console.log(discountedPrice) // 150
  console.log(finalPrice) // 150

  return discounted
}



//функция суммирования эдементов массива
// пример вх. данных numbersSUM([5, 10, 15, 20]);
function numbersSUM(indata) {
  var sum = 0;

  for (var i = 0; i < indata.length; i++) {
    sum += indata[i];
  }
console.log(sum); // 50
}

