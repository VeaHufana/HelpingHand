<template>
  <section>
      <div class="tile">
        <div class="tile is-vertical">

                    <article class="tile is-child notification is-success" style="top: 30px">
                      <div class="content">
                            <img src="../assets/user.png" width="350" style="padding-top:20px; padding-bottom:20px"/>
                            <b-field class="file is-centered">
                                <b-upload v-model="file">
                                    <a class="button is-dark is-small">
                                    <span class="icons"><font-awesome-icon icon="upload" pack="fas"/></span>    
                                    <span>&nbsp; Change Profile Picture</span>
                                    </a>
                                </b-upload>
                                
<!--
                                <span class="file-name is-small" v-if="file">
                                    {{ file.name }}
                                </span>
-->
                            </b-field>
                          
                        </div>
                        <b-table :data="data" :columns="columns"></b-table>
                        <br>
                           
                            <button class="button is-dark is-small"
                                    @click="showModal=true">
                                <my-modal v-show="showModal=true" @close="showModal=false"></my-modal>
                                <span class="icons"><font-awesome-icon icon="key" pack="fas"/></span>    
                                &nbsp; Change Password
                            </button>

<!--
                        <b-modal :active.sync="isComponentModalActive" has-modal-card>
                            <modal-form v-bind="formProps"></modal-form>
                        </b-modal>
-->
      
                    </article>
            </div>
          </div>
  </section>
</template>

<script>
//    const ModalForm = {
//        props: ['old password', 'new password'],
//        template: `
//            <form action="">
//                <div class="modal-card" style="width: auto">
//                    <header class="modal-card-head">
//                        <p class="modal-card-title">Change Password</p>
//                    </header>
//                    <section class="modal-card-body">
//                        <b-field label="Old Password">
//                            <b-input
//                                type="password"
//                                :value="old password"
//                                password-reveal
//                                placeholder="Old Password"
//                                required>
//                            </b-input>
//                        </b-field>
//
//                        <b-field label="New Password">
//                            <b-input
//                                type="password"
//                                :value="new password"
//                                password-reveal
//                                placeholder="New Password"
//                                required>
//                            </b-input>
//                        </b-field>
//
//                    </section>
//                    <footer class="modal-card-foot">
//                        <button class="button" type="button" @click="$parent.close()">Cancel</button>
//                        <button class="button is-primary">Save</button>
//                    </footer>
//                </div>
//            </form>
//        `
//    }

    export default {
        data() {
            return {
                data: [
                    {'name': 'Jerome Salazar', 'username': 'jeromieeeee05',  'bdate': '1999/02/05 13:43:27', 'contact_number': '0912 345 6789', 'email': 'jeromieeeee05@email.com'}
                ],
                columns: [
                    {
                        field: 'name',
                        label: 'Name',
                    },
                    {
                        field: 'username',
                        label: 'Username',
                    },
                    {
                        field: 'bdate',
                        label: 'Birth  Date',
                    },
                    {
                        field: 'contact_number',
                        label: 'Contact Number',
                    },
                    {
                        field: 'email',
                        label: 'Email',
                    }
                ],
                file: [ null ],
//                methods: {
//                    cardModal() {
//                        this.$modal.open ({
//                            parent: this,
//                            component: ModalForm,
//                            hasModalCard: true
//                        })
//                    }
//                 }
               }
        }
    }

</script>
