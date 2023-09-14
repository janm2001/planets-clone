<template>
  <div v-if="planet" class="planet">
    <div class="main">
      <div class="image">
        <img :src="require(`@/assets/${planet.images.planet}`)" alt="" />
      </div>
      <div class="planetInformation">
        <h1>{{ planet.name }}</h1>
        <div class="planetContent">
          <p>{{ planet.overview.content }}</p>
        </div>
        <div class="planetSource">
          <a :href="planet.overview.source">Wikipedia</a>
        </div>
        <div class="planetButtons">
          <button>01 OVERVIEW</button>
          <button>02 ITERNAL STRUCTURE</button>
          <button>03 SURFACE GEOLOGY</button>
        </div>
      </div>
    </div>
    <div class="secondary">
      <div class="secondary-info">
        <p><span>ROTATION TIME</span></p>
        <h2>{{ planet.rotation }}</h2>
      </div>
      <div class="secondary-info">
        <p><span>REVOULTION TIME</span></p>
        <h2>{{ planet.revolution }}</h2>
      </div>
      <div class="secondary-info">
        <p><span>RADIUS</span></p>
        <h2>{{ planet.radius }}</h2>
      </div>
      <div class="secondary-info">
        <p><span>RAVERAGE TEMP.</span></p>
        <h2>{{ planet.temperature }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
  props: ["id"],
  setup(props) {
    const planet = ref(null);
    const error = ref(null);

    const getPlanetData = async () => {
      console.log(props.id);
      try {
        const data = await fetch("http://localhost:3000/planets/" + props.id);
        if (!data.ok) {
          throw Error("Couldn't find that planet");
        }
        planet.value = await data.json();
      } catch (error) {
        console.log(error.message);
      }
    };
    watchEffect(() => {
      getPlanetData();
    });

    return { planet, error };
  },
};
</script>

<style>
.planet {
  width: 80%;
  margin: 0 auto;
}

.main {
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 60vh;
}

.image {
  flex: 2;
  display: flex;
  align-content: center;
  justify-content: center;
}

.planetInformation {
  flex: 1;
}

.planetInformation h1 {
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
}

.planetContent {
  width: 100%;
  font-size: 1rem;
  color: #fff;
}

.planetSource a {
  text-decoration: none;
  color: #838391;
}

.planetButtons button {
  padding: 1rem 1.5rem;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  width: 100%;
  margin-top: 0.5rem;
}

.secondary {
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
  width: 100%;
  height: 15vh;
}

.secondary-info {
  flex: 1;
  height: 100px;
  padding: 1rem 2rem;
  border: 1px solid #aaa;
}

.secondary-info h2 {
  font-weight: bold;
  font-size: 1.2rem;
}

@media (min-width: 2000px) {
  .planet {
    padding: 4rem 0;
    width: 60%;
    margin: 0 auto;
  }
}
</style>
