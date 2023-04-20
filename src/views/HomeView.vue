<template>
  <div class="home">
    <Info />
    <Stats />
  </div>
</template>

<script>

import Info from '@/components/CInfo.vue'
import Stats from '@/components/CStats.vue'

export default {
  name: 'HomeView',
  components: {
    Info,
    Stats
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  align-items: center;
  gap: 15px;
  height: 100%;
  width: 100%;
}
</style>