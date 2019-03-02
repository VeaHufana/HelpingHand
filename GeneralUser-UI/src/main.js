import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { faHistory } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from './router.js'

library.add(faCoffee)
library.add(faHome)
library.add(faCoins)
library.add(faHistory)
library.add(faSignOutAlt)
library.add(faUser)
library.add(faUpload)
library.add(faKey)

Vue.component('font-awesome-icon', FontAwesomeIcon) 

Vue.config.productionTip = false

Vue.component('my-modal', {
    template: `
            <form action="">
                <div class="modal-card modal-is-active" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Change Password</p>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Old Password">
                            <b-input
                                type="password"
                                :value="old password"
                                password-reveal
                                placeholder="Old Password"
                                required>
                            </b-input>
                        </b-field>

                        <b-field label="New Password">
                            <b-input
                                type="password"
                                :value="new password"
                                password-reveal
                                placeholder="New Password"
                                required>
                            </b-input>
                        </b-field>

                    </section>
                    <footer class="modal-card-foot">
                        <button class="button modal-close" type="button" @click="$emit('close')">Cancel</button>
                        <button class="button is-primary">Save</button>
                    </footer>
                </div>
            </form>
        `
});

Vue.use(Buefy, {
  defaultIconPack: 'fas'
});
new Vue({
  router,
  render: h => h(App),
  showModal: false
}).$mount('#app')
