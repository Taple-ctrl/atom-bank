<template>
    <div class="stats__info">
        <div class="stats__info-text">
            <div class="stats__info__text-title">Welcome back</div>
            <div class="stats__info__text-name">Anarda</div>
        </div>
        <div class="stats__info-SearchNotify">
            <div class="stats__info__SearchNotify-search">
                <img src="@/components/stats/assets/search.svg" alt="">
                <input type="text" placeholder="Search anything">
            </div>
            <div class="stats__info__SearchNotify-notify">
                <img src="@/components/stats/assets/notify.svg" alt="">
                <div class="stats__info__SearchNotify__notify-count">2</div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "DStatsInfo",
    components: {},
    props: {
    },
    data() {
        return {

        };
    },
    methods: {},
};
</script>
  
<style scoped lang="scss">
.stats__info {
    display: flex;
    gap: 94px;

    .stats__info-text {
        .stats__info__text-title {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;

            color: #47924B;
        }

        .stats__info__text-name {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 27px;

            color: #1D2027;
        }

    }

    .stats__info-SearchNotify {
        display: flex;
        align-items: center;
        gap: 27px;

        .stats__info__SearchNotify-search {
            display: flex;
            align-items: center;
            gap: 12px;

            width: 397px;
            height: 40px;

            padding:0 16px;

            background: #FFF;
            border-radius: 12px;

            & input {
                width: 100%;
                outline: none;
                border: none;
                background-color: rgb(255, 255, 255, 0);
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 500;
                font-size: 12px;

                color: #989898;

                &::placeholder {
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 12px;

                    color: #989898;
                }
            }
        }

        .stats__info__SearchNotify-notify {
            width: 40px;
            height: 40px;

            position: relative;

            display: flex;
            align-items: center;
            justify-content: center;

            background: #FFFFFF;
            border-radius: 100%;

            .stats__info__SearchNotify__notify-count {
                position: absolute;
                right: 8px;
                top: 10px;

                width: 11px;
                height: 11px;

                display: flex;
                align-items: center;
                justify-content: center;

                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 500;
                font-size: 8px;

                color: #FFFFFF;

                border-radius: 100%;

                background: #EB5757;
                border: 2px solid #FFFFFF;
            }
        }
    }
}
</style>
  