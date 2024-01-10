<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
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
                  <tr v-for="(tutorial, index) in tutorials" :key="tutorial.id">
                    <td>{{index + 1}}</td>
                    <td>{{tutorial.title}}</td>
                    <td>{{tutorial.descriptions}}</td>
                    <td>
                      <button class="m-1 btn btn-sm btn-success" @click="editTutorial(tutorial)"><i class="fas fa-pencil"></i></button>
                      <button class="m-1 btn btn-sm btn-danger" @click="removeTutorial"><i class="fas fa-trash"></i></button> 
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card m-3 shadow rounded">
          <div class="card-body">
            <h5 class="card-title">Edit Data</h5>
            <div class="mb-3">
              <label for="kategori" class="form-label">Kategori Produk</label>
              <input type="text" v-model="tutorial.title" class="form-control" id="kategori" placeholder="Masukan Kategori " />
            </div>
            <div class="mb-3">
              <label for="deskripsi" class="form-label">Deskripsi</label>
              <!-- <textarea class="form-control" id="textarea" rows="3"></textarea> -->
              <Editor
                v-model="tutorial.descriptions"
                class="form-control"
                id="textarea"
                editorStyle="height: 120px; font-size:20px"
              />
            </div>
            <div class="mb-3">
              <label for="kategori" class="form-label">Kategori Produk</label>
              <input type="file" class="form-control" id="kategori" placeholder="Masukan Kategori " />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Editor from 'primevue/editor'
import axios from 'axios'
// import editTutorialForm from './EditProduct.vue'

 const apiclient = axios.create({
    baseURL:'http://localhost/api',
    headers:{
      "Content-type": "application/json",
    }
 })
export default{
  name:'ListProduct',
  components:{
    Editor,
  
  },  
  data(){
    return {
      tutorials:[],
      tutorial:{
                   id: '',
                   title: '',
                   descriptions: '',
        },
      editingTutorial: null, // Tutorial data to be edited
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
          console.log(response.data)
      } catch (error) {
          console.log(error)
      }  
    },
    editTutorial(tutorial){
      this.tutorial =tutorial
    },
  }
}
</script>
