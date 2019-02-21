# Mr.Plex

Coderplex Discord Chat bot, for life.

## Requirements

- NodeJS & NPM/Yarn
- Typescript

## Contributing guide

- First, fork the repository & clone it onto your local device

```sh
  git clone https://github.com/YOUR_USER_NAME/Mr.Plex && cd Mr.Plex
```

- Install required dependencies

  - with yarn

    ```sh
      yarn install
    ```

  - with npm

    ```sh
      npm install
    ```

- Meanwhile, Open [Discord Developer Portal](https://discordapp.com/developers/) and create a new bot

- Copy the bot token and create a new file `.env` at the root of the project folder

- Add a new local env variable `BOT_TOKEN` into `.env`, example:

```dotenv
  BOT_TOKEN=YOUR_TOKEN_HERE
```

- Now you can start building the bot

  - with yarn

    ```sh
      yarn run build
    ```

  - with npm

    ```sh
      npm run build
    ```

- In a seperate terminal, you can start the bot

  - with yarn

    ```sh
      yarn run start
    ```

  - with npm

    ```sh
      npm run start
    ```

- Invite the bot to your personal discord server and start hacking!
