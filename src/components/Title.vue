<template>
  <div id="title">
    <font-awesome-icon icon="calendar-day" class="title-icon" />
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    name: String
  }
}
</script>

<style lang="scss">
@import '@/assets/style.scss';
</style>
