// app/api/chat/route.ts

import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'

export const runtime = 'edge'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: Request) {

  const { schema, prompt } = await req.json()

  const message = `
    O seu trabalho é criar queries em SQL a partir  de um schema SQL abaixo.

    Schema SQL:
    """
    ${schema}
    """

    A partir do schema acima, escrema uma query SQL a partir da solicitação abaixo.
    Me retorne somente o código SQL, nada além disso a não ser que eu peça.
    Se eu te fize rum apergunta que não seja enviado o schema sql, 
    quero que você peça somente para enviar a schema e nada além disso.
    As vezes só vai ser enviado as columnas que tem na minha tabela
    ai você pode criar uma query que faça uma chamada para consumir esse banco, 
    mas somente se for solicitado isso a você e nada além disso.

    Solicitação: ${prompt}
  `.trim()

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      { role: 'user', content: message }
    ]
  })

  const stream = OpenAIStream(response)

  return new StreamingTextResponse(stream)
}