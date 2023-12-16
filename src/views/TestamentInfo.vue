<template>
  <div>
    <div class="h-20 shadow-sm w-11/12 text-3xl flex items-end pb-5 mx-auto">
      <h1>Kimlik Bilgileri</h1>
    </div>
    <div>
      <div class="border border-black w-11/12 mx-auto flex">
        <div class="w-1/4 bg-blue-200 p-5">s</div>
        <div class="w-3/4 p-5">
          <ul>
            <li>Adı Soyadı:</li>
            <li>TC Kimlik No:</li>
            <li>Eklenme Tarihi:</li>
            <li>Ekleyen Adres:</li>
          </ul>
          <div class="overflow-x-auto">
            <table class="table">
              <!-- head -->
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                <!-- row 1 -->
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                <!-- row 2 -->
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                <!-- row 3 -->
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
