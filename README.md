# 🚀 API Node.js - Projeto de Estudo e Prática

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue.svg)](https://www.typescriptlang.org/)
[![Fastify](https://img.shields.io/badge/Fastify-5.5.0-orange.svg)](https://fastify.io/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

Este é um projeto de estudo e prática de Node.js, onde explorei e implementei uma API REST completa usando diversas bibliotecas modernas. O projeto serve como um laboratório para testar e aprender conceitos fundamentais de desenvolvimento backend.

## 📊 Status do Projeto

![Progresso](https://img.shields.io/badge/Progresso-80%25-brightgreen)
![Última Atualização](https://img.shields.io/badge/Última%20Atualização-Dezembro%202024-blue)

**Status**: ✅ Funcional e em desenvolvimento ativo

## 📋 Sobre o Projeto

Uma API REST para gerenciamento de transações financeiras com:

- ✅ Autenticação por sessão
- ✅ Isolamento de dados por usuário
- ✅ Validação de dados
- ✅ Banco de dados SQLite
- ✅ TypeScript
- ✅ Estrutura modular

## 🛠️ Tecnologias e Bibliotecas

### **Core Dependencies**

#### **Fastify** (`fastify@^5.5.0`)

- **O que é**: Framework web rápido e eficiente para Node.js
- **Por que usar**: Performance superior ao Express, validação nativa, serialização automática
- **Conceito básico**: Framework web é uma estrutura que facilita a criação de servidores HTTP, fornecendo métodos para lidar com rotas, middlewares e requisições/respostas

#### **Knex.js** (`knex@^3.1.0`)

- **O que é**: Query builder SQL para Node.js
- **Por que usar**: Permite escrever queries SQL de forma mais segura e legível, com suporte a migrations
- **Conceito básico**: Query builder é uma ferramenta que permite construir consultas SQL usando métodos JavaScript, evitando SQL injection e tornando o código mais manutenível

#### **SQLite3** (`sqlite3@^5.1.7`)

- **O que é**: Banco de dados relacional leve e embutido
- **Por que usar**: Não requer servidor separado, arquivo único, perfeito para desenvolvimento e projetos pequenos
- **Conceito básico**: Banco de dados é um sistema que armazena e gerencia dados de forma estruturada, permitindo consultas e relacionamentos entre informações

#### **Zod** (`zod@^4.1.5`)

- **O que é**: Biblioteca de validação de esquemas TypeScript-first
- **Por que usar**: Validação em runtime com inferência de tipos, excelente para APIs
- **Conceito básico**: Validação é o processo de verificar se os dados recebidos estão no formato esperado, garantindo integridade e segurança

#### **@fastify/cookie** (`@fastify/cookie@^11.0.2`)

- **O que é**: Plugin do Fastify para gerenciar cookies
- **Por que usar**: Facilita o trabalho com cookies de forma segura e eficiente
- **Conceito básico**: Cookies são pequenos arquivos de texto armazenados no navegador, usados para manter estado entre requisições

#### **dotenv** (`dotenv@^17.2.1`)

- **O que é**: Carregador de variáveis de ambiente de arquivos .env
- **Por que usar**: Separa configurações sensíveis do código, seguindo boas práticas de segurança
- **Conceito básico**: Variáveis de ambiente são configurações que podem mudar entre diferentes ambientes (desenvolvimento, produção, etc.)

### **Dev Dependencies**

#### **TypeScript** (`typescript@^5.9.2`)

- **O que é**: Superset do JavaScript que adiciona tipagem estática
- **Por que usar**: Detecta erros em tempo de compilação, melhor autocomplete, código mais seguro
- **Conceito básico**: Tipagem estática é quando o tipo de uma variável é definido no código e verificado durante a compilação

#### **TSX** (`tsx@^4.20.4`)

- **O que é**: Executor TypeScript para Node.js
- **Por que usar**: Permite executar arquivos TypeScript diretamente sem compilação prévia
- **Conceito básico**: Executor é uma ferramenta que interpreta e executa código em tempo real

#### **ESLint** (`eslint@^8.57.1`)

- **O que é**: Ferramenta de análise estática de código
- **Por que usar**: Encontra e corrige problemas de qualidade de código automaticamente
- **Conceito básico**: Análise estática é a verificação de código sem executá-lo, identificando possíveis problemas

## 🏗️ Estrutura do Projeto

```
api-node/
├── src/
│   ├── @types/           # Definições de tipos TypeScript
│   │   └── knex.d.ts     # Tipos para tabelas do banco
│   ├── middlewares/      # Middlewares personalizados
│   │   └── check-session-id-exists.ts
│   ├── routes/           # Rotas da API
│   │   └── transactions.ts
│   ├── env/              # Configuração de ambiente
│   ├── database.ts       # Configuração do banco
│   └── server.ts         # Servidor principal
├── db/
│   └── migrations/       # Migrações do banco
├── knexfile.ts           # Configuração do Knex
├── tsconfig.json         # Configuração TypeScript
└── package.json          # Dependências e scripts
```

## 📚 Módulo: Criando API REST com Node.js

Este projeto faz parte do curso de Node.js e implementa os seguintes tópicos:

### **Checklist do Módulo**

- [x] **Estrutura da aplicação** - Organização modular e escalável
- [x] **Banco de Dados** - SQLite com Knex.js e migrations
- [x] **Implementando as Rotas** - API REST completa com validação
- [ ] **Testes Automatizados** - Jest e supertest (próximo passo)
- [ ] **Preparando para Deploy** - Configuração de produção

### **Progresso do Curso**

![Progresso do Módulo](https://img.shields.io/badge/Progresso%20do%20Módulo-60%25-yellow)

## 🚀 Como Executar

### **Pré-requisitos**

- Node.js 18+
- npm ou yarn

### **Instalação**

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd api-node

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
```

### **Execução**

```bash
# Desenvolvimento (com hot reload)
npm run dev

# Executar migrações
npm run knex -- migrate:latest

# Linting
npm run lint
```

## 📡 Endpoints da API

### **Transações**

| Método | Endpoint                | Descrição                   | Status |
| ------ | ----------------------- | --------------------------- | ------ |
| `POST` | `/transactions`         | Criar nova transação        | ✅     |
| `GET`  | `/transactions`         | Listar transações da sessão | ✅     |
| `GET`  | `/transactions/:id`     | Buscar transação específica | ✅     |
| `GET`  | `/transactions/summary` | Obter resumo financeiro     | ✅     |

### **Exemplos de Uso**

#### **Criar Transação**

```bash
curl -X POST http://localhost:3000/transactions \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Salário",
    "amount": 5000,
    "type": "credit"
  }'
```

#### **Listar Transações**

```bash
curl http://localhost:3000/transactions
```

#### **Obter Resumo**

```bash
curl http://localhost:3000/transactions/summary
```

## 🔐 Autenticação e Sessões

O projeto implementa um sistema simples de sessões usando cookies:

- **Sessão Automática**: Criada automaticamente na primeira requisição
- **Isolamento**: Cada sessão vê apenas suas próprias transações
- **Persistência**: Cookies duram 7 dias
- **Segurança**: Middleware valida sessão em rotas protegidas

## 🗄️ Banco de Dados

### **Tabela: transactions**

```sql
CREATE TABLE transactions (
  id CHAR(36) PRIMARY KEY,
  title TEXT NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  session_id CHAR(36)
);
```

### **Migrações**

```bash
# Criar nova migração
npm run knex -- make:migration nome_da_migracao

# Executar migrações
npm run knex -- migrate:latest

# Reverter migração
npm run knex -- migrate:rollback
```

## 🧪 Conceitos Implementados

### **1. REST API**

- **O que é**: Arquitetura para APIs web
- **Implementação**: Endpoints seguindo padrões REST
- **Benefícios**: Padronização, escalabilidade, facilidade de uso

### **2. Middleware**

- **O que é**: Função que processa requisições antes de chegar na rota
- **Implementação**: Validação de sessão
- **Benefícios**: Reutilização de código, separação de responsabilidades

### **3. Validação de Dados**

- **O que é**: Verificação de formato e tipos de dados
- **Implementação**: Zod schemas
- **Benefícios**: Segurança, integridade de dados

### **4. Migrations**

- **O que é**: Controle de versão para estrutura do banco
- **Implementação**: Knex migrations
- **Benefícios**: Histórico de mudanças, rollback seguro

### **5. TypeScript**

- **O que é**: JavaScript com tipagem estática
- **Implementação**: Tipos para todas as entidades
- **Benefícios**: Menos bugs, melhor DX

## 🔧 Scripts Disponíveis

```json
{
  "dev": "tsx watch src/server.ts", // Desenvolvimento com hot reload
  "lint": "eslint src --ext .ts --fix", // Linting e correção automática
  "knex": "node --import tsx ./node_modules/.bin/knex" // Comandos do Knex
}
```

## 🚨 Troubleshooting

### **Problemas Comuns**

#### **Erro: "tsx must be loaded with --import instead of --loader"**

```bash
# Solução: Atualizar script no package.json
"knex": "node --import tsx ./node_modules/.bin/knex"
```

#### **Erro: "table transactions already exists"**

```bash
# Solução: Verificar e executar migrações
npm run knex -- migrate:status
npm run knex -- migrate:latest
```

#### **Erro: "Unauthorized" nas rotas GET**

```bash
# Solução: Verificar cookies de sessão
# Faça uma requisição POST primeiro para criar sessão
```

#### **Problemas com TypeScript**

```bash
# Solução: Verificar configuração
npm run lint
npx tsc --noEmit
```

## 📚 Aprendizados

Este projeto serviu para praticar e consolidar conhecimentos em:

- ✅ **Node.js**: Runtime JavaScript server-side
- ✅ **TypeScript**: Tipagem estática e melhor DX
- ✅ **Fastify**: Framework web moderno e performático
- ✅ **Knex.js**: Query builder e migrations
- ✅ **SQLite**: Banco de dados relacional
- ✅ **Zod**: Validação de dados
- ✅ **Cookies**: Gerenciamento de sessão
- ✅ **REST API**: Arquitetura de APIs
- ✅ **Middleware**: Processamento de requisições
- ✅ **Migrations**: Controle de versão do banco

## 🤝 Contribuição

Este é um projeto de estudo, mas sugestões e melhorias são bem-vindas! Sinta-se à vontade para:

- 🐛 Reportar bugs
- 💡 Sugerir melhorias
- 📝 Adicionar documentação
- ⭐ Fazer um fork e experimentar

## 📄 Licença

Este projeto está sob a licença **ISC** (Internet Systems Consortium License).

### **O que a licença ISC permite:**

- ✅ **Usar** o software para qualquer propósito
- ✅ **Copiar** e distribuir o código
- ✅ **Modificar** e criar versões derivadas
- ✅ **Usar comercialmente** sem restrições
- ✅ **Incorporar** em outros projetos

### **O que a licença ISC requer:**

- 📋 Manter o aviso de copyright
- 📋 Incluir o aviso de permissão
- ⚠️ O software é fornecido "como está" sem garantias

### **Por que ISC?**

A licença ISC é uma licença permissiva e simples, muito popular no ecossistema Node.js. Ela é:

- **Compatível** com GPL e outras licenças
- **Simples** de entender e implementar
- **Padrão** para projetos JavaScript/Node.js

Veja o arquivo [LICENSE](LICENSE) para o texto completo da licença.

---

**Desenvolvido com ❤️ para aprender e praticar Node.js**
