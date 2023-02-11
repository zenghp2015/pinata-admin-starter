<script setup lang="ts"></script>
<template>
  <div class="theme-container">
    <t-card :bordered="false">
      <div class="card-container">
        <Settings />
      </div>
    </t-card>
  </div>
</template>
<style scoped>
.card-container {
  max-width: 420px;
  min-width: 380px;
  margin: 0 auto;
}
</style>
