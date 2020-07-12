/*pegando o elemento form, onde temos um button type submit, para que assim que ele for disparado,
aconteça o evento descrito dentro da função. */
let form = document.getElementById('form')

/*Pegando o elemento pelo id 'name', como colocado no input de nome, e armazenando numa variável 
para retorná-lo dinâmicamente no submit do form */
let nome = document.getElementById('name')


/*aplicando o método addEventListener, que fica 'escutando' o elemento formulário que possui 
um botão de tipo submit, assim que ele é clicado, é acionado o gatilho do alerta dentro da função, que faz
aparecer a janelinha com a mensagem e o nome do usuário digitado. Para deixar o código limpo utilizei a 
template string, um método de concatenação de strings e variáveis dentro das cráses, para uma melhor 
visualização*/
form.addEventListener('submit', function(e){
    alert(`Muito Obrigadx pelo seu contato ${nome.value}, em breve retornaremos à você ;)`)

    e.preventDefault()
})