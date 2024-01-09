<template>
  <div class="card shadow m-3">
    <div class="card-body">
      <form class="row g-3">
        <div class="col-auto">
          <label for="inputPencarian" class="visually-hidden">Pencarian</label>
          <input
            type="text"
            class="form-control"
            id="inputPencarian"
            placeholder="Cari data ... "
          />
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-success mb-3">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </form>
      <div class="table-responsive">
        <table class="table">
          <thead class="table-success">
            <tr>
              <th>NO</th>
              <th>Barang</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="tutorial in tutorials" :key="tutorial.id">
              <td>{{tutorial.title}}</td>
              <td>{{tutorial.descriptions}}</td>
              <td>
                <button class="m-1 btn btn-sm btn-success" @click="editTutorial"><i class="fas fa-pencil"></i></button>
                <button class="m-1 btn btn-sm btn-danger" @click="removeTutorial"><i class="fas fa-trash"></i></button> 
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
 const apiclient = axios.create({
    baseURL:'http://localhost/api',
    headers:{
      "Content-type": "application/json",
    }
 })
export default{
  name:'ListProduct',
  data(){
    return {
      tutorials:[],
    }
  },
  mounted(){
    this.tampilproduct();
  },
  methods:{
    async tampilproduct(){
      try {
          const response = await apiclient.get('/tutorial')
          this.tutorials = response.data
      } catch (error) {
          console.log(error)
      }  
    }
  }
}
</script>
