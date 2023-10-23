<script setup lang="ts">

</script>

<template>
    <div>
        <h1 class="title">Friend's Activity</h1>
        <div class="columns is-centered">
            <div class="column is-half">
                <div class="field">
                    <label class="label">Title</label>
                    <div class="control">
                        <input class="input" type="text">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Date</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="mm/dd/yyyy">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Duration</label>
                    <div class="control">
                        <input class="input" type="text">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Location</label>
                    <div class="control">
                        <input class="input" type="text">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Picture</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Text input">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Type</label>
                    <div class="control">
                        <div class="select">
                        <select>
                            <option></option>
                            <option>Run</option>
                            <option>Bike</option>
                            <option>Walk</option>
                            <option>Cardio</option>
                            <option>Strength</option>
                        </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>