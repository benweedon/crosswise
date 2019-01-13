<template>
  <div class="puzzle" :style="styleObject">
    <PuzzleCell v-for="cell in puzzle.cells" :key="cell.x + ',' + cell.y" :cell="cell"></PuzzleCell>
  </div>
</template>

<script>
import PuzzleCell from '@/components/PuzzleCell.vue'

export default {
  name: 'Puzzle',
  components: {
    PuzzleCell
  },
  props: {
    puzzle: Object
  },
  data: function () {
    return {
      cellSize: 30
    }
  },
  computed: {
    styleObject: function () {
      return {
        gridTemplateColumns: `repeat(${this.width}, 1fr)`,
        gridTemplateRows: `repeat(${this.height}, 1fr)`,
        width: `${this.cellSize * this.width}px`,
        height: `${this.cellSize * this.height}px`
      }
    },
    width: function () {
      let xValues = this.puzzle.cells.map(cell => cell.x)
      let minX = Math.min.apply(null, xValues)
      let maxX = Math.max.apply(null, xValues)
      return maxX - minX + 1
    },
    height: function () {
      let yValues = this.puzzle.cells.map(cell => cell.y)
      let minY = Math.min.apply(null, yValues)
      let maxY = Math.max.apply(null, yValues)
      return maxY - minY + 1
    }
  }
}
</script>

<style scoped lang="scss">
.puzzle {
  display: grid;
}
</style>
