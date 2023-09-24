<template>
  <nav>
    <div class="nav-brand">THE PLANETS</div>
    <div class="mobile-nav-expand" @click="handleShowMobile">
      <i class="fas fa-bars"></i>
    </div>
    <div class="nav-links">
      <router-link :to="{ name: 'Planet', params: { id: 1 } }"
        >MERCURY</router-link
      >
      <router-link :to="{ name: 'Planet', params: { id: 2 } }"
        >VENUS</router-link
      >
      <router-link :to="{ name: 'Planet', params: { id: 3 } }"
        >EARTH</router-link
      >
      <router-link :to="{ name: 'Planet', params: { id: 4 } }"
        >MARS</router-link
      >
      <router-link :to="{ name: 'Planet', params: { id: 5 } }"
        >JUPITER</router-link
      >
      <router-link :to="{ name: 'Planet', params: { id: 6 } }"
        >SATURN</router-link
      >
      <router-link :to="{ name: 'Planet', params: { id: 7 } }"
        >URANUS</router-link
      >
      <router-link :to="{ name: 'Planet', params: { id: 8 } }"
        >NEPTUNE</router-link
      >
    </div>

    <div class="nav-links-mobile" v-if="showMobile">
      <router-link :to="{ name: 'Planet', params: { id: 1 } }"
        >MERCURY</router-link
      >
      <router-link :to="{ name: 'Planet', params: { id: 2 } }"
        >VENUS</router-link
      >
      <router-link :to="{ name: 'Planet', params: { id: 3 } }"
        >EARTH</router-link
      >
      <router-link :to="{ name: 'Planet', params: { id: 4 } }"
        >MARS</router-link
      >
      <router-link :to="{ name: 'Planet', params: { id: 5 } }"
        >JUPITER</router-link
      >
      <router-link :to="{ name: 'Planet', params: { id: 6 } }"
        >SATURN</router-link
      >
      <router-link :to="{ name: 'Planet', params: { id: 7 } }"
        >URANUS</router-link
      >
      <router-link :to="{ name: 'Planet', params: { id: 8 } }"
        >NEPTUNE</router-link
      >
    </div>
  </nav>
  <router-view />
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const showMobile = ref(false);
    const handleShowMobile = () => {
      showMobile.value = !showMobile.value;
    };

    return { showMobile, handleShowMobile };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-image: url("./assets/stars-bg.jpg");
  background-size: cover;
  background-position: bottom;
  height: 100vh;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid #222;
}

nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

/* nav a.router-link-exact-active {
  color: ;
} */

.nav-brand {
  padding-left: 0.5rem;
  letter-spacing: 5px;
  font-weight: bold;
  color: #fff;
  font-size: 1.25rem;
}

.nav-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.mobile-nav-expand {
  display: none;
}

.nav-links-mobile {
  display: none;
}

@media (max-width: 960px) {
  .mobile-nav-expand {
    display: block;
    cursor: pointer;
  }
  .nav-links {
    display: none;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 2rem;
    border-bottom: 1px solid #222;
  }

  .nav-links-mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  #app {
    height: 220vh;
  }
}
</style>
