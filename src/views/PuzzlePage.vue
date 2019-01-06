<template>
  <div class="puzzle">
    <p>{{ puzzle.title }}</p>
  </div>
</template>

<script>
import puzzleGetter from '@/puzzleGetters/puzzleGetter.js'

export default {
  name: 'Puzzle',
  data: function () {
    return {
      puzzle: {}
    }
  },
  props: {
    puzzleId: String
  },
  mounted: async function () {
    this.puzzle = await puzzleGetter.getPuzzleById(this.puzzleId)
  }
}
</script>
