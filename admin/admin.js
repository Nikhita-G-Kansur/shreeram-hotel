// FULL MENU LIST (identical to your website)
const menuItems = [
    // BREAKFAST
    { name: "Idli Sambar", price: 70 },
    { name: "Masala Dosa", price: 80 },
    { name: "Upma", price: 60 },
    { name: "Poori", price: 90 },
    { name: "Vada", price: 30 },
    { name: "Pulav", price: 70 },
    { name: "Pongal", price: 50 },
    { name: "Tomato Bath", price: 40 },

    // CHICKEN
    { name: "Kabab", price: 120 },
    { name: "Lolipop", price: 100 },
    { name: "Leg Piece", price: 150 },
    { name: "Chicken Masala", price: 180 },
    { name: "Chicken Sukka", price: 200 },
    { name: "Kabab Rice", price: 220 },
    { name: "Chicken Biryani", price: 250 },
    { name: "Chicken Roll", price: 120 },
    { name: "Chicken Meals", price: 300 },

    // EGG
    { name: "Boiled Egg", price: 20 },
    { name: "Egg Omlet", price: 30 },
    { name: "Egg Bhurji", price: 40 },
    { name: "Egg Masala", price: 50 },
    { name: "Egg Curry", price: 60 },
    { name: "Egg Rice", price: 70 },
    { name: "Egg Biryani", price: 100 },
    { name: "Egg Roll", price: 50 },
    { name: "Egg Meals", price: 120 },

    // MUTTON
    { name: "Mutton Masala", price: 250 },
    { name: "Mutton Biryani", price: 300 },
    { name: "Mutton Meals", price: 350 },

    // FISH
    { name: "Fish Curry", price: 200 },
    { name: "Fish Fry", price: 180 },
    { name: "Fish Masala Fry", price: 220 },
    { name: "Fish Meals", price: 250 },

    // BEVERAGES
    { name: "Cold Drinks", price: 20 },

    // ADDITIONAL
    { name: "Parota Sherva", price: 50 }
];


// FILL DROPDOWN ON PAGE LOAD
window.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("itemSelect");

    menuItems.forEach(item => {
        let option = document.createElement("option");
        option.value = item.name;
        option.textContent = `${item.name} - ₹${item.price}`;
        select.appendChild(option);
    });
});

let total = 0;

// ADD TO BILL FUNCTION
function addToBill() {
    const itemName = document.getElementById("itemSelect").value;
    const quantity = parseInt(document.getElementById("quantity").value);

    if (!itemName || quantity < 1) {
        alert("Please select an item and a valid quantity.");
        return;
    }

    const item = menuItems.find(m => m.name === itemName);
    const itemTotal = item.price * quantity;

    const table = document.getElementById("billTable");

    const row = table.insertRow(-1);
    row.innerHTML = `
        <td>${item.name}</td>
        <td>₹${item.price}</td>
        <td>${quantity}</td>
        <td>₹${itemTotal}</td>
    `;

    total += itemTotal;
    document.getElementById("grandTotal").textContent = "Grand Total: ₹" + total;
}

