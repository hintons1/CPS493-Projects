<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LoginBadge from './LoginBadge.vue';


</script>
<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <RouterLink class="navbar-item" to="/">
          <img src="../assets/logo.svg" width="28" height="28">
        </RouterLink>
      </div>


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
            <LoginBadge />
          </div>
        </div>
      </div>
  </nav>
</template>