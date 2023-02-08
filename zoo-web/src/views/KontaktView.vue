<template>
    <div class="kontakt">
        <Zaglavlje></Zaglavlje>
        <Meni></Meni>
        <div class="container-fluid">
            <div class="row boja1">
                <div class="col-sm-2">
                    <table style="color:#252525; display: flex; justify-content: left; padding-top: 50px;">
                        <tr class="donji">
                            <td>
                                <img src="/img/clock.png" alt="" style="padding-right: 10px; padding-bottom: 10px;">
                            </td>
                            <td >
                                <table>
                                    <tr>
                                        <h4>Radno vreme: </h4>
                                    </tr>
                                    <tr>
                                        pon - pet: 8:00 - 20:00 <br>
                                        ned   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;     8:00 - 16:00
                                    </tr>
                                </table>
                                
                            </td>
                        </tr>
                        <tr class="donji">
                            <td>
                                <img src="/img/phone.png" alt="" style="padding-right: 10px;">
                            </td>
                            <td>
                                <h4>011 3423 235</h4>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="/img/email.png" alt="" style="padding-right: 10px;">
                            </td>
                            <td style="padding-left: 20px;">
                                <h5>mailpanda@gmail.com</h5>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="col-sm-3 offset-6">
                    <img src="/img/octo.png" alt="" style="padding-right: 10px; height:300px; padding-top: 50px;">
                </div>
            </div>
            <div class="row boja2">
                <div class="col-sm-2">
                    <table style="color:#252525; display: flex; justify-content: left; padding-top: 50px;">
                        <tr class="donji">
                            <td>
                            
                            </td>
                            <td >
                                <table>
                                    <tr>
                                        <h1>Kako do nas? </h1> 
                                    </tr>
                                    
                                </table>
                                
                            </td>
                        </tr>
                        <tr class="donji">
                            <td>
                                <img src="/img/pin.png" alt="" style="padding-right: 10px;">
                            </td>
                            <td>
                                <h4>Cara Dusana 124</h4>
                            </td>
                        </tr>
                        
                    </table>
                </div>
                <div class="col-sm-3 offset-5">
                    <img src="/img/capture.png" alt="" style=" height:250px; margin-top: 50px; border-radius: 10px;">
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.boja1{
    background-color: #A799B7;
    min-height: 42.6vh;
}

.donji{
    padding-bottom: 50px;
}

.boja2{
    background-color: #E0CA3C;
    min-height: 42.6vh;
}
</style>

<script>
import Zaglavlje from '../components/Zaglavlje.vue'
import Meni from '../components/Meni.vue'

export default {
    name:'Kontakt',
    components:{
        Zaglavlje,
        Meni
    },
    data(){
        return {
            
        }
    }
}
</script>