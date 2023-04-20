<template>
    <div class="nav__box">
        <div v-if="show == 0" class="nav__box-status"></div>
        <div class="nav__box-link" :style="show === 0 ? 'color: #1D2027' : ''">
            <img vif :src="require(`@/components/info/assets/${img}.svg`)" alt="">
            <div class="nav__box__link-text">{{ text }}</div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "DNavBox",
    components: {},
    props: {
        text: String,
        img: String,
        show: Number
    },
    data() {
        return {};
    },
    methods: {},
};
</script>
  
<style scoped lang="scss">
.nav__box {
    position: relative;
    height: 28px;

    .nav__box-status {
        position: absolute;
        width: 8px;
        height: 100%;
        background: radial-gradient(82.23% 108.11% at 101.39% 101.07%, #13C93E 0%, #ADE446 100%);
        border-radius: 0px 4px 4px 0px;
    }

    .nav__box-link {
        margin-left: 43px;
        display: flex;
        align-items: center;
        gap: 19px;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;

        color: #989898;
    }
}
</style>
  