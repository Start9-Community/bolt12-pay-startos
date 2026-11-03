import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.20:0',

  releaseNotes: {
    en_US: `BOLT12 Pay 0.3.20 — Five-Language Release

- Full interface support for English, German, Spanish, French and Polish.
- Translate Pay, Console, Setup, Login, public payment pages and aliases.
- Switch languages without losing entered values or the current payment context.
- Update Android Companion to v1.0.1 with native per-app language selection.
- Fix the initial Pay QR code to show the configured address or active offer.
- Improve mobile payment-target editing and touch-to-copy.
- Refine language selectors and show the application version on Pay.

No manual migration required. Existing application data is preserved. LNDK remains unchanged.`,

    de_DE: `BOLT12 Pay 0.3.20 — Fünfsprachige Benutzeroberfläche

- Vollständige Oberfläche auf Deutsch, Englisch, Spanisch, Französisch und Polnisch.
- Übersetzungen für Pay, Console, Setup, Login, öffentliche Zahlungsseiten und Aliase.
- Sprachwechsel ohne Verlust eingegebener Werte oder des aktuellen Zahlungskontexts.
- Android Companion v1.0.1 mit eigener Sprachwahl pro App.
- Korrektur des anfänglichen Pay-QR-Codes: konfigurierte Adresse oder aktives Offer.
- Verbesserte Bearbeitung und Kopierfunktion für Zahlungsziele auf Mobilgeräten.
- Einheitlichere Sprachauswahl und Versionsanzeige auf der Pay-Seite.

Keine manuelle Migration erforderlich. Bestehende App-Daten bleiben erhalten. LNDK bleibt unverändert.`,

    es_ES: `BOLT12 Pay 0.3.20 — Interfaz en cinco idiomas

- Interfaz completa en inglés, alemán, español, francés y polaco.
- Traducciones de Pay, Console, configuración, inicio de sesión, páginas públicas y alias.
- Cambio de idioma sin perder los datos introducidos ni el contexto del pago.
- Android Companion v1.0.1 con selección de idioma independiente para la aplicación.
- Corrección del QR inicial de Pay: muestra la dirección configurada o la oferta activa.
- Mejor edición y copia de destinos de pago en dispositivos móviles.
- Selector de idioma refinado y versión visible en la página Pay.

No se requiere migración manual. Se conservan los datos existentes. LNDK permanece sin cambios.`,

    fr_FR: `BOLT12 Pay 0.3.20 — Interface en cinq langues

- Interface complète en anglais, allemand, espagnol, français et polonais.
- Traduction de Pay, Console, configuration, connexion, pages publiques et alias.
- Changement de langue sans perdre les saisies ni le contexte du paiement.
- Android Companion v1.0.1 avec choix de la langue propre à l'application.
- Correction du QR initial de Pay : adresse configurée ou offre active.
- Amélioration de la modification et de la copie des destinations sur mobile.
- Sélecteur de langue affiné et version affichée sur la page Pay.

Aucune migration manuelle requise. Les données existantes sont conservées. LNDK reste inchangé.`,

    pl_PL: `BOLT12 Pay 0.3.20 — Interfejs w pięciu językach

- Pełny interfejs w języku angielskim, niemieckim, hiszpańskim, francuskim i polskim.
- Tłumaczenia Pay, Console, konfiguracji, logowania, stron publicznych i aliasów.
- Zmiana języka bez utraty wpisanych danych ani kontekstu płatności.
- Android Companion v1.0.1 z niezależnym wyborem języka aplikacji.
- Poprawka początkowego kodu QR Pay: skonfigurowany adres lub aktywna oferta.
- Lepsza edycja i kopiowanie danych płatności na urządzeniach mobilnych.
- Udoskonalony wybór języka i numer wersji na stronie Pay.

Ręczna migracja nie jest wymagana. Istniejące dane zostają zachowane. LNDK pozostaje bez zmian.`,
  },

  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
