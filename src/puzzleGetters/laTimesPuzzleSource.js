import common from './common.js'
import crosswordCompilerParser from './parsers/CrosswordCompilerParser.js'

export default {
  sourceId: 'lat',
  getPuzzle: async function (date) {
    let url =
      'http://cdn.games.arkadiumhosted.com/latimes/assets/DailyCrossword/' +
      'la' + (date.getFullYear() % 100) +
      ('0' + (date.getMonth() + 1)).substr(-2) +
      ('0' + date.getDate()).substr(-2) +
      '.xml'

    let xml = await common.getPuzzleXmlData(url)

    return {
      ...common.getBasePuzzleData(this.sourceId, date),
      ...crosswordCompilerParser.parse(xml)
    }
  }
}
