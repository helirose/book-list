<script setup>
  import DragBox from '@/components/DragBox.vue';

  const lists = [
    'unread',
    'reading',
    'read'
  ];

  const books = [
    {
      id:1,
      name: '1',
      checked: false,
      list: lists[0]
    },
    {
      id:2,
      name:'2',
      checked: false,
      list: lists[0]
    },
    {
      id:3,
      name:'3',
      checked: false,
      list: lists[0]
    }
  ];

  function resetChecked() {
    books.forEach(function(book, index) {
      book.checked = false;
    });
  }

</script>

<template>
  <div class="content">
    <h1>Book List</h1>
    <div class="third">
      <DragBox :title="lists[0]" :items="books" :list="lists[0]" :lists="lists" @reset="resetChecked"/>
    </div>
    <div class="third">
      <DragBox :title="lists[1]" :items="books" :list="lists[1]" :lists="lists" @reset="resetChecked"/>
    </div>
    <div class="third">
      <DragBox :title="lists[2]" :items="books" :list="lists[2]" :lists="lists" @reset="resetChecked"/>
    </div>
  </div>
</template>

<style scoped>

h1 {
  flex: 0 0 100%;
}

</style>