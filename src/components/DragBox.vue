<script setup>

  import { ref, reactive } from "vue";

  /* props passed in from parent */
  const props = defineProps({
    title: String,
    items: Array
  });

  /* events emitted back to parent */
  const emit = defineEmits([
    'move-item'
  ]);

  const test = [
    {id: 1,
    name: '1'},
    {id: 2,
    name: '2'},
    {id: 3,
    name: '3'},
    {id: 4,
    name: '4'},
    {id: 5,
    name: '5'},
  ]

  /* use prop as initial reference value and pass to variable for reactivity */
  const localItems = ref(props.items);
  const checkedItems = ref([]);

  console.log(checkedItems.value);

  /* prevent default html form submission action */
  /* form is used for semantic and accessible markup */
  function formSubmit(event) {
    event.preventDefault;
  }

  /* take value of input box and add to localItems array */
  function addItem() {
    let searchBox = document.getElementById('addNewInput');
    localItems.value.push({id: 56, name: searchBox.value});
    console.log(localItems.value);
  }

  /* move selected from one list to another */
  function moveItem() {

    console.log(checkedItems);
    console.log(checkedItems.value);

    // const newLocalItems = localItems.value.filter(function(item) {
      
      // var checked = false;

      // checked.forEach(function(checkedItem) {
      //   console.log(checkedItem);
      // });
      
      
      /*(function(checkedItem) {
        if(item.id == checkedItem.id) {
          checked = true;
        }
      })

      if (checked == false) {
        return item;
      }
    });*/

    // console.log(newLocalItems);

    // emit('move-item', checkedItems);
  }

  /* check whether item already exists in array */
  function checkExisting() {
  }

  function checkChecked() {
  }
</script>

<template>
  <div class="list-box">
    <h2>{{title}}</h2>
    <form @submit.prevent="formSubmit">
      <nav class="align-right">
        <button @click="moveItem">Move</button>
      </nav>
      <div class="search">
        <input id="addNewInput" name="addNewInput" type="text"/>
        <button @click="addItem">+</button>
      </div>
      <hr />
      <ul>
        <li class="item" :key="item.id" v-for="(item) in localItems" :class="{'selected': checkedItems.includes(item.id) }">
          <input id="{{item.id}}" type="checkbox" :key="item.id" :value="item.id" v-model="checkedItems">
          <label :for="item.id">{{item.name}}</label>
        </li>
      </ul>
    </form>
  </div>
</template>

<style scoped>

.list-box {
  background: #ffffff;
  border: 1px solid #000000;
  margin: 0 0 1em 0;
  padding: 1em;
}

.list-box nav {
  padding: 1em 0;
}

.list-box nav button {
  margin: 0 0 0 0.5em;
}

ul {
  width: 100%;
  padding: 0;
  margin: 0;
  text-indent: 0;
  list-style-type: 0;
}

li {
  width: 100%;
  padding: 1em;
  display: block;
  border: 1px solid #000000;
  list-style-type: none;
  margin: 0 0 1em 0;
  text-indent: 0;
}

li:hover {
  cursor: pointer;
}

/* li input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
} */

.search {
  width: 100%;
  display: block;
  padding: 0;
  margin: 1em 0;
}

.search input {
  width: 80%;
  padding: 0.5em;
  display: inline-block;
}

.search button {
  width: 15%;
  height: 100%;
  position: absolute;
  right: 0;
  display: inline-block;
}

hr {
  margin: 1em 0;
}

</style>
