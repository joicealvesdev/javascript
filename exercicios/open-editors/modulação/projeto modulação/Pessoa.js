export default class pessoa {
    construtor (nome) {
        this.name = nome;
    }

    falar () {
        return `${this.nome} está falando...`
    }
}