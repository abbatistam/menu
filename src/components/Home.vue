<template>
    <div class="home">
        <div class="inverted-border-radius">

        </div>
        <div class="inverted-border-radius">

        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .home{
        background-color: #2d292f;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .inverted-border-radius {
        position: relative;
        height: 80%;
        width: 650px;
        background-color: #F66969;
        border: 2px solid white;
    }

    .inverted-border-radius:nth-of-type(2) {
        position: relative;
        height: 80%;
        width: 650px;
        background-color: #F66969;
        border: 2px solid white;
    }

    .inverted-border-radius::before {
        content: "";
        position: absolute;
        background-color: #2d292f;
        left: -25px;
        top: -25px;
        height: 50px;
        width: 50px;
        border-radius: 40px;
        
    }


    .inverted-border-radius::after {
        content: "";
        position: absolute;
        background-color: #2d292f;
        bottom: -25px;
        left: -25px;
        height: 50px;
        width: 50px;
        border-radius: 40px;
    }


</style>