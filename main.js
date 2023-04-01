// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
const validateCred = myArray => {
    //create an array to test against supplied array leaving original array unaltered
    let testArray = myArray.slice();
    const checkDigit = testArray[testArray.length - 1];
    //loop through the array in reverse, every other element, starting from penultimate element
    //for each iteration, double the element's value, then subtract 9 if it's >= 9
    for (let i = testArray.length - 2; i >= 0; i -= 2) {
        testArray[i] = testArray[i] * 2;
        if (testArray[i] >= 9) {
            testArray[i] = testArray[i] - 9;
        }
    };
    //sum the elements of the testArray, and return true if modulo 10 === 0
    testArray = testArray.reduce((accumulator, currentValue) => accumulator + currentValue);
    if (testArray % 10 === 0) {
        return true;
    } else {
        return false;
    }
};


/*console.log(validateCred(valid1));
console.log(validateCred(valid2));
console.log(validateCred(valid3));
console.log(validateCred(valid4));
console.log(validateCred(valid5));
console.log(validateCred(invalid1));
console.log(validateCred(invalid2));
console.log(validateCred(invalid3));
console.log(validateCred(invalid4));
console.log(validateCred(invalid5));*/

/*for (let i = 0; i < 5; i++) {
    console.log(validateCred(eval(`valid${i+1}`)));
}

for (let i = 0; i < 5; i++) {
    console.log(validateCred(eval(`invalid${i+1}`)));
}


console.log('------------------');*/

//loop through the cards to test the validateCard function against cards of known validity
let counter = 1;
for (element of batch) {
    console.log(`${counter}: ` + validateCred(element));
    counter++;
};

const findIvalidCards = array => {
    invalidArray =[];
    for (item of array) {
        if (validateCred(item) === false) {
            invalidArray.push(item);
        }
    }
    return invalidArray;
}

const invalidNumbers = findIvalidCards(batch);



console.log(findIvalidCards(batch));

const invalidCreditCardCompanies = array => {
    let invalidCardIssuers = [];
    /*for (item of array) {
        console.log(item[0]);
    }*/
    for (item of array) {
        //console.log(item[0]);
        switch (item[0]) {
            case 3:
                if (invalidCardIssuers.indexOf('Amex') === -1) {
                    invalidCardIssuers.push('Amex');
                };
                break;
            case 4:
                if (invalidCardIssuers.indexOf('Visa') === -1) {
                    invalidCardIssuers.push('Visa');
                };
                break;
            case 5:
                if (invalidCardIssuers.indexOf('Mastercard') === -1) {
                    invalidCardIssuers.push('Mastercard');
                };
                break;
            case 6:
                if (invalidCardIssuers.indexOf('Discover') === -1) {
                    invalidCardIssuers.push('Discover');
                };
                break;
            default:
                break;
        }
    }
    if (invalidCardIssuers === []) {
        return 'Company not found.';
    } else {
        return invalidCardIssuers;
    }
}

console.log('Invalid card issuers: ' + invalidCreditCardCompanies(invalidNumbers));






