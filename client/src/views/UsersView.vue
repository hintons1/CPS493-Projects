<script setup lang="ts">

import { ref } from 'vue';
import { getUsers, getSession, deleteUser } from '@/model/session';
import { type User } from '@/model/users';

const session = getSession();

</script>
<template>
  <div class="table-container" v-if="User.role === 'admin'">
  </div>

  <div class="columns is-centered" v-if="User.role === 'user'">
    <div class="column is-half">
    <article class="message is-danger">
  <div class="message-header">
    <p>Invalid Credentials</p>
  </div>
  <div class="message-body">
    Admin must sign in to modify any existing users.
  </div>
</article>
</div>
</div>
</template>