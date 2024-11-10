<template>
  <div class="relative">
    <button @click="openMenuToggle"  class=" transition-colors md:p-[.4rem.8rem] border py-1 px-2 rounded-md bg-transparent hover:bg-gray-700 hover:text-white text-slate-600 border-opacity-60    border-gray-600  focus:ring-gray-100 font-medium   text-center inline-flex items-center ">
      <i class="ri-file-upload-line"></i> 
    </button>
    <!-- Dropdown menu -->
    <div
        v-if="openMenu"
      id="dropdown"
      class="z-10 absolute -translate-x-[60%] bg-white divide-y divide-gray-100 rounded-md shadow w-44 dark:bg-gray-700 translate-y-1"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <li>
          <a
            href="#"
            class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
            <img src="@/assets/img/icons/Excel.png" alt="">
            Excel
            </a
          >
        </li>
        <li>
          <a
            href="#"
            class="flex items-center px-7 gap-2 py-5 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
            <img src="@/assets/img/icons/pdf.png" width="20" alt="">
            PDF
            </a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openMenu: false,
      showModal: false,
    };
  },
  methods: {
    openMenuToggle() {
      this.openMenu = !this.openMenu;
    },
    showModalToggle() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style >
a {
  font-family: "Lato SB";
  /* font-size: .8rem; */
}
</style>