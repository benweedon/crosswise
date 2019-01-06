<template>
  <div class="home">
    <table>
      <PuzzleListItem v-for="puzzle in puzzles" :key="puzzle.id" :puzzle="puzzle"/>
    </table>
  </div>
</template>

<script>
import puzzleGetter from '@/puzzleGetters/puzzleGetter.js'
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
    let twoWeeksAgo = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 14)
    for (let puzzlePromise of puzzleGetter.getPuzzlesInRange(twoWeeksAgo, today)) {
      let vm = this
      puzzlePromise.then(function (puzzle) {
        vm.puzzles.push(puzzle)
      })
    }
  }
}
</script>
