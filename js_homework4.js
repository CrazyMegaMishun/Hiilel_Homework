function checkProbabilityTheory(count){ 
    let even = 0
    let odd = 0

    for (let i = 0; i < count; i++) {
        let num = Math.floor(Math.random() * 901) + 100;

        if (num % 2 === 0) even++
        else odd++
    }

    return `Кількість згенерованих чисел: ${count}` + '\n' +
            `Парних чисел: ${even}` + '\n' +
            `Не парних чисел: ${odd}` + '\n' +
            `Відсоток парних до не парних: ${Math.round(even > 0 ? (even / count) * 100 : 0)}% на ${Math.round(odd > 0 ? (odd / count) * 100 : 0)}%`
}

console.log(checkProbabilityTheory(100))