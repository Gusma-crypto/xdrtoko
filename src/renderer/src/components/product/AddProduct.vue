<template>
  <div class="card m-3 shadow rounded">
    <div class="card-body">
      <h5 class="card-title">Tambah Data</h5>
      <div class="mb-3">
        <label for="kategori" class="form-label">Kategori Produk</label>
        <input type="text" class="form-control" id="kategori" placeholder="Masukan Kategori " />
      </div>
      <div class="mb-3">
        <label for="deskripsi" class="form-label">Deskripsi</label>
        <!-- <textarea class="form-control" id="textarea" rows="3"></textarea> -->
        <Editor
          v-model="value"
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
</template>
<script>
import Editor from 'primevue/editor'
export default {
  components: {
    Editor
  }
}
</script>
<style></style>
