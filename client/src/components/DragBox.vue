<script setup>

  import {computed, ref, reactive} from "vue";
  import axios from "axios";

  /* props passed in from parent */
  const props = defineProps({
    title: String,
    list: String,
    items: Array,
    lists: Array
  });

  const emits = defineEmits(['reset']);

  /* use prop as initial reference value and pass to variable for reactivity */
  const reactiveItems = reactive(props.items);

  /* filter list for v-for */
  const filteredItems = computed(() => {
    let filtered = reactiveItems.filter(function(item, index) {
      if(item.list == props.list) {
        return item;
      }
    });

    return filtered;
  });

  /* filter list for v-for */
  const filteredLists = computed(() => {
    let filtered = props.lists.filter(function(item, index) {
      if(item != props.list) {
        return item;
      }
    })

    return filtered;
  });

  const searchBox = ref("");

  /* prevent default html form submission action */
  /* form is used for semantic and accessible markup */
  function formSubmit(event) {
    event.preventDefault;
  }

  /* take value of input box and add to reactiveItems array */
  function addItem() {

    let nextId = reactiveItems[reactiveItems.length -1].id + 1;

    let newBook = {
      id: nextId, 
      name: searchBox.value,
      checked: false,
      list: props.list
    }

    reactiveItems.push(newBook);

    searchBox.value = "";
  }

  /* move selected from one list to another */
  function moveItem(selectList) {
    reactiveItems.forEach(function(element, index) {
      if(element.checked == true) {
        element.list = selectList;
      }
    });

    /* emit to parent to reset book list */
    emits('reset');
  }

  function fetchBook() {
    axios({
      method: 'get',
      url: 'http://',
      responseType: ''
    })
      .then(function (response) {
        console.log(response.data)
      });
  }

</script>

<template>
  <div class="list-box">
    <h2>{{title}}</h2>
    <form @submit.prevent="formSubmit">
      <nav class="align-right">
        <button :key="selectList" v-for="selectList in filteredLists" @click="moveItem(selectList)">Move to {{selectList}}</button>
      </nav>
      <div class="search">
        <input id="addNewInput" type="text" v-model="searchBox"/>
        <button @click="addItem">+</button>
      </div>
      <hr />
      <ul>
        <li class="item" :key="item.id" v-for="item in filteredItems" :class="{'selected': item.checked == true }" @click="item.checked = !item.checked">
          <input id="{{item.id}}" type="checkbox" :key="item.id" :value="item.id" v-model="item.checked">
          <label :for="item.id">{{item.name}}</label>
        </li>
      </ul>
    </form>
  </div>
</template>

<style scoped>

h2 {
  text-transform: capitalize;
}

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
  margin: 0 0 0 0.2em;
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

li input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.search {
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding: 0;
  margin: 1em 0;
}

.search input {
  flex: 0 1 80%;
  margin: 0 0.2em 0 0;
  padding: 0.5em;
}

.search button {
  flex: 0 1 20%;
}

hr {
  margin: 1em 0;
}

</style>
