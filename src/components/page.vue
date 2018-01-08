<template>
        <div class="box">
            <product-list/>
            <div class="div1">
                <label for="div1-inp">总价格:</label>
                <input type="text" readonly="readonly" id="div1-inp" class="div1-inp">
            </div>
            <div class="div2">
                <label for="div1-inp">单价:</label>
                <input type="text" readonly="readonly" id="div2-inp" class="div2-inp">
            </div>
            <div class="div3">
                <div class="div-box">
                    <button class="btn-reduce" @click="reduce()">-</button>
                    <input type="number" value="1" class="num-inp">
                    <button class="btn-add" @click="add()">+</button>
                </div>
            </div>
        </div>
</template>

<script>
    import ProductList from "./GoodList"

    export default{
        components:{ ProductList },
        data(){
            return{

            }
        },
        computed: {
            
        },
        methods: {
            reduce: function(){

            },
            add: function(){
              
            }
        }
    }
</script>

<style scoped>
    .div1{
        margin-top: 100px; 
    }
    .div2{
        margin-top: 10px;
    }
    .div3{
        margin-top: 30px;
    }
    .box{
        height: auto;
        overflow: hidden;
        width: 80%;
        margin: 0 auto;
        margin-top: 50px;
    }
    .num-inp{
        width: 100px;
        margin: 5px 5px;
        border: 1px solid #333333;
    }
    .btn-reduce, .btn-add{
        width: 50px;
        height: 20px;
    }
</style>
