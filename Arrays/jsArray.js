// Create an array called practiceFile with the following entry: 273.15. Use the push method to add the following elements to the array. Add items a & b one at a time, then use a single push to add the items in part c. Print the array after each step to confirm the changes. a. 42 b. "hello" c. false, -4.6, "87" */
var practiceFile = [273.15]
console.log(practiceFile)

practiceFile.push(42)
console.log(practiceFile)

practiceFile.push("hello")
console.log(practiceFile)

practiceFile.push(false, -4.6, "87")
console.log(practiceFile)

console.log("=================================================================================================================================================================================================================================================================================")

// push, pop, shift and unshift are used to add/remove elements from the beginning/end of an array. Bracket notation can be used to modify any element within an array. Starting with the cargoHold array ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'], write statements to do the following: */
var cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket']
console.log(cargoHold)

// a. Use bracket notation to replace 'slinky' in the array with 'space tether'. Print the array to confirm the change.*/ 
var index = cargoHold.indexOf('slinky')
if(index !== -1){
    cargoHold[index] = 'space tether'
}
console.log(cargoHold)

// b. Remove the last item from the array with pop. Print the element removed and the updated array.*/ 
console.log(cargoHold.slice(-1)) // element removed
cargoHold.pop()
console.log(cargoHold)

//c. Remove the first item from the array with shift. Print the element removed and the updated array.
console.log(cargoHold.shift()) // element removed
cargoHold.shift()
console.log(cargoHold)

//d. Unlike pop and shift, push and unshift require arguments inside the (). Add the items 1138 and '20 meters' to the array - the number at the start and the string at the end. Print the updated array to confirm the changes.
const number = [1138]
var cargoHold = number.concat(cargoHold)
console.log(cargoHold)

const string = '20 meters'
cargoHold = cargoHold.concat(string)
console.log(cargoHold)

//e. Use a template literal to print the final array and its length.
for(const jk of cargoHold){
    console.log(jk)
}

console.log("=================================================================================================================================================================================================================================================================================")

//3. The splice method can be used to either add or remove items from an array. It can also accomplish both tasks at the same time. Use splice to make the following changes to the final cargoHold array from exercise 2. Be sure to print the array after each step to confirm your updates.

//a. Insert the string 'keys' at index 3 without replacing any other entries.
cargoHold.splice(3,0,"keys")
console.log(cargoHold)

// b. Remove 'instruction manual' from the array. (Hint: indexOf is helpful to avoid manually counting an index).
index = cargoHold.indexOf('instruction manual')
cargoHold.splice(index,1)
console.log(cargoHold)

// c. Replace the elements at indexes 2 - 4 with the items 'cat', 'fob', and 'string cheese'.
cargoHold.splice(2,3,'cat','fob','string cheese')
console.log(cargoHold)

console.log("=================================================================================================================================================================================================================================================================================")

// 4. Some methods---like splice and push---alter the original array, while others do not. Use the arrays holdCabinet1 ['duct tape', 'gum', 3.14, false, 6.022e23] and holdCabinet2 ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'] to explore the following methods: concat, slice, reverse, sort. Refer back to the chapter if you need to review the proper syntax for any of these methods.
var holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23]
var holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip']

// a. Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
console.log(holdCabinet1.concat(holdCabinet2))
console.log(holdCabinet1)
console.log(holdCabinet2)

// b. Print a slice of two elements from each array. Does slice alter the original arrays?
console.log(holdCabinet1.slice(0,2).concat(holdCabinet2.slice(0,2)))
console.log(holdCabinet1)
console.log(holdCabinet2)

// c. reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
console.log(holdCabinet1.reverse())
console.log(holdCabinet2.sort())
console.log(holdCabinet1)
console.log(holdCabinet2)

console.log("=================================================================================================================================================================================================================================================================================")

// 5. The split method converts a string into an array, while the join method does the opposite.
var str = 'In space, no one can hear you code.'

// a. Try it! Given the string str = 'In space, no one can hear you code.', see what happens when you print str.split() vs. str.split('e') vs. str.split(' ') vs. str.split(''). What is the purpose of the parameter inside the ()?
console.log(str.split())
console.log(str.split('e'))
console.log(str.split(' '))
console.log(str.split(''))

// b. Given the array arr = ['B', 'n', 'n', 5], see what happens when you print arr.join() vs. arr.join('a') vs. arr.join(' ') vs. arr.join(''). What is the purpose of the parameter inside the ()?
var arr = ['B', 'n', 'n', 5]
console.log(arr.join())
console.log(arr.join('a'))
console.log(arr.join(' '))
console.log(arr.join(''))

// c. Do split or join change the original string/array?
// split -> string to Array
// join -> array to string

// d. The benefit, cadet, is that we can take a string with delimiters (like commas) and convert it into a modifiable array. Alphabetize these hold contents: "water,space suits,food,plasma sword,batteries", and then combine them into a new string.
var alpha = "water,space suits,food,plasma sword,batteries"
var newArray = alpha.split(',')
console.log(newArray)
console.log(newArray.join(' '))

console.log("=================================================================================================================================================================================================================================================================================")

// 6. Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.
// a. Define and initialize the following arrays, which hold the name, chemical symbol and mass for different elements: i. element1 = ['hydrogen', 'H', 1.008] ii. element2 = ['helium', 'He', 4.003] iii. element26 = ['iron', 'Fe', 55.85]
var element1 = ['hydrogen', 'H', 1.008] 
var element2 = ['helium', 'He', 4.003] 
var element26 = ['iron', 'Fe', 55.85]

// b. Define the array table, and use push(arrayName) to add each of the element arrays to it. Print table to see its structure.
var table = new Array()
table.push(element1)
table.push(element2)
table.push(element26)
console.log(table)

// c. Use bracket notation to examine the difference between printing table[1] and table[1][1]. Don't just nod your head! I want to HEAR you describe this difference. Go ahead, talk to your screen.
console.log(table[1])
console.log(table[1][1])

// d. Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26
console.log(table[0][2])
console.log(table[1][0])
console.log(table[2][1])

console.log("=================================================================================================================================================================================================================================================================================")

// 7. For each of the exercises below, assume you are starting with the following people array.
let people = ["Greg", "Mary", "Devon", "James"]

// 1.Using a loop, iterate through this array and console.log all of the people.
for(const peopl of people){
    console.log(peopl)
}

// 2.Write the command to remove "Greg" from the array.
people.shift()
console.log(people)

// 3.Write the command to remove "James" from the array.
people.pop()
console.log(people)

// 4.Write the command to add "Matt" to the front of the array.
people.push("Matt")
console.log(people)

// 5.Write the command to add your name to the end of the array.
people.push("MyName")
console.log(people)

// 6.Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
for(const peopl of people){
    console.log(peopl)
    if(peopl == "Mary"){
        break
    }
}

// 7.Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
var newPeople = [].concat(people)
index = newPeople.indexOf("Mary")
newPeople.splice(index,1)
index = newPeople.indexOf("Matt")
newPeople.splice(index,1)
console.log(newPeople)

// 8.Write the command that gives the indexOf where "Mary" is located.
console.log(people.indexOf("Mary"))

// 9.Write the command that gives the indexOf where "Foo" is located (this should return -1).
console.log(people.indexOf("Foo"))

// 10.Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
let peoples = ["Greg", "Mary", "Devon", "James"]
index = peoples.indexOf('Devon')
peoples.splice(index,1,"Elizabeth","Artie")
console.log(peoples)

// 11.Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
var withBob = peoples.concat("Bob")
console.log(withBob)

console.log("=================================================================================================================================================================================================================================================================================")
