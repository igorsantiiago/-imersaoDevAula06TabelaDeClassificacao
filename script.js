var player1 = {imagem:"<img src=" + "https://github.com/fluidicon.png" + ">", nome: "GitHub", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
var player2 = {imagem:"<img src=" + "https://yt3.ggpht.com/xqhIoXspeX7eqouJvNHl1xqpv9213Pl26ENZbuouXxO2RlDadjsveNXfgnj8GTUk7thFYUkVRg=s88-c-k-c0x00ffffff-no-rj" + ">",nome: "Alura", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
var jogadores = [player1, player2];

player1.pontos = calcularPontos(player1, player2);

function calcularPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}

function exibirJogadores(jogadores) {
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++){
        elemento += "<tr><td><button class='botoesTabela' onClick='deletarPlayer(" + i + ")'><span class='material-icons-outlined'>clear</span>Deletar</button></td>";
        elemento += "<td> <img src" + jogadores[i].imagem + "</td>";
        elemento += "<td>" + jogadores[i].nome + "</td>";
        elemento += "<td>" + jogadores[i].vitorias + "</td>";
        elemento += "<td>" + jogadores[i].empates + "</td>";
        elemento += "<td>" + jogadores[i].derrotas + "</td>";
        elemento += "<td>" + jogadores[i].pontos + "</td>";
        elemento += "<td><button class='botoesTabela' onClick='adicionarVitoria(" + i + ")'><span class='material-icons-outlined'> add</span>Vitória</button></td>";       
        elemento += "<td><button class='botoesTabela' onClick='adicionarEmpate(" + i + ")'><span class='material-icons-outlined'> add</span>Empate</button></td>";
        elemento += "<td><button class='botoesTabela' onClick='adicionarDerrota(" + i + ")'><span class='material-icons-outlined'> add</span>Derrota</button></td>";
        elemento += "</tr>";
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibirJogadores(jogadores);

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calcularPontos(jogador);
    exibirJogadores(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calcularPontos(jogador);
    exibirJogadores(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibirJogadores(jogadores);
}

function limparPontos(i) {
    for (var i = 0; i < jogadores.length; i++) {
        jogadores[i].vitorias = 0;
        jogadores[i].empates = 0;
        jogadores[i].derrotas = 0;
        jogadores[i].pontos = 0;
    }
    exibirJogadores(jogadores);
}

function adicionarJogador() {
    var campoAlerta = document.getElementById("alerta");
    var campoNomeJogador = document.getElementById("nomeJogador").value;
    var url = document.getElementById("imagemJogador").value;

    if (campoNomeJogador.length == 0 || url.length == 0) {
        campoAlerta.innerHTML = "Preencha os campos solicitados"
    } else if (url.endsWith(".jpg") || url.endsWith(".png") || url.endsWith(".svg") || url.endsWith(".JPG") || url.endsWith(".PNG") || url.endsWith(".SVG")){
        var nomeJogador = document.getElementById("nomeJogador").value;
        var novoJogador = {imagem: "<img src=" + url + ">", nome: nomeJogador, vitorias:0, empates:0, derrotas:0, pontos:0};

        jogadores.push(novoJogador);
        campoAlerta.innerHTML = "";
    } else {
        console.error ("Endereço Inválido")
        alert("Insira um link válido com imagem")
    }
    exibirJogadores(jogadores);
    document.getElementById("nomeJogador").value ="";
    document.getElementById("imagemJogador").value ="";
}

function deletarPlayer() {
    var posicao = jogadores.findIndex((i) => i.nome === nomeJogador)

    jogadores.splice(posicao, 1);
    exibirJogadores(jogadores);
}    
