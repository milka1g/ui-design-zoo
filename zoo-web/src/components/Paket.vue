<template>
    <div class="card">
        <img class='card-img-top suzi' :src="p.slika">
        <br>
        <div class='card-body'>
                <h4>{{p.naslov}}</h4>
                <h6>{{p.text}}</h6>
                <button type="submit" style="background-color:#E0CA3C;" class="btn">Kupi</button>
        </div>
    </div>
</template>

<style>
.suzi{
    height: 200px;
}
</style>

<script>
export default {
    name:'Paket',
    props:['p']
}
</script>
