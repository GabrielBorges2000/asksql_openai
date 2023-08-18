'use client'

import { useState } from 'react'
import { Logo } from "@/assets/logo";
import { Trash2, Stars } from 'lucide-react'

import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-sql';
import 'prismjs/themes/prism-dark.css';

import { useCompletion } from 'ai/react'
import result from 'postcss/lib/result';

export default function Home() {
  const [schema, setSchema] = useState('');

  const { completion, handleSubmit, input, handleInputChange } = useCompletion({
    api: 'api/completion',
    body: {
      schema
    },
  })

  return (
    <div className="max-w-[780px] mx-auto px-4 pt-12 pb-4">

      <header className="flex items-center justify-between">
        <Logo />
        <button type="button">
          <Trash2 className="h-8 w-8 text-snow" strokeWidth={1} />
        </button>
      </header>

      <form onSubmit={handleSubmit} className="py-8 w-full flex flex-col text-foam">
        <label
          htmlFor="schema"
          className="text-lg font-light"
        >
          Cole seu código SQL aqui:
        </label>

        <Editor
          textareaId='schema'
          value={schema}
          onValueChange={code => setSchema(code)}
          highlight={code => highlight(code, languages.sql, 'sql')}
          padding={16}
          textareaClassName='outline-none '
          className="my-4 font-mono h-40 bg-blueberry-600 border border-blueberry-300 rounded-md px-4 py-3 focus-within:ring-2 focus-within:ring-lime-600 "
        />

        <label
          htmlFor="question"
          className="text-lg font-light"
        >
          Faça um apergunta sobre o código:
        </label>
        <textarea
          name="question"
          id="question"
          value={input}
          onChange={handleInputChange}
          className="my-4 bg-blueberry-600 border border-blueberry-300 rounded-md px-4 py-3 outline-none focus:ring-lime-600 focus:ring-2"
        />

        <button type="submit" className="text-pistachio flex items-center justify-center rounded-lg border border-pistachio h-14 gap-2">
          <Stars className="h-6 w-6" />
          Perguntar a inteligência artificial
        </button>

      </form>

      <div className="mt-8">
        <span className="text-lg font-light text-foam">
          Faça um apergunta sobre o código:
        </span>
        <Editor
          readOnly
          value={completion}
          onValueChange={() => { }}
          highlight={code => highlight(code, languages.sql, 'sql')}
          padding={16}
          textareaClassName='outline-none text-foam'
          className="my-4 bg-transparent border border-blueberry-300 rounded-md "
        />
      </div>

    </div>
  )
}
