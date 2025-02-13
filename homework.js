var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    price: function() {
        let sum = 0
        Object.values(services).forEach((index) => {
            if (typeof index === 'string') {
                sum += Number(index.split(' ')[0])
            }
        })

        return sum
    },

    minPrice: function() {
        let min = 0
        Object.values(services).forEach((index) => {
            if (typeof index === 'string') {
                if(min === 0) min =  Number(index.split(' ')[0])
                else min = Math.min(min, Number(index.split(' ')[0]))
            }
        })
        return min
    },

    maxPrice: function() {
        let max = 0
        Object.values(services).forEach((index) => {
            if (typeof index === 'string') {
                if(max === 0) max =  Number(index.split(' ')[0])
                else max = Math.max(max, Number(index.split(' ')[0]))
            }
        })
        return max
   }

}
    
services['Розбити скло'] = "200 грн";

console.log(services.price())
console.log(services.minPrice())
console.log(services.maxPrice())
