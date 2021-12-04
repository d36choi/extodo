<template>
  <div id="title">
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
  font-weight: 700;
  color: #292c6d;
}
</style>
