
<template>
  <section>
      <nav class="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
            <span class="navbar-item">
              <img src="./assets/Logo-ECOllect.png" width="70">
            </span>

              <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
              </a>
          </div>

          <div class="navbar-menu" v-bind:class="{'is-active': isOpen}">
              <div class="navbar-end">
                <router-link class="navbar-item" to="/profile">
                <span class="icons"><font-awesome-icon 
                    icon="user" 
                    pack="fas"/></span>
                &nbsp;
                User Name
                </router-link>
                <hr>
                <router-link class="navbar-item" to="/points"> 
                <span class="icons"><font-awesome-icon 
                    icon="history" 
                    pack="fas"/></span>
                &nbsp;
                Points &amp; Rewards
                </router-link>
                <router-link class="navbar-item" to="/"> 
                <span class="icons"><font-awesome-icon 
                    icon="home" 
                    pack="fas"/></span>
                &nbsp;
                Home
                </router-link>
                <router-link class="navbar-item" to="/redemption"> 
                <span class="icons"><font-awesome-icon 
                    icon="coins" 
                    pack="fas"/></span>
                &nbsp;
                Redemption
                </router-link>
                <hr>  
                <router-link class="navbar-item" to="/login"> 
                <span class="icons"><font-awesome-icon 
                    icon="sign-out-alt" 
                    pack="fas"/></span>
                &nbsp;
                Logout
                </router-link>
              </div>
          </div>

     </nav>

     <div class="container is-fluid  m2">
        <router-view />
     </div>

  </section>
</template>


<script>
  export default {
    data: function() {
        return {
            isOpen: false
        }
    }
  }
</script>

<style>
.m2{
margin-top: 20px;
}
.icons{
    color:limegreen;
}
</style>
