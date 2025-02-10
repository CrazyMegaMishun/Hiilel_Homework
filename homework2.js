function pow(x, y) {
    let result = x
    switch (true){
        case x === 0:
            return 0
        
        case y === 0:
            return 1

        case y > 0:
            for (let i = 0; i < y-1; i++){
                result *= x
            }
            return result

        case y < 0:
            result = 1
            for (let i = 0; i < -y; i++) {
                result *= x
            }
            return 1 / result
    }
}


/*
Возводимое |  Степень
    +      |     + 
    -      |     -
    -      |     +
    +      |     -
    0      |   +/-,0    -> 0 при возведении в степень всегда возвращает 0
  +/-,0    |     0      -> Возведение в нулевую степень всегда возвращает 1
*/

console.log(pow(2, 3));   // 8
console.log(pow(2, -3));  // 0.125
console.log(pow(0, 3));   // 0
console.log(pow(3, 0));   // 1
console.log(pow(-2, 3));  // -8
console.log(pow(-2, -3)); // -0.125