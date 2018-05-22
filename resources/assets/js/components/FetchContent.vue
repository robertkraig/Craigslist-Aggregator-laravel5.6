<template>
    <div id="content-container">
        <div id="link_content">
            <div v-if="!isSearchLoaded">...Loading</div>
            <div v-if="isSearchLoaded">
                <section v-for="dates in getSearchData">
                    <h1 v-html="dates.date"></h1>
                    <div class="date">
                        <article v-for="(records, location) in dates.records">
                            <h2 v-html="location"></h2>
                            <ul class="locationItems">
                                <li v-for="rec in records">
                                    <a class="jobsite" :title="rec.title" target="_blank" :href="rec.link">
                                        <span v-html="rec.title"></span>
                                    </a>
                                </li>
                            </ul>
                        </article>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        computed:{
            ...mapGetters([
                'isSearchLoaded',
                'getSearchData'
            ])
        },
    }
</script>