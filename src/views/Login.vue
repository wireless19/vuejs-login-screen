<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const showPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const handleSubmit = () => {
  console.log({ email: email.value, password: password.value });
};
</script>

<template>
  <div class="min-h-screen flex">
    <!-- LEFT SIDE -->
    <div class="hidden md:flex w-1/2 bg-[#F8EAFF] p-10 flex-col">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <img
          src="/images/logo.png"
          alt="logo" class="w-[140px] h-[70px]"
        />
      </div>

      <!-- Image -->
      <div class="mt-40 flex flex-col items-center">
        <img
          src="/images/login-image.png"
          alt="team"
          class="rounded-2xl w-full max-w-2xl object-cover"
        />

        <h2 class="mt-6 text-lg font-semibold text-[#61227D]">
          Team Achieve
        </h2>
        <p class="text-[#5E5E5E] text-center mt-2">
          Your perfect solution for funding your desires
        </p>
      </div>
    </div>

    <!-- RIGHT SIDE -->
    <div class="flex w-full md:w-1/2 items-center justify-center px-6">
      <div class="w-full max-w-md">
        <div class="w-full flex flex-col items-center justify-center text-center">
<img
          src="/images/logo.png"
          alt="logo" class="lg:hidden w-[140px] h-[70px] mb-5"
        />
          <h1 class="text-3xl font-bold text-[#61227D] mb-2">
            Welcome Back
          </h1>
          <p class="text-gray-500 mb-6">
            Enter your email address and password to access your account.
          </p>
        </div>

        <!-- FORM -->
        <form @submit.prevent="handleSubmit" class="space-y-5">
          <!-- Email -->
          <div>
            <label class="block text-sm font-medium mb-1">
              Email Address <span class="text-red-500">*</span>
            </label>
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <!-- Password -->
          <div>
            <label class="block text-sm font-medium mb-1">
              Password <span class="text-red-500">*</span>
            </label>

            <div class="relative">
  <input
    :type="showPassword ? 'text' : 'password'"
    v-model="password"
    placeholder="Enter your password"
    class="w-full border rounded-lg px-4 py-3 pr-14 focus:outline-none focus:ring-2 focus:ring-purple-500"
  />

  <!-- Toggle -->
  <button
    type="button"
    @click="togglePassword"
    class="absolute right-0 top-0 h-full px-4 flex items-center border-l bg-[#F7F7F7] rounded-r-lg"
  >
    <img
      src="/images/eye-icon.png"
      alt="toggle password"
      class="w-[20px] h-[15px]"
    />
  </button>
</div>
          </div>

          <!-- Options -->
          <div class="flex items-center justify-between text-sm">
            <label class="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" class="text-purple-700 font-medium">
              Forgot Password?
            </a>
          </div>

          <!-- Button -->
          <button
            type="submit"
            class="w-full bg-[#61227D] text-white py-3 rounded-lg hover:bg-purple-900 transition"
          >
            Sign in
          </button>
        </form>

        <!-- Footer -->
        <p class="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?
          <a href="#" class="text-purple-700 font-medium">Sign up</a>
        </p>
      </div>
    </div>
  </div>
</template>