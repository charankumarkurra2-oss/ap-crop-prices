const cropsAP = [
    "Rice (వరి)",
    "Maize (మొక్కజొన్న)",
    "Groundnut (వేరుసెనగ)",
    "Cotton (పత్తి)",
    "Chilli (మిరపకాయ)",
    "Tur Dal (కందిపప్పు)",
    "Green Gram (పెసరపప్పు)",
    "Black Gram (మినప్పప్పు)",
    "Sugarcane (చెరకు)",
    "Onion (ఉల్లిపాయ)",
    "Tomato (టమోటా)",
    "Brinjal (వంకాయ)",
    "Okra (బెండకాయ)",
    "Banana (అరటి)",
    "Mango (మామిడి)"
];

// Load crops on page load
window.onload = function () {
    const cropSelect = document.getElementById("crop");
    cropsAP.forEach(crop => {
        const option = document.createElement("option");
        option.value = crop;
        option.text = crop;
        cropSelect.appendChild(option);
    });
};

function showPrice() {
    const district = document.getElementById("district").value;
    const crop = document.getElementById("crop").value;
    const result = document.getElementById("result");

    if (district === "" || crop === "") {
        alert("Please select district and crop");
        return;
    }

    // Yesterday price per quintal
    const yesterdayQ = Math.floor(Math.random() * 700) + 1400;

    // Price change (-100 to +100)
    const changeQ = Math.floor(Math.random() * 200) - 100;
    const todayQ = yesterdayQ + changeQ;

    // Convert to ₹ per kg
    const yesterdayKg = (yesterdayQ / 100).toFixed(2);
    const todayKg = (todayQ / 100).toFixed(2);
    const diffKg = (todayKg - yesterdayKg).toFixed(2);
    const percent = ((diffKg / yesterdayKg) * 100).toFixed(2);

    const trend = diffKg >= 0 ? "📈 Increased" : "📉 Decreased";
    const color = diffKg >= 0 ? "green" : "red";

    result.innerHTML = `
        <h2>Price Details</h2>
        <p><strong>State:</strong> Andhra Pradesh</p>
        <p><strong>District:</strong> ${district}</p>
        <p><strong>Crop:</strong> ${crop}</p>

        <p><strong>Yesterday Price:</strong> ₹ ${yesterdayKg} / kg</p>
        <p><strong>Today Price:</strong> ₹ ${todayKg} / kg</p>

        <p style="color:${color};">
            <strong>Change:</strong> ₹ ${diffKg} (${percent}%) ${trend}
        </p>
    `;
}
