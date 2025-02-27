const no_a_Pattern = /^(?!.*[aA])[a-zA-Z]{6,}$/
const words_arr = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"]
const words_str = "Wonderful Happiness Joyful Time Task Apple"

function validator(arr) {

    const words = typeof arr === 'string' ? arr.split(' ') : arr

    return words
        .filter(item => no_a_Pattern.test(item))
        .map(item => item)
}

console.log(validator(words_arr))
console.log(validator(words_str))
