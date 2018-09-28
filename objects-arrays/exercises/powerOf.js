let powerOf = function(numbers, exponent){
    return numbers.map((number) => {
      return number ** exponent;
    })
}
powerOf([1,2,3,4,5], 2);







module.exports = powerOf
