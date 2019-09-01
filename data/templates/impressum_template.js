const { tmg } = require('../impressum/tmg');
const { inhalte } = require('../impressum/inhalte');
const { links } = require('../impressum/links');
const { urheberrecht } = require('../impressum/urheberrecht');
exports.impressum_template = [tmg, inhalte, links, urheberrecht];
