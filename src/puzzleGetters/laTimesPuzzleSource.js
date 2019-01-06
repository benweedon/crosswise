import common from './common.js'

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
    let title = xml.getElementsByTagName('title')[0].textContent

    return {
      id: common.getId(this.sourceId, date),
      date: date,
      title: title
    }
  }
}
