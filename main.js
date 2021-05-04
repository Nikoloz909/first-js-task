let arr = ['javascript', 'php', 'c#', 'python', 'c++', 'kotlin', 'c', 'swift'];
for (let i = 0; i < arr.length; i++) {

    if (arr[i].length < 5) {

        continue;
    }

    console.log(arr[i])
}

let numbers = [2, -3, 5, 11, 1, -30, -11, 100, -1, -3, -4];
for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] < 0) {

        continue;
    }
    console.log(numbers[i])
}


let secNumber = [
    [2, -3, 5, 11],
    [1, -30, -11, 100],
    [-1, -3, -4]
];

for (let i = 0; i < secNumber.length; i++) {

    const element = secNumber[i];
    for (let x = 0; x < element.length; x++) {

        if (element[x] < x) {

            continue;
        }

         console.log(element[x])
    }
}

let maxValue = [1, 5, 30, 6, 7, 523];

function myFunciton(maxValue) {

    let numbers = 0;

    for (let i = 0; i < maxValue.length; i++) {
        let x = maxValue[i];
        if (x > numbers) {
            numbers = x
        }
    }
    return numbers
}


     console.log(myFunciton(maxValue))


let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isLoggedIn: true
}

function getFunction(user) {
    if (user.isLoggedIn) {
        return user.firstname + ': ' + user.lastname
    }
    return false
}
getFunction(user)
console.log(getFunction(user))