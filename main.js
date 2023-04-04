let arr = ["water", "john", 2]

const whatIsInThisArr = (array) => {
    array.forEach(item => {
        console.log(item);
    });
}

whatIsInThisArr(arr);



const getFullName = (firstName, lastName) => {
    let fullName = `${firstName} ${lastName}`;
    console.log(fullName);
    return fullName;
}

getFullName('Jon', 'Pena');


const getRandoNumPassWord = (passWordSize) => {
    if (passWordSize < 0) {
        return "Must be greater than 1";
    }

    let pass =  Math.floor(Math.random() * passWordSize) * 53748382;
    console.log(pass);
    return pass;
}

let madePass = getRandoNumPassWord(3);


const checkForNumberFive = (pass) => {
    console.log(pass);
    let stringPass = Number.toString(pass);
    for(let i=0; i < stringPass.length; i++ ) {
        if (stringPass[i] == '5') {
            console.log("this pass contain the number 5");
        } else {
            console.log("password is clean");
        }
    }
}

checkForNumberFive(madePass);
