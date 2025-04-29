import Chart from 'chart.js/auto'
import { DATE } from './date';

export const RECEIPT = [
    43, 57, 52, 48, 59, 41, 55, 46, 60, 49,
    54, 42, 58, 45, 51, 47, 56, 53, 44, 50,
    59, 46, 52, 58, 40, 55, 49, 57, 43, 54
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
                labels:DATE,
                datasets:[{
                    label: 'Receipt',
                    data: RECEIPT
                }]
            }

        }
    );
})();