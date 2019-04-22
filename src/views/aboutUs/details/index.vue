<template>
    <div id="details">
        <First/>
        <last/>
    </div>
</template>

<script>
import First from './first/index';
import Last from './last/index';

export default {
    name:'detail',
    components: {
        First,
        Last
    }
}
</script>

<style scoped>

</style>
