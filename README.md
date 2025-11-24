# WiseAPI - React Native Example

Este é um projeto de exemplo demonstrando o uso da **WiseAPI** em aplicações React Native com Expo.

## Screenshots

- [Android](screenshots/android.png)
- [iOS](screenshots/ios.png)

## Sobre

Este aplicativo demonstra a integração da biblioteca `lib-wiseapi-react-native` para realizar videoconferências utilizando a plataforma WiseAPI.

## Funcionalidades

- Formulário de configuração com campos para:
  - **Domain**: Domínio da conferência
  - **Session**: Identificador da sessão
  - **Session Token**: Token de autenticação da sessão
- Abertura de conferência em tela cheia
- Controles personalizados (câmera, microfone, desligar)
- Logo customizável
- Fechamento automático da conferência

## Pré-requisitos

- Node.js instalado
- Expo CLI
- React Native environment configurado

## Instalação

```bash
npm install
```

## Executar o projeto

```bash
# Iniciar o servidor Expo
npm start

# Executar no Android
npm run android

# Executar no iOS
npm run ios

# Executar na Web
npm run web
```

## Como usar

1. Preencha os campos do formulário:
   - Domain
   - Session
   - Session Token

2. Clique no botão "Abrir Conferência"

3. O componente WiseConf será exibido em tela cheia com a conferência ativa

4. Use os controles para gerenciar câmera, microfone e encerrar a chamada

## Estrutura do Projeto

```
wiseapi-react-native-example/
├── App.tsx                 # Componente principal com formulário e integração WiseConf
├── package.json            # Dependências do projeto
└── README.md              # Este arquivo
```

## Dependências Principais

- **expo**: Framework para desenvolvimento React Native
- **react-native**: Framework mobile
- **lib-wiseapi-react-native**: Biblioteca WiseAPI para videoconferência

## Documentação

Para mais informações sobre a WiseAPI, consulte a documentação oficial.

## Licença

Este é um projeto de exemplo para demonstração.
