<script setup lang="ts">
import { RouterLink } from 'vue-router';


</script>
<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <RouterLink class="navbar-item" to="/">
          <img src="../assets/logo.svg" width="28" height="28">
        </RouterLink>


      <div id="navbarBasicExample" class="navbar-menu">
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
                <span>Sign up</span>
              </RouterLink>
              <RouterLink class="button is-primary" to="/login">
                <span>Login</span>
              </RouterLink>
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
    </div>
  </nav>
</template>

<style scoped>

.router-link-active{
  font-weight: bold;
  border-bottom: 2px solid white;
}
</style>