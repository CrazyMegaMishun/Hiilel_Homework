const no_a_Pattern = /^(?!.*[aA])[a-zA-Z]{6,}$/
const words = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"]

function validator(arr) {
    return arr
        .filter(item => no_a_Pattern.test(item))
        .map(item => item)
}

console.log(validator(words))