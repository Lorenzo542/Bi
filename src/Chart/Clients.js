import Chart from 'chart.js/auto'
import { DATE } from './date';
export const CLIENTS = [72, 85, 63, 98, 110, 93, 78, 121, 145, 135, 89, 97, 105, 113, 138, 126, 92 ,74 ,69 ,82 ,94, 108, 116, 129, 143, 132, 115, 104, 97, 86, 122];

(async function() {
    

    new Chart (
        document.getElementById('Clients'),
        {
            type: 'bar',
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        ticks: {
                            display:false
                        },
                        grid: {
                            display: false
                        }
                    },
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        position: 'average'
                    }
                }
            },
            data: {
                labels: DATE,
                datasets: [
                    {
                        label: 'Clients',
                        data: CLIENTS,
                        hoverBackgroundColor: '#143C8A'
                    }         
                ]
            }

        }

    );
})();