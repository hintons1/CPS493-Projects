<script setup lang="ts">

import type { User } from '@/model/users';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { getUser, createUser } from '@/model/session';
import {  useLogin, getSession } from '@/model/session';
import router from '@/router';

</script>
<template>
<div class="columns is-centered">
    <div class="column is-half">
        <form class="box mt-6">
            <div class="field">
                <label class="label">First Name</label>
                <div class="control">
                <input class="input" type="email" placeholder="John">
                </div>
            </div>
            <div class="field">
                <label class="label">Last Name</label>
                <div class="control">
                <input class="input" type="email" placeholder="Doe">
                </div>
            </div>
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                <input class="input" type="email" placeholder="johndoe@example.com">
                </div>
            </div>
            <div class="field">
                <label class="label">Username</label>
                <div class="control">
                <input class="input" type="email" placeholder="jdoe1">
                </div>
            </div>
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                <input class="input" type="password" placeholder="********">
                </div>
            </div>

            <button class="button is-primary">Create Account</button>
        </form>
    </div>
</div>
</template>