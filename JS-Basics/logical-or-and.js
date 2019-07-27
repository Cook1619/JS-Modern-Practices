//Challenge

let isGuestOneVegan =  true;
let isGuestTwoVegan =  true;

//Are both vegan? Only offer up vegan dishes
if(isGuestOneVegan && isGuestTwoVegan){
    console.log('Only vegan dishes will be served for this group!')
}else if(isGuestOneVegan || isGuestTwoVegan){
    console.log('Some vergan dishes will be served')
}else {
    console.log('Anything can be served to this group')
}
//At least one vegan? Make sure to offer up some vegan options

//Else, Offer up anything on the menu