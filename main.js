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


const getRandoNumPassWord = () => {
    // if (passWordSize < 0) {
    //     return "Must be greater than 1";
    // }

    let pass =  Math.random().toString().slice(2,11);;
    // let pass =  Math.floor(Math.random() * passWordSize) * 53748382;
    console.log(pass);
    return pass;
}

let madePass = getRandoNumPassWord();


const checkForNumberFive = (pass) => {
    // let stringPass = toString(pass);
    // console.log(stringPass);
    for(let i=0; i < pass.length; i++ ) {
        if (i == 5) {
            console.log("this pass contain the number 5");
        } else {
            console.log("password is clean");
        }
    }
}

checkForNumberFive(madePass);

const sendPassToClient = () => {

}

