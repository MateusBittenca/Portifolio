# LanguageToggle Component

Um botão moderno e interativo para alternar entre idiomas português e inglês.

## Características

✨ **Design Moderno**: Gradientes, bordas arredondadas e efeitos visuais
🎨 **Animações Fluidas**: Transições suaves com cubic-bezier
📱 **Totalmente Responsivo**: Adapta-se a qualquer tamanho de tela  
🔄 **Feedback Visual**: Animações durante a troca de idioma
♿ **Acessível**: Labels apropriados e foco keyboard-friendly
🌙 **Dark Mode**: Suporte automático para tema escuro
⚡ **Performance**: Otimizado com useCallback e useState

## Variantes Disponíveis

### Default
```jsx
<LanguageToggle />
```
Versão completa com bandeira, texto e indicador.

### Compact
```jsx
<LanguageToggle variant="compact" />
```
Versão menor para espaços limitados.

### Minimal
```jsx
<LanguageToggle variant="minimal" />
```
Apenas a bandeira em formato circular.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `variant` | `'default' \| 'compact' \| 'minimal'` | `'default'` | Variante visual do botão |
| `showIndicator` | `boolean` | `true` | Exibe o indicador de idioma atual |
| `className` | `string` | `''` | Classes CSS adicionais |

## Efeitos Visuais

- **Shimmer Effect**: Brilho que passa pelo botão no hover
- **Scale Animation**: Cresce ligeiramente ao passar o mouse
- **Flag Animation**: Bandeira gira durante a troca
- **Pulse Effect**: Animação sutil contínua
- **Shadow Elevation**: Sombras que crescem no hover

## Uso Avançado

```jsx
// Versão customizada
<LanguageToggle 
  variant="compact"
  showIndicator={false}
  className="my-custom-class"
  style={{ marginLeft: '10px' }}
/>
```

## CSS Classes

- `.language-toggle` - Classe base
- `.language-toggle--compact` - Versão compacta
- `.language-toggle--minimal` - Versão minimal
- `.language-toggle--animating` - Estado durante animação
- `.language-toggle__flag` - Container da bandeira
- `.language-toggle__text` - Container do texto
- `.language-toggle__indicator` - Indicador circular

## Estados

- **Normal**: Estado padrão
- **Hover**: Efeitos visuais intensificados  
- **Active**: Feedback de clique
- **Disabled**: Durante animação de troca
- **Focus**: Outline para navegação por teclado

## Responsividade

- **Desktop (>768px)**: Versão completa com todos os efeitos
- **Tablet (768px)**: Versão ligeiramente reduzida  
- **Mobile (480px)**: Versão otimizada para touch

O componente se adapta automaticamente baseado no tamanho da tela!
