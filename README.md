# 📍 Busca CEP

Projeto acadêmico desenvolvido por **Fabio Guimarães**, com o objetivo de criar uma aplicação web simples que permite consultar informações de endereços a partir de um **CEP brasileiro**, utilizando a **API pública ViaCEP**.

---

## 🚀 Funcionalidades

- 🔎 Consulta de CEP em tempo real através da [API ViaCEP](https://viacep.com.br/)
- ⚠️ Validação automática de CEP (somente números e 8 dígitos)
- 🧾 Exibição das informações completas:
  - Logradouro  
  - Bairro  
  - Cidade  
  - Estado (UF)
- 💬 Mensagens de erro personalizadas para:
  - CEP inválido  
  - CEP não encontrado  
  - Falha de conexão
- 📱 Interface responsiva e moderna

---

## 🧠 Como funciona

1. O usuário digita um **CEP** no campo de texto.  
2. Ao clicar em **Buscar**, o JavaScript:
   - Valida o formato do CEP.
   - Consulta a API `https://viacep.com.br/ws/{CEP}/json/`.
   - Exibe os dados retornados de forma organizada.
3. Caso o CEP seja incorreto ou inexistente, são exibidas mensagens de erro informativas.

---

## 🧩 Estrutura do projeto

```
📁 busca-cep/
├── index.html        # Estrutura principal da página
├── css/
│   └── style.css     # Estilos visuais e responsividade
├── js/
│   └── main.js       # Lógica da aplicação e integração com a API ViaCEP
└── image/
    └── favicon.ico   # Ícone da aba do navegador
```

---

## 💻 Como executar

1. Baixe ou clone este repositório:
   ```bash
   git clone https://github.com/fabioguima/busca-cep.git
   ```
2. Abra o arquivo `index.html` diretamente no navegador.  
3. Digite um **CEP válido** (exemplo: `01001000`) e clique em **Buscar**.

---

## ⚙️ Tecnologias utilizadas

- **HTML5**
- **CSS3** (Flexbox e Media Queries)
- **JavaScript (ES6+)**
- **API ViaCEP**

---

## 🖼️ Interface

A interface foi construída com foco na simplicidade e clareza das informações, utilizando uma imagem de fundo e sombras sutis para destacar os elementos.

---

## 📱 Responsividade

O projeto se adapta automaticamente a diferentes tamanhos de tela:
- 🖥️ Computadores
- 📱 Tablets
- 📞 Smartphones

---

## 👨‍💻 Autor

**Fabio Guimarães**  
📚 Projeto acadêmico — *Busca CEP*  
🌐 Site Busca CEP: [https://fabioguima.github.io/Busca-cep/](https://fabioguima.github.io/Busca-cep/)

---

## 📝 Licença

Este projeto é de uso livre para fins educacionais e de aprendizado.
