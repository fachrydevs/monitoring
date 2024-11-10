<template>
  <div>
    <button @click="showModalToggle"  class=" transition-colors md:p-[.4rem.8rem] border py-1 px-2 rounded-md bg-purple-600 hover:bg-purple-700 text-white  border-gray-200  focus:ring-gray-100 font-medium   text-center inline-flex items-center ">
        <i class="ri-add-fill"></i>
    </button>

    <div    
    v-if="showModal"
    id="crud-modal"
    tabindex="-1"
    aria-hidden="true"
    class="overflow-y-auto overflow-x-hidden
     bg-white fixed top-0 right-0 left-0 z-50 justify-center  items-center w-full md:inset-0 max
     h-full"
  >
    <div class="relative translate-y-[3%] p-4 w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow ">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-lg font-semibold text-gray-900">
            Add new Activity
          </h3>
          <button
          @click="showModalToggle"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-purple-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
            data-modal-toggle="crud-modal"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <form class="p-4 md:p-5">
          <div class="grid gap-4 mb-4 grid-cols-2">
            <div class="col-span-2">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 "
                >Teacher Name</label
              >
              <input
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Teacher name"
                required=""
              />
            </div>
            <div class="col-span-1">
              <label
                for="date"
                class="block mb-2 text-sm font-medium text-gray-900 "
                >Date</label
              >
              <input
                type="date"
                name="date"
                id="date"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder=""
                required=""
              />
            </div>
            <div class="col-span-1">
              <label
                for="activity"
                class="block mb-2 text-sm font-medium text-gray-900 "
                >Activity</label
              >
              <input
                type="text"
                name="activity"
                id="activity"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Input Activity"
                required=""
              />
            </div>
           
            <div class="col-span-2">
              <label
                for="description"
                class="block mb-2 text-sm font-medium text-gray-900 "
                >Activity Description</label
              >
              <textarea
                id="description"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Write activity description here"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            class="text-white inline-flex items-center bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            <svg
              class="me-1 -ms-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Add new activity
          </button>
        </form>
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
methods:{
    showModalToggle(){
        this.showModal = !this.showModal
    }
}
}
</script>

<style>

</style>