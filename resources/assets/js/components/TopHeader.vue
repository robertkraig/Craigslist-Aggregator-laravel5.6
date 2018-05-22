<template>
    <nav id="header">
        <ul>
            <li v-on:click="setSite('stuff')"><router-link :class="setState('stuff')" :to="{ name: 'stuff' }">Stuff</router-link></li>
            <li v-on:click="setSite('jobs')"><router-link :class="setState('jobs')" :to="{ name: 'jobs' }">Jobs</router-link></li>
            <li v-on:click="setSite('gigs')"><router-link :class="setState('gigs')" :to="{ name: 'gigs' }">Gigs</router-link></li>
            <li v-on:click="setSite('places')"><router-link :class="setState('places')" :to="{ name: 'places' }">Places</router-link></li>
            <li v-on:click="setSite('services')"><router-link :class="setState('services')" :to="{ name: 'services' }">Services</router-link></li>
        </ul>
    </nav>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        props:['site'],
        methods:{
            ...mapActions([
                'fetchConfig'
            ]),
            setState(state)
            {
                return {
                    active:this.site === state,
                    inactive:this.site !== state
                }
            },
            setSite(name)
            {
                this.fetchConfig(name);
            }
        },
        mounted()
        {
            console.log(this);
            this.$store.commit('changeSite', 'jobs');
        }
    }
</script>