// Instruções para entrega
// # 3️ Escrevendo as classes de um Jogo

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções
// - Classes e Objetos

// ## Objetivo:

// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)

// ## Saída

// Ao final deve se exibir uma mensagem:

// - "o {tipo} atacou usando {ataque}"
//   ex: mago atacou usando magia
//   guerreiro atacou usando espada

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    attack() {
        let ataque = "";

        switch (this.tipo) {
            case "mago":
                ataque = "usando magia";
                break;

            case "warrior":
                ataque = "usando espada";
                break;

            case "monge":
                ataque = "usando artes marciais";
                break;

            case "ninja":
                ataque = "usando shuriken";
                break;

            default:
                ataque = "ataque desconhecido";
        }

        console.log(`O ${this.tipo} atacou ${ataque}`);
    }

}

const mago = new Heroi("Merlin", 65, "mago");
const guerreiro = new Heroi("Highlander", 30, "warrior");
const monge = new Heroi("Shaolin", 25, "monge")
const ninja = new Heroi("Okinawa", 50, "ninja")
const palhaço = new Heroi("Clown", 45, "palhaço");

mago.attack();
guerreiro.attack();
monge.attack();
ninja.attack();
palhaço.attack();