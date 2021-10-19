// Code your solution here

const { stringContaining } = require("expect")



function findMatching(arrayOfDrivers, name) {
    return(
    arrayOfDrivers.filter(function (element) {
        return( element.toUpperCase() == name.toUpperCase() )
    })
    )
}



//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// console.log( "First print: " +
// drivers.filter(function (member) {
//     return (member === "Bobby")
// }) 
// )

// console.log( 
//     findMatching(drivers, 'Bobby')
// )


function fuzzyMatch(arrayOfDrivers, letters) {
    return(

        arrayOfDrivers.filter(function (element) {
            return( element.slice(0, letters.length) === letters )
        }
        )
    )
}


// console.log(
// fuzzyMatch(drivers, "Sa")
// )

function matchName(arrayOfObjs, nameString) {
    return(
        arrayOfObjs.filter(function (element) {
            return( element.name === nameString)
        })
    )
}

