import { useEffect } from "react";
import * as Onfido from "onfido-sdk-ui";
// import { init } from 'onfido-sdk-ui'
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    // window.onfidoHandle = Onfido.init({
    //   token: 'eyJhbGciOiJFUzUxMiJ9.eyJleHAiOjE2NzA4NTk3ODUsInBheWxvYWQiOnsiYXBwIjoiYTUxOWVmYjMtYjkzMi00YWM5LTg4YmMtYmRjMmYzMGYyMTcyIiwiY2xpZW50X3V1aWQiOiJjZTY5ZjE4Zi04MDA2LTQyM2QtYWZkYS1mY2FmZjBkZTIxNTQiLCJpc19zYW5kYm94IjpmYWxzZSwiaXNfdHJpYWwiOnRydWUsInJlZiI6Iio6Ly8qLyoiLCJzYXJkaW5lX3Nlc3Npb24iOiI2NGQ4NzYzOC1lZmEyLTQ3NmUtYWQ0MS1jNDFkNjY4ZTVjZWYifSwidXVpZCI6ImJxOVpsZi1uZGNCIiwiZW50ZXJwcmlzZV9mZWF0dXJlcyI6eyJjb2JyYW5kIjp0cnVlLCJsb2dvQ29icmFuZCI6dHJ1ZSwiaGlkZU9uZmlkb0xvZ28iOnRydWUsInVzZUN1c3RvbWl6ZWRBcGlSZXF1ZXN0cyI6dHJ1ZSwiZGlzYWJsZU1vYmlsZVNka0FuYWx5dGljcyI6dHJ1ZX0sInVybHMiOnsiZGV0ZWN0X2RvY3VtZW50X3VybCI6Imh0dHBzOi8vc2RrLm9uZmlkby5jb20iLCJzeW5jX3VybCI6Imh0dHBzOi8vc3luYy5vbmZpZG8uY29tIiwiaG9zdGVkX3Nka191cmwiOiJodHRwczovL2lkLm9uZmlkby5jb20iLCJhdXRoX3VybCI6Imh0dHBzOi8vYXBpLm9uZmlkby5jb20iLCJvbmZpZG9fYXBpX3VybCI6Imh0dHBzOi8vYXBpLm9uZmlkby5jb20iLCJ0ZWxlcGhvbnlfdXJsIjoiaHR0cHM6Ly9hcGkub25maWRvLmNvbSJ9fQ.MIGHAkIBQm9dKVFvZcb4xJ0Tb3t32cy-kKUg5l_SkHG4ZAznl8fCuSCWbhOoCY6coTVP2I2KkhcgU-xlTWWeVfyaOSVEetsCQSe1_4JQbZECURnBFocfNMI7azNKtmdS6PadSc5AfWNpcJB8LX2tir9DUOsXn15mrmJH9m8c6i_TIWzGAU7mjYIc',
    // })
    const onfidoWebSdk = Onfido.init({
      useModal: true,
      // containerId: "idv-modal",
      isModalOpen: true,
      // We need to set `useMemoryHistory` to true so when we press the back button within the SDK, it doesn't mess up with the browser's history
      // See SDK navigation issues section in https://www.npmjs.com/package/onfido-sdk-ui
      useMemoryHistory: true,
      shouldCloseOnOverlayClick: true,
      steps: [
        {
          type: "document",
          options: {
            documentTypes: {
              driving_licence: {
                country: "AUS",
              },

              passport: {
                country: "AUS",
              },
            },
            /**
             * This forces user to capture using their phone. The reason is:
             * - We haven't been approved for upload capabilities per Jack Li's statement on 15 June. (I assumed this was talking about Risk approval)
             * - We can't turn off upload capabilities on desktop in Onfido SDK, this is a fallback for when user doesn't have webcam on their desktop device
             */
            forceCrossDevice: false,
          },
        },
        { type: "face" },
      ],
      token:
        "eyJhbGciOiJFUzUxMiJ9.eyJleHAiOjE2NzA4NjcyNTksInBheWxvYWQiOnsiYXBwIjoiNTQ3ZTY2NTQtNmY3OC00ZTQ5LThmMDItZmUyZTY5ZmNmMDEzIiwiY2xpZW50X3V1aWQiOiJjZTY5ZjE4Zi04MDA2LTQyM2QtYWZkYS1mY2FmZjBkZTIxNTQiLCJpc19zYW5kYm94IjpmYWxzZSwiaXNfdHJpYWwiOnRydWUsInJlZiI6Iio6Ly8qLyoiLCJzYXJkaW5lX3Nlc3Npb24iOiJlMDdhMzQyOS1jMDJiLTRmNTEtOWIxNi05MDVkNThmZGYwZDUifSwidXVpZCI6ImJxOVpsZi1uZGNCIiwiZW50ZXJwcmlzZV9mZWF0dXJlcyI6eyJjb2JyYW5kIjp0cnVlLCJsb2dvQ29icmFuZCI6dHJ1ZSwiaGlkZU9uZmlkb0xvZ28iOnRydWUsInVzZUN1c3RvbWl6ZWRBcGlSZXF1ZXN0cyI6dHJ1ZSwiZGlzYWJsZU1vYmlsZVNka0FuYWx5dGljcyI6dHJ1ZX0sInVybHMiOnsiZGV0ZWN0X2RvY3VtZW50X3VybCI6Imh0dHBzOi8vc2RrLm9uZmlkby5jb20iLCJzeW5jX3VybCI6Imh0dHBzOi8vc3luYy5vbmZpZG8uY29tIiwiaG9zdGVkX3Nka191cmwiOiJodHRwczovL2lkLm9uZmlkby5jb20iLCJhdXRoX3VybCI6Imh0dHBzOi8vYXBpLm9uZmlkby5jb20iLCJvbmZpZG9fYXBpX3VybCI6Imh0dHBzOi8vYXBpLm9uZmlkby5jb20iLCJ0ZWxlcGhvbnlfdXJsIjoiaHR0cHM6Ly9hcGkub25maWRvLmNvbSJ9fQ.MIGHAkIBIl9PTOFOLJkc3UuEtP8aBOlYCHQLEpc6Zo1BvKTc7khEV0PDcpPxKc_qBDlFCAyhwVoKg3alhJu6UjnZQ2rOgPwCQTJV0AiPXowiFKPLrmWFIdUuAlyg-B4Qs6-GDtdqXPVdBcw8h3FX5pmdwQace0hLDeNXUoZY7rQ-0P2LV-eZOx5k",
      onModalRequestClose() {
        console.log("onModalRequestClose");
        // onfidoWebSdk?.setOptions({ isModalOpen: false });
        onfidoWebSdk?.tearDown();
      },
      onComplete: () => {
        console.log("onComplete and do nothing");

        // onfidoWebSdk?.setOptions({ isModalOpen: false });
        console.log("trying to teardown", onfidoWebSdk?.tearDown);
        // setTimeout(() => {
        onfidoWebSdk?.tearDown();
        // }, 1000)
      },
      onUserExit() {
        console.log("onUserExit");
        // onfidoWebSdk?.setOptions({ isModalOpen: false });
        onfidoWebSdk?.tearDown();
      },
    });
  }, []);

  return (
    <div className="App">
      <div id="onfido-mount" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
