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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>PAKU JAMUR</td>
            </tr>
            <tr>
              <td>1</td>
              <td>BESI KAYU</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script></script>
