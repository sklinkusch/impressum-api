const { tmg } = require('./impressum/tmg');
const { inhalte } = require('./impressum/inhalte');
const { links } = require('./impressum/links');
const { urheberrecht } = require('./impressum/urheberrecht');
exports.impressum = {
  title: [tmg.title, inhalte.title, links.title, urheberrecht.title],
  content: [tmg.content, inhalte.content, links.content, urheberrecht.content],
};
const datenschutzerklaerung = {
  title: 'Daten­schutz­erklärung',
  content:
    'Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend kurz „Daten“) innerhalb unseres Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und Inhalte sowie externen Onlinepräsenzen, wie z.B. unser Social Media Profile auf (nachfolgend gemeinsam bezeichnet als „Onlineangebot“). Im Hinblick auf die verwendeten Begrifflichkeiten, wie z.B. „Verarbeitung“ oder „Verantwortlicher“ verweisen wir auf die Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO).',
};
const verantwortlicher = {
  title: 'Verantwortlicher',
  content: [
    'Peter R. Stuhlmann',
    'Martha-Arendsee-Str. 10',
    '12681 Berlin',
    'Mobil: +49 1578 5630944',
    'E-Mail: info@peter-stuhlmann.de',
  ],
};
const datenarten = {
  title: 'Arten der verarbeiteten Daten',
  content: [
    'Bestandsdaten (z.B. Namen, Adressen)',
    'Kontaktdaten (z.B. E-Mail, Telefonnummer)',
    'Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos)',
    'Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten)',
    'Meta-/Kommunikationsdaten (z.B. Geräteinformationen, IP-Adressen)',
  ],
};
const betroffenePersonen = {
  title: 'Kategorien betroffener Personen',
  content: `Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen wir die betroffenen Personen zusammenfassend auch als "Nutzer")`,
};
exports.datenschutz = {
  title: [
    datenschutzerklaerung.title,
    verantwortlicher.title,
    datenarten.title,
    betroffenePersonen.title,
  ],
  content: [
    datenschutzerklaerung.content,
    verantwortlicher.content,
    datenarten.content,
    betroffenePersonen.content,
  ],
};
