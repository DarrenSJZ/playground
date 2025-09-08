// ARRAYS
let arr1 = ['a', 'b', 'c']
let arr2 = [...arr1]
// arr1.forEach(e => {
//     arr2.push(e)
// });
arr1.push('d')
console.log(arr1, arr2)


// OBJECTS
const person = {
    name: "man",
    age : 24,
    weight: 55.3,
}
console.log(person, person['name'])
person.name = "a miserable pile of secrets"
console.log(person, person['name'])

const basket = [ "apple", "orange" ]
basket.push("banana")
console.log(basket)


// OBJECTS IN ARRAY
const employees = [
    { name: "Jon", age: 26, salary: 5000 },
    { name: "Grace", age: 40, salary: 6000 },
    { name: "Bill", age: 32, salary: 5500 },
    { name: "Zack", age: 25, salary: 4000 },
]
console.log(employees, employees[5]?.salary)


// FOR LOOP
console.log("Begin For Loop")
for (let i = 0; i < 10; i++) {
    if (i == 2) continue
    if (i == 7) break
    console.log(i)
}
console.log("End For Loop")

// These two methods do the same thing. Use either depending on the situation.
for (let i = 0; i < employees.length; i++) {
    const e = employees[i];
    console.log(e)
}
// employees.forEach(e => {
//     console.log(e)
// });


// EXERCISE
const str = "The quick brown fox jumps over the lazy dog"
const vowels = "aeiou"
let vowels_qty = 0
const vowels_count = { a:0, e:0, i:0, o:0, u:0 }
// Iterate over each letter in the string
for (let i = 0; i < str.length; i++) {
    const e = str[i];
    // Iterate over each vowel
    for (let j = 0; j < vowels.length; j++) {
        const v = vowels[j];
        if (e == v)
        {
            vowels_qty++;
            vowels_count[v]++
        }
    }
}
console.log(str, vowels, vowels_qty, vowels_count)