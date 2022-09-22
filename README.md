# appstore-backend

<br />
<p align="center">
  <img src="https://avatars.githubusercontent.com/u/96229252?s=200&v=4" alt="logo" width="150px" />
</p>

This is **BackEnd Repository** of **AppStore**, a service for self-diagnosis of separation anxiety that can be used by dogs and humans together.

## Tech Stack

- Typescript
- Nest.js
- Typeorm
- MySQL

## Project Structure

```bash
src
├── app                 # App module
├── core                # controllers
    ├── account         # dto & entity & controller & service & repository
    ├── auth            # dto & entity & controller & service & repository
    ├── calendar        # dto & entity & controller & service & repository
    ├── content         # dto & entity & controller & service & repository
    ├── hospital        # dto & entity & controller & service & repository
    ├── survey          # dto & entity & controller & service & repository
├── global              # config
    ├── config          # config
    ├── entities        # BaseElementEntity
    ├── jwt             # JWT logic
    ├── typeorm         # Typeorm logic
├── utils               # exception logic & logger logic
└── main.ts             # App entry point
```

## Getting Started

### Prerequisites

- Install [Node.js](https://nodejs.org/).
- Refer to the `.mock.env` file and create the `.env` file in the root directory.

### Run

```bash
yarn install
yarn vuild
yarn start:prod
```

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Backend Developing Member

<details>
<summary><b>[ 👨‍👩‍👦‍👦 AppStore Backend Developing Member ]</b> </summary>
<div markdown="1">

<details>
<summary>⌨️ Backend Developer ⌨️</summary>
<div class="Backend-developer">

| ![skmn3](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/81291090?s=400&v=4"?v=4&h=250&w=250&fit=cover&mask=circle&maxage=7d) | ![safethecode](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/59228569?v=4"?v=4&h=250&w=250&fit=cover&mask=circle&maxage=7d) |
| :-------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                         [박상진](https://github.com/skmn3)                                                          |                                                      [손지민](https://github.com/safethecode)                                                       |

</div>
</details>


