import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.24:0',

  releaseNotes: {
    en_US: `BOLT12 Pay 0.3.24 — Wallet UX and PWA improvements

Requires StartOS 0.4.1 or later and LND 0.21.6-beta:3 or later.

- Live notifications for incoming payments in the Pay interface, including amount, payment type and optional comment.
- Tap or click satoshi amounts in Lightning Activity to copy the numeric value.
- Improved PWA cache versioning and update handling.
- Android Companion 1.1.3 and encrypted UnifiedPush notifications remain unchanged.
- LND access remains restricted to its TLS certificate and admin macaroon. LNDK remains unchanged.

No manual migration required.`,

    de_DE: `BOLT12 Pay 0.3.24 — Verbesserungen für Wallet und PWA

Erfordert StartOS 0.4.1 oder neuer und LND 0.21.6-beta:3 oder neuer.

- Live-Benachrichtigungen über eingehende Zahlungen in der Pay-Oberfläche mit Betrag, Zahlungsart und optionalem Kommentar.
- Satoshi-Beträge in Lightning Activity lassen sich durch Antippen oder Anklicken als Zahlenwert kopieren.
- Verbesserte PWA-Cache-Versionierung und Aktualisierung.
- Android Companion 1.1.3 und verschlüsselte UnifiedPush-Benachrichtigungen bleiben unverändert.
- Der LND-Zugriff bleibt auf TLS-Zertifikat und Admin-Macaroon beschränkt. LNDK bleibt unverändert.

Keine manuelle Migration erforderlich.`,

    es_ES: `BOLT12 Pay 0.3.24 — Mejoras de la cartera y la PWA

Requiere StartOS 0.4.1 o posterior y LND 0.21.6-beta:3 o posterior.

- Notificaciones en tiempo real de pagos recibidos en la interfaz Pay, con importe, tipo de pago y comentario opcional.
- Toca o haz clic en los importes en satoshis de Lightning Activity para copiar su valor numérico.
- Mejoras en la versión de caché y las actualizaciones de la PWA.
- Android Companion 1.1.3 y las notificaciones cifradas de UnifiedPush permanecen sin cambios.
- El acceso a LND sigue limitado al certificado TLS y al macaroon de administrador. LNDK no cambia.

No se requiere migración manual.`,

    fr_FR: `BOLT12 Pay 0.3.24 — Améliorations du portefeuille et de la PWA

Nécessite StartOS 0.4.1 ou ultérieur et LND 0.21.6-beta:3 ou ultérieur.

- Notifications en direct des paiements entrants dans l'interface Pay, avec montant, type de paiement et commentaire facultatif.
- Touchez ou cliquez sur les montants en satoshis dans Lightning Activity pour copier leur valeur numérique.
- Amélioration du versionnement du cache et des mises à jour de la PWA.
- Android Companion 1.1.3 et les notifications UnifiedPush chiffrées restent inchangés.
- L'accès à LND reste limité au certificat TLS et au macaron administrateur. LNDK reste inchangé.

Aucune migration manuelle nécessaire.`,

    pl_PL: `BOLT12 Pay 0.3.24 — Ulepszenia portfela i PWA

Wymaga StartOS 0.4.1 lub nowszego oraz LND 0.21.6-beta:3 lub nowszego.

- Powiadomienia na żywo o przychodzących płatnościach w interfejsie Pay, zawierające kwotę, typ płatności i opcjonalny komentarz.
- Dotknięcie lub kliknięcie kwoty w satoshi w Lightning Activity kopiuje jej wartość liczbową.
- Ulepszone wersjonowanie pamięci podręcznej i aktualizacje PWA.
- Android Companion 1.1.3 i szyfrowane powiadomienia UnifiedPush pozostają bez zmian.
- Dostęp do LND pozostaje ograniczony do certyfikatu TLS i macaroonu administratora. LNDK pozostaje bez zmian.

Nie jest wymagana ręczna migracja.`,
  },

  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
