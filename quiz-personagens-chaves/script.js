class Quiz {
    constructor() {
        this.personagens = {
            "Chaves": { pontos: 0, descricao: "Você é o Chaves! Um morador humilde e ingênuo da vila, sempre sonhando com um sanduíche de presunto. Apesar das dificuldades, sua bondade e alegria contagiam todos.", imagem: "fotos-personagens-chaves/chaves.jpg" },
            "Chiquinha": { pontos: 0, descricao: "Você é a Chiquinha! Travessa e esperta, adora bolar planos para se divertir na vila, mesmo que isso cause um pouco de confusão. Sua energia é incontrolável!", imagem: "fotos-personagens-chaves/chiquinha.jpg" },
            "Quico": { pontos: 0, descricao: "Você é o Quico! Um pouco mimado, mas de coração grande, gosta de ser o centro das atenções e exibir seus brinquedos. Sua risada é inconfundível!", imagem: "fotos-personagens-chaves/quico.jpg" },
            "Seu Madruga": { pontos: 0, descricao: "Você é o Seu Madruga! Sempre fugindo do aluguel, mas com um jeito esperto e carinhoso. Apesar de preguiçoso, é um pai dedicado e amigo de todos.", imagem: "fotos-personagens-chaves/seu-madruga.jpg" },
            "Dona Florinda": { pontos: 0, descricao: "Você é a Dona Florinda! Elegante e mandona, valoriza o respeito e a boa educação. Está sempre pronta para proteger o Quico e dar uma bronca em quem merece.", imagem: "fotos-personagens-chaves/dona-florinda.jpg" },
            "Dona Clotilde": { pontos: 0, descricao: "Você é a Dona Clotilde, a Bruxa do 71! Misteriosa e apaixonada pelo Seu Madruga, adora criar feitiços e surpreender os vizinhos com suas ideias excêntricas.", imagem: "fotos-personagens-chaves/dona-clotilde.jpg" }
        };

        this.perguntas = [
            {
                enunciado: "Como você enfrenta a chegada do Seu Barriga cobrando o aluguel?",
                opcoes: [
                    { texto: "Tento explicar com jeitinho que não tenho dinheiro, mas com esperança (😅)", valor: { "Chaves": 3, "Chiquinha": 2, "Quico": 1, "Seu Madruga": 0, "Dona Florinda": 0, "Dona Clotilde": 0 } },
                    { texto: "Ofereço um café e converso para distraí-lo (☕)", valor: { "Dona Clotilde": 3, "Dona Florinda": 2, "Quico": 1, "Chaves": 0, "Seu Madruga": 0, "Chiquinha": 0 } },
                    { texto: "Corro e me escondo antes que ele me ache (🏃)", valor: { "Seu Madruga": 3, "Chiquinha": 2, "Chaves": 1, "Quico": 0, "Dona Florinda": 0, "Dona Clotilde": 0 } }
                ]
            },
            {
                enunciado: "O que te faz feliz nas tardes da vila?",
                opcoes: [
                    { texto: "Brincar no pátio com os amigos, mesmo com uma bola murcha (⚽)", valor: { "Chiquinha": 3, "Chaves": 2, "Quico": 1, "Seu Madruga": 0, "Dona Florinda": 0, "Dona Clotilde": 0 } },
                    { texto: "Servir um chá com bolinhos na companhia de alguém especial (🍵)", valor: { "Dona Florinda": 3, "Dona Clotilde": 2, "Quico": 1, "Chaves": 0, "Seu Madruga": 0, "Chiquinha": 0 } },
                    { texto: "Tirar uma soneca sem o Seu Barriga aparecer (😴)", valor: { "Seu Madruga": 3, "Chaves": 1, "Dona Clotilde": 1, "Quico": 0, "Dona Florinda": 0, "Chiquinha": 0 } }
                ]
            },
            {
                enunciado: "Como você reage quando alguém te irrita no pátio?",
                opcoes: [
                    { texto: "Fico chateado, mas logo perdoo e tento ser amigo (😢)", valor: { "Chaves": 3, "Quico": 2, "Chiquinha": 1, "Seu Madruga": 0, "Dona Florinda": 0, "Dona Clotilde": 0 } },
                    { texto: "Dou uma bronca ou um tapa para mostrar quem manda (👋)", valor: { "Dona Florinda": 3, "Seu Madruga": 2, "Chiquinha": 1, "Chaves": 0, "Quico": 0, "Dona Clotilde": 0 } },
                    { texto: "Penso em uma vingança criativa para dar o troco depois (🧙‍♀️)", valor: { "Chiquinha": 3, "Dona Clotilde": 2, "Quico": 1, "Chaves": 0, "Seu Madruga": 0, "Dona Florinda": 0 } }
                ]
            },
            {
                enunciado: "Qual é o seu maior sonho na vila?",
                opcoes: [
                    { texto: "Ter sempre um sanduíche de presunto e um lugar para ficar (🥪)", valor: { "Chaves": 3, "Seu Madruga": 1, "Chiquinha": 1, "Quico": 0, "Dona Florinda": 0, "Dona Clotilde": 0 } },
                    { texto: "Ser admirado por todos como o mais importante da vila (👑)", valor: { "Dona Florinda": 3, "Quico": 2, "Dona Clotilde": 1, "Chaves": 0, "Seu Madruga": 0, "Chiquinha": 0 } },
                    { texto: "Fazer uma travessura tão grande que vire lenda (😜)", valor: { "Chiquinha": 3, "Chaves": 2, "Seu Madruga": 1, "Quico": 0, "Dona Florinda": 0, "Dona Clotilde": 0 } }
                ]
            },
            {
                enunciado: "Como você se comporta na aula do Professor Girafales?",
                opcoes: [
                    { texto: "Tento prestar atenção, mas acabo confundindo tudo (🤔)", valor: { "Chaves": 3, "Chiquinha": 2, "Quico": 1, "Seu Madruga": 0, "Dona Florinda": 0, "Dona Clotilde": 0 } },
                    { texto: "Mostro que sei tudo para impressionar o professor (🌟)", valor: { "Quico": 3, "Dona Florinda": 2, "Dona Clotilde": 1, "Chaves": 0, "Seu Madruga": 0, "Chiquinha": 0 } },
                    { texto: "Faço uma pergunta travessa para bagunçar a aula (😈)", valor: { "Chiquinha": 3, "Chaves": 2, "Quico": 1, "Seu Madruga": 0, "Dona Florinda": 0, "Dona Clotilde": 0 } }
                ]
            },
            {
                enunciado: "O que te preocupa mais na vila?",
                opcoes: [
                    { texto: "Não ter o que comer ou onde passar a noite (🍽️)", valor: { "Chaves": 3, "Seu Madruga": 2, "Chiquinha": 1, "Quico": 0, "Dona Florinda": 0, "Dona Clotilde": 0 } },
                    { texto: "Não conquistar o coração de alguém que você gosta (💔)", valor: { "Dona Clotilde": 3, "Dona Florinda": 2, "Quico": 1, "Chaves": 0, "Seu Madruga": 0, "Chiquinha": 0 } },
                    { texto: "Ser pego depois de fazer algo que não deveria (😬)", valor: { "Seu Madruga": 3, "Chiquinha": 2, "Chaves": 1, "Quico": 0, "Dona Florinda": 0, "Dona Clotilde": 0 } }
                ]
            },
            {
                enunciado: "Como você lida com uma confusão na vila?",
                opcoes: [
                    { texto: "Tento ajudar, mesmo que acabe piorando sem querer (😓)", valor: { "Chaves": 3, "Chiquinha": 2, "Quico": 1, "Seu Madruga": 0, "Dona Florinda": 0, "Dona Clotilde": 0 } },
                    { texto: "Dou ordens para todos pararem com a bagunça (📣)", valor: { "Dona Florinda": 3, "Quico": 2, "Dona Clotilde": 1, "Chaves": 0, "Seu Madruga": 0, "Chiquinha": 0 } },
                    { texto: "Sugiro uma ideia diferente que ninguém esperava (💡)", valor: { "Dona Clotilde": 3, "Chiquinha": 2, "Seu Madruga": 0, "Quico": 0, "Dona Florinda": 0, "Chaves": 0 } }
                ]
            },
            {
                enunciado: "O que você mais valoriza nos vizinhos da vila?",
                opcoes: [
                    { texto: "A amizade sincera, mesmo com brigas e choros (🤝)", valor: { "Chaves": 3, "Chiquinha": 2, "Quico": 1, "Seu Madruga": 0, "Dona Florinda": 0, "Dona Clotilde": 0 } },
                    { texto: "O respeito que mostram pela sua posição (👏)", valor: { "Dona Florinda": 3, "Quico": 2, "Dona Clotilde": 1, "Chaves": 0, "Seu Madruga": 0, "Chiquinha": 0 } },
                    { texto: "A parceria para bolar planos e escapar de encrencas (😉)", valor: { "Chiquinha": 3, "Seu Madruga": 2, "Chaves": 1, "Quico": 0, "Dona Florinda": 0, "Dona Clotilde": 0 } }
                ]
            },
            {
                enunciado: "Como você reage a um erro que cometeu na vila?",
                opcoes: [
                    { texto: "Admito sem querer querendo e peço desculpas (😇)", valor: { "Chaves": 3, "Quico": 2, "Chiquinha": 1, "Seu Madruga": 0, "Dona Florinda": 0, "Dona Clotilde": 0 } },
                    { texto: "Tento culpar outra pessoa para não ficar mal (😤)", valor: { "Quico": 3, "Dona Florinda": 2, "Seu Madruga": 1, "Chaves": 0, "Dona Clotilde": 0, "Chiquinha": 0 } },
                    { texto: "Finjo que não fui eu e mudo de assunto rapidinho (😎)", valor: { "Chiquinha": 3, "Seu Madruga": 2, "Dona Clotilde": 1, "Chaves": 0, "Quico": 0, "Dona Florinda": 0 } }
                ]
            },
            {
                enunciado: "Como você contribui para a diversão na vila?",
                opcoes: [
                    { texto: "Faço todos rirem com minhas trapalhadas sem querer (😂)", valor: { "Chaves": 3, "Chiquinha": 2, "Quico": 1, "Seu Madruga": 0, "Dona Florinda": 0, "Dona Clotilde": 0 } },
                    { texto: "Mostro meus talentos para impressionar os vizinhos (🎭)", valor: { "Dona Florinda": 3, "Quico": 2, "Dona Clotilde": 1, "Chaves": 0, "Seu Madruga": 0, "Chiquinha": 0 } },
                    { texto: "Invento brincadeiras ou planos que agitam o pátio (🎉)", valor: { "Chiquinha": 3, "Chaves": 2, "Seu Madruga": 1, "Quico": 0, "Dona Florinda": 0, "Dona Clotilde": 0 } }
                ]
            }
        ];

        this.estadoPerguntas = [];
        this.confirmarButton = null;

        document.getElementById("inicio").addEventListener("click", () => this.exibirQuiz());
    }

    exibirQuiz() {
        let container = document.getElementById("quiz");
        container.innerHTML = "";

        this.perguntas.forEach((pergunta, i) => {
            this.estadoPerguntas[i] = {
                botaoAtual: null,
                pontosAtuais: null
            };

            let titulo = document.createElement("h2");
            titulo.textContent = `Pergunta ${i + 1}: ${pergunta.enunciado}`;
            container.appendChild(titulo);

            const grupo = document.createElement("div");
            grupo.classList.add("grupo-opcoes");
            container.appendChild(grupo);

            pergunta.opcoes.forEach((opcao) => {
                let botao = document.createElement("button");
                botao.textContent = opcao.texto;
                grupo.appendChild(botao);
                botao.classList.add("botao-opcao");

                botao.addEventListener("click", () => {
                    this.selecionarOpcao(botao, opcao, i);
                });
            });
        });

        this.confirmarButton = document.createElement("button");
        this.confirmarButton.textContent = "Confirmar Respostas";
        this.confirmarButton.disabled = true;
        container.appendChild(this.confirmarButton);
        this.confirmarButton.classList.add("botao-confirmar");

        this.confirmarButton.addEventListener("click", () => this.exibirResultado());
    }

    selecionarOpcao(botao, opcao, i) {
        const { botaoAtual, pontosAtuais } = this.estadoPerguntas[i];

        if (botaoAtual) {
            this.restaurarBotao(botaoAtual, pontosAtuais);
        }

        this.adicionarPontos(opcao.valor);
        botao.disabled = true;

        this.estadoPerguntas[i].botaoAtual = botao;
        this.estadoPerguntas[i].pontosAtuais = opcao.valor;

        const tudoRespondido = this.estadoPerguntas.every(est => est.botaoAtual !== null);
        this.confirmarButton.disabled = !tudoRespondido;
    }

    exibirResultado() {
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = "";

        let personagemComMaisPontos = "";
        let maisPontos = 0;

        for (let personagem in this.personagens) {
            if (this.personagens[personagem].pontos > maisPontos) {
                maisPontos = this.personagens[personagem].pontos;
                personagemComMaisPontos = personagem;
            }
        }

        const titulo = document.createElement("h2");
        titulo.textContent = "Seu Personagem na Vila é:";
        resultado.appendChild(titulo);

        const nome = document.createElement("p");
        nome.textContent = `${personagemComMaisPontos} (${maisPontos} pontos)`;
        resultado.appendChild(nome);

        const descricao = document.createElement("p");
        descricao.textContent = this.personagens[personagemComMaisPontos].descricao;
        resultado.appendChild(descricao);

        const imagem = document.createElement("img");
        imagem.src = this.personagens[personagemComMaisPontos].imagem;
        imagem.classList.add("resultado-img");
        resultado.appendChild(imagem);

        const reset = document.createElement("button");
        reset.textContent = "Recomeçar Quiz";
        resultado.appendChild(reset);
        reset.classList.add("botao-resetar");

        reset.addEventListener("click", () => this.resetarQuiz());
    }

    resetarQuiz() {
        for (let personagem in this.personagens) {
            this.personagens[personagem].pontos = 0;
        }

        document.getElementById("quiz").innerHTML = "";
        document.getElementById("resultado").innerHTML = "";

        this.estadoPerguntas = [];
        this.exibirQuiz();
    }

    adicionarPontos(valor) {
        for (let nome in valor) {
            this.personagens[nome].pontos += valor[nome];
        }
    }

    removerPontos(valor) {
        for (let nome in valor) {
            this.personagens[nome].pontos -= valor[nome];
        }
    }

    restaurarBotao(botao, pontos) {
        botao.disabled = false;
        this.removerPontos(pontos);
    }
}

const quiz = new Quiz();