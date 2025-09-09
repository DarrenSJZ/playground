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


// EXERCISE 1
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


// FUNCTION
const fifty = SayHi()
Print(fifty)
for (let i = 0; i < employees.length; i++) {
    PrintEmployee(employees[i])
}

function SayHi()
{
    Print("Hello!")
    return 50
}
function PrintEmployee(employee)
{
    Print(`Hello, ${employee.name}.\nYou are ${employee.age} years old.\nYou earn $${employee.salary}/month.`)
}
function Print(str)
{
    console.log(str)
}


// ARROW FUNCTION
const PrintPerson = (person) =>
{
    Print(person.name);
    Print(person.age);
    Print(person.weight);
    return;
}
PrintPerson(person)

const PrintSign = (message) =>
(
    Print(message)
);
PrintSign(str);


// IIFE (Immediately Invoked Function Expression)
((animal, legs) => {
    Print(`The ${animal} has ${legs} legs.`)
})('dog', 4)


// EXERCISE 2
const todoList = []
const TodoView = (status = '') =>
{
    if (status.length > 0 && !IsStatusValid(status)) return

    Print(`=== ${status.length > 0 ? status : 'ALL'} ===`)
    if (todoList.length > 0)
    {
        let count = 0;
        todoList.forEach(e => {
            if (status.length === 0 || e.status == status)
            {
                Print(`${count}: ${e.task}`)
                if (status.length <= 0) Print(`Task status: ${e.status}`)
                count++
            }
        });
        Print(`=== Total ${count} item(s) ===\n`)
    }
    else
    {
        Print("EMPTY\n")
    }
}
const TodoAdd = (task, status = "pending") =>
{
    if (!IsStatusValid(status)) return
    
    todoList.push({
        task: task,
        status: status,
    })
    Print(`Added "${task}" task with "${status}" status.\n`)
}
const TodoUpdate = (task, status) =>
{
    if (!IsStatusValid(status)) return

    todoList.forEach(e => {
        if (e.task == task)
        {
            e.status = status
            Print(`Updated "${task}" task to "${status}" status.\n`)
        }
    });
}
const TodoDelete = (index) =>
{
    const deletedItems = todoList.splice(index, 1)
    if (deletedItems.length > 0)
    {
        deletedItems.forEach(e => {
            Print(`Deleted "${e.task}" task (was in "${e.status}" status).\n`)
        });
    }
    else
    {
        Print("Nothing was deleted.")
    }
}
const IsStatusValid = (status) =>
{
    const isValid = status == "wip" || status == "pending" || status == "done"
    if (!isValid)
    {
        Print(`${status} is not a valid status! It must be 'wip', 'pending', or 'done'.`)
    }
    return isValid
}

TodoView()
TodoAdd('play uma musume')
TodoAdd('feed the dogs', 'wip')
TodoAdd('wash my car', 'done')
TodoAdd('sleep')
TodoView()
TodoDelete(0)
TodoView()
TodoAdd('cook dinner', 'wip')
TodoAdd('wake up')
TodoView()
TodoView('pending')
TodoView('wip')
TodoView('done')