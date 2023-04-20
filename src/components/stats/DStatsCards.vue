<template>
    <div class="stats__cards">
        <DStatsCard :view="item.view" :money="item.money" :number="item.number" v-for="item in cards" />
        <div class="stats__cards-add">
            <img src="@/components/stats/assets/addCard.svg" alt="">
        </div>
    </div>
</template>
  
<script>
export default {
    name: "DStatsCards",
    components: {},
    props: {
    },
    data() {
        return {
            cards: [
                {
                    view: 0,
                    money: '564.21',
                    number: '4226 3181 8481 4086'
                },
                {
                    view: 1,
                    money: '2,526.21',
                    number: '4226 9560 1772 4398'
                },
            ]
        };
    },
    methods: {},
};
</script>
  
<style scoped lang="scss">
.stats__cards {
    margin-top: 40px;
    margin-bottom: 73px;

    display: flex;
    gap: 24px;

    .stats__cards-add {
        width: 46px;
        height: 188px;

        display: flex;
        align-items: center;
        justify-content: center;

        background: radial-gradient(141.28% 64.17% at 26.57% 19.75%, #494B4E 0%, #1D2027 100%);
        border-radius: 16px;
    }
}
</style>
  