<template>
<section>
      <div class="tile">
        <div class="tile is-vertical is-12">
            <div class="tile is-parent">
                <div class="box notification is-light">
                  <article class="media">
                    <figure class="media-left">
                      <p class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png">
                      </p>
                    </figure>

                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>Century Tuna</strong>
                          <br>
                          <i>Details</i>: 250 grams<br>
                          <i>Price</i>: 50 points<br>
                          <a class="button is-rounded is-primary is-focused is-small is-pulled-right" @click="success" disabled>Redeem</a>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
            </div>

            <div class="tile is-parent">
                <div class="box notification is-light">
                  <article class="media">
                    <figure class="media-left">
                      <p class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png">
                      </p>
                    </figure>

                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>Rice</strong>
                          <br>
                          <i>Details</i>: 1 Kilogram<br>
                          <i>Price</i>: 20 points<br>
                          <a class="button is-rounded is-primary is-focused is-small is-pulled-right" @click="success">Redeem</a>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
            </div>

            <div class="tile is-parent">
                <div class="box notification is-light">
                  <article class="media">
                    <figure class="media-left">
                      <p class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png">
                      </p>
                    </figure>

                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>Intermediate Padpaper</strong>
                          <br>
                          <i>Details</i>: 60 leaves<br>
                          <i>Price</i>: 10 points<br>
                          <a class="button is-rounded is-primary is-focused is-small is-pulled-right" @click="success">Redeem</a>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
            </div>
        </div>

      </div>

</section>
</template>

<script>
    export default {
        methods: {
        success() {
            this.$toast.open({
                message: 'Item Pending',
                type: 'is-success',
                 position: 'is-bottom',
            })
        }
        }
    }
</script>

<style>
  .m2{
    margin-top: 20px;
  }

  .mside{
    margin-left: 5px;
    margin-right: 5px;
  }
</style>
