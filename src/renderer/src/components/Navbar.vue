<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="../assets/logo.svg"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        Astwebmedia
      </a>
      <form class="d-flex">
        <RouterLink to="/" class="btn btn-outline-success me-2"
          ><i class="fas fa-home"></i> Home</RouterLink
        >
        <RouterLink to="/transaksi" class="btn btn-outline-warning me-2"
          ><i class="fas fa-shopping-cart"></i> Transaksi</RouterLink
        >
        <RouterLink to="/logout" class="btn btn-outline-danger me-2"
          ><i class="fas fa-sign-out"></i
        ></RouterLink>
      </form>
    </div>
  </nav>
</template>
<script>
import { RouterLink } from 'vue-router'
</script>
