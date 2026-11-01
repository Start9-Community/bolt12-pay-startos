import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.19:0',

  releaseNotes: {
    en_US: `BOLT12 Pay 0.3.19 — Lightning Activity and Mobile UX

- Automatically expand and refresh Lightning Activity after successful payments.
- Reuse supported Lightning Addresses, BIP353 addresses, BOLT12 offers, LNURL-pay targets and Keysend pubkeys from payment history.
- Clear the amount and payer note when preparing another payment. Payments are never sent automatically.
- Exclude single-use BOLT11 invoices and technical identifiers from quick repeat payments.
- Prevent unnecessary Android keyboard popups when inserting payment targets from contacts, clipboard, links or history.
- Dismiss the keyboard after successful payments and improve the contacts picker.
- Keep the web interface responsive during BIP353 resolution and LNDK invoice timeouts.

No manual migration required. Existing application data is preserved. LNDK and Android Companion remain unchanged.`,

    de_DE: `BOLT12 Pay 0.3.19 — Lightning Activity und mobile Bedienung

- Lightning Activity nach erfolgreichen Zahlungen automatisch öffnen und aktualisieren.
- Gespeicherte Lightning-Adressen, BIP353-Adressen, BOLT12-Offers, LNURL-pay-Ziele und Keysend-Public-Keys für neue Zahlungen wiederverwenden.
- Betrag und Payer Note bei erneuter Verwendung zurücksetzen. Zahlungen werden niemals automatisch ausgelöst.
- Einmalige BOLT11-Invoices und technische Kennungen von der Wiederverwendung ausschließen.
- Unnötiges Öffnen der Android-Tastatur beim Einfügen aus Kontakten, Zwischenablage, Links oder Verlauf verhindern.
- Tastatur nach erfolgreichen Zahlungen schließen und die Kontaktauswahl verbessern.
- Weboberfläche bleibt während BIP353-Auflösung und LNDK-Invoice-Timeouts bedienbar.

Keine manuelle Datenmigration erforderlich. Bestehende App-Daten bleiben erhalten. LNDK und Android Companion bleiben unverändert.`,

    es_ES: `BOLT12 Pay 0.3.19 — Historial Lightning y experiencia móvil

- Abrir y actualizar automáticamente Lightning Activity después de cada pago correcto.
- Reutilizar direcciones Lightning y BIP353, ofertas BOLT12, destinos LNURL-pay y claves públicas Keysend desde el historial.
- Restablecer el importe y la nota antes de preparar otro pago. Nunca se envían pagos automáticamente.
- Excluir facturas BOLT11 de un solo uso e identificadores técnicos.
- Evitar que el teclado de Android aparezca innecesariamente al insertar destinos desde contactos, portapapeles, enlaces o historial.
- Cerrar el teclado después de pagar y mejorar el selector de contactos.
- Mantener la interfaz disponible durante la resolución BIP353 y los tiempos de espera de LNDK.

No se requiere migración manual. Se conservan los datos existentes. LNDK y Android Companion no cambian.`,

    fr_FR: `BOLT12 Pay 0.3.19 — Activité Lightning et expérience mobile

- Ouvrir et actualiser automatiquement Lightning Activity après un paiement réussi.
- Réutiliser les adresses Lightning et BIP353, les offres BOLT12, les destinations LNURL-pay et les clés publiques Keysend depuis l'historique.
- Réinitialiser le montant et la note avant un nouveau paiement. Aucun paiement automatique.
- Exclure les factures BOLT11 à usage unique et les identifiants techniques.
- Éviter l'ouverture inutile du clavier Android lors de l'insertion depuis les contacts, le presse-papiers, les liens ou l'historique.
- Fermer le clavier après un paiement et améliorer la sélection des contacts.
- Garder l'interface réactive pendant la résolution BIP353 et les délais d'attente LNDK.

Aucune migration manuelle requise. Les données existantes sont conservées. LNDK et Android Companion restent inchangés.`,

    pl_PL: `BOLT12 Pay 0.3.19 — Historia Lightning i wygodniejsza obsługa mobilna

- Automatyczne otwieranie i odświeżanie Lightning Activity po udanych płatnościach.
- Ponowne używanie adresów Lightning i BIP353, ofert BOLT12, celów LNURL-pay oraz kluczy publicznych Keysend z historii.
- Resetowanie kwoty i notatki przed kolejną płatnością. Płatności nigdy nie są wysyłane automatycznie.
- Wykluczenie jednorazowych faktur BOLT11 i identyfikatorów technicznych.
- Zapobieganie niepotrzebnemu otwieraniu klawiatury Androida po wstawieniu danych z kontaktów, schowka, linków lub historii.
- Zamykanie klawiatury po płatności i ulepszony wybór kontaktów.
- Zachowanie responsywności interfejsu podczas rozwiązywania BIP353 i przekroczenia czasu oczekiwania LNDK.

Ręczna migracja nie jest wymagana. Istniejące dane zostają zachowane. LNDK i Android Companion pozostają bez zmian.`,
  },

  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
