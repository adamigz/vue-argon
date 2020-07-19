<template>
  <header class="header-global">
    <base-nav type="" transparent effect="light" expand>
      <router-link class="navbar-brand" to="/">Brand name</router-link>

      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <a
            href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
          >
            <img
              src="https://demos.creative-tim.com/vue-argon-design-system/img/brand/blue.png"
            />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav ml-lg-auto">
        <li class="nav-item">
          <router-link to="/posts" class="nav-link nav-link-icon">
            Posts
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/albums" class="nav-link nav-link-icon">
            Albums
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/users" class="nav-link nav-link-icon">
            Users
          </router-link>
        </li>
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
  },
};
</script>
<style></style>
