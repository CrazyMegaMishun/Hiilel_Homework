var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    
    getPrices: function (){
        return Object.values(services)
            .filter(value => typeof value === "string")
            .map(value => parseInt(value))
    },

    price: function() {
        return this.getPrices().reduce((acc, val) => acc + val)
    },

    minPrice: function() {
        return Math.min(...this.getPrices())
    },

    maxPrice: function() {
        return Math.max(...this.getPrices())
    }
};

services["Розбити скло"] = "200 грн"

console.log(services.price())  
console.log(services.minPrice()) 
console.log(services.maxPrice())
