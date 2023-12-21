<script setup lang="ts">

import { ref } from 'vue';

const isFetching = ref(false);
const page = ref(1);
const totalPages = ref(1);

const data = ref<User[]>([]);
const selected = ref<User | null>(null);
const name = ref("");

async function getAsyncData(_name: string) {
    if (name.value !== _name) {
        name.value = _name;
        data.value = [];
        page.value = 1;
        totalPages.value = 1;
    }

    // String cleared
    if (!_name.length) {
        data.value = [];
        page.value = 1;
        totalPages.value = 1;
        return;
    }

    // Reached last page
    if (page.value > totalPages.value) {
        return;
    }

    isFetching.value = true;
    try {
        const _data = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&query=${_name}&page=${page.value}`,
        ).then((response) => response.json());

        data.value = [...data.value, ..._data.results];
        page.value += 1;
        totalPages.value = _data.total_pages;
    } catch (err) {
        console.error(err);
    } finally {
        isFetching.value = false;
    }
}

function getMoreAsyncData() {
    getAsyncData(name.value);
}

</script>
<template>
<div>
        <h1>Search for a Friend</h1>
    </div>
<section>
    <o-field label="Find a Friend">
        <o-autocomplete
            :data="data"
            placeholder="e.g. John Smith"
            field="name"
            :loading="isFetching"
            check-scroll
            open-on-focus
            :debounce="500"
            @input="getAsyncData"
            @select="(option: User) => (selected = option)"
            @scroll-end="getMoreAsyncData">
            <template #default="props">
                <div class="media">
                    <div class="media-left">
                        <img
                            width="32"
                            :src="`https://image.tmdb.org/t/p/w500/${props.option.poster_path}`" />
                    </div>
                    <div class="media-content">
                        {{ props.option.title }}
                        <br />
                        <small>
                            Released at {{ props.option.release_date }},
                            rated
                            <b>{{ props.option.vote_average }}</b>
                        </small>
                    </div>
                </div>
            </template>
            <template v-if="page > totalPages" #footer>
                <span class="ex-text-grey">
                    Thats it! No more users found.
                </span>
            </template>
        </o-autocomplete>
    </o-field>
    <p><b>Selected:</b> {{ selected }}</p>
</section>

</template>