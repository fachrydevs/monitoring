<template>
  
    <button @click="showInputModal" data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition-colors text-white rounded-lg" type="button">
       Import <span class="sm:block hidden">Students</span>
    </button>
    
    <div v-if="showModal" id="popup-modal" tabindex="-1" placement="center" class="overflow-y-auto overflow-x-hidden  bg-black bg-opacity-75  md:block fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full">
        <div class="relative p-4 w-full max-w-lg max-h-full">
            <div  class="relative bg-white bg-opacity-80  rounded-lg shadow dark:bg-gray-700 md:translate-x-[100%] translate-y-[70%]">
                <button @click="showInputModal" type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="flex items-center justify-center w-full">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">.xsls, .xsl  </p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                </div> 
            </div>
        </div>
    </div>
    
    </template>
    
    <script>
    export default {
        data(){
            return{
                showModal: false
            }
        },
        methods: {
            showInputModal(){
                this.showModal = !this.showModal
                console.log('aww')
            }
        }
    }
    </script>
    
    <style>
    button[data-modal-target="popup-modal"]{
        padding: 0.4rem 1rem;
        font-weight: 600;
    }
    </style>