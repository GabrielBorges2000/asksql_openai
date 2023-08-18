# AskSQL OpenAI

Esse projeto foi desenvolvido com o objetivo de facilitar o desenvolvimento de aplicações que precisão usar querys sql para acessar informações do banco de dados, porém é necessário ter uma chave de API da OpenAI para utilizar.

# 💻 Pré-requisitos
Antes de começar, verifique se você atende aos seguintes requisitos:

- Versão mais recente do ```Visual Studio Code``` ou IDE da sua preferência.
- Versão mais recente do ```NODE.JS``` e ```NPM```.
- Ter um dispositivo ```Desktop```, ```Android``` ou ```IOS```.

# Como inicar o servidor?

### Clone o repositório e baixe as dependências da seguinte forma:

```
git clone https://github.com/GabrielBorges2000/asksql_openai.git
```
Abra o terminal, acesse a pasta onde está o projeto e execute:

```
npm install
```


no arquivo ```.env.local``` defina as variáveis necessárias para rodas sua aplicação

```
OPENAI_API_KEY='sua-api-key-aqui'
```

No terminal coloque o comando:

```
npm run dev
```

Agora para acessar o servidor, em seu navegador abra o localhost ou acesso pelo IP da sua máquina:

exemplo:

```
http://localhost:3000/
```
ou 
```
http://seu-ip-aqui:3000/
```

caso não saiba como conseguir o endereço ip da sua máquina, abra um terminal e rode o seguinte comando:

```
ipconfig
```

Pronto! Basta realizar as alterações nos arquivos se for necessário ou somente testar a aplicação.

Esse arquivo foi utilizado o Next.js, TypeScript, Tailwindcss, API da OpenAI, server components, prismjs(editor).


## Funcionalidades da Aplicação

- O usuário deve conseguir cadastar a query que contem as colunas no banco da dados.
- O usuário deve conseguir informar a ação que quer realizar.
- O usuário deve conseguir o retorno da AI com a Query SQL que solicitou.

##### Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/GabrielBorges2000">
        <img src="https://avatars.githubusercontent.com/u/112534393?v=4" width="100px;" alt="Foto do Gabriel Borges no GitHub"/><br>
        <sub>
          <b>Gabriel Borges</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

Gostou desse projeto? Deixe um Like!
