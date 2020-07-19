<template>
    <div class="profile-page">
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
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--500" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3">
                                <div class="card-profile-image mb-5">
                                    <img src="/img/icons/common/profile.jpg" class="rounded-circle">
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5 pt-5">
                            <h2>{{user.name}}</h2>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>{{user.email}}</div>
                            <div class="row">
                                <!--
                                    |-------------------------------------|
                                    |THIS PART WAS MADE BY Paweł Puchalski|
                                    |-------------------------------------|
                                -->
                                <div class="col-lg-6 text-left pl-5">
                                    <h5><i class="ni ni-mobile-button"></i> {{user.phone}}</h5>
                                    <h5><i class="ni ni-box-2"></i> {{user.company.bs}}</h5>
                                    <h5><i class="ni ni-notification-70"></i> {{user.company.catchPhrase}}</h5>
                                    <h5><i class="ni ni-briefcase-24"></i> {{user.company.name}}</h5>
                                    <h5><i class="ni ni-circle-08"></i> {{user.username}}</h5>
                                    <h5><i class="ni ni-world-2"></i> {{user.website}}</h5>
                                </div>
                                 <!--
                                    |-------------------------------------|
                                -->
                                <div class="col-lg-6 text-right pr-5">
                                    <h5>{{user.address.city}} <i class="ni ni-square-pin"></i></h5>
                                    <h5>st.{{user.address.street}}, {{user.address.suite}} <i class="ni ni-square-pin"></i></h5>
                                    <h5>{{user.address.zipcode}} <i class="ni ni-square-pin"></i></h5>
                                    <h5>Latitude and longitude: </h5>
                                    <li><b>Latitude: {{user.address.geo.lat}}</b> <i class="ni ni-square-pin"></i></li>
                                    <li><b>Longitude: {{user.address.geo.lng}}</b> <i class="ni ni-square-pin"></i></li>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <card shadow class="card-profile" style="margin-top: 2rem; margin-bottom: 2rem;" :class="{'mt--500': index == 0}" 
                                    v-for="todo in todos" :key="todo.id">
                                        <div class="row">
                                            <b-form-checkbox
                                                :checked="todo.completed"
                                                size="lg"
                                            >
                                                <h6>{{todo.title}}</h6>                                         
                                            </b-form-checkbox>
                                        </div>
                                    </card>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: {},
            todos: [],
            loading: true,
            loaded: false,
            errorMsgs: [],
            showError: false
        }
    },
    computed: {
        userId() {
            return this.$route.params.id;
        }
    },
    methods: {
        async getUser() {
            let {data} = await this.axios('https://jsonplaceholder.typicode.com/users/'+this.userId);
            this.user = data;
        },
        async getTodos() {
            let {data} = await this.axios('https://jsonplaceholder.typicode.com/users/'+this.userId+'/todos');
            this.todos = data;
        }
    },
    async created() {
        await this.getUser();
        await this.getTodos();
        console.log(this.user);
    }
};
</script>
<style>
</style>
