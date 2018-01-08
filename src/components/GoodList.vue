<template>
    <div>
        <ul>
            <li v-for="item in goods">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default{
        data(){
            return{
                  
            }
        },
        computed: mapGetters({
            goods: "productsList"
        }),
        created() {
            this.$store.dispatch("getAllProducts")
        },
        methods: {

        }
    }

</script>

<style scoped>
    
</style>
