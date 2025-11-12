const a = [1,2,3]
const b = [4,5,6]

const c = [...a, ...b]
console.log(c)

const d = c.filter(n => n !== 3)

console.log(d)

const objectD = d.map((value, index) => ({ value, index }))

console.log("Task 3: ", objectD)

const product = objectD.reduce((acc, cur) => acc*cur.value, 1)
console.log("Task 4: ", product)

const students = [
    { name: "Marko", grade: 3 },
    { name: "Luka", grade: 4 },
    { name: "Ivana", grade: 5 },
    { name: "Lana", grade: 2 },
]

const suma = students.map(object => object.grade).filter(grade => grade >=4).reduce((acc,cur) => acc+cur, 0)

console.log("Task 5:", suma)

const prices = {
     pizza: 30, burger: 20, pasta: 25, juice: 10, fish: 40

 }

const {pasta, pizza: calzone, beer = 12, ...other} = prices;

console.log("Pasta: ", pasta)
console.log("Calzone: ", calzone)
console.log("Beer: ", beer)
console.log("Other: ", other)

console.log(`Calzone costs ${calzone}kn, pasta ${pasta}kn, which is ${pasta+calzone} kn in total`)