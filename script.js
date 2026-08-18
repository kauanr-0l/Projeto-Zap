import{usuarios, listarUsuarios, listarContatosUsuario, listarMensagensUsuario } from "./contatos.js"
carregarContatosPerfil(0);



function carregarContatosPerfil(idPerfil) {
  const perfil = usuarios["whats-users"].find(u => u.id === idPerfil);

  if (!perfil) {
    console.error(`Perfil com id ${idPerfil} não encontrado.`);
    return;
  }

  const listaConversas = document.querySelector(".lista-conversas");
  listaConversas.innerHTML = ""; 

  perfil.contacts.forEach((contato, index) => {
    listaConversas.appendChild(criarCardContato(contato, index));
  });
}

function criarCardContato(contato, idContato) {
  const cardContainer = document.createElement("div");
  const avatar = document.createElement("div");
  const infoContainer = document.createElement("div");
  const topoContainer = document.createElement("div");
  const nomeContato = document.createElement("span");
  const horaMsg = document.createElement("span");
  const ultimaMsg = document.createElement("p");

  cardContainer.className = "conversa";
  avatar.className = "avatar";
  infoContainer.className = "conversa-info";
  topoContainer.className = "conversa-topo";
  nomeContato.className = "nome";
  horaMsg.className = "hora";
  ultimaMsg.className = "preview";

  const ultima = contato.messages[contato.messages.length - 1];

  avatar.innerText = iniciais(contato.name);
  nomeContato.innerText = contato.name;
  horaMsg.innerText = ultima ? ultima.time : "";
  ultimaMsg.innerText = ultima ? ultima.content : "";

  cardContainer.dataset.idContato = idContato;

  topoContainer.append(nomeContato, horaMsg);
  infoContainer.append(topoContainer, ultimaMsg);
  cardContainer.append(avatar, infoContainer);

  return cardContainer;
}

function iniciais(nome) {
  return nome
    .split(" ")
    .map(palavra => palavra[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}



















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





