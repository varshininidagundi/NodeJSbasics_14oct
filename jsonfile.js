
console.log(name_city_state_check,zip_phone_check,address_check);
const address_book=[
        {
            "name":"varshini",
            "adress":"navanagar",
            "city":"bagalkot",
            "state":"KA",
            "zip":587103,
            "phone_no":9686556133
        },
        {
            "name":"vaishnavi",
            "adress":"rr nagar",
            "city":"bengalore",
            "state":"KA",
            "zip":187104 ,
            "phone_no":1686556134
        },
        {
            "name":"adi",
            "adress":"sector no - 35",
            "city":"bgk",
            "state":"KA",
            "zip":287104 ,
            "phone_no":2686556134
        },
        {
            "name":"asha",
            "adress":"plotno 57",
            "city":"belgavi",
            "state":"KA",
            "zip":387104 ,
            "phone_no":3686556134
        },
        {
            "name":"satish",
            "adress":"opp hospital",
            "city":"nidagundi",
            "state":"KA",
            "zip":487104 ,
            "phone_no":4686556134
        }
];
//console.log(address_book);
//let address_object JSON.parse(address_book);
console.log(address_book[2].name);

/*const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});*/


function add(){

const result=name_city_state(name);
console.log(result);


/*r1.question("enter name",(name)=>{
    r1.question("Enter address: ", (address) => {
        r1.question("Enter city: ", (city) => {
            r1.question("Enter state: ", (state) => {
                r1.question("Enter zip code: ", (zip) => {
                    r1.question("Enter phone number: ", (phone_no) => {
                        // Create a new object with the user input
                        const newEntry = {
                            "name": name,
                            "address": address,
                            "city": city,
                            "state": state,
                            "zip": parseInt(zip),
                            "phone_no": parseInt(phone_no)
                        };
                        if(name_city_state(name)==true && name_city_state(state)==true && name_city_state(city)==true && numeric(zip)==true && numeric(phone_no)== true && isAlphanumeric(address) == true){
                            address_book.push(newEntry);
                        }
                        else {
                            console.log("enter correct input")
                            
                        }
                        console.log("NEW ENTRY",newEntry)
                        console.log(address_book);
                        r1.close();
                    });
                });
            });
        });
    });
});*/
}
//add()
//deleting array element

const deletelement=()=>{
    r1.question("enter the index of thwelement u want to delete:",(input) =>{
        const index = parseInt(input)-1;
        if (index>0 && index < address_book.length) {
            const deletedentry = address_book.splice(index, 1);
            console.log(deletedentry);
            console.log(address_book);
        }
        else{
            console.log("invalid index");
        }
    r1.close();
    });
}
//deletelement();

//edit entries

function edit_entries(){
console.log("edit entries");

r1.question("enter the index of element",(input) =>{
    const index = parseInt(input)-1;
    if(index>=0 && index < address_book.length){
        r1.question("enter name",(name)=>{
            r1.question("Enter address: ", (address) => {
                r1.question("Enter city: ", (city) => {
                    r1.question("Enter state: ", (state) => {
                        r1.question("Enter zip code: ", (zip) => {
                            r1.question("Enter phone number: ", (phone_no) => {
                                // updating the entries with new values
                                const updateEntry = {
                                    "name": name,
                                    "address": address,
                                    "city": city,
                                    "state": state,
                                    "zip": parseInt(zip),
                                    "phone_no": parseInt(phone_no)
                                };
                                address_book.push(updateEntry);
                                console.log("NEW ENTRY",updateEntry)
                                console.log(address_book);
                                r1.close();
                            });
                        });
                    });
                });
            });
        });
    }
})
}
//edit_entries();
//sort by zip
function sort_by_zip(){
    const sortByZIP = address_book.slice().sort((a, b) => a.zip - b.zip);

    console.log("Sorted Address Book by ZIP Code:");
    console.log(sortByZIP);
}
//sort_by_zip();
//sort bt name
function sort_by_name(){
    const sortByName = address_book.slice().sort((a, b) => a.name.localeCompare(b.name));

    console.log("Sorted Address Book by Name:");
    console.log(sortByName);
}
//sort_by_name();
