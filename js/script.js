//. N3
let array2 = ["hello1", 14, 24, "hello2"];
let numbers = array2.filter(function(element) {
    return typeof element === "number"
});
console.log(numbers)




//.N4   
let languages = ['html', 'css', 'javascript', 'python', 'php'];
let result1 =languages.filter(function(word) {
    return word.length > 3
});
console.log(result1)




//. N5 
let words = ['Madrid', 'rome', 'Milan', 'berlin'];
let result2 = words.filter(function(word) {
    return word.includes('M')
});
console.log(result2)





//.N7

let array7 = [5, 4, 3, 2, 1];
let result3 = array7.map(function(number) {
    return number * number
});
console.log(result3)



//. N10
let arr1 = [1, 2]
let arr2 = [3, 4]
let arr3 = [5, 6]
let result = arr1.concat(arr2, arr3)
console.log(result)




//. N12
let info = 'good day'
let newInfo = info.slice(5, 8)
console.log(newInfo)



//.N14
let array = [5, 25, 89, 120, 36];

// მასივის ბოლოში ორი ელემენტის დამატება
array.push('javascript', 'python')
console.log(array)

// მასივის დასაწყისში ორი ელემენტის დამატება
array.unshift('html', 'css')
console.log(array)

// ელემენტების რაოდენობის გამოტანა
console.log(array.length)

// პირველი და ბოლო ელემენტების წაშლა
array.shift()
array.pop()
console.log(array)



//.N15
let fruits = ['orange', 'banana', 'kiwi']
// საწყისი ელემენტების რაოდენობა
console.log(fruits.length)

// მასივის ბოლოში ორი ელემენტის დამატება
fruits.push('apple', 'pineapple')
console.log(fruits)

// მასივის დასაწყისში ელემენტის დამატება
fruits.unshift('watermelon')
console.log(fruits)

// ელემენტების რაოდენობა დამატების შემდეგ
console.log(fruits.length)

// მასივის მე-3 ადგილზე მანგოს დამატება
fruits.splice(2, 0, 'mango')
console.log(fruits)

// პირველი ელემენტის წაშლა
fruits.shift()
console.log(fruits)

// ბოლო ელემენტის წაშლა
fruits.pop()
console.log(fruits)

// დარჩენილი ელემენტების რაოდენობა
console.log(fruits.length)





//. N16
let array16 = [1, 2, 3, 4, 5];
array16.splice(3, 0, 'a', 'b', 'c')
console.log(array16)





//. N17
let array17 = [15, 100, 25, 10, 36]
array17.splice(3, 1)
console.log(array17)





//. N18
let array18 = [1, 2, 3, 4, 5]
array18.splice(2, 1, 'three')
console.log(array18)


//. N20
let array20 = [12, 25, 3, 6, 8, 14, 7, 23]
let newArray = array20.map(number => number / 3)
console.log(newArray)




//. N21
let array21 = ['apple', 'orange', 'mango', 'kiwi']
array21.splice(2, 0, 'strawberry', 'avocado')
console.log(array21)