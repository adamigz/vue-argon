<template>
    <div id="#list-top">
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
                
                <card shadow class="card-profile mt--500" style="margin-top: 2rem; margin-bottom: 2rem;">
                    <div class="px-4">
                        <div class="row align-items-left">
                            <h1><i class="ni ni-collection"></i> {{albumTitle}}</h1>
                        </div>
                        <div class="container-fluid">
                            <b-carousel
                                id="carousel-1"
                                v-model="slide"
                                :interval="4000"
                                fade
                                controls
                                indicators
                                background="#ababab"
                                img-width="1024"
                                img-height="480"
                                @sliding-start="onSlideStart"
                                @sliding-end="onSlideEnd"
                            >
                                <b-carousel-slide v-for="photo in photos" :key="photo.id">
                                    <template v-slot:img>
                                        <b-img :src="photo.url" center fluid alt="Fluid image"></b-img>
                                    </template>
                                    <h1>{{photo.title}}</h1>
                                </b-carousel-slide>
                            </b-carousel>
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
            photos: [],
            albumTitle: '',
            loading: true,
            loaded: false,
            errorMsgs: [],
            showError: false,
            slide: 0,
            sliding: null
        }
    },
    methods: {
        async getAllPhotos() {
            try{
                let {data} = await this.axios('https://jsonplaceholder.typicode.com/albums/'+this.$route.params.id+'/photos');
                this.photos = data;
            }catch(e){
                this.errorMsgs.push(e);
            }
        },
        async getAlbumTitle() {
            try{
                let {data} = await this.axios('https://jsonplaceholder.typicode.com/albums/'+this.$route.params.id);
                this.albumTitle = data.title;
            }catch(e){
                this.errorMsgs.push(e);
            }
        },
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        }
    },
    async created() {
        await this.getAllPhotos();
        await this.getAlbumTitle();
        this.loading = false;
        this.loaded = true;
    }
}
</script>