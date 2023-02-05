<template>
    <div class="admin">
        <Zaglavlje></Zaglavlje>
        <Meni></Meni>

    </div>
</template>

<script>
import Zaglavlje from '../components/Zaglavlje.vue'
import Meni from '../components/Meni.vue'

export default {
    name: 'PocetnaView',
    components: {
        Zaglavlje,
        Meni
    }
}
</script>