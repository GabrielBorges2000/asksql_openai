import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'

export const runtime = 'edge'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  const { schema, prompt } = await req.json()

  const message = `
    O seu trabalho é veririficar o código enviado em qualquer linguagem e realizar a correção, mas as vezes não vou te enviar um Código somente a solicitação, você irá ver isso se o campo de código abaixo estiver vazio ou retornando um código.

    Código:
    """
    ${schema}
    """

    A partir do código acima, escreva o que foi solicitado a partir da solicitação abaixo.
    Me retorne somente o que a solicitação pediu, nada além disso a não ser que eu peça
    ou que seja necessário instalar dependências adicionais no projeto.
    
    Solicitação: ${prompt}
  `.trim()

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [{ role: 'user', content: message }],
  })

  const stream = OpenAIStream(response)

  return new StreamingTextResponse(stream)
}
