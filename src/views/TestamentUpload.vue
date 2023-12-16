<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div
      class="shadow-xl p-2 shadow-slate-500 border-black flex flex-col items-center justify-center gap-3"
      style="width: 540px"
    >
      <div>
        <img src="../assets/identity-logo.png" alt="" />
      </div>
      <h1>Vasiyet olustur</h1>
      <div class="w-full">
        <label class="form-control w-full max-w-sm mx-auto">
          <div class="label">
            <span class="label-text">Açık Anahtar</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </label>
      </div>
      <div class="w-full">
        <div
          class="border border-dashed flex justify-center max-w-sm mx-auto items-center"
          style="height: 200px"
        >
          <label class="form-control w-full mx-auto">
            <input
              type="file"
              class="file-input file-input-bordered w-full max-w-xs mx-auto"
            />
          </label>
        </div>
      </div>
      <div class="w-full">
        <label class="form-control w-full max-w-sm mx-auto">
          <div class="label">
            <span class="label-text">Erişim Yetkisi Verilen Adresler</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </label>
      </div>
      <div>
        <button class="btn btn-primary btn-wide">Oluştur</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
