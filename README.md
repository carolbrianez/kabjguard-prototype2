# 🚚 KABJ Guard - Prototype 2

Este repositório contém o segundo protótipo (`prototype2`) do *website* institucional da **KABJ Guard**, uma empresa especializada em **monitoramento inteligente e gestão de frotas de caminhões**.

O objetivo deste protótipo é apresentar um *layout* moderno, responsivo e funcional, destacando os serviços e diferenciais da marca, com novas seções interativas e animações controladas por JavaScript.

---

## ✨ Visão Geral do Projeto

O *site* da **KABJ Guard** busca comunicar de forma clara e profissional as soluções tecnológicas oferecidas pela empresa, com foco em segurança, rastreamento e eficiência operacional.

### 🧩 Seções Principais

- **Hero:** Chamada principal com o slogan *“Monitoramento inteligente para sua frota”*.  
- **Sobre:** Apresenta os valores e diferenciais da empresa.  
- **Serviços:** Carrossel interativo exibindo os principais serviços (Rastreamento GPS, Relatórios Detalhados, Proteção contra Roubo, Manutenção Preventiva e Dashboard Inteligente).  
- **A Realidade em Números:** Seção com indicadores estatísticos animados, que se iniciam **somente quando a seção se torna visível**.  
- **Planos e Preços:** Exibe os diferentes planos de rastreamento e monitoramento, com foco em transparência e custo-benefício.  
- **Equipe:** Apresentação dos integrantes do time da KABJ Guard.  
- **Feedbacks:** Carrossel moderno (baseado em Bootstrap) com depoimentos e notas em estrelas de clientes.  
- **Contato:** Formulário simples para envio de mensagens.  

---

## 🧰 Arquivos e Estrutura do Projeto

A estrutura do projeto segue o padrão de um site estático organizado:

````

kabjguard-prototype2/
├── index.html # Estrutura principal do site
├── style.css # Estilização completa do projeto
├── script.js # Lógica de navegação, carrosséis e formulário
├── funcoes.js # Função específica, como a animação dos números
└── assets/ # Imagens e ícones utilizados
├── logo-kabj.png
├── rastreamento.png
├── relatorios-detalhados.png
├── manutencao-preventiva.png
├── dashboard.png
└── ...

````

---

## 🛠️ Tecnologias Utilizadas

O projeto é desenvolvido em **front-end puro**, utilizando:

- **HTML5:** Estrutura e marcação semântica.  
- **CSS3:** Estilização moderna e responsiva.  
- **JavaScript (Vanilla):** Lógica interativa do site.  
- **Bootstrap 5:** Framework para layout responsivo e componentes prontos (carrossel, grid, botões etc).

---

## 💡 Funcionalidades Implementadas

- Carrossel de **Serviços** (personalizado com JavaScript).  
- Carrossel de **Feedbacks** (baseado em Bootstrap).  
- Seção **A Realidade em Números**, com animações ativadas ao rolar a página (via `IntersectionObserver`).  
- Seção **Planos e Preços**, destacando os principais pacotes da empresa.  
- **Layout responsivo**, adaptado para desktop e dispositivos móveis.  
- **Formulário de contato funcional** com alerta de envio.  

---

## 🚀 Como Visualizar o Site

Este projeto é totalmente estático — não requer servidor nem dependências externas.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/carolbrianez/kabjguard-prototype2.git
   
2. **Acesse a pasta do projeto:**
   ```bash
   cd kabjguard-prototype2

3. **Abra o arquivo index.html:** Basta clicar duas vezes no arquivo ou abri-lo diretamente no navegador.

---

## 👥 Equipe A equipe por trás deste protótipo é composta por: 

| Nome | Função no Protótipo | 
| :--- | :--- | 
| **Ana Carolina** | Desenvolvedora Front-end | 
| **Ana Karolina** | Departamento Jurídico | 
| **Gabriel Makiyama** | Engenheiro de Software | 
| **João Victor** | Engenheiro de Software |

---

## 📌 Status do Protótipo 

* **Versão:** Prototype 2
* **Funcionalidades implementadas:** Navegação, Estrutura (Hero, Serviços, Contato), Carrosséis (Serviços e Feedbacks), Seções interativas (Números, Planos e Preços), Layout responsivo e scripts otimizados.

---

## 🌐 Hospedagem Recomendada

Por ser um projeto puramente estático, ele pode ser hospedado facilmente em:

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

---

## 📄 Licença

Este projeto é de uso livre para fins **educativos**, **pessoais** ou **profissionais**.  
Sinta-se à vontade para **adaptar, personalizar e expandir** conforme necessário.

---

## 🙋‍♀️ Sobre

Este projeto foi desenvolvido como uma **demonstração (MVP/Protótipo)** para a **KABJ Guard**,  
destacando seus serviços de **rastreamento e monitoramento de frotas**,  
com foco em **tecnologia, inovação e segurança** para o setor de transporte.

---
