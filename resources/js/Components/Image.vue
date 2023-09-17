<template>
        <img v-bind:src="imagePath" alt="">
</template>


<script>
export default {
    props: ['imagePath'],

    watch: {
        imagePath(val) {
            console.log(val)
            this.imagePath = val
        },
    },
    created() {
        console.log(this.imagePath)
    }
}
</script>
