import Chart from 'chart.js/auto'
export const data = [
    { date: "2025-03-01", Receipt: 52 },
    { date: "2025-03-02", Receipt: 68 },
    { date: "2025-03-03", Receipt: 45 },
    { date: "2025-03-04", Receipt: 61 },
    { date: "2025-03-05", Receipt: 55 },
    { date: "2025-03-06", Receipt: 34 },
    { date: "2025-03-07", Receipt: 49 },
    { date: "2025-03-08", Receipt: 65 },
    { date: "2025-03-09", Receipt: 58 },
    { date: "2025-03-10", Receipt: 62 },
    { date: "2025-03-11", Receipt: 33 },
    { date: "2025-03-12", Receipt: 46 },
    { date: "2025-03-13", Receipt: 67 },
    { date: "2025-03-14", Receipt: 54 },
    { date: "2025-03-15", Receipt: 60 },
    { date: "2025-03-16", Receipt: 70 },
    { date: "2025-03-17", Receipt: 44 },
    { date: "2025-03-18", Receipt: 39 },
    { date: "2025-03-19", Receipt: 41 },
    { date: "2025-03-20", Receipt: 57 },
    { date: "2025-03-21", Receipt: 63 },
    { date: "2025-03-22", Receipt: 38 },
    { date: "2025-03-23", Receipt: 66 },
    { date: "2025-03-24", Receipt: 50 },
    { date: "2025-03-25", Receipt: 59 },
    { date: "2025-03-26", Receipt: 43 },
    { date: "2025-03-27", Receipt: 35 },
    { date: "2025-03-28", Receipt: 64 },
    { date: "2025-03-29", Receipt: 37 },
    { date: "2025-03-30", Receipt: 47 },
    { date: "2025-03-31", Receipt: 53 }
  ];
(async function() {
    new Chart(
        document.getElementById('Receipt'),
        {
            type: 'bar',
            options: {
                responsive: true,
                maintainAspectRatio: false
            },
            data:{
                labels: data.map(row => row.date),
                datasets:[{
                    label: 'Receipt',
                    data: data.map(row => row.Receipt),
                }]
            }

        }
    );
})();