<template>
    <nav id="header">
        <ul>
            <li><router-link :class="setState('stuff')" :to="{ path: '/stuff' }">Stuff</router-link></li>
            <li><router-link :class="setState('jobs')" :to="{ path: '/jobs' }">Jobs</router-link></li>
            <li><router-link :class="setState('gigs')" :to="{ path: '/gigs' }">Gigs</router-link></li>
            <li><router-link :class="setState('places')" :to="{ path: '/places' }">Places</router-link></li>
            <li><router-link :class="setState('services')" :to="{ path: '/services' }">Services</router-link></li>
        </ul>
    </nav>
</template>

<script>

    export default {
        props:['site'],
        methods:{
            setState(state)
            {
                return {
                    active:this.site === state,
                    inactive:this.site !== state
                }
            }
        }
    }
</script>