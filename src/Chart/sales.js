import Chart from 'chart.js/auto'

export const data = [
        { date: "2025-03-01", amount: 5163 },
        { date: "2025-03-02", amount: 3778 },
        { date: "2025-03-03", amount: 3929 },
        { date: "2025-03-04", amount: 6771 },
        { date: "2025-03-05", amount: 2469 },
        { date: "2025-03-06", amount: 6995 },
        { date: "2025-03-07", amount: 2758 },
        { date: "2025-03-08", amount: 6134 },
        { date: "2025-03-09", amount: 4892 },
        { date: "2025-03-10", amount: 4641 },
        { date: "2025-03-11", amount: 2080 },
        { date: "2025-03-12", amount: 7895 },
        { date: "2025-03-13", amount: 3980 },
        { date: "2025-03-14", amount: 15211 },
        { date: "2025-03-15", amount: 5402 },
        { date: "2025-03-16", amount: 2639 },
        { date: "2025-03-17", amount: 2018 },
        { date: "2025-03-18", amount: 3351 },
        { date: "2025-03-19", amount: 4677 },
        { date: "2025-03-20", amount: 2556 },
        { date: "2025-03-21", amount: 6768 },
        { date: "2025-03-22", amount: 6988 },
        { date: "2025-03-23", amount: 2522 },
        { date: "2025-03-24", amount: 7769 },
        { date: "2025-03-25", amount: 7645 },
        { date: "2025-03-26", amount: 3281 },
        { date: "2025-03-27", amount: 5336 },
        { date: "2025-03-28", amount: 7819 },
        { date: "2025-03-29", amount: 4752 },
        { date: "2025-03-30", amount: 4109 },
        { date: "2025-03-31", amount: 1941 },
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
                    max: Math.round((Math.max(...data.map(row => row.amount)) * 1.15) /1000)*1000
                    
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
            labels: data.map(row => row.date),
            datasets: [
                {
                    label: 'Sales by day',
                    data: data.map(row => row.amount),
                    borderColor: '#143C8A',
                    hoverBorderColor: 'purple',
                    tension:0.4,
                }
            ]
        }
    }
    );
})();