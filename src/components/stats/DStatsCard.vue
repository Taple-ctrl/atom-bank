<template>
    <div class="stats__card"
        :style="view === 0 ? 'background: radial-gradient(82.23% 108.11% at 101.39% 101.07%, #13C93E 0%, #ADE446 100%)' : 'background: linear-gradient(113.9deg, #FFFFFF 15.02%, #EFEFEF 86.64%);'">
        <div class="stats__card-circle"
            :style="view === 0 ? 'background: white' : 'background: radial-gradient(82.23% 108.11% at 101.39% 101.07%, #13C93E 0%, #ADE446 100%)'">
            <div class="stats__card__circle-point"
                :style="view === 0 ? 'background: radial-gradient(82.23% 108.11% at 101.39% 101.07%, #13C93E 0%, #ADE446 100%)' : 'background: linear-gradient(113.9deg, #FFFFFF 15.02%, #EFEFEF 86.64%);'">
            </div>
        </div>
        <div class="stats__card-filter1"></div>
        <div class="stats__card-filter2"></div>
        <img v-if="view == 0" src="@/components/stats/assets/typeWhite.svg" alt="">
        <img v-else src="@/components/stats/assets/typeBlack.svg" alt="">
        <div class="stats__card-text">
            <div class="stats__card__text-money">
                $ {{ money }}
            </div>
            <div class="stats__card__text-NumberGreeting">
                <div class="stats__card__text__NumberGreeting-number">{{ number }}</div>
                <div class="stats__card__text__NumberGreeting-greeting">Hey Anarda</div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "DStatsCard",
    components: {},
    props: {
        view: Number,
        money: String,
        number: String,
    },
    data() {
        return {

        };
    },
    methods: {},
};
</script>
  
<style scoped lang="scss">
.stats__card {
    position: relative;
    overflow: hidden;
    width: 294px;
    height: 190px;
    padding-left: 30px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 12px;

    border-radius: 20px;

    .stats__card-circle {
        position: absolute;
        right: calc(-137px/3.2);
        top: 15%;
        width: 137px;
        height: 137px;

        border-radius: 100%;
        background-color: white;

        display: flex;
        align-items: center;
        justify-content: center;

        .stats__card__circle-point {
            width: 71px;
            height: 71px;

            border-radius: 100%;

            box-shadow: 0px 6px 12px rgba(123, 123, 123, 0.2);
        }
    }

    .stats__card-filter1 {
        position: absolute;
        left: -212px;
        top: -46px;
        height: 337px;
        width: 400px;
        background: rgba(255, 255, 255, 0.08);
        border-radius: 100%;
    }

    .stats__card-filter2 {
        position: absolute;
        left: -177px;
        top: -46px;
        height: 337px;
        width: 400px;
        background: rgba(255, 255, 255, 0.08);
        border-radius: 100%;
    }

    & img {
        width: 42px;
        height: 13.56px;
    }

    .stats__card-text {
        display: flex;
        flex-direction: column;
        gap: 24px;

        .stats__card__text-money {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 27px;

            color: #1D2027;
        }

        .stats__card__text-NumberGreeting {
            display: flex;
            flex-direction: column;
            gap: 8px;

            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;

            color: #1D2027;

            .stats__card__text__NumberGreeting-number {
                font-size: 16px;
                
            }

            .stats__card__text__NumberGreeting-greeting {
                font-size: 12px;
            }

        }
    }
}
</style>
  