import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.5:1',

  releaseNotes: {
    en_US: `- If the chosen primary URL moves to another port, BOLT12 Pay follows it.
- The Set Primary URL task clears itself when the chosen address returns.
- Open UI opens BOLT12 Pay at the chosen primary URL when your connection can reach it.`,

    de_DE: `- Wechselt die gewählte primäre URL auf einen anderen Port, folgt BOLT12 Pay ihr.
- Die Aufgabe „Set Primary URL“ verschwindet von selbst, sobald die gewählte Adresse zurückkehrt.
- „Oberfläche öffnen“ öffnet BOLT12 Pay unter der gewählten primären URL, wenn die Verbindung sie erreichen kann.`,

    es_ES: `- Si la URL principal elegida pasa a otro puerto, BOLT12 Pay la sigue.
- La tarea Set Primary URL se retira sola cuando vuelve la dirección elegida.
- Abrir interfaz abre BOLT12 Pay en la URL principal elegida cuando la conexión puede alcanzarla.`,

    fr_FR: `- Si l'URL principale choisie passe à un autre port, BOLT12 Pay la suit.
- La tâche Set Primary URL disparaît d'elle-même lorsque l'adresse choisie revient.
- Ouvrir l'interface ouvre BOLT12 Pay à l'URL principale choisie lorsque la connexion peut l'atteindre.`,

    pl_PL: `- Jeśli wybrany główny URL przejdzie na inny port, BOLT12 Pay podąża za nim.
- Zadanie „Set Primary URL” znika samo, gdy wybrany adres wróci.
- „Otwórz interfejs” otwiera BOLT12 Pay pod wybranym głównym URL, gdy połączenie może go osiągnąć.`,
  },

  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
