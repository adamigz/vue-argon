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
                        <div class="text-center mt-5">
                            <h3>{{user.name}}</h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Bucharest, Romania</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer</div>
                            <div><i class="ni education_hat mr-2"></i>University of Computer Science</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
                                    <a href="#">Show more</a>
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
        }
    },
    async created() {
        await this.getUser();
        console.log(this.user);
    }
};
</script>
<style>
</style>
