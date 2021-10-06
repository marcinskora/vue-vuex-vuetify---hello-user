<template>
    <div>
        <v-form v-model="valid">
            <v-container>
                <h4>Dane użytkownika</h4>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="firstname" :counter="50" label="Imię" ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="lastname" :counter="50" label="Nazwisko" ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="email" label="E-mail" ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="3">
                        <v-btn color="error" class="mr-4" @click="save">Zapisz</v-btn>
                    </v-col>
                </v-row>
            </v-container>




            ----{{$store.state.supername}}----
            <br />
            ----{{supername}}
            <br />
            ----{{superuser}}
            <br />
            ----{{superuser.firstname}}
            <br />
            ----{{abc}}
            <br />


            {{test}}
            <br />
            {{testUserFirstname}}
            <br />
            {{testUserLastname}}
            <br />
            {{testUserEmail}}

        </v-form>
  </div>
</template>
<script>
    import { mapState } from 'vuex';
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex'

    export default {
        data: () => ({
            valid: false,
            firstname: '',
            lastname: '',
            email: ''
        }),
        methods: {
            save() {
                //this.$store.commit("userFirstname",this.firstname);
                //this.$store.dispatch('delayuserFirstname',this.firstname);

                /*
                this.$store.dispatch({
                    type :'delayuserFirstname',
                    value: this.firstname
                });
                */

                this.dufn({
                    type :'delayuserFirstname',
                    value: this.firstname
                });


                this.$store.commit("userLastname",this.lastname);
                this.$store.commit("userEmail",this.email);
            },
            ...mapActions({
                dufn: 'delayuserFirstname'
            })

        },
        created() {
            //this.firstname = this.$store.getters.userFirstname;
            //this.lastname = this.$store.getters.userLastname;
            //this.email = this.$store.getters.userEmail;
        },

        computed: {
            ...mapGetters({
                testUserFirstname: 'userFirstname',
                testUserLastname: 'userLastname',
                testUserEmail: 'userEmail',
            }),
            test() {
                return 'kkkkkkkkkkkkkkkkkk';
            },
            ...mapState({
                supername: state => state.supername,
                superuser: state => state.user,
                abc: state => state.user
                //countAlias: 'supername',
                //countTest(state) {
                //    return state.supername + ' ' + this.countAlias;
                //}
            })
        }

        /*
        computed: mapState({
            supername: state => state.supername,
            superuser: state => state.user,
            abc: state => state.user
            //countAlias: 'supername',
            //countTest(state) {
            //    return state.supername + ' ' + this.countAlias;
            //}
        })
        */
    }
</script>
