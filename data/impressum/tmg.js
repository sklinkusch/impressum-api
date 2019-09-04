const { address } = require('../address');
const streit =
  'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.';
const fullArray = `${address}\n${streit}`;
exports.tmg = {
  title: 'Angaben gemäß § 5 TMG',
  content: fullArray,
};
