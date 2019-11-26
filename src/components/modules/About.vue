<template>
    <div class="about">
        <p>Hi</p>
        <Hellow v-bind:ninjas="ninjas"></Hellow>
    </div>
</template>

<style>

</style>

<script>

import Hellow from "components/HelloWorld.vue"
export default {
    components:{
        Hellow
    },
    data(){
        return{
            ninjas: [
                {name:'Pong',specialty:'Karate',show:false},
                {name:'Joy',specialty:'UFV',show:false},
                {name:'Ehy',specialty:'ASD',show:false}
            ]
        }
    }
}
</script>
