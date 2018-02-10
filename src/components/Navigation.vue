<template>
<nav class="navbar navbar-dark bg-dark nav-height fixed-top">
  <router-link :to="{name: 'home'}" class="navbar-brand" >
    <img :src="logo" width="30" height="30" alt="Pomodoro">
  </router-link>
  <div class="navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-white" data-toggle="dropdown" href="#" role="button" id="navbarDropdownMenuLink">More</a>
        <div class="dropdown-menu">
          <router-link :to="{name: 'settings'}" class="dropdown-item" >Settings</router-link>
          <router-link :to="{name: 'statistics'}" class="dropdown-item" >Statistics</router-link>
          <div class="dropdown-divider"></div>
          <router-link :to="{name: 'about'}" class="dropdown-item" >About</router-link>
        </div>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
import logo from '../assets/logo.png';

console.log(logo);

export default {
  data() {
    return {
      logo,
    };
  },
};
</script>

