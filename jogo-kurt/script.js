let perguntas = [
{q:"Qual foi o nome original da banda antes de Nirvana?", a:["Skid Row","Fecal Matter","Pen Cap Chew","Ted Ed Fred"], c:1},
{q:"Em que cidade Kurt nasceu?", a:["Seattle","Aberdeen","Olympia","Tacoma"], c:1},
{q:"Qual foi a primeira guitarra dele?", a:["Fender Mustang","Univox Hi-Flier","Jaguar","Stratocaster"], c:1},
{q:"Qual música abre o álbum Bleach?", a:["About a Girl","Blew","School","Negative Creep"], c:1},
{q:"Qual artista influenciou fortemente Kurt?", a:["Led Zeppelin","Pixies","Metallica","U2"], c:1},
{q:"Qual foi o último show do Nirvana?", a:["Seattle","Roma","Munich","Paris"], c:2},
{q:"Qual música foi inspirada por desodorante?", a:["Lithium","Polly","Smells Like Teen Spirit","In Bloom"], c:2},
{q:"Nome da filha de Kurt?", a:["Frances Bean","Courtney Love Jr.","Luna Cobain","Alice Cobain"], c:0},
{q:"Qual álbum tem 'Heart-Shaped Box'?", a:["Nevermind","Bleach","In Utero","MTV Unplugged"], c:2},
{q:"Quem produziu Nevermind?", a:["Steve Albini","Rick Rubin","Butch Vig","Brian Eno"], c:2},
{q:"Qual música ele odiava tocar ao vivo?", a:["Come As You Are","Teen Spirit","Lithium","Drain You"], c:1},
{q:"Qual era o apelido dele na infância?", a:["Kurty","Cobby","Kurtinho","Nenhum"], c:3},
{q:"Qual artista feminina influenciou Kurt?", a:["Madonna","PJ Harvey","Kim Gordon","Cher"], c:2},
{q:"Qual música tem violoncelo no Unplugged?", a:["Polly","Something in the Way","All Apologies","Dumb"], c:3},
{q:"Qual foi a causa oficial da morte?", a:["Overdose","Suicídio","Acidente","Doença"], c:1},
{q:"Qual banda participou do Unplugged?", a:["Meat Puppets","Pearl Jam","Soundgarden","Alice in Chains"], c:0},
{q:"Qual música NÃO é do Nirvana?", a:["Aneurysm","Sliver","Black Hole Sun","Dive"], c:2},
{q:"Qual era o signo dele?", a:["Áries","Touro","Peixes","Câncer"], c:2},
{q:"Qual álbum é mais cru?", a:["Nevermind","Bleach","In Utero","Incesticide"], c:1},
{q:"Quem era o baterista antes do Dave Grohl?", a:["Chad Channing","Pat Smear","Krist Novoselic","Mark Lanegan"], c:0},
{q:"Qual música fala sobre alienação?", a:["Lithium","Polly","Rape Me","In Bloom"], c:3},
{q:"Qual instrumento Kurt destruía mais?", a:["Baixo","Bateria","Guitarra","Teclado"], c:2},
{q:"Qual país foi o último show?", a:["Alemanha","França","Itália","Inglaterra"], c:0},
{q:"Qual foi o último álbum em vida?", a:["Bleach","Nevermind","In Utero","Unplugged"], c:2},
{q:"Qual música é cover no Unplugged?", a:["Come As You Are","About a Girl","The Man Who Sold the World","Drain You"], c:2},
{q:"Qual banda ele mais admirava?", a:["Beatles","Melvins","Queen","Ramones"], c:1},
{q:"Qual foi o primeiro single de Nevermind?", a:["Lithium","Teen Spirit","Come As You Are","In Bloom"], c:1},
{q:"Qual cor de cabelo no fim da vida?", a:["Preto","Loiro","Ruivo","Azul"], c:1},
{q:"Qual música tem tema religioso?", a:["Lithium","Polly","Dumb","Breed"], c:0},
{q:"Onde ficava a última casa dele?", a:["Los Angeles","Seattle","Lake Washington","New York"], c:2}
];

let index = 0;
let pontos = 0;
let tempo = 300;

const qEl = document.getElementById("question");
const aEl = document.getElementById("answers");
const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");

function mostrarPergunta(){
    if(index >= perguntas.length){
        fim();
        return;
    }

    let p = perguntas[index];
    qEl.innerText = p.q;
    aEl.innerHTML = "";

    p.a.forEach((resposta,i)=>{
        let btn = document.createElement("button");
        btn.innerText = resposta;

        btn.onclick = ()=>{
            if(i === p.c){
                pontos += 10;
            }
            index++;
            scoreEl.innerText = "Pontos: " + pontos;
            mostrarPergunta();
        };

        aEl.appendChild(btn);
    });
}

function fim(){
    qEl.innerText = "Fim do jogo!";
    aEl.innerHTML = `
        <h2>Pontuação final: ${pontos}</h2>
        <p>${avaliar()}</p>
        <button onclick="location.reload()">Jogar novamente</button>
    `;
}

function avaliar(){
    if(pontos < 100) return "Você não conhece quase nada.";
    if(pontos < 200) return "Conhecimento básico.";
    if(pontos < 250) return "Você sabe bastante.";
    return "Você é nível hardcore.";
}

setInterval(()=>{
    tempo--;
    timerEl.innerText = "Tempo: " + tempo;

    if(tempo <= 0){
        fim();
    }
},1000);

mostrarPergunta();