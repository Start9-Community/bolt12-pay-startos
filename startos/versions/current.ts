import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.0:2',

  releaseNotes: {
    en_US:
      'Internal updates (start-sdk 2.0.x). BOLT12 Pay continues to support LND 0.20 as well as 0.21 — no need to upgrade LND. Onion messages are native in LND 0.21, so the one-click Auto-Configure task is now shown only on LND 0.20, where it is still required, and disappears once you upgrade.',
    es_ES:
      'Actualizaciones internas (start-sdk 2.0.x). BOLT12 Pay sigue siendo compatible con LND 0.20 además de 0.21: no es necesario actualizar LND. Los mensajes onion son nativos en LND 0.21, por lo que la tarea de Configuración Automática de un clic ahora solo se muestra en LND 0.20, donde sigue siendo necesaria, y desaparece al actualizar.',
    de_DE:
      'Interne Aktualisierungen (start-sdk 2.0.x). BOLT12 Pay unterstützt weiterhin LND 0.20 sowie 0.21 — ein Upgrade von LND ist nicht erforderlich. Onion-Nachrichten sind in LND 0.21 nativ, daher wird die Ein-Klick-Aufgabe zur automatischen Konfiguration jetzt nur noch unter LND 0.20 angezeigt, wo sie weiterhin erforderlich ist, und verschwindet nach dem Upgrade.',
    pl_PL:
      'Aktualizacje wewnętrzne (start-sdk 2.0.x). BOLT12 Pay nadal obsługuje LND 0.20 oraz 0.21 — nie trzeba aktualizować LND. Wiadomości onion są natywne w LND 0.21, więc jednokliknięciowe zadanie automatycznej konfiguracji jest teraz pokazywane tylko w LND 0.20, gdzie nadal jest wymagane, i znika po aktualizacji.',
    fr_FR:
      "Mises à jour internes (start-sdk 2.0.x). BOLT12 Pay continue de prendre en charge LND 0.20 ainsi que 0.21 — inutile de mettre à niveau LND. Les messages onion sont natifs dans LND 0.21, la tâche de configuration automatique en un clic n'est donc désormais affichée que sur LND 0.20, où elle reste nécessaire, et disparaît après la mise à niveau.",
  },

  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
