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
            
                <card shadow class="card-profile" style="margin-top: 2rem; margin-bottom: 2rem;" :class="{'mt--500': index == 0}" v-for="(album, index) in albums[pagination-1]" :key="album.id">
                    <div class="px-4">
                        <div class="row align-items-left">
                            <h3><i class="ni ni-collection"></i> <router-link :to="{name: 'photos', params: {id: album.id}}">{{album.title}}</router-link></h3>
                        </div>
                        <div class="row align-items-left">
                            <p><i class="ni ni-single-02"></i> {{album.author.username}}</p>
                        </div>
                    </div>
                </card>
            
            </div>
            <div v-if="albums.length" class="row justify-content-center">
                <base-pagination :page-count="albums.length" v-model="pagination" size="lg"></base-pagination>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            albums: [],
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
        async getAllAlbums() {
            try{
                let {data} = await this.axios('https://jsonplaceholder.typicode.com/albums');
                this.albums = data;
            }catch(e){
                this.errorMsgs.push(e);
            }
        },
        async getAlbumsAutors() {
            try{
                let {data} = await this.axios('https://jsonplaceholder.typicode.com/users');
                for(let i=0; i<this.albums.length; i++){
                    let id = this.albums[i].userId;
                    this.albums[i].author = data[id];
                }
            }catch(e){
                this.errorMsgs.push(e);
            }
        },
        async createReadyAlbumsArray(){
            await this.getAllAlbums();
            await this.getAlbumsAutors();
        }
    },
    async created() {
        await this.createReadyAlbumsArray();
        this.albums = this.chunk(this.albums, 15);
        this.loading = false;
        this.loaded = true;

        console.log(this.albums);
    },
}
</script>