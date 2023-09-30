<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
    <nav class="navbar navbar-expand-lg">

        <a class="navbar-brand" href="#">LOGO</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/shop" class="nav-link">Shop</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/media" class="nav-link">Media</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/contact-us" class="nav-link">Contact Us</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/login" class="nav-link">Sign In</RouterLink>
            </li>
          </ul>
        </div>
</nav>
</div>
  </header>

  <RouterView />
</template>