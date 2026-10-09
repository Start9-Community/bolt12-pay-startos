import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.6:0',

  releaseNotes: {
    en_US: `Lightning Activity now displays locally formatted dates and times for incoming and outgoing payments, with German and English support.

Older entries without a valid timestamp display a clear fallback message. The layout supports mobile and desktop.

Existing application data and payment history are preserved. No manual migration is required.`,

    de_DE: `Die Lightning-Aktivität zeigt jetzt lokal formatierte Datums- und Uhrzeitangaben für eingehende und ausgehende Zahlungen auf Deutsch und Englisch.

Ältere Einträge ohne gültigen Zeitstempel zeigen einen verständlichen Hinweis. Die Darstellung unterstützt Mobilgeräte und Desktop.

Bestehende App-Daten und der Zahlungsverlauf bleiben erhalten. Keine manuelle Migration erforderlich.`,

    es_ES: `La actividad Lightning ahora muestra fechas y horas con formato local para pagos entrantes y salientes, con soporte para alemán e inglés.

Las entradas antiguas sin una marca de tiempo válida muestran un mensaje claro. El diseño es compatible con móviles y ordenadores.

Se conservan los datos existentes de la aplicación y el historial de pagos. No se requiere migración manual.`,

    fr_FR: `L'activité Lightning affiche désormais les dates et heures au format local pour les paiements entrants et sortants, en allemand et en anglais.

Les anciennes entrées sans horodatage valide affichent un message clair. L'affichage convient aux appareils mobiles et aux ordinateurs.

Les données existantes de l'application et l'historique des paiements sont conservés. Aucune migration manuelle n'est nécessaire.`,

    pl_PL: `Aktywność Lightning wyświetla teraz daty i godziny w lokalnym formacie dla płatności przychodzących i wychodzących, z obsługą języka niemieckiego i angielskiego.

Starsze wpisy bez prawidłowego znacznika czasu pokazują czytelny komunikat. Układ obsługuje urządzenia mobilne i komputery.

Istniejące dane aplikacji i historia płatności zostają zachowane. Ręczna migracja nie jest wymagana.`,
  },

  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
