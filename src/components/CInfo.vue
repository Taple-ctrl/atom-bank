<template>
    <div class="info">
        <DLogo />
        <DNav />
        <DFooter />
    </div>
</template>
  
<script>
export default {
    name: "Info",
    components: {},
    data() {
        return {};
    },
    methods: {},
};
</script>
  
<style scoped lang="scss">

.info{
    padding:72px 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
    width: 236px;

    background: #FCFCFC;
}

</style>
  