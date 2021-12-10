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

<style>
#title {
  font-size: 50px;
  font-weight: 800;
  color: #292c6d;
  letter-spacing: -5px;
}
.title-icon {
  margin-right: 1rem;
}
</style>
