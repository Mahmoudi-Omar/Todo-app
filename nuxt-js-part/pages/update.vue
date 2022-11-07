<template>
  <section class="vh-100" style="background-color: #eee">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-lg-9 col-xl-7">
          <div class="card rounded-3">
            <div class="card-body p-4">
              <h4 class="text-center my-3 pb-3">{{ task[0].name }}</h4>
              <v-text-field v-model="updateText">
                <v-icon
                  @click="updateSubmit(todoId, updateText)"
                  slot="append"
                  color="red"
                  >mdi-plus</v-icon
                >
              </v-text-field>
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
  name: "UpdatePage",
  data() {
    return {
      updateText: "",
      todoId: this.$route.query.id,
      task: this.$store.state.tasks,
    };
  },
  mounted() {
    this.task = this.$store.state.tasks.filter((e) =>
      e._id.includes(this.todoId)
    );
    console.log(this.task);
  },
  methods: {
    async updateSubmit(id, updateText) {
      let data = {
        id: id,
        name: updateText,
      };
      await axios.put(`http://localhost:5000/todo/update`, data);
      this.$router.push('/')
    },
  },
};
</script>