<template>
    <div class="home">
        <div class="header">
            <div class="text">
                <h1>It’s time for a <h2>Drink</h2></h1>    
            </div>
            <img src="../assets/images/topImg.svg" alt="">
        </div>

        <div class="content">
            <p>The one-stop to find amazing drink mixes for any occassion.</p>
            <button>Get Started ></button>
            <div class="img">
                <img src="../assets/images/cup.svg" alt="">
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .home{
        background-color:#FEF9E4;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: start;
        height: 100vh;
        gap: 10px;
    }

    .header{
        width: 100%;
        display: flex;
        justify-content: end;
    }

    .text{
        display: flex;
        flex-direction: column;
        margin-top: 50px;
    }

    .header h1{
        font-family: 'poppins-semiBold';
        font-size: 34px;
        color: #1E2742;
    }
    .header h2{
        font-family: 'freestyle';
        font-size: 50px;
        color: #F66372;
    }

    .content{
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        text-align: justify;
        padding: 40px;
        background-image: url('../assets/images/diagonal.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .content p{
        font-family: 'raleway';
        font-size: 16px;
        color: #010101;
        opacity: 0.5;
        margin-bottom: 20px;
    }

    .content button{
        height: 58px;
        width: 180px;
        border-radius: 40px;
        background-color: #1E2742;
        color: white;
        font-family: 'poppins-medium';
    }

    .content .img{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    

</style>