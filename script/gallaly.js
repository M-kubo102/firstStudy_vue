"use strict";

Vue.component("imageThumbnail", {
    props: {
        path: {
            type: String,
            default: ''
        }
    },
    template: `
    <div 
    class="img-box" 
    :style="{ backgroundImage: 'url(' + path + ')' }"
    @click="$emit('clickimage')"
    ></div>`
});

Vue.component("modal", {
    props:{
        isShown: {
            type: Boolean,
            default: false
        },
        imagePath:{
            type: String,
            default: ''
        }
    },
    template: `
    <div 
        v-if="isShown" 
        class="modal" 
        @click="$emit('close')"
    >
        <img 
        class="modal-img" 
        :src="imagePath" 
        alt="selectedImage"
        />
    </div>`
});

var vm = new Vue({
    el: '#app',
    data:{
        isShown: false,
        selectedImage: '',
        images: [{
            path: './img/img1.png',
        },{
            path: './img/img2.png',
        },{
            path: './img/img3.png',
        },{
            path: './img/img4.png',
        },{
            path: './img/img5.png',
        },{
            path: './img/img6.png',
        },{
            path: './img/img7.png',
        },{
            path: './img/img8.png',
        }],
    },
    methods:{
        onSelectImage(path){
            this.setImage(path);
            this.openModal();
        },
        openModal(){
            this.isShown = true;
        },
        closeModal(){
            this.isShown = false;
        },
        setImage(path){
            this.selectedImage = path;
        }
    },
});