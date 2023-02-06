<template>
    <div class="card shadow-none w-50 desavanj">
        <div class="row">
            <div class="col-sm-12  lev">
                <h4>{{ d.naslov }}</h4>
            </div>
            <div class="col-sm-12 lev">
                <p>{{ d.datum }}</p>
            </div>
        </div>
        <hr>
    </div>
</template>

<style>
.card{
    border: none;
}

.desavanj{
    background-color: #A799B7;
}

.lev{
    display: flex;
    justify-content: left;
    padding-left: 30px;
    color: #252525;
}
</style>

<script>
export default {
    name:'Desavanje',
    props:['d']
}
</script>