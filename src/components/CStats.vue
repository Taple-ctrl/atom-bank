<template>
    <div class="stats">
        <DStatsInfo />
        <DStatsCards />
        <DCharts />
    </div>
</template>
  
<script>
export default {
    name: "Stats",
    components: {},
    data() {
        return {};
    },
    methods: {},
};
</script>
  
<style scoped lang="scss">
.stats {
    width: 770px;
    height: 829px;
    border-radius: 24px;

    padding: 41px 44px;
}
</style>
  