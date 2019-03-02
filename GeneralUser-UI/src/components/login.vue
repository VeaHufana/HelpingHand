<template>
    <section>

        <div class="tile">
          <div class="tile is-vertical mb-2">

              <section>
                      <article class="tile is-child notification is-white" style="top: 60px">
                        <div class="content">
                            <img src="../assets/Logo-ECOllect.png" width="350" style="padding-top:20px; padding-bottom:20px"/>

                          <b-field label="Username">
                              <b-input value="" maxlength="30"></b-input>
                          </b-field>

                          <b-field label="Password">
                              <b-input type="password" maxlength="30"></b-input>
                          </b-field>
                        </div>
                        <b-checkbox>Remember me</b-checkbox>

                        <p class="control">
                            <button class="button is-success is-pulled-right">
                              Login
                            </button>
                        </p>
                      </article>
                </section>
              </div>
            </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                hasError: true
            }
        }
    }
</script>
