async function buscarCEP(cep) {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();
    return dados;
}

// FUNÇÃO PARA MOSTRAR OS DADOS NA TELA
async function mostrarCEP() {
    const lista = document.getElementById('lista');
    const cepDigitado = document.getElementById('cep').value;

    lista.innerHTML = '<li>Carregando...</li>';

    try {
        // VERIFICA SE O CEP TEM 8 NUMEROS E SOMENTE NÚMEROS
        if (!/^[0-9]{8}$/.test(cepDigitado)) {
            lista.innerHTML = '<li>Digite um CEP válido (8 números).</li>'; // CASO POR MENOS DE 8 NUMEROS!!!
            return;
        }

        const dados = await buscarCEP(cepDigitado); // CHAMA A FUNÇÃO BUSCAR PASSANDO O CEP VALIDO DIGITADO

        // SE O CEP NÃO EXISTIR
        if (dados.erro) {
            lista.innerHTML = '<li>CEP não encontrado.</li>';
            return;
        }

        // MOSTRA OS DADOS NA LISTA
        lista.innerHTML = '';
        const li = document.createElement('li');
        li.innerHTML = `
        ${dados.logradouro}
        <br>Bairro: ${dados.bairro}
        <br>Cidade: ${dados.localidade}
        <br>Estado: ${dados.uf}
        `;

        lista.appendChild(li);

    } catch (erro) {
        lista.innerHTML = '<li>Erro ao carregar dados.</li>'; // CASO A INTERNET FALHE
    }
}

// ADICIONA O EVENTO DE CLICK NO BOTÃO BUSCAR FEITO NO HTML
document.getElementById('buscar').addEventListener('click', mostrarCEP);