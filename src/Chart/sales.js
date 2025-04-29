import Chart from 'chart.js/auto'
import { DATE } from './date';

export const SALES = [
    3124, 4782, 3568, 4217, 3893, 4651, 3419, 4976, 3742, 8534,
    4102, 3687, 4523, 3298, 4912, 3856, 4372, 7236, 3614, 4759,
    3489, 4193, 3925, 4648, 8621, 3271, 4530, 3814, 6543, 4087
  ];
(async function () {
    

new Chart(
    document.getElementById('Sales'),
    {
        type: 'line',
        options: {
            responsive:true,
            maintainAspectRatio:false,
            scales: {
                y: {
                    max: Math.round((Math.max(...SALES) * 1.15) /1000)*1000
                    
                },
                x: {
                    ticks: {
                        display:false
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(0,0,0,0.05)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
            },
        },
        data: {
            labels: DATE,
            datasets: [
                {
                    label: 'Sales by day',
                    data: SALES,
                    borderColor: '#143C8A',
                    hoverBorderColor: 'purple',
                    tension:0.4,
                }
            ]
        }
    }
    );
})();