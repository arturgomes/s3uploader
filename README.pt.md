# S3Uploader

O S3Uploader é uma aplicação construída usando Node.js, MongoDB, Mongoose e AWS S3, projetada para facilitar o armazenamento e a gestão de arquivos na nuvem. Este projeto serve como uma demonstração prática de como integrar essas tecnologias poderosas para criar soluções de armazenamento eficientes e escaláveis.

## Motivação

Este projeto foi desenvolvido como parte do meu processo de aprendizado e experimentação. Com um foco especial em entender melhor as operações de armazenamento na nuvem e como integrá-las em aplicações web modernas, o S3Uploader visa oferecer uma solução eficaz para o gerenciamento de arquivos, garantindo a sincronização entre o MongoDB e o AWS S3.

## Características

- **Armazenamento de Arquivos no AWS S3**: Facilita o upload de arquivos para o AWS S3 diretamente de uma aplicação Node.js.
- **Integração com MongoDB e Mongoose**: Utiliza MongoDB e Mongoose para armazenar e gerenciar os metadados dos arquivos, criando uma experiência de gestão de dados coesa.
- **Remoção Automática**: Implementa um sistema onde os arquivos no S3 são automaticamente removidos quando seus registros correspondentes no MongoDB são deletados, mantendo a integridade dos dados.

## Como Usar

Algumas coisas para levar em consideração:

- Precisa criar um arquivo `.env` com os dados do seu bucket no S3. Eu também incluí aqui um `HOSTNAME` e `PORT`.

```
// .env
HOSTNAME=___
PORT=___
BUCKET_NAME=______
AWS_DEFAULT_REGION=___
STORAGE_TYPE=s3
MONGODB_URL=_____
```

- Você vai usar o AWS CLI para autenticar com sua `AWS_ACCESS_KEY_ID` e `AWS_SECRET_ACCESS_KEY`, obtida lá na sua conta do Console AWS.
- Você também precisa adicionar o `MONGODB_URL` com os detalhes da sua conexão no mongoDB. Localmente, eu uso um container no Docker.

## Contribuições

Contribuições são sempre bem-vindas! Se você tem alguma ideia para melhorar o projeto, sinta-se à vontade para criar uma issue ou enviar um pull request.

## Licença

Não coloquei licença aqui. Pode usar!
