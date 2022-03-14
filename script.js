var player1 = {nome: "Jogador 1", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
var player2 = {nome: "Jogador 2", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};

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

    if (campoNomeJogador == "") {
        campoAlerta.innerHTML = "Preencha os campos solicitados"
    } else {
        var nomeJogador = document.getElementById("nomeJogador").value;
        var novoJogador = {nome: nomeJogador, vitorias:0, empates:0, derrotas:0, pontos:0};

        jogadores.push(novoJogador);
        campoAlerta.innerHTML = "";
    }
    exibirJogadores(jogadores);
    document.getElementById("nomeJogador").value ="";
}

function deletarPlayer() {
    var posicao = jogadores.findIndex((i) => i.nome === nomeJogador)

    jogadores.splice(posicao, 1);
    exibirJogadores(jogadores);
}    
