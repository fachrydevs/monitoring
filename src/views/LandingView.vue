<template>
    <div id="landing" class="min-w-full h-screen">
        <header class="h-[3rem]">
            <nav class="flex justify-center items-center h-full">
                <img width="150" src="../../src/assets/img/logo-monitoring.png" alt="">
            </nav>
        </header>
        <div class="flex flex-col place-items-start min-[433px]:place-items-center justify-center gap-2 h-full md:h-[80%] px-2">
            <div class="hidden sm:block ">
                <div class="border border-gray-200 cursor-pointer hover:border-gray-300   transition-colors px-9 py-1 rounded-full">
                    <div class="flex items-center gap-2">
                        <ProfileAbsence/>
                    <div>
                    <h1 id="lorem" class="text-sm  text-gray-500"> <span class="font-regular ">200+</span> Teachers, helped</h1>
                    </div>
                    </div>
                </div>
            </div>
            <div class="min-[433px]:text-center sm:mb-8 mb-4">
                <h1 id="headline-text" class="text-4xl sm:text-5xl w-[calc(100%-6px*2)] max-w-[20ch] font-['Lato_B'] min-[433px]:font-['Lato_SB'] ">Catat Setiap Aktivitas, Tingkatkan Hasil Belajar!</h1>
            </div>
            
            <div class="flex justify-start">
                <router-link to="/register">
                    <button class="bg-purple-600 text-white py-2 px-4 font-semibold rounded-full  hover:bg-purple-700 transition-colors">
                        Get Started
                    </button>
                </router-link>
               
            </div>
        </div>

        <div class="card-container hidden md:flex">
            <div class="cards">
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
            </div>
        </div>
        <footer class="bg-white hidden sm:block w-full min-h-[5rem]">

        </footer>
    </div>
    
</template>

<script setup>
import { onMounted } from 'vue';
import ProfileAbsence from '@/components/Table/ProfileAbsence.vue';
import TestimonialCard from '@/components/TestimonialCard.vue';

onMounted(() => {
    // console.log('hello')
    const logo = document.querySelector('.cards').cloneNode(true)
    document.querySelector('.card-container').appendChild(logo)
})


</script>

<style scoped>
#landing{
    background-image: url('../assets/img/bg-landing.png') ;
    background-repeat: no-repeat;
    background-size: 50rem;
    background-position: left top;
}

.card-container{
    overflow: hidden;
  
    padding-block: 1rem;
    gap: 30px;
    user-select: none;
}
.cards{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    min-width: 100%;
  gap: 30px;

    animation: infinite-scroll 60s linear infinite
}
/* #headline-text{
    font-family: 'Lato SB';
} */
#lorem{
    font-family: 'Lato I';
}
@keyframes infinite-scroll {
   from {
    transform: translateX(0);
   }
   to{
    transform: translateX(-100% );
   }
}
</style>