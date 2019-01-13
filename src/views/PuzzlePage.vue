<template>
  <div class="puzzle">
    <h1>{{ puzzle.title }}</h1>
    <div v-for="cluesList in puzzle.cluesLists" :key="cluesList.id">
      <h2>{{ cluesList.title }}</h2>
      <ol>
        <li v-for="clue in cluesList.clues" :key="clue.number" :value="clue.number">{{ clue.text }}</li>
      </ol>
    </div>
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
