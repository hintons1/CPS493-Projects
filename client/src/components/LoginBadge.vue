<script setup lang="ts">

import { getSession, useLogin } from '@/model/session'

const session = getSession();
const { login, logout } = useLogin()

const doLogin1 = () => {
  login('hintons1@newpaltz.edu', '9uQFF1Lh')
}

const doLogin2 = () => {
  login('djohnson@therock.com', 'CQutx25i8r')
}

const doLogin3 = () => {
  login('peter@dinklage.com', 'OWsTbMUgFc')
}

const doLogout = () => {
    logout();
}

</script>
<template>

<div class="has-text-right" v-if="session.user">
    Welcome, {{ session.user?.firstName }} {{ session.user?.lastName }} <br>
    <small>
      {{ session.user?.email }}
      <a class="button is-small is-light is-warning" @click.prevent="doLogout">
        <span class="icon">
          <i class="fas fa-sign-out-alt"></i>
        </span>
      </a>
    </small>
  </div>
  <div class="navbar-item has-dropdown is-hoverable" v-else>
    <a class="navbar-item button is-light">
      Log in
    </a>
    <div class="navbar-dropdown">
      <a class="navbar-item" @click.prevent="doLogin1">Shelby Hinton</a>
      <a class="navbar-item" @click.prevent="doLogin2">Dwayne Johnson</a>
      <a class="navbar-item" @click.prevent="doLogin3">Peter Dinklage</a>
    </div>
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