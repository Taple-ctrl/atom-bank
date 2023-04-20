<template>
    <div class="nav">
        <DNavBox :show="index" :text="item.text" :img="item.img" v-for="(item, index) in navList"/>
    </div>
</template>
  
<script>
export default {
    name: "DNav",
    components: {},
    data() {
        return {
            navList: [
                {
                    text: 'Dashboard',
                    img: 'Dashboard'
                },
                {
                    text: 'Statistic',
                    img: 'Statistic'
                },
                {
                    text: 'Saving plan',
                    img: 'SavingPlan'
                },
                {
                    text: 'Profil',
                    img: 'Profil'
                }
            ]
        };
    },
    methods: {},
};
</script>
  
<style scoped lang="scss">

.nav{
    width: 100%;
    margin-top: 72px;
    margin-bottom: 362px;

    padding-left: 5px;

    display: flex;
    flex-direction: column;
    gap: 28px;
}

</style>
  