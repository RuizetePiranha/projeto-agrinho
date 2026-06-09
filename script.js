/**
 * Função principal do Simulador de Atitudes Sustentáveis
 * Calcula e exibe o impacto ecológico com base na escolha do usuário
 */
function calcularImpacto() {
    // Obtém o elemento select do HTML e o valor selecionado
    const selectHabito = document.getElementById('habito');
    const acaoSelecionada = selectHabito.value;
    
    // Obtém a caixinha onde o resultado será exibido
    const painelResultado = document.getElementById('resultado-impacto');

    // Variáveis que vão guardar os textos do nosso resultado
    let mensagemImpacto = "";

    // Estrutura de decisão para verificar qual opção o aluno/usuário escolheu
    switch (acaoSelecionada) {
        case '0':
            mensagemImpacto = "<p style='color: #e11d48;'>Por favor, selecione uma atitude sustentável válida para calcular!</p>";
            break;
            
        case 'banho':
            // Dados baseados em médias de consumo de chuveiros comuns
            const aguaEconomizadaBanho = 45; // 45 litros por banho reduzido
            const aguaAnualBanho = aguaEconomizadaBanho * 365;
            
            mensagemImpacto = `
                <h3>💧 Excelente escolha!</h3>
                <p>Reduzir o banho em 5 minutos economiza cerca de <strong>${aguaEconomizadaBanho} litros</strong> de água limpa por dia.</p>
                <p><em>Impacto a longo prazo:</em> Em um ano, você salvará <strong>${aguaAnualBanho.toLocaleString('pt-BR')} litros</strong> de água. Isso equivale a mais de 70 caixas d'água cheias!</p>
            `;
            break;

        case 'lampada':
            // Dados baseados na eficiência de lâmpadas LED vs Incandescentes
            const reducaoEnergia = 80; // 80% de economia de energia
            const co2EvitadoLampada = 12; // kg de CO2 a menos na atmosfera por ano
            
            mensagemImpacto = `
                <h3>💡 Iluminação Inteligente!</h3>
                <p>As lâmpadas LED consomem até <strong>${reducaoEnergia}% menos energia</strong> que as antigas e duram muito mais.</p>
                <p><em>Impacto a longo prazo:</em> Trocar 3 lâmpadas reduz a emissão de aproximadamente <strong>${co2EvitadoLampada} kg de CO₂</strong> por ano na atmosfera, ajudando a combater o aquecimento global.</p>
            `;
            break;

        case 'sacola':
            // Dados sobre poluição por plásticos de uso único
            const sacolasEvitadas = 6; // média de sacolas por semana
            const sacolasAnuais = sacolasEvitadas * 52;
            
            mensagemImpacto = `
                <h3>🛍️ Adeus ao Plástico!</h3>
                <p>Uma única ecobag (sacola retornável) substitui centenas de sacolas plásticas que levariam mais de 400 anos para se decompor na natureza.</p>
                <p><em>Impacto a longo prazo:</em> Você evitará que cerca de <strong>${sacolasAnuais} sacolinhas plásticas</strong> sejam descartadas no meio ambiente por ano, protegendo rios e oceanos.</p>
            `;
            break;

        case 'reciclar':
            // Dados sobre reciclagem e economia de recursos
            const lixoReduzidoMes = 10; // kg de resíduos triados por mês
            
            mensagemImpacto = `
                <h3>♻️ Ciclo Sustentável Ativado!</h3>
                <p>Separar o lixo reciclável diminui a pressão sobre os aterros sanitários e economiza matéria-prima e energia na indústria.</p>
                <p><em>Impacto a longo prazo:</em> Em um ano, você destinará corretamente cerca de <strong>120 kg de materiais</strong> (papel, plástico, vidro e metal) para cooperativas de reciclagem, gerando renda para famílias de catadores.</p>
            `;
            break;

        default:
            mensagemImpacto = "<p>Ocorreu um erro ao processar a ação. Tente novamente!</p>";
    }

    // Insere o texto gerado dentro do HTML e aplica um efeito visual suave de aparecimento
    painelResultado.innerHTML = mensagemImpacto;
    painelResultado.style.opacity = "0";
    painelResultado.style.transition = "opacity 0.5s ease";
    
    // Pequeno atraso para o efeito visual funcionar perfeitamente
    setTimeout(() => {
        painelResultado.style.opacity = "1";
    }, 50);
}
