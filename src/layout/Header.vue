<template>
  <div class="header">
    <div class="header-left">
      <router-link to="/home" class="logo">
        <img src="" width="100" height="80" alt="" />
      </router-link>
    </div>

    <div class="header-center">
      <h1>BATIMAT</h1>
    </div>
    <a id="toggle_btn" href="javascript:void(0);">
      <span class="bar-icon">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </a>

    <a id="mobile_btn" class="mobile_btn" href="#sidebar"
      ><i class="fa fa-bars"></i
    ></a>

    <ul class="nav user-menu">
      <li>
        <a href="#" class="report-btn">
          <span class="material-icons-outlined"> settings </span>
        </a>
      </li>

      <li class="nav-item dropdown has-arrow main-drop">
        <a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
          <span class="user-img"
            ><i class="fa fa-user" aria-hidden="true"></i
          ></span>
          <span>{{ name }}</span>
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#" @click="logout">Se déconnecter</a>
        </div>
      </li>
    </ul>

    <div class="dropdown mobile-user-menu">
      <a
        href="#"
        class="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="fa fa-ellipsis-v"></i>
      </a>
      <div class="dropdown-menu dropdown-menu-right">
        <a class="dropdown-item" href="#" @click="logout">Se déconnecter</a>
      </div>
    </div>
  </div>
</template>
  <script>
import AppStorage from "../db/AppStorage";
export default {
  methods: {
    data() {
      return {
        name: AppStorage.getUser(),
      };
    },
    logout() {
      AppStorage.clear();
      this.$router.push({ name: "welcome" });
    },
  },
  name: "Header",
};
</script>
  