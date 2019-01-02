<template>
  <div class="home">
    <table>
      <PuzzleListItem v-for="puzzle in puzzles" :key="puzzle" :src="puzzle"/>
    </table>
  </div>
</template>

<script>
import PuzzleListItem from '@/components/PuzzleListItem.vue'

export default {
  name: 'home',
  components: {
    PuzzleListItem
  },
  data: function () {
    return {
      puzzles: []
    }
  },
  mounted: function () {
    let today = new Date()
    for (let i = 0; i < 14; ++i) {
      let date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i)
      let filename = 'la' + (date.getFullYear() % 100) +
        ('0' + (date.getMonth() + 1)).substr(-2) +
        ('0' + date.getDate()).substr(-2) +
        '.xml'
      this.puzzles.push('http://cdn.games.arkadiumhosted.com/latimes/assets/DailyCrossword/' + filename)
    }
  }
}
</script>
