<script setup>

</script>

<template>
  <section
    class="relative h-screen overflow-hidden bg-gradient-to-br from-[#bbdffd] to-[#e8d2f7]"
  >
    <div
      class="absolute top-[-60%] left-[10%] w-[1800px] h-[1800px] border-[500px] border-[#d8f2ff] rounded-full z-0"
    ></div>
    <div class="relative flex flex-col w-screen h-screen">
      <header class="flex justify-center items-center py-3 z-10">
        <ul class="flex items-center gap-4">
          <li class="text-xl transition hover:text-red-900">
            <a href="#">Home</a>
          </li>
          <li class="text-xl transition hover:text-red-900">
            <a href="#">About</a>
          </li>
          <li class="flex flex-col items-center cursor-pointer transition">
            <img class="w-20" src="/e-logo.svg" alt="" />
            <p class="font-MilkR text-xl">baby ceremony</p>
          </li>
          <li class="text-xl transition hover:text-red-900">
            <a href="#">Categories</a>
          </li>
          <li class="text-xl transition hover:text-red-900">
            <a href="#">Collections</a>
          </li>
        </ul>
      </header>
      <main class="flex flex-cols-2 w-4/5 mx-auto">
        <section class="flex flex-col gap-10 w-1/2 pt-14">
          <button
            class="ml-16 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-[#FF7900] relative bg-[#3b1742] h-16 w-64 border text-left p-3 text-gray-50 text-xl font-base rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
          >
            Смотреть!
          </button>
          <h1 class="text-[45px] leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h1>
          <p class="pl-5 opacity-50 text-[30px]">Lorem ipsum dolor sit amet.</p>
          <div class="flex gap-10 pl-16">
            <button
              class="font-MilkB text-2xl text-center w-12 h-12 border border-red-900 rounded-full pb-1 bg-purple-400/50 hover:bg-purple-400 transition"
            >
              <
            </button>
            <button
              class="font-MilkB text-2xl text-center w-12 h-12 border border-red-900 rounded-full pb-1 bg-purple-400/50 hover:bg-purple-400 transition"
            >
              >
            </button>
          </div>
        </section>
        <h1 class="text-[150px] font-bold opacity-60 w-1/2 text-start">
          S A L E S
        </h1>
      </main>
      <ul
        class="absolute left-[-150px] bottom-[25%] flex gap-7 rotate-[-90deg] text-[25px]"
      >
        <li class="hover:text-red-900 transition"><a href="#">WhatsApp</a></li>
        <li class="hover:text-red-900 transition">
          <a
            target="_blank"
            href="https://www.instagram.com/baby_ceremony_kg?igsh=MWd4YTYwbWtobWNwNQ=="
            >Instagram</a
          >
        </li>
        <li class="hover:text-red-900 transition"><a href="#">Telegram</a></li>
      </ul>
      <img
        class="absolute w-3/5 bottom-0 right-20 z-0"
        src="/kido-transparent.png"
        alt=""
      />
    </div>
  </section>
</template>

<style scoped>
.kido {
  background-image: linear-gradient(#bbdffd, #e8d2f7);
}
</style>
