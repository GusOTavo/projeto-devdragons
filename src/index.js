import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magaViska = new Mago('Viska', 8, 'gelo', 7, 10)
const arqueiraLyvia = new Arqueiro('Lyvia', 7, 8)
const arqueiroMagoGustavo = new ArqueiroMago('Gustavo', 7, 'fogo', 10, 10)
const guerreiroDavi = new Guerreiro('Davi', 5)
const magoVictinho = new Mago('Victinho', 'raio', 8, 7, 10)
const arqueiroMagoPedro = new ArqueiroMago('Pedro', 7, 'água', 10, 10)
const arqueiroIsa = new Arqueiro('Isa', 7, 8)
const guerreiroLuca = new Guerreiro('Luca', 5)
const magoJeff = new Mago('Jeff', 'caos', 8, 7, 10)
const arqueiroMagaDebora = new ArqueiroMago('Débora', 7, 'ar', 10, 10)
const guerreiraAlice = new Guerreiro('Alice', 5)
const arqueiroRubens = new Arqueiro('Rubens', 7, 8)


//arqueiroBruno.#level = 15

const personagens = [magaViska, arqueiraLyvia, arqueiroMagoGustavo, magoVictinho, arqueiroMagoPedro, guerreiroDavi, arqueiroIsa, guerreiroLuca, magoJeff, arqueiroMagaDebora, guerreiraAlice, arqueiroRubens]

new PersonagemView(personagens).render()
