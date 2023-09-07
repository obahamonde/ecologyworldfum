<script setup lang="ts">
const showChat = ref(false)
const { state } = useStore()
const message = ref('')
const wsRef = ref(null) as Ref<WebSocket | null>
const isTyping = ref(false)
	const sendMessage = (text: string) => {
  wsRef.value?.send(text);
 
	state.messages.unshift({
		content: text,
		role: 'user',
		namespace: "default"
	})
	 message.value = ''
	isTyping.value = true; // Update the typing status
};

const handleReceive = (e: any) => {
  state.messages.unshift({
		content: e,
		role: 'assistant',
		namespace: "default"
	})
  isTyping.value = false; // Update the typing status
};






</script>
<template>
<main v-if="showChat" class="pt-20 gap-4 w-72  h-96  overflow-y-auto mt-6 sh mx-24 bg-gray-300 rounded lg br fixed z-50 m-4"
>
<section  v-if="showChat" class="h-96">
<div v-if="showChat" class="z-50 rounded-lg">
<div class="col center">
	<Icon icon="mdi-close" class="x1 cp text-info hover:text-white scale cp top-4 right-4 rf bg-error p-1 top-16 absolute" @click="showChat = !showChat" />
<Websocket :url="'wss://ecology.aiofauna.com/api/chat'" ref="wsRef" @receive="handleReceive($event)">
</Websocket>	
</div>
<div class="col center h-full" >
	<Icon icon="mdi-loading" class="x1 animate-spin text-accent" v-if="isTyping" />
  <div v-for="msg in state.messages" class="row center">
		<img :src="msg.role == 'user' ? '/user.png' : '/chatbot.png'" class="x2 rf br m-8 scale" />
		<p :class="msg.role == 'assistant' ? 'right-2':'left-2'"
		class="bg-light text-primary text-xs p-2 rounded-lg"
		>{{ msg.content }}</p>


  </div>
</div>

</div>
<p class="flex row items-center justify-center bottom-4 fixed bg-primary py-2 w-72">
	<input  class="input mx-4"
	:class="isDark ? 'text-success':'text-primary'"
	v-model="message" @keyup.enter="sendMessage(message)" />

</p>

</section>

</main>
	<img src="/chatbot.png" class="x4 br mx-4 my-16 fixed scale cp" :class="showChat ? '':'animate-bounce'"
	@click="showChat = !showChat"
	/>

</template>