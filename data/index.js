const { impressum_template } = require('./templates/impressum_template');
const { datenschutz_template } = require('./templates/datenschutz_template');
exports.impressum = {
  title: impressum_template.map(entry => entry.title),
  content: impressum_template.map(entry => entry.content),
  source: 'Quelle: https://www.e-recht24.de',
};
exports.datenschutz = {
  title: datenschutz_template.map(entry => entry.title),
  content: datenschutz_template.map(entry => entry.content),
};
