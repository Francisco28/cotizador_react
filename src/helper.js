//get the difference of years
export function getDifferenceYear(year) {
    return new Date().getFullYear() - year;
}

//calculate the total to buy for brand
export function calculateBrand(brand) {
    let increment;
    
    switch(brand) {
        case 'european':
            increment = 1.30;
            break;
        
        case 'american':
            increment = 1.15;
            break;

        case 'asian':
            increment = 1.05;
            break;    

        default:
            break;
    }
    return increment;
}

//calculate the type of insurance
export function getPlan(plan) {
    return ( plan ===  'basic') ? 1.20 : 1.50;
}


//show the first letter in uppercase
export function firstUppercase( text ) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}