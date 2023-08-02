const square1 = function (x) {
    return x * x;
}  // normal function

console.log("Normal Function : " + square1(8)); // 64

const square2 = (x) => {
    return x * x;
}  // arrow function

console.log("Arrow Function v1 : " + square2(8)); // 64

const square3 = (x) => x * x;  // arrow function

console.log("Arrow Function v2 : " + square3(8));  // 64


const eventVtest = {
    name: 'Birthday Party',
    printGuestList: () => {
        console.log('Guest list for ' + this.name); //
        /* Can't be used with arrow function
            * because arrow function don't bind their own this value
            * AKA they don't have their own this keyword
            * so this.name will be undefined
         */
    }
}

////////////////////////////////////////////////////////////////////////


const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        // console.log('Guest list for ' + this.name); //
        // this.guestList.forEach((guest) => {
        //     console.log(guest + ' is attending ' + this.name);
        // })
        this.guestList.forEach(function (guest) {
            console.log(guest + ' is attending ' + this.name);
        })
    }
}

event.printGuestList();

// to do the perfect change : example: function () ~change it to ~ example()
/*
   to do the perfect change : example: function () ~change it to ~ example()


 */
