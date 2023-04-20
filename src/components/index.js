import DLogo from './info/DLogo.vue'
import DNav from './info/DNav.vue'
import DNavBox from './info/DNavBox.vue'
import DFooter from './info/DFooter.vue'
import DFooterBox from './info/DFooterBox.vue'
import DStatsInfo from './stats/DStatsInfo.vue'
import DStatsCards from './stats/DStatsCards.vue'
import DStatsCard from './stats/DStatsCard.vue'
import DCharts from './stats/DCharts.vue'
import DGraph from './stats/DGraph.vue'

const components = [
    {name: 'DLogo', component: DLogo},
    {name: 'DNav', component: DNav},
    {name: 'DNavBox', component: DNavBox},
    {name: 'DFooter', component: DFooter},
    {name: 'DFooterBox', component: DFooterBox},
    {name: 'DStatsInfo', component: DStatsInfo},
    {name: 'DStatsCards', component: DStatsCards},
    {name: 'DStatsCard', component: DStatsCard},
    {name: 'DCharts', component: DCharts},
    {name: 'DGraph', component: DGraph},
]

export default {
    install(app){
        components.forEach(({name, component})=>{
            app.component(name, component)
        })
    }
}