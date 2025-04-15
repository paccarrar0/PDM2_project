# 🎵 MelodyMemo

## Sobre o App

**MelodyMemo** é um aplicativo mobile desenvolvido em **React Native** com banco de dados local **SQLite**, voltado para músicos e compositores que desejam **organizar suas produções musicais**. O app permite armazenar e visualizar arquivos como letras, partituras, áudios e imagens relacionados às composições, além de manter um histórico com diferentes versões de cada obra.

### Funcionalidades básicas (prioritárias)

- [ ] Cadastro de composições com:
  - [ ] Título
  - [ ] Upload de letra (.txt, .pdf ou digitada)
  - [ ] Upload de partitura/tablatura (.pdf ou imagem)
  - [ ] Upload de áudio (.mp3, .wav)
  - [ ] Upload de imagem de capa
  - [ ] Anotações
- [ ] Listagem de composições em cards
- [ ] Visualização dos arquivos por tipo (imagem, áudio, PDF/texto)
- [ ] Tela de perfil com:
  - [ ] Nome e imagem de perfil
  - [ ] Estatísticas (quantidade de composições, última criação, etc)
- [ ] Edição de composição e substituição de arquivos
- [ ] Armazenamento local com SQLite
- [ ] Versionamento das composições:
  - [ ] Histórico de versões com data e descrição
  - [ ] Visualização de versões antigas
  - [ ] Tornar versão anterior como ativa

### Funcionalidades adicionais / Trabalhos futuros

- [ ] Busca por título ou tags
- [ ] Filtragem por status (com/sem áudio, letra, partitura)
- [ ] Suporte a modo escuro
- [ ] Compartilhamento de composições
- [ ] Backup/exportação dos dados

---

## Planejamento de Sprints (Cronograma Estendido)

> Previsão de desenvolvimento: **8 semanas**

Cada sprint foca em um conjunto funcional, com espaço para ajustes e testes.

### 🟢 Sprint 1 - Setup e Organização Inicial (semana 1)
- [x] Criar repositório e estrutura base  
- [x] Instalar dependências iniciais (React Native, Navigation, etc.)  
- [x] Organizar pastas (`components`, `screens`, `db`)  
- [x] Definir escopo mínimo do app (documentar no README)  

### 🟢 Sprint 2 - Banco de Dados e Modelagem (semana 2)
- [ ] Configurar SQLite  
- [ ] Criar tabelas: `composicoes`, `usuario`, `versoes`  
- [ ] Esboçar funções de CRUD  
- [ ] Testar escrita/leitura com dados fictícios  

### 🟢 Sprint 3 - Tela de Composições (semana 3)
- [ ] Listagem das composições em cards  
- [ ] Botão para adicionar nova composição  
- [ ] Navegação para tela de detalhes  

### 🟢 Sprint 4 - Visualização e Upload de Arquivos (semana 4)
- [ ] Visualização de:
  - [ ] Áudio (player)
  - [ ] Letra (PDF/texto)
  - [ ] Imagem (partitura/capa)  
- [ ] Upload com DocumentPicker / FileSystem  

### 🟢 Sprint 5 - Criação, Edição e Versionamento (semanas 5 e 6)
- [ ] Formulário para criar/editar composição  
- [ ] Implementar sistema de versões:
  - [ ] Adicionar nova versão  
  - [ ] Ver histórico de versões  
  - [ ] Alternar versão ativa  

### 🟢 Sprint 6 - Tela de Perfil e Estatísticas (semana 7)
- [ ] Exibir nome e imagem de perfil  
- [ ] Permitir edição de dados  
- [ ] Mostrar estatísticas gerais  

### 🟢 Sprint 7 - Testes e Refinamento (semana 8)
- [ ] Ajustes visuais e de navegação  
- [ ] Testes em emuladores e dispositivos reais  
- [ ] Atualizar checklist do README  
- [ ] Documentação e apresentação (se exigido)

---

> ✅ Checklist atualizado em: **15/04/2025**
