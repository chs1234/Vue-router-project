<template>
    <div>
        <h1>Users Detail</h1>
        <p>유저번호: {{ userId }}</p>

        <v-btn @click="onEdit" small>수정</v-btn>
    </div>
</template>

<script>
export default {
    computed: {
        userId() {
            return this.$route.params.id;
        }
    },

    methods: {
        onEdit() {
            // this.$router.push({name: 'users-edit'});
            this.$router.push({path: `${this.userId}/edit`});
        }
    }
}
</script>