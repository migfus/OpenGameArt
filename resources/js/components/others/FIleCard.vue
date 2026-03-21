<template>
    <div class="bg-dark-002 rounded-3xl p-4">
        <div>
            {{ file.name }}
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    file: {
        url: string
        name: string
    }
}>()
</script>

<style scoped></style>
