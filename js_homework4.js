function checkProbabilityTheory(count){ 
    let even = 0
    let odd = 0

    for (let i = 0; i < count; i++) {
        let num = Math.floor(Math.random() * 901) + 100;

        if (num % 2 === 0) even++
        else odd++
    }

    let evenToOdd = odd > 0 ? (even / odd) * 100 : 100

    return `Кількість згенерованих чисел: ${count}` + '\n' +
            `Парних чисел: ${even}` + '\n' +
            `Не парних чисел: ${odd}` + '\n' +
            `Відсоток парних до не парних: ${evenToOdd}`
}

console.log(checkProbabilityTheory(100))