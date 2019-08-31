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
exports.impressum = {
  title: [tmg.title, inhalte.title, links.title, urheberrecht.title],
  content: [tmg.content, inhalte.content, links.content, urheberrecht.content],
};
exports.datenschutz = {
  title: [
    datenschutzerklaerung.title,
    verantwortlicher.title,
    datenarten.title,
    betroffenePersonen.title,
    verarbeitungszweck.title,
    begrifflichkeiten.title,
    rechtsgrundlagen.title,
    sicherheitsmassnahmen.title,
    auftragsverarbeiter.title,
    drittlaender.title,
    rechteBetroffener.title,
    widerrufsrecht.title,
    widerspruchsrecht.title,
    cookiesDirektwerbung.title,
  ],
  content: [
    datenschutzerklaerung.content,
    verantwortlicher.content,
    datenarten.content,
    betroffenePersonen.content,
    verarbeitungszweck.content,
    begrifflichkeiten.content,
    rechtsgrundlagen.content,
    sicherheitsmassnahmen.content,
    auftragsverarbeiter.content,
    drittlaender.content,
    rechteBetroffener.content,
    widerrufsrecht.content,
    widerspruchsrecht.content,
    cookiesDirektwerbung.content,
  ],
};
