<template>
    <div class="menu">
        <div class="header">
            <img src="../assets/images/menu.svg" alt="">
        </div>

        <div class="content">
            <h1>¿ Qué desea ordenar ?</h1>
            <input type="text" placeholder="Buscar">

            <div class="categoriesSlider">
                <div class="sliderHeader">
                    <h1>Categorías</h1>
                    <button>Ver Todas</button>
                </div>

                <div class="slider">
                    <div class="card">
                        <img src="../assets/images/coctel.svg" alt="">
                        <h1>Cocteles</h1>
                        <h2>10 cocteles</h2>
                    </div>
                    <div class="card">
                        <img src="../assets/images/coctel.svg" alt="">
                        <h1>Cocteles</h1>
                        <h2>10 cocteles</h2>
                    </div>
                    <div class="card">
                        <img src="../assets/images/coctel.svg" alt="">
                        <h1>Cocteles</h1>
                        <h2>10 cocteles</h2>
                    </div>
                </div>
            </div>

            <Slider />

        </div>
    </div>
</template>

<script setup lang="ts">
    import Slider from './Slider.vue'
</script>

<style scoped>
    .menu{
        height: 100vh;
        width: 100vw;
    }

    .header{
        display: flex;
        align-items: center;
        padding: 20px;
        height: 64px;
    }

    .content{
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        text-align: justify;
        gap: 10px;
        padding: 0px 40px 40px 40px;

    }

    .content h1{
        font-family: 'poppins-semiBold';
        font-size: 24px;
        color: #1E2742;

    }

    .sliderHeader{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .sliderHeader h1{
        font-family: 'raleway-semiBold';
        font-size: 18px;
        color: #1E2742;
    }

    .sliderHeader button{
        height: 24px;
        padding: 1px 5px 1px 5px;
        border-radius: 8px;
        border: 1px solid rgba(251, 125, 138, 0.25);
        font-family: 'raleway-semiBold';
        font-size: 12px;
        color: #FB7D8A;
    }

    .slider{
        display: flex;
        align-items: center;
        width: 100%;
        gap: 10px;
    }

    .card{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #FEF9E4;
        border-radius: 12px;
        height: 112px;
        width: 86px;
        cursor: pointer;
    }

    .card h1{
        font-family: 'raleway-regular';
        font-size: 14px;
        color: #1E2742;
    }

    .card h2{
        font-family: 'raleway';
        font-size: 11px;
        color: #FB7D8A
    }

    .coctailSlider{

    }

    
</style>