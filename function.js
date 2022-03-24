let backpack = [];

backpack.push(`pokeball`)
backpack.push(`potion`)
backpack.push(`pokedollars`)

//backpack.shift()
backpack.splice(0,1)

let stone = `water stone`
backpack.push(stone)

backpack.pop()

//console.log(backpack)
//console.log(backpack.length)


backpack.push(`greatball`, `antidote` , `revive`)


//console.log(backpack)
//console.log(backpack.length)

//let satchel = backpack.splice(3,2)

//for(let i =0; i < backpack.length; i++){
//    console.log(`This is the item at index ${i}:` , backpack[i])
//}

if(backpack.length > 2){
    for(let i = 0; i<2; i++){
        console.log(backpack[i])
    } 

    } else {
        for(let i = 0; i < backpack.length; i++){
console.log(`This is the item at index ${i}:`, backpack[i])
        }
    }


//console.log(backpack)
//console.log(satchel)



//---------------------------------------------------------------------------------




// let guessMe = 54

// while (guessMe < 100) {
//     console.log(`-------------` , guessMe)
//     if (guessMe % 4 === 0 || guessMe % 5 === 0) {
//         console.log(`divisible by for or 5, added 25`, guessMe)
//         guessMe += 25
//     } else if (guessMe % 3 === 0) {
//         console.log(`divisible by 3, subtracted 27`, guessMe)
//         guessMe -= 27
//     } else {
//         guessMe += 3
//         console.log(`added 3`, guessMe)
//     }
//     guessMe += 22
//     console.log(`added 22`, guessMe)
// }
// console.log(`-------------`)
// console.log(`final value` , guessMe)