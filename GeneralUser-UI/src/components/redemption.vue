<template>
<section class="m2">
<div class="hero is-primary is-bold">
  <div class="hero-body">
    <div class="container">
      <img src="../assets/Logo-ECOllect.png" width="70">
      <h1 class="title">
        Redeemable Items
      </h1>
    </div>
  </div>
</div>

<b-tabs type="is-toggle m2 mside" expanded>
    <b-tab-item label="Items" icon="google-photos">
      <RedeemableItems />
    </b-tab-item>

    <b-tab-item label="Status" icon="video">
      <Status />
    </b-tab-item>
</b-tabs>



</section>
</template>

<script>
import RedeemableItems from './redeemableItems.vue'
import Status from './redemptionStatus.vue'

export default {
    components: {
      RedeemableItems,
      Status
    }
};
</script>
