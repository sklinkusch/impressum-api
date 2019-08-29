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
  ],
  content: [
    datenschutzerklaerung.content,
    verantwortlicher.content,
    datenarten.content,
    betroffenePersonen.content,
    verarbeitungszweck.content,
    begrifflichkeiten.content,
    rechtsgrundlagen.content,
  ],
};
