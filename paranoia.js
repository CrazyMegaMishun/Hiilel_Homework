var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    }
]

const emailPattern = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)?@(?!mail\.ru$)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

function validator(arr) {
    return arr
        .filter(item => emailPattern.test(item.email))
        .map(item => item.email)
}

console.log(validator(arr))