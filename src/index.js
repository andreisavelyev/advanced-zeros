module.exports = function getZerosCount(number, base) {
  // your implementation
  var num = number;
  var discriminants = getFactors(base);
  var zeros = 0;
  var result = [];
  var exp = 1;

  for(var i = 0; i < discriminants.length; i++){
    if (discriminants[i]===discriminants[i+1]){
      exp++;
    } else {
      while(num>=1){
      zeros+=Math.floor(num/discriminants[i]);
      num = Math.floor(num/discriminants[i]);
    }
    result.push(Math.floor(zeros/exp));
    zeros = 0;
    exp = 1;
    num = number;
  }
  }
  result.sort((a,b) => a-b);
  return result[0];
}

function getFactors(base){
  var result = [];

  for (var i = 2; i <= base; i++){
    while (base%i===0){
      result.push(i);
      base /= i;
    }
  }

  return result;
}
