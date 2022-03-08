<script setup>
  import DragBox from '@/components/DragBox.vue';

  let unread = [
    {
      id:1,
      name: '1'
    },
    {
      id:2,
      name:'2'
    },
    {
      id:3,
      name:'3'
    }
  ];

  let reading = [];
  let read = [];

  function moveItem(items) {
    console.log("Logging from parent");
  }

</script>

<template>
  <div class="content">
    <h1>Book List</h1>
    <div class="third">
      <DragBox title="Unread" :items="unread" @move-item="moveItem" />
    </div>
    <div class="third">
      <DragBox title="Reading" :items="reading" />
    </div>
    <div class="third">
      <DragBox title="Read" :items="read"/>
    </div>
  </div>
</template>

<style scoped>

h1 {
  flex: 0 0 100%;
}

</style>