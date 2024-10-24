let isDarkMode = false;  // Variabel untuk melacak apakah mode gelap aktif
let previousColor = "";  // Menyimpan warna latar sebelumnya

// Fungsi untuk menambahkan task ke dalam list
function addTask() {
    const newTask = document.getElementById("newTask").value;

    // Pastikan input tidak kosong
    if (newTask === "") {
        alert("Please enter a task!");
        return;
    }

    // Buat elemen li baru dan span untuk teks task
    const li = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = newTask;
    taskText.contentEditable = "true";  // Membuat teks dapat diedit langsung
    li.appendChild(taskText);

    // Tombol Edit
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function () {
        taskText.contentEditable = "true";
        taskText.focus();
    };
    li.appendChild(editButton);

    // Tombol Delete dengan animasi fade-out
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        li.classList.add("fade-out");
        setTimeout(() => li.remove(), 500);  // Hapus setelah animasi selesai
    };
    li.appendChild(deleteButton);

    // Tambahkan li ke dalam ul dengan id "List"
    const ul = document.getElementById("List");
    ul.appendChild(li);

    // Kosongkan input field setelah menambahkan task
    document.getElementById("newTask").value = "";

    // Sesuaikan tampilan task jika mode gelap aktif
    if (isDarkMode) {
        applyDarkModeStyles(li, taskText, editButton, deleteButton);
    }
}

// Fungsi untuk mengubah warna latar belakang
function changeBackgroundColor() {
    if (!isDarkMode) {  // Hanya ubah warna latar jika dark mode tidak aktif
        const color = document.getElementById("background-color").value;
        document.body.style.backgroundColor = color;
    }
}

// Fungsi untuk mode gelap
function toggleDarkMode() {
    isDarkMode = !isDarkMode;  // Mengubah status mode gelap

    if (isDarkMode) {
        // Simpan warna latar sebelumnya dan ubah ke warna gelap
        previousColor = document.body.style.backgroundColor;
        document.body.style.backgroundColor = "#121212";  // Warna latar belakang gelap
        document.body.style.textColor = "#ffffff";  // Ubah warna teks ke putih untuk visibilitas
        applyDarkModeToAllElements();
    } else {
        // Kembalikan warna latar sebelumnya
        document.body.style.backgroundColor = previousColor;
        document.body.style.color = "";  // Kembalikan warna teks ke default
        resetStylesForAllElements();
    }
}

// Fungsi untuk mengubah ukuran font
function changeFontSize(size) {
    document.body.style.fontSize = size + "px";
    document.getElementById("font-size-display").textContent = size + "px";
}

// Fungsi untuk mengubah gaya font
function changeFontStyle() {
    const font = document.getElementById("font-style").value;
    document.body.style.fontFamily = font;
}

// Fungsi untuk menerapkan gaya mode gelap ke semua elemen
function applyDarkModeToAllElements() {
    document.querySelectorAll('li, span, button').forEach(el => {
        el.style.color = "#ffffff";  // Warna teks putih
        el.style.backgroundColor = "#333333";  // Warna latar belakang elemen lebih gelap
    });
}

// Fungsi untuk mereset gaya ke default (mode terang)
function resetStylesForAllElements() {
    document.querySelectorAll('li, span, button').forEach(el => {
        el.style.color = "";  // Kembalikan warna teks default
        el.style.backgroundColor = "";  // Kembalikan latar belakang default
    });
}

// Fungsi untuk menerapkan gaya mode gelap pada elemen yang baru ditambahkan
function applyDarkModeStyles(li, taskText, editButton, deleteButton) {
    li.style.color = "#ffffff";  // Warna teks putih untuk list item
    li.style.backgroundColor = "#333333";  // Warna latar belakang lebih gelap
    taskText.style.color = "#ffffff";  // Warna teks putih
    editButton.style.color = "#ffffff";  // Warna teks pada tombol Edit
    deleteButton.style.color = "#ffffff";  // Warna teks pada tombol Delete
    editButton.style.backgroundColor = "#444444";  // Warna tombol di mode gelap
    deleteButton.style.backgroundColor = "#444444";  // Warna tombol di mode gelap
}
