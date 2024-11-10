<template>
  <aside
    class="min-h-full md:min-h-screen md:bg-white md:outline outline-1 outline-slate-300 max-w-full md:w-[15rem]"
  >
  <div class="flex flex-col justify-between h-full">
    <div class="flex flex-col h-full">
      <div
        class="flex md:flex-col bg-white md:justify-center w-full items-start relative z-50"
      >
        <div
          class="flex items-center gap-3 md:border-b-2 w-full md:justify-center justify-between py-5 md:py-8 px-7 font-semibold text-lg"
        >
          <div class="block md:hidden">
            <button @click="showMenuToggle">
              <i class="ri-menu-5-line"></i>
            </button>
          </div>
          <div class="flex items-center gap-3">
            <img class="hidden sm:block" width="27" src="@/assets/img/Logo.png" alt="" />
            <h1 class="text-purple-600 text-xl block">Monitoring</h1>
          </div>
          <div></div>
        </div>
        <div class="py-8 px-5 hidden md:block">
          <div
            id="profile-container"
            class="hidden md:flex items-center gap-2 justify-start"
          >
            <div id="profile ">
              <img
                width="50"
                class="rounded-full"
                src="@/assets/img/3.png"
                alt=""
              />
            </div>
            <div class="flex flex-col text-start">
              <h4 class="font-semibold">Siti</h4>
              <p class="text-xs font-medium text-gray-500">99855647</p>
            </div>
          </div>
        </div>
        <ul id="nav" class="w-full hidden md:grid gap-5 md:p-[.5rem.7rem]">
          <li>
            <router-link to="/activity"
              ><i class="ri-book-open-line"></i
              ><span class="md:block hidden">Activity</span></router-link
            >
          </li>
          <li>
            <router-link to="/students"
              ><i class="ri-group-3-line"></i
              ><span class="md:block hidden">Students</span></router-link
            >
          </li>
        </ul>
      </div>
      
      <ul
        v-if="showMenu"
        id="menu"
        class="w-full p-3 h-[fit-content] grid bg-white md:hidden gap-5 "
      >
        <li>
          <router-link to="/activity"
            ><i class="ri-book-open-line"></i><span>Activity</span></router-link
          >
        </li>
        <li>
          <router-link to="/students"
            ><i class="ri-group-3-line"></i><span>Students</span></router-link
          >
        </li>
      </ul>
    </div>
    <div class="my-3 hidden md:block">
      <router-link to="/login">
        <h1 class="text-red-400 text-center">
          <i class="ri-logout-box-line"></i>
          Logout</h1>
      </router-link>
      </div>
  </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    showMenuToggle() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped>
#nav a ,
#menu a{
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 10px;
  padding: 0.5em 0.8em;
  width: 100%;
}
#nav ,
#menu{
  font-size: 1.1rem;
  font-weight: 600;
}

#nav a:not(.router-link-exact-active):hover {
  background-color: #ca99f736;
}

#nav a:not(.router-link-exact-active) {
  color: #9233ea65;
  transition: background ease-in-out 250ms;
}
#menu .router-link-exact-active,
#nav .router-link-exact-active {
  color: #9333ea;
  background-color: #ca99f767;
  
}
</style>
