const { tmg } = require('./impressum/tmg');
const { inhalte } = require('./impressum/inhalte');
const { links } = require('./impressum/links');
const { urheberrecht } = require('./impressum/urheberrecht');
const {
  datenschutzerklaerung,
} = require('./datenschutz/datenschutzerklaerung');
const { verantwortlicher } = require('./datenschutz/verantwortlicher');
const { datenarten } = require('./datenschutz/datenarten');
const { betroffenePersonen } = require('./datenschutz/betroffenePersonen');
const { verarbeitungszweck } = require('./datenschutz/verarbeitungszweck');
const { begrifflichkeiten } = require('./datenschutz/begrifflichkeiten');
const { rechtsgrundlagen } = require('./datenschutz/rechtsgrundlagen');
const { rechteBetroffener } = require('./datenschutz/rechteBetroffener');
const {
  sicherheitsmassnahmen,
} = require('./datenschutz/sicherheitsmassnahmen');
const { auftragsverarbeiter } = require('./datenschutz/auftragsverarbeiter');
const { drittlaender } = require('./datenschutz/drittlaender');
const { widerrufsrecht } = require('./datenschutz/widerrufsrecht');
const { widerspruchsrecht } = require('./datenschutz/widerspruchsrecht');
const { cookiesDirektwerbung } = require('./datenschutz/cookiesDirektwerbung');
const { datenloeschung } = require('./datenschutz/datenloeschung');
const { coaching } = require('./datenschutz/coaching');
const {
  vertraglicheLeistungen,
} = require('./datenschutz/vertraglicheLeistungen');
const {
  zahlungsdienstleister,
} = require('./datenschutz/zahlungsdienstleister');
const { administration } = require('./datenschutz/administration');
const { marktforschung } = require('./datenschutz/marktforschung');
const { registrierfunktion } = require('./datenschutz/registrierfunktion');
const { kommentare } = require('./datenschutz/kommentare');
const { kommentarabos } = require('./datenschutz/kommentarabos');
const { akismet } = require('./datenschutz/akismet');
const { gravatar } = require('./datenschutz/gravatar');
const { emojis } = require('./datenschutz/emojis');
const { flattr } = require('./datenschutz/flattr');
const { kontakt } = require('./datenschutz/kontakt');
const { newsletter } = require('./datenschutz/newsletter');
const { mailchimp } = require('./datenschutz/mailchimp');
const impressum_template = [tmg, inhalte, links, urheberrecht];
const datenschutz_template = [
  datenschutzerklaerung,
  verantwortlicher,
  datenarten,
  betroffenePersonen,
  verarbeitungszweck,
  begrifflichkeiten,
  rechtsgrundlagen,
  sicherheitsmassnahmen,
  auftragsverarbeiter,
  drittlaender,
  rechteBetroffener,
  widerrufsrecht,
  widerspruchsrecht,
  cookiesDirektwerbung,
  datenloeschung,
  coaching,
  vertraglicheLeistungen,
  zahlungsdienstleister,
  administration,
  marktforschung,
  registrierfunktion,
  kommentare,
  kommentarabos,
  akismet,
  gravatar,
  emojis,
  flattr,
  kontakt,
  newsletter,
  mailchimp,
];
exports.impressum = {
  title: impressum_template.map(entry => entry.title),
  content: impressum_template.map(entry => entry.content),
};
exports.datenschutz = {
  title: datenschutz_template.map(entry => entry.title),
  content: datenschutz_template.map(entry => entry.content),
};
