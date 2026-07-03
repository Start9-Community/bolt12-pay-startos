import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.0:2',

  releaseNotes: {
    en_US:
      'Internal updates (start-sdk 2.0.x). Onion messages are now native in LND 0.21, so the one-click Auto-Configure task has been removed and BOLT12 Pay now requires LND 0.21.0-beta or newer.',
    es_ES:
      'Actualizaciones internas (start-sdk 2.0.x). Los mensajes onion ahora son nativos en LND 0.21, por lo que se ha eliminado la tarea de Configuración Automática de un clic y BOLT12 Pay ahora requiere LND 0.21.0-beta o posterior.',
    de_DE:
      'Interne Aktualisierungen (start-sdk 2.0.x). Onion-Nachrichten sind jetzt nativ in LND 0.21 enthalten, daher wurde die Ein-Klick-Aufgabe zur automatischen Konfiguration entfernt und BOLT12 Pay erfordert jetzt LND 0.21.0-beta oder neuer.',
    pl_PL:
      'Aktualizacje wewnętrzne (start-sdk 2.0.x). Wiadomości onion są teraz natywne w LND 0.21, więc jednokliknięciowe zadanie automatycznej konfiguracji zostało usunięte, a BOLT12 Pay wymaga teraz LND 0.21.0-beta lub nowszego.',
    fr_FR:
      'Mises à jour internes (start-sdk 2.0.x). Les messages onion sont désormais natifs dans LND 0.21, la tâche de configuration automatique en un clic a donc été supprimée et BOLT12 Pay nécessite désormais LND 0.21.0-beta ou ultérieur.',
  },

  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
