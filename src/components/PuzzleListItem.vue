<template>
  <tr><td v-if="title">{{ title }}</td></tr>
</template>

<script>
export default {
  name: 'PuzzleListItem',
  data: function () {
    return {
      title: ''
    }
  },
  props: {
    src: String
  },
  mounted: function () {
    let vm = this

    let request = new XMLHttpRequest()
    request.open('GET', this.src, true)
    request.onload = function (e) {
      if (request.readyState === request.DONE) {
        if (request.status === 200) {
          let xml = request.responseXML
          let title = xml.getElementsByTagName('title')[0].textContent
          vm.title = title
        } else {
          console.error(request.statusText)
        }
      }
    }
    request.onerror = function (e) {
      console.error('error')
    }
    request.send()
  }
}
</script>

<style scoped lang="scss">
</style>
