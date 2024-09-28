function cadastro() {
    //solicite o nome do usuário
    let  nome = prompt("Qual é o seu nome?");
    //solicite o sobrenome do usuário
    let sobrenome = prompt("Qual é o seu sobrenome?");
    //solicite o endereço do usuário
    let endereço = prompt("Qual é o seu endereço?");
    //solicite o email do usuário
    let  email = prompt("Qual é o seu e-mail?");
    //solicite uma senha do usuário
    let senha = prompt("Crie uma senha para o seu cadastro");
    //exibe a saudação
    alert("Tudo certo com o seu cadastro!Prossiga com o acesso.");
    //mostra os dados no console
    console.log("nome do usuário:",nome);
    console.log("sobrenome do usuário:",sobrenome);
    console.log("endereço do usuário:",endereço);
    console.log("email do usuário:",email);
    console.log("senha do usuário:",senha);

}