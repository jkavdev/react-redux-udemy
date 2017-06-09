//Para que possamos usar o import, tivemos que configurar para o babel realizar o parse para
//um codigo legivel pelo browser
import Pessoa from './Pessoa'

const pessoa = new Pessoa('Jhonatan Kolen Alves Viana, isso DFPPPFPPFPFP.................................')

console.log(pessoa.toString())