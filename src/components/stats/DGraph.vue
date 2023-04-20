<template>
    <div class="charts__graph">
        <!-- <Line class="charts__graph-content" id="my-chart-id" :options="chartOptions" :data="chartData" /> -->
        <Chart :size="{ width: 340, height: 230 }" :data="plByMonth">

            <template #layers>
                <Grid strokeDasharray="2,2" />
                <Line :dataKeys="['name', 'money']" />
            </template>

        </Chart>
    </div>
</template>
  
<script>
import { Chart, Grid, Line } from 'vue3-charts'


// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
// } from 'chart.js'
// import { Line } from 'vue-chartjs'

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
// )

export default {
    name: "DGraph",
    components: {
        // Line
        Chart, Grid, Line
    },
    data() {
        return {
            // chartData: {
            //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            //     datasets: [
            //         {
            //             label: 'Data One',
            //             backgroundColor: 'rgb(173, 228, 70)',
            //             data: [40, 39, 10, 40, 39, 80, 40]
            //         }
            //     ]
            // },
            // chartOptions: {
            //     responsive: true,
            //     maintainAspectRatio: true
            // }
            plByMonth: [
                { name: 'Jan', money: 1000, avg: 500, inc: 300 },
                { name: 'Feb', money: 2000, avg: 900, inc: 400 },
                { name: 'Apr', money: 400, avg: 400, inc: 500 },
                { name: 'Mar', money: 3100, avg: 1300, inc: 700 },
                { name: 'May', money: 200, avg: 100, inc: 200 },
                { name: 'Jun', money: 600, avg: 400, inc: 300 },
                { name: 'Jul', money: 500, avg: 90, inc: 100 }
            ]
        };
    },
    methods: {},
    mounted() {
        console.log('Mounted complete');
    }
};
</script>
  
<style scoped lang="scss">
.charts__graph {
    width: 423px;
    height: 376px;

    display: flex;
    align-items: center;
    justify-content: center;

    .charts__graph-content {
        width: 343px !important;
        height: 230px !important;
    }
}
</style>
  