const walletTable = document.querySelector(".wallet-table");
const orderTable = document.querySelector(".order-table");
const orderBtn = document.querySelector(".order");
const walletBtn = document.querySelector(".wallet");

orderBtn.addEventListener("click", function () {
  orderTable.style.display = "table";
  walletTable.style.display = "none";
});

walletBtn.addEventListener("click", function () {
  walletTable.style.display = "table";
  orderTable.style.display = "none";
});

const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownButton.addEventListener("click", () => {
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
});




  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');

  // Start hidden on small screen
  if (window.innerWidth <= 768) {
    sidebar.style.display = 'none';
  }

  hamburger.addEventListener('click', () => {
    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
      sidebar.style.display = 'flex';
    } else {
      sidebar.style.display = 'none';
    }
  });

