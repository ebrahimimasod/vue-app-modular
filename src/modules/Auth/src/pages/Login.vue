<template>
  <section>
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Login</h2>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Username</span>
          </label>
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" class="input input-bordered w-full max-w-xs" />
        </div>


        <div class="card-actions justify-end mt-4">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>

</script>