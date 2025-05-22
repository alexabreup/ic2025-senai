# Usando o Obsidian como CMS para o Blog

Este documento explica como configurar e usar o Obsidian como um CMS (Content Management System) para o blog do projeto IC2025-SENAI.

## Configuração Inicial

1. Instale o [Obsidian](https://obsidian.md/) em seu computador.
2. Abra o Obsidian e escolha "Abrir pasta como cofre" (Open folder as vault).
3. Selecione a pasta raiz do projeto (`ic2025-senai-main/flyback-project`).

## Configurando o Obsidian

### Configurações Gerais

1. Clique no ícone de engrenagem no canto inferior esquerdo para abrir as Configurações.
2. Em "Arquivos e Links" (Files & Links):
   - Defina "Local padrão para novos anexos" (Default location for new attachments) para "Na pasta especificada abaixo" (In the folder specified below).
   - Especifique o caminho como `public/attachments`.
   - Defina "Formato do novo link" (New link format) para "Relativo ao arquivo" (Relative to file).

### Plugins Recomendados

1. Instale o plugin "Paste image rename" da comunidade:
   - Vá para Configurações > Plugins da comunidade > Procurar
   - Pesquise por "Paste image rename"
   - Instale e ative o plugin
   - Configure-o para renomear imagens automaticamente com um formato adequado (sem espaços)

## Escrevendo Posts

### Estrutura do Frontmatter

Cada post deve começar com um frontmatter em formato YAML:

```yaml
---
title: Título do Post
date: YYYY-MM-DD
excerpt: Breve descrição do post que aparecerá na página de listagem
---
```

### Imagens

Para adicionar imagens ao seu post:

1. Copie uma imagem para a área de transferência (Ctrl+C).
2. Cole a imagem diretamente no editor Obsidian (Ctrl+V).
3. O Obsidian irá:
   - Salvar a imagem na pasta `public/attachments`
   - Inserir automaticamente um link para a imagem no formato `![[nome-da-imagem.png]]`

O sistema converterá automaticamente esses links para o formato correto quando o site for renderizado.

### Links Internos

Para criar links para outros posts:

1. Use a sintaxe `[[nome-do-arquivo]]` (sem a extensão .md).
2. O sistema converterá automaticamente esses links para o formato correto.

## Observações Importantes

- O Obsidian remove as aspas do frontmatter, mas o sistema foi adaptado para lidar com isso.
- As imagens coladas serão salvas na pasta `public/attachments` e serão acessíveis no site.
- O sistema converte automaticamente os links no formato wiki do Obsidian para links markdown padrão.

## Fluxo de Trabalho Recomendado

1. Abra o projeto no Obsidian.
2. Crie ou edite posts na pasta `content/blog`.
3. Use a visualização de edição e prévia do Obsidian para ver como o conteúdo ficará.
4. Salve o arquivo quando terminar.
5. Faça o commit e push das alterações para o repositório.
