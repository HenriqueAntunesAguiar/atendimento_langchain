botao_mecanica = document.getElementById('mecanica')
botao_restaurante = document.getElementById('restaurante')
botao_odonto = document.getElementById('odontologia')
botao_lavajato = document.getElementById('lavajato')
const chat__mensages__mensages = document.getElementsByClassName('chat__mensages__mensages')[0]
const user_mensages_lava_jato = ['Bom dia!', 'Henrique', 'Agendar um serviço', 'Audi A3', 'Gostaria de uma lavagem simples',
     'Teria horário para amanha? Tenho que levar meu filho no médico hoje.', 'Ficaria bom para mim as 16', 'Por gentileza!']

const bot_mensages_lava_jato = ['Olá! Bom dia!<br>Para começarmos, qual é o seu nome? 😊',
    'Olá, Henrique! 😊<br>Em que posso te ajudar hoje?<br>Você gostaria de agendar um serviço ou saber mais sobre o que oferecemos?',
    'Perfeito, Henrique! 😉<br>Para agendarmos, qual é o modelo do seu carro?',
    'Entendido! 😊<br>Temos algumas opções de serviços para o seu Audi A3 <br><br>Lavagem Simples: R$ 30,00 <br>Lavagem Detalhada: R$ 50,00<br>Lavagem Completa: R$ 70,00<br><br>Qual serviço você gostaria de agendar? 😉<br>E qual seria a melhor data e horário para você?',
    ' Ok, Henrique! 😉<br>Qual data e horário você prefere para agendar a lavagem simples do seu Audi A3?',
    'Entendo, Henrique! 😊<br>Para amanhã, terça-feira, 10/06/2025, temos os seguintes horários disponíveis para a lavagem simples do seu Audi A3:<br><br>10:00 - 11:00<br>13:00 - 14:00<br>15:00 - 16:00<br><br>Qual horário fica melhor para você? 😉',
    'Perfeito, Henrique! 😊<br>Então, para confirmar:<br><br>*   Nome: Henrique<br>*   Carro: Audi A3 <br>*   Serviço: Lavagem Simples <br>*   Data e Horário: Terça-feira, 10/06/2025, às 16:00<br><br>Podemos confirmar o agendamento? 😉',
    'Agendamento confirmado, Henrique! 😊 Agradecemos a preferência! 😉']

function Mecanico(){
    document.getElementById('chat_section').style.backgroundImage = 'url(mecanica.png)'
    botao_mecanica.style.backgroundColor = '#1A292B'
    botao_restaurante.style.backgroundColor = 'transparent'
    botao_odonto.style.backgroundColor = 'transparent'
    botao_lavajato.style.backgroundColor = 'transparent'
}
function Restaurante(){
    document.getElementById('chat_section').style.backgroundImage = 'url(restaurante.png)'
    botao_mecanica.style.backgroundColor = 'transparent'
    botao_restaurante.style.backgroundColor = '#C22C27'
    botao_odonto.style.backgroundColor = 'transparent'
    botao_lavajato.style.backgroundColor = 'transparent'
}
function LavaJato(){
    document.getElementById('chat_section').style.backgroundImage = 'url(lavajato.png)'
    botao_mecanica.style.backgroundColor = 'transparent'
    botao_restaurante.style.backgroundColor = 'transparent'
    botao_odonto.style.backgroundColor = 'transparent'
    botao_lavajato.style.backgroundColor = '#53696D'

    chat__mensages__mensages.innerHTML = '';

    animarContador(0.0125328)
    for (let i = 0; i < user_mensages_lava_jato.length; i++) {
        setTimeout(() => MensagemUser(user_mensages_lava_jato[i]), i * 2000);
        setTimeout(() => MensagemBot(bot_mensages_lava_jato[i]), (i * 2000) + 500);
    }
        
}
function Odontologia(){
    document.getElementById('chat_section').style.backgroundImage = 'url(odonto.png)'
    botao_mecanica.style.backgroundColor = 'transparent'
    botao_restaurante.style.backgroundColor = 'transparent'
    botao_odonto.style.backgroundColor = '#47616B'
    botao_lavajato.style.backgroundColor = 'transparent'
}

function MensagemBot(text_content){
    const div = document.createElement('div');
    div.classList.add('mensage_bot', 'mensage');

    const span = document.createElement('span');
    span.innerHTML  = text_content;
    div.appendChild(span);
    chat__mensages__mensages.appendChild(div);

    chat__mensages__mensages.scrollTop = chat__mensages__mensages.scrollHeight;
}

function MensagemUser(text_content){
        const div = document.createElement('div');
    div.classList.add('mensage_user', 'mensage');

    const span = document.createElement('span');
    span.innerHTML  = text_content;
    div.appendChild(span);
    chat__mensages__mensages.appendChild(div);

    chat__mensages__mensages.scrollTop = chat__mensages__mensages.scrollHeight;
}

function animarContador(valorFinal, duracao = 14000) {
    let valorAtual = 0;
    const elemento = document.getElementById('cost')
    const inicio = performance.now();

    function atualizarContador(timestamp) {
        const tempoDecorrido = timestamp - inicio;
        const progresso = Math.min(tempoDecorrido / duracao, 1);
        valorAtual = (progresso * valorFinal);
        elemento.textContent = `U$ ${valorAtual}`;

        if (progresso < 1) {
            requestAnimationFrame(atualizarContador);
        }
    }

    requestAnimationFrame(atualizarContador);
}