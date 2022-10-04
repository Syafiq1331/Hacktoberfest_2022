// Soal no 1
const soal1 = (m) => {
    if (m == 1) return 1;
    return m * soal1(m - 1);
}
console.log(soal1(10))

// Level soal 2
const factorial = (value) => {
    if (value < 999) {
        if (value % 15 === 0) {
            return "FizzBuzz"
        } else if (value % 3 === 0) {
            return "Fizz"
        } else if (value % 5 === 0) {
            return "Buzz"
        } else {
            return value;
        }
    } else {
        return "Nilai kamu melebihi batas"
    }
}

console.log(factorial(3))

// Soal 3
const ganjil = (value) => {
    if (value < 999) {
        return value % 2 === 0 ? true : false;
    }
    return "Over than 999"
};

console.log(ganjil(92));

// Soal no 4
const tebakNya = (value) => {
    let result = value.endsWith("nya");
    console.log(result)
}
tebakNya("hallonya")

// Soal no 5
function tambahAngka(value) {
    let result = value < 999 ? value : "Over than 900";
    for (let i = result; i <= result + 5; i++) {
        console.log(i)
    }
}
