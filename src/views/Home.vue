<script setup>
  import DragBox from '@/components/DragBox.vue';

  import {ref, computed} from "vue";

  const save = ref({});

  const slots = computed(() => {
    let savesArray = [];

    for(let i=0;i<=10;i++) {
      savesArray.push({
          number: i,
          name: 'Slot ' + i,
          books: []
        });
    }

    /* Get cookie and find user saves from database */

    /* Overwrite preset slots with user saves */

    return savesArray;
  });

  const lists = [
    'unread',
    'reading',
    'read'
  ];

  const books = [
    {
      id:1,
      name: 'one',
      checked: false,
      list: lists[0]
    },
    {
      id:2,
      name:'two',
      checked: false,
      list: lists[0]
    },
    {
      id:3,
      name:'three',
      checked: false,
      list: lists[0]
    }
  ];

  const books2 = [
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

  function saveSlot(number) {

  }

  function loadSlot(number) {

  }

  function deleteSlot(number) {
    /* Delete slots[].number from database */

    /* Reset selected slot object */
    slots.forEach(function(element, index) {
      if(element.number == number) {
        element.name = "Slot " + number;
        elemnt.books = [];
      }
    });
  }

</script>

<template>
  <div class="content">
    <h1>Book List</h1>
    <div class="top">
      <form id="save-form">
        <select v-model="books">
          <option disabled value="">Please select one</option>
          <option :key="slot.number" v-for="slot in slots">{{slot.name}}</option>
        </select>
        <input type="text" v-model="save.name">
        <button @click="saveSlot(slot.number)">Save</button>
        <button @click="loadSlot(slot.number)">Load</button>
        <button @click="deleteSlot(slot.number)">Delete</button>
      </form>
    </div>
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

#save-form * {
  padding: 0.5em;
  margin: 0 0 0 0.2em;
}

</style>