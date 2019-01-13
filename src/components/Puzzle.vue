<template>
  <div class="puzzleWrapper" :style="wrapperStyleObject">
    <div class="puzzle" :style="styleObject">
      <PuzzleCell v-for="cell in puzzle.cells" :key="cell.x + ',' + cell.y" :cell="cell"></PuzzleCell>
    </div>
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
  computed: {
    wrapperStyleObject: function () {
      const width = 30
      const heightToWidthRatio = this.height / this.width
      return {
        width: `${width}%`,
        paddingBottom: `${width * heightToWidthRatio}%`
      }
    },
    styleObject: function () {
      return {
        gridTemplateColumns: `repeat(${this.width}, 1fr)`,
        gridTemplateRows: `repeat(${this.height}, 1fr)`
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
// Wrapper div to force the puzzle into a square shape:
// https://stackoverflow.com/questions/1495407/maintain-the-aspect-ratio-of-a-div-with-css
.puzzleWrapper {
  position: relative;
}
.puzzle {
  display: grid;

  // Stretch the puzzle to fill the wrapper div.
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
}
</style>
