<template>
  
    <button id="showModal" @click="showModalToggle" type="button" data-modal-target="crypto-modal" data-modal-toggle="crypto-modal" class="text-gray-900 transition-colors md:p-[.4rem.8rem] border p-1 bg-white hover:bg-gray-100 border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg     text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
        Export All Data
    </button>
    
    <!-- Main modal -->
    <div v-if="showModal"  id="crypto-modal" tabindex="-1" aria-hidden="true" class="overflow-y-auto bg-black overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full bg-opacity-75 md:inset-0  max-h-full">
        <div class="relative p-4 w-full translate-x-[100%] translate-y-[50%] max-w-md max-h-full">
            <!-- Modal content -->
            <div class="relative  bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center  justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        Export Activity To
                    </h3>
                    <button @click="showModalToggle" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crypto-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-4 md:p-5">
                    <ul class="my-4 space-y-3">
                        <li>
                            <a href="#" class="flex items-center p-1 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                <img  src="@/assets/img/icons/Excel.png" alt="">
                                <span class="flex-1 ms-3 whitespace-nowrap">Excel</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center gap-2 p-4 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                <img width="20" src="@/assets/img/icons/Powerpoint.png" alt="">
                                <span class="flex-1 ms-3 whitespace-nowrap">PDF</span>
                            </a>
                        </li>
                    </ul>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </template>
    
    <script>
    export default {
        data(){
            return{
                showModal : false
            }
        },
    methods:{
        showModalToggle(){
            this.showModal = !this.showModal
        }
    }
    }
    </script>
    
    <style scope>
    #showModal{
      /* border-radius: 999px; */
      background: #f9fafb;
      color: black;
    }
    #showModal:hover{
        background: black;
        color: white;
    }
   
    </style>