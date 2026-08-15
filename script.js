import{usuarios, listarUsuarios, listarContatosUsuario, listarMensagensUsuario } from "./contatos.js"
listarMensagensUsuario(1,0)























function criarContatos(srcFoto, nome, hora, ultima, naoLidas ) {
    const cardContainer = document.createElement('article');
    const fotoContato = document.createElement('img');
    const nomeContato = document.createElemento("h2");
    const horamsg = document.createElemento("p");
    const ultimaMsg = document.createElemento("p");
    const msgNaoLida = document.createElemento("p");



    cardContainer.ClassName = "card-contato grid";
    fotoContato.ClassName = "foto-Contato";
    nomeContato.ClassName = "nome-contato";
    horamsg.ClassName = "hora-msg-recebida";
    msgNaoLida.ClassName = "qtd-msg-n-lidas";

    fotoContato.src = srcFoto;
    nomeContato.innertext = nome;
    horamsg.innertext = hora;
    ultimaMsg.innerText = ultimaMsg;
    msgNaoLida.innerText = naoLidas;


cardContainer.id = idContato; 


    cardContainer.append(fotoContato, nomeContato, horamsg, ultimaMsg, msgNaoLida);
    elemento.lista.contatos.append(cardContainer);

}

