<template>
    <div class="flex w-full h-screen">
        <div class="max-w-xs w-[calc(100%-1rem*2)] md:basis-1/2 mx-auto flex flex-col justify-center h-full">
        <div id="header">
            <div class="py-9"><img width="30" src="../assets/img/Logo.png" alt=""></div>
            <div class="grid gap-3">
                <h1 class="text-2xl"><slot name="title"></slot></h1>
                <p class="text-xs text-slate-500 font-semibold">Data belajar siswa, terorganisir dan tersimpan aman</p>
            </div>
        </div>
        <div class="py-2">
            <p class="w-full text-center text-xs font-light text-slate-500 border-b border-slate-500 leading-[.1em]"><span><slot name="line"></slot></span></p>
        </div>
        <form action="" class="py-1">
            <slot name="input"></slot>
            <label for="email">Email</label>
            <input class="py-2 px-3 text-xs" id="email" type="text" placeholder="mail@example.com">
            <label for="password">Password</label>
            <input id="password" class="py-2 px-3 text-xs" type="password" placeholder="********">
            <button id="smb" class=" bg-purple-600 hover:bg-purple-700 transition-colors w-full py-2 font-bold text-white rounded-full" type="submit"><slot name="submit"></slot></button>
        </form>
        <slot name="text-redirect"></slot>
    </div>
        <div id="image" class="hidden md:block md:basis-1/2 w-full"></div>
    </div>
    
</template>

<script>
export default {
name: 'Form'
}
</script>

<style scoped>
#image{
    background-image: url(@/assets/img/background-form.jpg);
    background-size: cover;
}
h1,p{
    font-family: 'Lato SB';
}
p{
    margin: 10px 0 20px;
    font-weight: 600; 
}
p span { 
    background:#F9FAFB; 
    padding:0 10px; 
}
input[type='text'],
input[type='password']{
    width: 100%;
    outline: solid 1px #64748b;
    border-radius: 10px;
    caret-color: #64748b;
    margin-bottom: 1.5rem
}
input[type='password']{
    margin-bottom: 2.5rem;
}
label{
    font-family: 'Lato B';
    font-size: .8rem;
}
label::after{
    content: '*';
    color: #9333ea;
}
a{
    color: #fff !important;
    font-family: 'Lato SB'; 
}
</style>