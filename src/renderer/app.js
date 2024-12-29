window.addEventListener("DOMContentLoaded", () => {
	const ctx = document.getElementById("expenseChart").getContext("2d");
	const expenseData = {
		labels: ["Rent", "Food", "Transportation", "Utilities", "Entertainment"],
		datasets: [
			{
				label: "Monthly Expenses",
				data: [1200, 400, 300, 150, 200],
				backgroundColor: [
					"rgba(255, 99, 132, 0.5)",
					"rgba(54, 162, 235, 0.5)",
					"rgba(255, 206, 86, 0.5)",
					"rgba(75, 192, 192, 0.5)",
					"rgba(153, 102, 255, 0.5)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
				],
				borderWidth: 1,
			},
		],
	};

	// Chart configuration
	const config = {
		type: "bar",
		data: expenseData,
		options: {
			responsive: true,
			maintainAspectRatio: true,
			scales: {
				y: {
					beginAtZero: true,
					title: {
						display: true,
						text: "Amount ($)",
					},
				},
			},
			plugins: {
				title: {
					display: true,
					text: "Monthly Expense Distribution",
				},
				customCanvasBackgroundColor: {
					color: "#4C4C5B",
				}
			},
		},
	};

	// Create chart
	//new Chart(ctx, config);



const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = () => {
	dropDownMenu.classList.toggle('open');
	const isOpen = dropDownMenu.classList.contains('open');

	toggleBtnIcon.classList = isOpen
	? 'fa-solid fa-xmark'
	: 'fa-solid fa-bars';
};
    

});
