import Markdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
/*
plugin markdown all in one

# Titulo 1
## Titulo 2
### Titulo 3
#### Titulo 4

- item1
- item2

1. item 1
2. item 2

`codigo`inline, que fica na linha
```javascript ou bash ou css
console.log("codigo")
	
```
*italico*, _italico_
**negrito**
**_negrito_italico_**
~~sublinhado~~

![descricao da imagem](caminho da imagem.jpg)

Para acessar: [Google](https://www.google.com)

*/

export interface ConteudoMDProps {
	markdown: string
}

export default function ConteudoMD(props: ConteudoMDProps) {
	return (
		<Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} skipHtml={false}>
			{props.markdown}
		</Markdown>
	)
}