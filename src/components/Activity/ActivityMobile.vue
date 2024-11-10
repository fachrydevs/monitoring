<template>
    <div id="grid-activity-mobile" class="grid gap-5 py-8 place-items-center grid-cols-1 sm:hidden">
        <div v-for="(item, index) in items" :key="index" class="w-[calc(100%-1rem*2)] bg-white border-gray-200 rounded-lg shadow ">
            <div class="flex items-center w-full py-4 px-6 justify-between">
                <span class="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ">{{ item.name }}</span>
                <div class="inline-flex relative ">
                    <button
                        @click="showDropDownToggle(index)"
                        id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 hover:bg-gray-100 -700 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5" type="button">
                        <span class="sr-only">Open dropdown</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                        </svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div v-if="item.showDropDown" id="dropdown" class="z-10 absolute mt-8 -translate-x-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-28 ">
                        <ul class="py-2" aria-labelledby="dropdownButton">
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Detail</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-red hover:bg-gray-100">Delete</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2 py-4 px-6">
                <div>
                    <h5 class="mb-1 text-xl font-medium text-gray-900">Learn Vue</h5>
                    <span class="text-sm text-gray-500">{{ truncatedText }}</span>
                </div>
                <div class="flex justify-between mt-4 md:mt-6">
                    <span class="text-sm text-gray-500">
                        <i class="ri-calendar-2-line"></i>
                        Tuesday, 26 January</span>
                    <ProfileAbsence/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ProfileAbsence from '../Table/ProfileAbsence.vue';

export default {
    data() {
        return {
            items: [
                { name: 'Siti Lorem', showDropDown: false },
                { name: 'Siti Lorem', showDropDown: false }
            ],
            originalText: '',
            truncatedText: '',
            maxLength: 40,
        }
    },

    mounted() {
        this.fetchData();
    },

    methods: {
        showDropDownToggle(index) {
            this.items[index].showDropDown = !this.items[index].showDropDown;
            // Close other dropdowns
            this.items.forEach((item, i) => {
                if (i !== index) item.showDropDown = false;
            });
        },
        async fetchData() {
            try {
                const response = await axios.get('https://api.kanye.rest/'); // Replace with your API URL
                this.originalText = response.data.quote; // Assuming the response data is a string
                this.truncateText();
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        truncateText() {
            if (this.originalText.length > this.maxLength) {
                this.truncatedText = this.originalText.substring(0, this.maxLength) + '...'; // Add ellipsis if truncated
            } else {
                this.truncatedText = this.originalText;
            }
        },
    },
    components: {
        ProfileAbsence
    }
}
</script>

<style scoped>
#grid-activity-mobile {
}
</style>