<template>
    <div>
        <p class="btn btn-link text-default" @click="showComments()"><b><badge circle type="default">{{comments.length}}</badge>Comments
        <i :class="iconClass"></i></b></p>
        <div v-show="show" class="container-fluid">
            <card shadow class="card-profile container-fluid" style="margin-top: 0.5rem; margin-bottom: 0.5rem;" v-for="(comment, index) in comments" :key="index">
                <div class="px-4">
                    <div class="row align-items-left">
                        <h5><i class="ni ni-chat-round"></i><b> {{comment.name}}</b></h5>
                    </div>
                    <div class="row align-items-left">
                        <h5>{{comment.body}}</h5>
                    </div>
                    <div class="row float-right">
                        <p><i class="fa fa-pencil" aria-hidden="true"></i> {{comment.email}}</p>
                    </div>
                </div>
            </card>
        </div>
    </div>
</template>
<script>
export default {
    name: 'comment',
    props: {
        comments: {
            type: Array
        }
    },
    data() {
        return {
            show: false,
            iconClass: 'ni ni-bold-down'
        }
    },
    methods: {
        showComments() {
            this.show = !this.show;
            this.show == true ? this.iconClass = 'ni ni-bold-up' : this.iconClass = 'ni ni-bold-down';
        }
    }
}
</script>