<template>
    <div class="container">
        <top-header />
        <router-view />
        <navigation :init-form-fields="getFormFields"
                    :init-fields="getFields"
                    :init-area-list="getAreaList" />
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    import TopHeader from './components/TopHeader';
    import Navigation from './components/Navigation';
    export default {
        components:{
            TopHeader,
            Navigation
        },
        methods:{
            ...mapActions([
                'fetchConfig'
            ]),
        },
        computed:{
            ...mapGetters([
                'isConfLoaded',
                'getFormFields',
                'getFields',
                'getRegionList',
                'getAreaList',
            ])
        },
        beforeRouteUpdate (to, from, next)
        {
            console.log('beforeRouteUpdate route: to',to, 'from', from);
            this.fetchConfig(to.name);
            next();
        },
        beforeRouteEnter(to, from, next)
        {
            next(vm=>{
                console.log('beforeRouteEnter route: to',to, 'from', from);
                vm.fetchConfig(to.name);
            });
        },
        beforeRouteLeave(to, from, next)
        {
            next();
        },
        created(){

        },
        mounted()
        {
            this.fetchConfig(this.$route.name);
        }
    }
</script>