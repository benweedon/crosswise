<template>
  <div class="puzzleCell" :class="classObject" :style="styleObject">{{ cell.solution }}</div>
</template>

<script>
export default {
  name: 'PuzzleCell',
  props: {
    cell: Object
  },
  computed: {
    classObject: function () {
      return {
        closedCell: !this.cell.isOpen
      }
    },
    styleObject: function () {
      return {
        gridColumn: `${this.cell.x + 1} / ${this.cell.x + 2}`,
        gridRow: `${this.cell.y + 1} / ${this.cell.y + 2}`
      }
    }
  }
}
</script>

<style scoped lang="scss">
.puzzleCell {
  // Vertically align the cell content.
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  border: 1px black solid;
}
.closedCell {
  background-color: black;
}
</style>
