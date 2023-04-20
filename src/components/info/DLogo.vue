<template>
    <div class="logo">
        <div class="logo-circle">
            <div class="logo__circle-point"></div>
        </div>
        <div class="logo-text">
            <div class="logo__text-atom">
                Atom
            </div>
            <div class="logo__text-bank">
                Bank
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "DLogo",
    components: {},
    data() {
        return {};
    },
    methods: {},
};
</script>
  
<style scoped lang="scss">
.logo {
    display: flex;
    gap: 6px;
    align-items: center;

    .logo-circle {
        width: 36px;
        height: 36px;
        background: #FFFFFF;
        border-radius: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        filter: drop-shadow(0px 8px 16px rgba(25, 102, 55, 0.12));

        .logo__circle-point {
            border-radius: 100%;
            width: 19.38px;
            height: 19.38px;
            background: radial-gradient(82.23% 108.11% at 101.39% 101.07%, #13C93E 0%, #ADE446 100%);
            box-shadow: 0px 6px 12px rgba(123, 123, 123, 0.2);
        }
    }

    .logo-text {
        display: flex;
        align-items: center;
        font-family: 'Montserrat';
        font-style: normal;
        font-size: 21px;

        .logo__text-atom{
            font-weight: 700;
        }
        .logo__text-bank{
            font-weight: 500;
        }
    }
}
</style>
  