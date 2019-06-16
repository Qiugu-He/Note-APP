// const square = function (x){
//     return x*x
// }

// //create arrow function
// const square = (x) => {
//     return x*x
// }

//const square = (x) => x*x // short hand array syntax  function coz there is only one statement for return 

//define an obj
//arrow function dont bind with "this"
const event ={
    name: 'Birthday part',
    guestList:['He', 'She', 'They'],
    printGuestList(){
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest)=>{
            console.log(guest + 'is attending ' + this.name)
        })
    }
}
event.printGuestList()