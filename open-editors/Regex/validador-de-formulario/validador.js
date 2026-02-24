function validadorEmail(email){
    let regex = /^\w+@\w+\.\w{2,3}$/;
    return regex.test(email);
}

console.log(validadorEmail("joice@gmail.com"));
console.log(validadorEmail("joice@gmail"));



function validadorEmmail(email) {
    let regex = /^\w+@\w+\.\w{2,3}$/;
    return regex.test(email);
}

console.log(validadorEmmail("jussara@gmail.com"));

function validadorEmail2(email){
    let regex = /^\w+@\w+\.\w{2,3}$/;
    return regex.test(email);
}

console.log(validadorEmail2("joicealves@gmail.com"))
console.log(validadorEmail2("email.com"));