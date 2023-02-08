<template>
    <div class="pocetak">
        <Zaglavlje></Zaglavlje>
        <Meni></Meni>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="../../public/img/crsl3.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="../../public/img/crsl2nd.png" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
            <div class="pocetnaOpcije">
                <div class="row up">
                    <div class="col-sm-3">
                        <div class="card visina">
                        <div class="card-body">
                            <h3 class="card-title">Pogledajte sve zivotinje koje mozete videti uzivo!</h3>
                            <br>
                            <router-link style="text-decoration: none; color: inherit; align-self: center" to="/zivotinje"><a href="#" class="btn" style="background-color:#93B7BE">Pogledaj</a></router-link>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card visina">
                        <div class="card-body">
                            <h3 class="card-title">Zanimljiva desavanja svaki dan u nasem zooloskom vrtu!</h3>
                            <br>
                            <router-link style="text-decoration: none; color: inherit; align-self: center" to="/desavanja"><a href="#" class="btn" style="background-color:#93B7BE">Proveri</a></router-link>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card visina">
                        <div class="card-body spejs">
                            <div>
                                <h3 class="card-title">Sjajni popusti na grupne karte i jos mnogo iznenadjenja!</h3>
                            </div>
                            <br>
                            <div>
                                
                                <router-link style="text-decoration: none; color: inherit; align-self: center" to="/ulaznice"><a href="#" class="btn" style="background-color:#93B7BE">Kupi</a></router-link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<style>
.pocetnaview{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.visina{
    min-height: 250px;
    background-color: #ffda73;
}

.up{
    padding-top: 50px;
    min-height: 43.5vh;
    justify-content: center;
}

.spejs{
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.pocetnaOpcije{
    background-color:#E0CA3C ;
    overflow-y: hidden;
    overflow-x: hidden;
}

.carousel-control-next-icon::after{
    content:unset;
}
.carousel-control-prev-icon::after{
    content:unset;
}

.carousel-control-prev-icon {
 background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
}

</style>

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
