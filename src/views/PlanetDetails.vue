<template>
  <div v-if="planet" class="planet" :id="planetId">
    <div class="main">
      <div class="image">
        <img
          v-if="active === 1"
          :src="require(`@/assets/${planet.images.planet}`)"
          alt=""
        />
        <img
          v-else-if="active === 2"
          :src="require(`@/assets/${planet.images.internal}`)"
          alt=""
        />
        <img
          v-else-if="active === 3"
          :src="require(`@/assets/${planet.images.geology}`)"
          alt=""
        />
      </div>
      <div class="planetInformation">
        <h1>{{ planet.name }}</h1>
        <div class="planetContent">
          <p v-if="active === 1">{{ planet.overview.content }}</p>
          <p v-else-if="active === 2">{{ planet.structure.content }}</p>
          <p v-else-if="active === 3">{{ planet.geology.content }}</p>
        </div>
        <div class="planetSource">
          <a v-if="active === 1" :href="planet.overview.source">Wikipedia</a>
          <a v-if="active === 2" :href="planet.structure.source">Wikipedia</a>
          <a v-if="active === 3" :href="planet.geology.source">Wikipedia</a>
        </div>
        <div class="planetButtons">
          <button @click="handleClick(1)" :class="active === 1 ? 'active' : ''">
            01 OVERVIEW
          </button>
          <button @click="handleClick(2)" :class="active === 2 ? 'active' : ''">
            02 ITERNAL STRUCTURE
          </button>
          <button @click="handleClick(3)" :class="active === 3 ? 'active' : ''">
            03 SURFACE GEOLOGY
          </button>
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
        <p><span>AVERAGE TEMP.</span></p>
        <h2>{{ planet.temperature }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from "vue";
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

    const active = ref(1);

    const handleClick = (value) => {
      active.value = value;
    };

    const planetId = computed(() => {
      return planet.value ? planet.value.name.toLowerCase() : "";
    });

    return { planet, error, active, handleClick, planetId };
  },
};
</script>

<style>
.planet {
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0;
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
  font-size: 3rem;
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
  margin-top: 1.5rem;
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

#mercury .planetButtons button.active {
  background: #419ebb;
  border-radius: 1px solid #419ebb;
}

#venus .planetButtons button.active {
  background: #eda249;
  border-radius: 1px solid #eda249;
}

#earth .planetButtons button.active {
  background: #6d2ed5;
  border-radius: 1px solid #6d2ed5;
}

#mars .planetButtons button.active {
  background: #d14c32;
  border-radius: 1px solid #d14c32;
}

#jupiter .planetButtons button.active {
  background: #d83a34;
  border-radius: 1px solid #d83a34;
}

#saturn .planetButtons button.active {
  background: #cd5120;
  border-radius: 1px solid #cd5120;
}

#uranus .planetButtons button.active {
  background: #1ec1a2;
  border-radius: 1px solid #1ec1a2;
}

#neptune .planetButtons button.active {
  background: #2d68f0;
  border-radius: 1px solid #2d68f0;
}

.planetButtons button {
  cursor: pointer;
}

@media (max-width: 968px) {
  .planet {
    width: 80%;
    margin: 0 auto;
    padding: 1rem 0;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .secondary-info {
    height: 100%;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid #aaa;
  }

  .planetInformation h1 {
    text-align: center;
  }

  .secondary {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem;
    width: 100%;
    height: 15vh;
  }
}
</style>
