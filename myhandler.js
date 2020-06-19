const paper = require('paper-jsdom-canvas');
const xmlserializer = require('xmlserializer');
exports.handler = async (event) => {
    paper.setup(new paper.Size(500, 500));
    const url = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/tiger.svg`
    paper.project.importSVG(url, function(item) {
        const tiger = item
        const svg = tiger.exportSVG()
        const str = xmlserializer.serializeToString(svg);

        console.log(str)
    })
}