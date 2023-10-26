<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isActive = ref(false);

</script>
<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <RouterLink class="navbar-item" to="/">
          <img src="../assets/logo.svg" width="28" height="28">
        </RouterLink>

        <a role="button" class="navbar-burger" :class="{ 'is-active': isActive}" @click="isActive = !isActive" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isActive}">
        <div class="navbar-start">
        <RouterLink class="navbar-item" to="/my-activity" >
          <span class="icon">
            <i class="fas fa-running"></i>
          </span>
          My Activity
        </RouterLink>
        <RouterLink class="navbar-item" to="/friends-activity">
          <span class="icon">
            <i class="fas fa-people-group"></i>
          </span>
          Friend's Activity
        </RouterLink>
        <RouterLink class="navbar-item" to="/people-search">
          <span class="icon">
            <i class="fa fa-search"></i>
          </span>
          <span>People Search</span>
        </RouterLink>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Admin
            </a>

            <div class="navbar-dropdown">
              <RouterLink class="navbar-item" to="/users">
                Users
              </RouterLink>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <RouterLink class="button is-primary" to="/signup">
                <strong>Sign up</strong>
              </RouterLink>
              <div class="dropdown is-active">
                <div class="dropdown-trigger">
                  <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" onclick="myFunction()">
                    <span>Login</span>
                    <span class="icon is-small">
                      <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                  <div id="myDropdown" class="dropdown-content" >
                    <a href="#" class="dropdown-item">
                      Shelby Hinton
                    </a>
                    <a class="dropdown-item">
                      Dwayne Johnson
                    </a>
                    <a href="#" class="dropdown-item">
                      Peter Dinklage
                    </a>
                    <hr class="dropdown-divider">
                    <RouterLink to="/other-user" class="dropdown-item">
                      Other User
                    </RouterLink>
                  </div>
                </div>
              </div>
              <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                <span class="icon">
                <i class="fa fa-twitter"></i>
                </span>
                <span>Tweet</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

.router-link-active{
  font-weight: bold;
  border-bottom: 2px solid white;
}
</style>