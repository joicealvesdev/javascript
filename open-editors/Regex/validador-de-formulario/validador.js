function validadorEmail(email){
    let regex = /^\w+@\w+\.\w{2,3}$/;
    return regex.test(email);
}

console.log(validadorEmail("joice@gmail.com"));
console.log(validadorEmail("joice@gmail"));