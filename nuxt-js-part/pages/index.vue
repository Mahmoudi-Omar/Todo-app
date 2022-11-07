<template>
<section class="vh-100" style="background-color: #eee;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="card rounded-3">
          <div class="card-body p-4">

            <h4 class="text-center my-3 pb-3">To Do App</h4>
            <form class="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
              <div class="col-12">
                <div class="form-outline">
                  <v-text-field placeholder="Add new task here!..." v-model="text">
                    <v-icon @click="addTodo()" slot="append" color="red">
                      mdi-plus
                    </v-icon>
                </v-text-field>
                </div>
              </div>
            </form>

            <v-text-field placeholder="searching..." v-model="search"></v-text-field>

            <table class="table mb-4">
              <thead>
                <tr>
                  <th scope="col">Todo item</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr  v-for="item in searchTodo" :key="item._id">
                  
                  <td>
                    {{item.name}}
                  </td>
                  <!-- <td v-if="show">
                     <v-text-field v-model="updateText" :value="item.name">
                       <v-icon @click="updateSubmit(item._id,updateText)" slot="append" color="red">
                        mdi-plus
                      </v-icon>
                    </v-text-field> 
                  </td> -->
                  
                    <!---->
                  <td>{{item.status}}</td>
                  <td>
                    <button type="button" @click="removeTodo(item._id)" class="btn btn-danger">Delete</button>
                    <button type="button" @click="completeTodo(item._id)" class="btn btn-success ms-1">Finished</button>
                    <button type="button" @click="updateTodo(item._id)" class="btn btn-warning ms-1">Update</button>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>


<script>
import * as axios from "axios";

export default {
  name: "IndexPage",
  data() {
    return {
      text: "",
      search : "",
      // show : false,
      updateText : ""
    };
  },
  mounted() {
    this.asyncData();
  },
  computed : {
    searchTodo() {
      if (this.search == '') {
        return this.$store.state.tasks
      } else {
      console.log(this.$store.state.tasks.filter((e)=>{
          console.log(e.name)
        }))

      const filteredTasks = this.$store.state.tasks.filter(e => e.name.includes(this.search));
      return filteredTasks
      }
    }
  },
  methods: {
    async asyncData() {
      const tasks = await axios.get("http://localhost:5000/todo");
      this.$store.commit('GET_TASK',tasks.data)
    },
    async addTodo() {
      let data = { name: this.text, status: "in progress" };
      await axios.post("http://localhost:5000/todo", data);
      this.$store.commit('ADD_TASK',data)
      this.text= "",
      this.asyncData()
    },
    async removeTodo(id) {
      await axios.post(`http://localhost:5000/todo/${id}`);
      this.$store.commit('REMOVE_TASK',id)
      this.asyncData()

    },
    async completeTodo(id) {
      await axios.post(`http://localhost:5000/todo/complete/${id}`)
      this.asyncData()
      
    },
    async updateTodo(id) {
      this.$router.push({
          path: '/update',
          query: { id: id },
        });
    }
  },
};
</script>