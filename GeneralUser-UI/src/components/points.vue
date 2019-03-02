<template>
  <section>
    <div class="hero  is-success  is-bold">
    <div class="hero-body ">
      <div class="container">
        <h1 class="title">
          <img src="../assets/Logo-ECOllect.png"> 72 points
        </h1>
        <h2 class="subtitle">
          User Name
        </h2>
      </div>
    </div>
    </div>
        <PointsHistory />
  </section>
</template>

<script>
import PointsHistory from './pointsHistory.vue'

export default {
  name: "Redemptions",
  components: {
    PointsHistory
  }
};
</script>
