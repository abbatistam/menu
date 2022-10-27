<template>
    <div class="slider">
        <div class="header">
            <h1>Cocteles</h1>
        </div>

        <div class="sliderContent">
            <div class="coctailCard">
                <div class="first"></div>
                <div class="middle"></div>
                <div class="last">
                    <div class="cardContent">
                        <div class="text">
                            <h1>Bluee</h1>
                            <h2>Moon</h2>
                        </div>  
                        <img class="coctailImg" src="../assets/images/blueMoon.svg" alt="">
                        <div class="content">
                            <div class="type">
                                <img src="../assets/images/coctail.svg" alt="">
                                <h4>Coctel</h4>        
                            </div>                            
                            <div class="price">
                                <h4>$ 500.00 CUP</h4>
                            </div>
                            <div class="rating">
                                <img src="../assets/images/heart.svg" alt="">
                                <h4>500</h4>
                                <Calification />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="coctailCard">
                <div class="first"></div>
                <div class="middle"></div>
                <div class="last">
                    <div class="cardContent">
                        <div class="text">
                            <h1>Mojito</h1>
                            <h2></h2>
                        </div>  
                        <img class="coctailImg" src="../assets/images/blueMoon.svg" alt="">
                        <div class="content">
                            <div class="type">
                                <img src="../assets/images/coctail.svg" alt="">
                                <h4>Coctel</h4>        
                            </div>                            
                            <div class="price">
                                <h4>$ 300.00 CUP</h4>
                            </div>
                            <div class="rating">
                                <img src="../assets/images/heart.svg" alt="">
                                <h4>360</h4>
                                <Calification />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
    import Calification from './Calification.vue'
</script>

<style scoped>

    .slider{
        @apply flex flex-col w-screen
    }

    .header{
        @apply flex w-full
    }

    .header h1{
        @apply font-['raleway-semiBold'] text-lg text-color-principal
    }

    .sliderContent{
        @apply flex gap-10 w-full absolute
    }

    .coctailCard{
        @apply flex justify-center items-center relative w-[250px] h-[350px];
        top: 40px;
        left: 70px;
    }

    .coctailCard:nth-of-type(2){
        transform: scale(0.8);
        left: 100px
    }

    .first{
        @apply absolute w-[160px] h-[246px] bg-first-color rounded-2xl top-[130px];
    }

    .middle{
        @apply absolute w-[204px] h-[289px] bg-middle-color rounded-2xl top-[70px];
    }

    .last{
        @apply absolute w-[248px] h-[334px] bg-last-color rounded-2xl p-2.5 py-5;
    }

    .cardContent{
        @apply flex flex-col w-full h-full
    }

    .text{
        @apply w-full h-[55%]
    }

    .text h1{
        @apply w-[81px] h-[44px] font-['anton'] not-italic font-normal text-5xl leading-10 text-white;
    }

    .text h2{
        @apply font-['anton'] not-italic font-normal text-5xl leading-10 bg-clip-text text-white opacity-50; 
    }

    .coctailImg{
        @apply absolute left-[130px] top-[10px] ;
    }

    .content{
        @apply w-full h-[45%] px-2.5 flex flex-col
    }

    .type{
        @apply flex w-full h-[33.3%]  items-end font-['raleway-semiBold'] text-white text-xl gap-1.5
    }

    .price{
        @apply flex w-full h-[33.3%]  items-center font-['raleway-semiBold'] text-white text-xl
    }

    .rating{
        @apply flex w-full h-[33.3%]  items-center font-['raleway-semiBold'] text-white text-xl gap-1.5
    }
    .rating h4{
        @apply mr-10;
    }

</style>