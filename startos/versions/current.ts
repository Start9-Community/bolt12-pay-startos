import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.23:0',

  releaseNotes: {
    en_US: `BOLT12 Pay 0.3.23 — Encrypted Android Payment Notifications

- Add optional end-to-end encrypted incoming-payment notifications through UnifiedPush, without requiring Google or Firebase services.
- Include the signed Android Companion 1.1.3 with direct StartOS pairing, clearer connection status, notification settings and device management.
- Securely renew push subscriptions and revoke paired devices from BOLT12 Pay or the Companion.
- Display optional private comments from supported BOLT12, Lightning Address, LNURL, Keysend and BOLT11 alias-fallback payments.
- Keep comments disabled by default, sanitize displayed content and show only a generic notification on secure lock screens.
- Preserve paired devices and pending notifications across restarts, with delivery retries, duplicate protection and invalid-endpoint handling.
- Add public payment-target discovery for supported aliases and improve notification navigation and Pay session reuse.
- Support the pairing workflow in English, German, Spanish, French and Polish.

A public HTTPS address and an installed UnifiedPush distributor are required for Android notifications. No manual migration is required. Existing application data is preserved. LNDK remains unchanged.`,

    de_DE: `BOLT12 Pay 0.3.23 — Verschlüsselte Android-Zahlungsbenachrichtigungen

- Optionale Ende-zu-Ende-verschlüsselte Benachrichtigungen über eingehende Zahlungen mit UnifiedPush, ohne Google- oder Firebase-Dienste.
- Signierter Android Companion 1.1.3 mit direkter StartOS-Kopplung, klarerem Verbindungsstatus, Benachrichtigungseinstellungen und Geräteverwaltung.
- Sichere Erneuerung von Push-Abonnements und Widerruf gekoppelter Geräte über BOLT12 Pay oder den Companion.
- Optionale private Kommentare aus unterstützten BOLT12-, Lightning-Address-, LNURL-, Keysend- und BOLT11-Alias-Fallback-Zahlungen.
- Kommentare sind standardmäßig deaktiviert, werden bereinigt und auf gesperrten Geräten nur als allgemeine Benachrichtigung angezeigt.
- Gekoppelte Geräte und ausstehende Benachrichtigungen bleiben bei Neustarts erhalten; mit Wiederholungsversuchen, Duplikatschutz und Behandlung ungültiger Endpunkte.
- Öffentliche Zahlungsziel-Erkennung für unterstützte Aliase sowie verbesserte Navigation und Wiederverwendung von Pay-Sitzungen.
- Kopplungsablauf auf Deutsch, Englisch, Spanisch, Französisch und Polnisch.

Für Android-Benachrichtigungen werden eine öffentliche HTTPS-Adresse und ein installierter UnifiedPush-Verteiler benötigt. Keine manuelle Migration erforderlich. Bestehende App-Daten bleiben erhalten. LNDK bleibt unverändert.`,

    es_ES: `BOLT12 Pay 0.3.23 — Notificaciones de pagos cifradas en Android

- Notificaciones opcionales de pagos recibidos con cifrado de extremo a extremo mediante UnifiedPush, sin servicios de Google ni Firebase.
- Android Companion 1.1.3 firmado con emparejamiento directo para StartOS, estado de conexión más claro, ajustes de notificaciones y gestión de dispositivos.
- Renovación segura de suscripciones push y revocación de dispositivos desde BOLT12 Pay o el Companion.
- Comentarios privados opcionales de pagos BOLT12, Lightning Address, LNURL, Keysend y respaldos de alias BOLT11 compatibles.
- Los comentarios están desactivados por defecto, se depuran y se sustituyen por una notificación genérica en pantallas bloqueadas.
- Conserva dispositivos emparejados y notificaciones pendientes tras reinicios, con reintentos, protección contra duplicados y gestión de endpoints no válidos.
- Descubrimiento público de destinos de pago para alias compatibles y mejoras en la navegación y reutilización de sesiones Pay.
- Flujo de emparejamiento en inglés, alemán, español, francés y polaco.

Las notificaciones de Android requieren una dirección HTTPS pública y un distribuidor UnifiedPush instalado. No se requiere migración manual. Se conservan los datos existentes. LNDK permanece sin cambios.`,

    fr_FR: `BOLT12 Pay 0.3.23 — Notifications de paiement Android chiffrées

- Notifications facultatives de paiements entrants chiffrées de bout en bout via UnifiedPush, sans service Google ni Firebase.
- Android Companion 1.1.3 signé avec association directe pour StartOS, état de connexion plus clair, paramètres de notification et gestion des appareils.
- Renouvellement sécurisé des abonnements push et révocation des appareils depuis BOLT12 Pay ou le Companion.
- Commentaires privés facultatifs issus des paiements BOLT12, Lightning Address, LNURL, Keysend et des replis d’alias BOLT11 pris en charge.
- Les commentaires sont désactivés par défaut, nettoyés et remplacés par une notification générique sur les écrans verrouillés.
- Conservation des appareils associés et des notifications en attente après redémarrage, avec nouvelles tentatives, déduplication et gestion des endpoints invalides.
- Découverte publique des destinations de paiement pour les alias pris en charge et amélioration de la navigation et de la réutilisation des sessions Pay.
- Parcours d’association en anglais, allemand, espagnol, français et polonais.

Les notifications Android nécessitent une adresse HTTPS publique et un distributeur UnifiedPush installé. Aucune migration manuelle requise. Les données existantes sont conservées. LNDK reste inchangé.`,

    pl_PL: `BOLT12 Pay 0.3.23 — Szyfrowane powiadomienia o płatnościach na Androidzie

- Opcjonalne, kompleksowo szyfrowane powiadomienia o przychodzących płatnościach przez UnifiedPush, bez usług Google ani Firebase.
- Podpisany Android Companion 1.1.3 z bezpośrednim parowaniem dla StartOS, czytelniejszym stanem połączenia, ustawieniami powiadomień i zarządzaniem urządzeniami.
- Bezpieczne odnawianie subskrypcji push i odwoływanie sparowanych urządzeń z BOLT12 Pay lub Companiona.
- Opcjonalne prywatne komentarze z obsługiwanych płatności BOLT12, Lightning Address, LNURL, Keysend i zapasowych faktur aliasów BOLT11.
- Komentarze są domyślnie wyłączone, oczyszczane, a na zablokowanym ekranie zastępowane ogólnym powiadomieniem.
- Zachowanie sparowanych urządzeń i oczekujących powiadomień po restarcie, z ponawianiem wysyłki, ochroną przed duplikatami i obsługą nieprawidłowych endpointów.
- Publiczne wykrywanie celów płatności dla obsługiwanych aliasów oraz ulepszona nawigacja i ponowne używanie sesji Pay.
- Proces parowania w języku angielskim, niemieckim, hiszpańskim, francuskim i polskim.

Powiadomienia na Androidzie wymagają publicznego adresu HTTPS i zainstalowanego dystrybutora UnifiedPush. Ręczna migracja nie jest wymagana. Istniejące dane zostają zachowane. LNDK pozostaje bez zmian.`,
  },

  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
