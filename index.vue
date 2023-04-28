<template>
    <div :id="this.gaugeId" class="vue-gauge-item"></div>
</template>
<script>

import * as GaugeChart from './gauge-chart.mjs'

export default {
    name: 'vue-gauge',
    props:['refid','options'],
    mounted() {
        this.initPlugin(this.options);
    },
    methods: {
        initPlugin(options = {}){
            if(this.gaugeId){
                let config = {
                    hasNeedle: true,
                    needleColor: '#f76c57',
                    needleUpdateSpeed: 1000,
                    arcColors: ['#85a3ca', '#d3d3d3'],
                    arcDelimiters: [70],
                    rangeLabel: ['0', '100'],
                    chartWidth: 250,
                    needleValue: 70
                };
                config = { ...config, ...options };

                let element = document.querySelector("#"+this.gaugeId );
                
                GaugeChart.gaugeChart(element, config.chartWidth, config).updateNeedle(config.needleValue); 
            }  
        }
    },
    computed: {
        gaugeId(){
            if(typeof this.refid != 'undefined'){
                return this.refid;
            }
            return "vue3-gauge";
        }
    },
}
</script>