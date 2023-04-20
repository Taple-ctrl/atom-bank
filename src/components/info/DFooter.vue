<template>
    <div class="footer">
        <DFooterBox :text="item.text" :img="item.img" v-for="item in footerList" />
    </div>
</template>
  
<script>
export default {
    name: "DFooter",
    components: {},
    props: {
    },
    data() {
        return {
            footerList: [
                {
                    text: 'Setting',
                    img: 'settings'
                },
                {
                    text: 'Log out',
                    img: 'logout'
                },
            ]
        };
    },
    methods: {},
};
</script>
  
<style scoped lang="scss">
.footer {
    width: 100%;
    margin-left: 42px;
    
    display: flex;
    flex-direction: column;
    gap: 32px;
}
</style>
  