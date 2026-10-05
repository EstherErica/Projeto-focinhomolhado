# Focinho Molhado — Plataforma web para ONG de proteção animal

Site institucional da ONG **Focinho Molhado**, que resgata, trata e encaminha cães e gatos para adoção em São Paulo. Projeto da disciplina de Desenvolvimento Front-end.

## Páginas

| Página | Conteúdo |
|---|---|
| `index.html` | Página inicial: missão, visão, valores, indicadores de impacto e contato |
| `sobre.html` | História, conquistas, equipe e transparência |
| `projetos.html` | Projetos sociais com categorias, voluntariado e como doar (campanha com meta e progresso) |
| `cadastro.html` | Formulário de cadastro de voluntário |
| `contato.html` | Telefone, e-mail e formulário de contato |

## Estrutura de pastas

```
projeto-caramelo/
├── index.html
├── sobre.html
├── projetos.html
├── cadastro.html
├── contato.html
├── css/
│   └── style.css      # estilos (mobile-first)
├── js/
│   └── mascaras.js    # máscaras de CPF, telefone e CEP
└── img/               # imagens em .jpg e .webp
```

## Tecnologias e requisitos atendidos

- **HTML5 semântico:** `header`, `nav`, `main`, `section`, `article`, `figure`, `footer`, `address`; hierarquia de títulos h1 → h2 → h3 em todas as páginas.
- **Formulário (cadastro.html):** campos de nome completo, e-mail, CPF, telefone, data de nascimento, endereço, CEP, cidade e estado; tipos HTML5 (`email`, `tel`, `date`); validação nativa (`required`, `pattern`, `minlength`, `min`/`max`); agrupamento com `fieldset`/`legend`; máscaras em JavaScript para CPF, telefone e CEP.
- **Responsividade:** CSS mobile-first com breakpoints em 600px (tablet) e 992px (desktop); imagens fluidas.
- **Desempenho:** imagens otimizadas em JPG e WebP com `<picture>`; `loading="lazy"` nas imagens abaixo da dobra.
- **Acessibilidade:** link "pular para o conteúdo", foco visível para teclado, `alt` em todas as imagens, `label` em todos os campos, contraste de cores adequado (WCAG AA).
- **SEO:** `meta description` e títulos únicos por página.

## Como executar

Abra o arquivo `index.html` no navegador ou acesse a versão publicada no GitHub Pages.

## Autoria

Érica Esther Santos Santana
