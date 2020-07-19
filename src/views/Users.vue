<template>
    <div>
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <div class="container col-lg-10" v-show="showError">
            <base-alert v-for="(errorMsg, index) in errorMsgs" type="danger" :key="index" dismissible>
                <strong>Error!</strong> {{errorMsg}}
            </base-alert>
        </div>
        <section class="section section-skew">
            <div class="container-fluid card-profile mt--300" v-show="loading">
                <div class="row">
                    <div class="spinner-grow text-light d-flex justify-content-center m-auto" style="width: 5rem;height: 5rem;"  role="status">
                        <span class="sr-only">
                        </span>
                    </div>
                    <div class="spinner-grow text-light d-flex justify-content-center m-auto" style="width: 5rem;height: 5rem;"  role="status">
                        <span class="sr-only">
                        </span>
                    </div>
                    <div class="spinner-grow text-light d-flex justify-content-center m-auto" style="width: 5rem;height: 5rem;"  role="status">
                        <span class="sr-only">
                        </span>
                    </div>
                </div>
            </div>
            <div class="container" v-show="loaded">
            
                <card shadow class="card-profile" style="margin-top: 2rem; margin-bottom: 2rem;" :class="{'mt--500': index == 0}" v-for="(user, index) in users[pagination-1]" :key="user.id">
                    <div class="px-4">
                        <div class="row">
                        <div class="col-lg-8">
                            <div class="row align-items-left">
                                <h2 v-html="fullName(user)"></h2>
                            </div>
                            <div class="row align-items-left">
                                <h4>{{user.email}}</h4>
                            </div>
                        </div>
                        <div class="col-lg-4 align-self-center">
                            <b-button size="lg" class="m-auto d-flex" variant="primary"><router-link class="text-white d-flex justify-content-center" :to="{name: 'user', params: {id: user.id} }">Show profile</router-link></b-button>    
                        </div>
                        </div>
                    </div>
                </card>
            </div>
            <div v-if="users.length" class="row justify-content-center">
                <base-pagination :page-count="users.length" v-model="pagination" size="lg"></base-pagination>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            users: [],
            loading: true,
            loaded: false,  
            errorMsgs: [],
            showError: false,
            pagination: 1
        }
    },
    methods: {
        chunk(array, size) {
            const chunked_arr = [];
            let copied = [...array]; // ES6 destructuring
            const numOfChild = Math.ceil(copied.length / size); // Round up to the nearest integer
            for (let i = 0; i < numOfChild; i++) {
                chunked_arr.push(copied.splice(0, size));
            }
            return chunked_arr;
        },
        async getAllUsers() {
            try{
                let {data} = await this.axios('https://jsonplaceholder.typicode.com/users');
                this.users = data;
            }catch(e){
                this.errorMsgs.push(e);
            }
        },
        fullName(arg) {
            let name = arg.name.split(' ');
            return '<i class="ni ni-circle-08"></i> '+name[0]+' <i>'+arg.username+'</i> '+name[1];
        }
    },
    async created() {
        await this.getAllUsers();
        this.users = this.chunk(this.users, 10);
        this.loading = false;
        this.loaded = true;

        console.log(this.users);
    },
}
</script>