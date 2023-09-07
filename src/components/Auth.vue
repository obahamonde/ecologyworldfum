<script setup lang="ts">
import type { User } from "~/types";
import { useStore } from "~/stores/user";
const route = useRoute();
const code = computed(() => route.query.code);
const { state } = useStore();
watch(code, async (code: any) => {
  if (code) {
    await authorize(code);
  }
});

const authorize = async (code: string) => {
  try {
    const { data } = await useFetch(`/api/auth?code=${code}`).json();
    const tokenInfo = unref(data) as {
      access_token: string;
      token_type: string;
      scope: string;
    };
    const { access_token } = tokenInfo;
    state.token = access_token;
  } catch (error) {
    console.error(error);
  }

  try {
    const { data } = await useFetch(`/api/auth?token=${state.token}`, {
      method: "POST",
    }).json();
    const userInfo = unref(data) as User;
    state.user = userInfo;
    state.notifications.push({
      status: "success",
      message: `Welcome ${userInfo.name}!`,
    });
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  if (code.value) {
    authorize(code.value);
  }
});

const loginWithPopUp = () => {
  const clientId = "00fc60bdaf14af17bf6f";
  const redirectUri = "http://localhost:3000";
  const scope = "repo";
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  window.open(url, "_self");
};
</script>
<template>
  <div
    v-if="!state.user"
    class="row center gap-4 w-fit mx-auto my-12 sh px-4 py-2 rounded-lg cp bg-white text-accent scale hover:invert"
    @click="loginWithPopUp()"
  >
    <h1 class="text-xl">Login with Github</h1>
    <Icon icon="logos:github-icon" width="50" height="50" class="cp scale rf" />
  </div>
  <div v-else>
    <slot :user="state.user" />
  </div>
</template>
