const { tmg } = require('./impressum/tmg');
const { inhalte } = require('./impressum/inhalte');
const { links } = require('./impressum/links');
const { urheberrecht } = require('./impressum/urheberrecht');
const {
  datenschutzerklaerung,
} = require('./datenschutz/datenschutzerklaerung');
exports.impressum = {
  title: [tmg.title, inhalte.title, links.title, urheberrecht.title],
  content: [tmg.content, inhalte.content, links.content, urheberrecht.content],
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
