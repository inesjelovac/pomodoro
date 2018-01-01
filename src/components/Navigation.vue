<template>
<nav class="navbar navbar-dark bg-dark nav-height">
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle text-white" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">More</a>
    <div class="dropdown-menu">
      <router-link :to="{name: 'settings'}" class="dropdown-item" >Settings</router-link>
      <router-link :to="{name: 'statistics'}" class="dropdown-item" >Statistics</router-link>
      <div class="dropdown-divider"></div>
      <router-link :to="{name: 'about'}" class="dropdown-item" >About</router-link>
    </div>
  </li>
</nav>
</template>

<script>
export default {};
</script>

