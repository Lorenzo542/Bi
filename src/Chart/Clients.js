import Chart from 'chart.js/auto'

export const data = [
    { day: "2025-03-01", count: 72 },
    { day: "2025-03-02", count: 85 },
    { day: "2025-03-03", count: 63 },
    { day: "2025-03-04", count: 98 },
    { day: "2025-03-05", count: 110 },
    { day: "2025-03-06", count: 93 },
    { day: "2025-03-07", count: 78 },
    { day: "2025-03-08", count: 121 },
    { day: "2025-03-09", count: 145 },
    { day: "2025-03-10", count: 135 },
    { day: "2025-03-11", count: 89 },
    { day: "2025-03-12", count: 97 },
    { day: "2025-03-13", count: 105 },
    { day: "2025-03-14", count: 113 },
    { day: "2025-03-15", count: 138 },
    { day: "2025-03-16", count: 126 },
    { day: "2025-03-17", count: 92 },
    { day: "2025-03-18", count: 74 },
    { day: "2025-03-19", count: 69 },
    { day: "2025-03-20", count: 82 },
    { day: "2025-03-21", count: 94 },
    { day: "2025-03-22", count: 108 },
    { day: "2025-03-23", count: 116 },
    { day: "2025-03-24", count: 129 },
    { day: "2025-03-25", count: 143 },
    { day: "2025-03-26", count: 132 },
    { day: "2025-03-27", count: 115 },
    { day: "2025-03-28", count: 104 },
    { day: "2025-03-29", count: 97 },
    { day: "2025-03-30", count: 86 },
    { day: "2025-03-31", count: 122 }
];

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
                labels: data.map(row => row.day),
                datasets: [
                    {
                        label: 'Clients',
                        data: data.map(row => row.count),
                        hoverBackgroundColor: '#143C8A'
                    }         
                ]
            }

        }

    );
})();