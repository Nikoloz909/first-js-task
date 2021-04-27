let arr = ['javascript', 'php', 'c#', 'python', 'c++', 'kotlin', 'c', 'swift'];

for(let i = 0 ; i < arr.length; i++){

  if(arr[i].length < 5){

    continue;

  }

  console.log(arr[i]);

}


let numbers = [2, -3, 5, 11, 1, -30, -11, 100, -1, -3, -4];

for(let i = 0; i < numbers.length; i++){
   if(numbers[i] < 0){

     continue;

   }
   console.log(numbers[i])
}

let numbersOne = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];
for(let i = 0; i < numbersOne.length; i++){

  let numbersTwo = numbersOne[i]

  for(let x = 0; x < numbersTwo.length; x++){

    if(numbersTwo[x] < 0){

      continue;

    }

    console.log(numbersTwo[x]);
  }
}

let user = {
  firstname: 'giorgi',
  lastname: 'saakadze',
  age: 32,
  isLoggedIn: true
}

function printName (obj){

  if(obj.isLoggedIn){

    return obj.firstname + ': ' + obj.lastname + ": " + obj.age;

  }

  return false;
}


console.log(printName(user))