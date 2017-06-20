# Redux
Framework baseado no Flux, que gerenciara os dados dos estados dos componentes, no nosso caso
componentes react

Redux nos fornece o `store` que é o estado único da aplicação, estado que não pode e não é alterado.
Para que possamos publicar alteraçãoes, o redux nos fornece os `dispatches` que irão publicar as alterações para o state atráves de ações, e uma vez publicadas as alterações o estado tem que ser evoluído e com isso podemos ter `subscribers` que objetos interessados não possíveis mudanças modificadas pelas ações

Sem redux, os componentes que queiram alterar certos atributos de seu estado, e tenham outros componentes interessados nessas alterações terão que propagar estas alterações também para os interessados, o que não é interessante, pois estaremos criando muito acomplamento entre componentes

Com redux, tem um unico state da aplicacao, quando um componente queira alterar algo, apenas realizar um dispatch para o reducer que possa realizar tal alteração, que uma vez aplicada as alterações os interessados nelas serão afetados também, uma vez que estarão compartilhando o mesmo estado, um estado unico para a aplicacao

Redux segue 3 principios
- Uma unica fonte de verdade - store - um unico ponto onde estarao os meus estados da aplicacao
- O state e apenas leitura - nao poderemos alterar o estate, e sim evolui-lo, na maioria das vezes podemos retornar uma copia do state antigo com as alteração que queiramos 
- A mudanças realizadas com funções puras - funcoes que nao fazem chamadas a recursos exteriores, seu retorno depende apenas dos argumentos passados, e chamando duas funcoes puras com os mesmos parametros sempre deve retornar o mesmo resultado