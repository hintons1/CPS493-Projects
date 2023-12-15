<script setup lang="ts">

import { getSession, logout } from '@/model/session'
import { RouterLink } from 'vue-router';

const session = getSession();

const doLogout = () => {
    logout();
}

</script>
<template>

<div class="has-text-right" v-if="session.user">
    Welcome, {{ session.user.firstName }} {{ session.user.lastName }} <br>
    <small>
      {{ session.user.email }}
      <a class="button is-small is-light is-warning" @click.prevent="doLogout">
        <span class="icon">
          <i class="fas fa-sign-out-alt"></i>
        </span>
      </a>
    </small>
  </div>
  <div class="buttons" v-else>
    <RouterLink class="button is-light" to="/signup">
      Sign up
    </RouterLink>
    <RouterLink class="button is-light" to="/login">
      Log in
    </RouterLink>
    <a class="button is-link" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
              <span class="icon">
                <i class="fa fa-twitter"></i>
              </span>
              <span>
                Tweet
              </span>
    </a>
  </div>

</template>