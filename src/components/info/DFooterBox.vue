<template>
    <div class="footer__box">
        <img vif :src="require(`@/components/info/assets/${img}.svg`)" alt="">
        <div class="footer__box-text">{{ text }}</div>
    </div>
</template>
  
<script>
export default {
    name: "DFooterBox",
    components: {},
    props: {
        text: String,
        img: String,
    },
    data() {
        return {

        };
    },
    methods: {},
};
</script>
  
<style scoped lang="scss">
.footer__box {
    display: flex;
    align-items: center;
    gap: 18px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;

    color: #989898;
}
</style>
  