import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.23:1',

  releaseNotes: {
    en_US: `BOLT12 Pay 0.3.23 — Encrypted Android Payment Notifications

Requires StartOS 0.4.1 or later.

- Optional end-to-end encrypted incoming-payment notifications through UnifiedPush, without Google or Firebase services.
- Signed Android Companion 1.1.3 with direct StartOS pairing, connection status, notification settings and device management.
- Revoke paired devices from BOLT12 Pay or the Companion.
- Optional private comments from supported BOLT12, Lightning Address, LNURL, Keysend and BOLT11 alias-fallback payments. Comments are off by default; secure lock screens show only a generic notification.
- Paired devices and pending notifications survive restarts.
- Public payment-target discovery for supported aliases.
- Pairing in English, German, Spanish, French and Polish.

Android notifications require a public HTTPS address and an installed UnifiedPush distributor. If Android reports a signing-certificate conflict when updating the Companion, uninstall the existing Companion before installing 1.1.3.

BOLT12 Pay now reads only LND's TLS certificate and admin macaroon, and can no longer read LND's seed or other files. Requires LND 0.21.6-beta:3 or later.`,

    de_DE: `BOLT12 Pay 0.3.23 — Verschlüsselte Android-Zahlungsbenachrichtigungen

Erfordert StartOS 0.4.1 oder neuer.

- Optionale Ende-zu-Ende-verschlüsselte Benachrichtigungen über eingehende Zahlungen mit UnifiedPush, ohne Google- oder Firebase-Dienste.
- Signierter Android Companion 1.1.3 mit direkter StartOS-Kopplung, Verbindungsstatus, Benachrichtigungseinstellungen und Geräteverwaltung.
- Gekoppelte Geräte lassen sich über BOLT12 Pay oder den Companion widerrufen.
- Optionale private Kommentare aus unterstützten BOLT12-, Lightning-Address-, LNURL-, Keysend- und BOLT11-Alias-Fallback-Zahlungen. Kommentare sind standardmäßig deaktiviert; gesperrte Bildschirme zeigen nur eine allgemeine Benachrichtigung.
- Gekoppelte Geräte und ausstehende Benachrichtigungen bleiben bei Neustarts erhalten.
- Öffentliche Zahlungsziel-Erkennung für unterstützte Aliase.
- Kopplung auf Deutsch, Englisch, Spanisch, Französisch und Polnisch.

Für Android-Benachrichtigungen werden eine öffentliche HTTPS-Adresse und ein installierter UnifiedPush-Verteiler benötigt. Wenn Android beim Aktualisieren des Companion einen Signaturzertifikatskonflikt meldet, deinstallieren Sie den vorhandenen Companion vor der Installation von 1.1.3.

BOLT12 Pay liest jetzt nur noch das TLS-Zertifikat und das Admin-Macaroon von LND und kann den Seed und andere Dateien von LND nicht mehr lesen. Erfordert LND 0.21.6-beta:3 oder neuer.`,

    es_ES: `BOLT12 Pay 0.3.23 — Notificaciones de pagos cifradas en Android

Requiere StartOS 0.4.1 o posterior.

- Notificaciones opcionales de pagos recibidos con cifrado de extremo a extremo mediante UnifiedPush, sin servicios de Google ni Firebase.
- Android Companion 1.1.3 firmado con emparejamiento directo para StartOS, estado de conexión, ajustes de notificaciones y gestión de dispositivos.
- Revocación de dispositivos emparejados desde BOLT12 Pay o el Companion.
- Comentarios privados opcionales de pagos BOLT12, Lightning Address, LNURL, Keysend y respaldos de alias BOLT11 compatibles. Los comentarios están desactivados por defecto; las pantallas bloqueadas solo muestran una notificación genérica.
- Los dispositivos emparejados y las notificaciones pendientes se conservan tras reinicios.
- Descubrimiento público de destinos de pago para alias compatibles.
- Emparejamiento en inglés, alemán, español, francés y polaco.

Las notificaciones de Android requieren una dirección HTTPS pública y un distribuidor UnifiedPush instalado. Si Android indica un conflicto de certificados de firma al actualizar el Companion, desinstale el Companion existente antes de instalar la versión 1.1.3.

BOLT12 Pay ahora lee solo el certificado TLS y el macaroon de administrador de LND, y ya no puede leer la semilla ni otros archivos de LND. Requiere LND 0.21.6-beta:3 o posterior.`,

    fr_FR: `BOLT12 Pay 0.3.23 — Notifications de paiement Android chiffrées

Nécessite StartOS 0.4.1 ou ultérieur.

- Notifications facultatives de paiements entrants chiffrées de bout en bout via UnifiedPush, sans service Google ni Firebase.
- Android Companion 1.1.3 signé avec association directe pour StartOS, état de connexion, paramètres de notification et gestion des appareils.
- Révocation des appareils associés depuis BOLT12 Pay ou le Companion.
- Commentaires privés facultatifs issus des paiements BOLT12, Lightning Address, LNURL, Keysend et des replis d’alias BOLT11 pris en charge. Les commentaires sont désactivés par défaut ; les écrans verrouillés n’affichent qu’une notification générique.
- Les appareils associés et les notifications en attente sont conservés après redémarrage.
- Découverte publique des destinations de paiement pour les alias pris en charge.
- Association en anglais, allemand, espagnol, français et polonais.

Les notifications Android nécessitent une adresse HTTPS publique et un distributeur UnifiedPush installé. Si Android signale un conflit de certificats de signature lors de la mise à jour du Companion, désinstallez le Companion existant avant d’installer la version 1.1.3.

BOLT12 Pay ne lit désormais que le certificat TLS et le macaron administrateur de LND, et ne peut plus lire la seed ni les autres fichiers de LND. Nécessite LND 0.21.6-beta:3 ou ultérieur.`,

    pl_PL: `BOLT12 Pay 0.3.23 — Szyfrowane powiadomienia o płatnościach na Androidzie

Wymaga StartOS 0.4.1 lub nowszego.

- Opcjonalne, kompleksowo szyfrowane powiadomienia o przychodzących płatnościach przez UnifiedPush, bez usług Google ani Firebase.
- Podpisany Android Companion 1.1.3 z bezpośrednim parowaniem dla StartOS, stanem połączenia, ustawieniami powiadomień i zarządzaniem urządzeniami.
- Odwoływanie sparowanych urządzeń z BOLT12 Pay lub Companiona.
- Opcjonalne prywatne komentarze z obsługiwanych płatności BOLT12, Lightning Address, LNURL, Keysend i zapasowych faktur aliasów BOLT11. Komentarze są domyślnie wyłączone; zablokowany ekran pokazuje tylko ogólne powiadomienie.
- Sparowane urządzenia i oczekujące powiadomienia zostają zachowane po restarcie.
- Publiczne wykrywanie celów płatności dla obsługiwanych aliasów.
- Parowanie w języku angielskim, niemieckim, hiszpańskim, francuskim i polskim.

Powiadomienia na Androidzie wymagają publicznego adresu HTTPS i zainstalowanego dystrybutora UnifiedPush. Jeśli Android zgłosi konflikt certyfikatów podpisu podczas aktualizacji Companiona, odinstaluj istniejącego Companiona przed instalacją wersji 1.1.3.

BOLT12 Pay odczytuje teraz tylko certyfikat TLS i macaroon administratora LND i nie może już odczytać seeda ani innych plików LND. Wymaga LND 0.21.6-beta:3 lub nowszego.`,
  },

  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
