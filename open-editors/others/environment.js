function nome (nomeDapessoa, sobrenome) {
    let pessoa = `meu nome é ${nomeDapessoa} e meu sobrenome é ${sobrenome}`
    return pessoa;
} let nomeEsobrenome = nome ('Thais', 'Alves') 
    console.log(nomeEsobrenome)


    function nome (nome , sobrenome) {
        let pessoa = `Meu nome é ${nome} e meu sobrenome é ${sobrenome}`
        return pessoa; 
    } let exemplo = nome('Joice', 'Alves') 
    console.log(exemplo) 

    function nome (nomeDopet,tipoDopet){
        let pet = `Eu tenho um animal de estimação de nome ${nomeDopet} e ele é um ${tipoDopet}`
        return pet
    } let animal = nome ('Nina', 'Gato' )
    console.log(animal)

    function apartament ( name, localidade, preço) {
        let apar = `Olá ${name} , eu tenho um apartamento de localidade ${localidade} , e com um preço muito bom, apenas ${preço}`
        return apar
    }

    let ap = apartament ("Joice" , "Boa Viagem", "250mil" )
    console.log(ap)


function Terreno (Localidade, preço , comprimento, largura) {
    let ter = `O Terreno que temos é no ${Localidade} , e está saindo por ${preço}, ele contém comprimento de ${comprimento} e contém largura de ${largura}`
    return ter;
}
let t = Terreno ("Boa Viagem", "120mil" , "100", "200")
    console.log(t)



function tablet (model, valor, ano) {
    let tabl = `O table é do modelo ${model} , e está no valor de ${valor}, ele é lançamento de ${ano}` 
    return tabl
}    let tab = tablet ('Sansung' , 'R$ 1300' , '2026')
  console.log(tab)


  function cartão (model1 , model2) {
    let car = `O cartão Nu tem duas modalidades, ${model1}, e ${model2}`
    return car;
  }

  let usercar = cartão ("Credito" , "Debito")
  console.log(usercar)
  

  