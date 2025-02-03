function pow(x, y) {
    let result = x
    for (let i = 0; i<y-1; i++) {
        result *= x;
    }

    return result
}

console.log(pow(2, 3))