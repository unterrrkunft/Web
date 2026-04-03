const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// --- Віддаємо статичні файли (index.html, js, css) ---
app.use(express.static(path.join(__dirname, 'public')));

// --- Масив користувачів ---
const users = [
    { firstname: "John", lastname: "Doe", score: 10 },
    { firstname: "Jane", lastname: "Smith", score: 15 },
    { firstname: "Alex", lastname: "Johnson", score: 20 },
    { firstname: "Emily", lastname: "Davis", score: 5 },
    { firstname: "Michael", lastname: "Brown", score: 25 },
    { firstname: "Sarah", lastname: "Wilson", score: 12 },
    { firstname: "David", lastname: "Lee", score: 18 },
    { firstname: "Laura", lastname: "Clark", score: 22 },
    { firstname: "Chris", lastname: "Walker", score: 30 },
    { firstname: "Anna", lastname: "Hall", score: 8 },
    { firstname: "Tom", lastname: "Allen", score: 16 },
    { firstname: "Sophia", lastname: "Young", score: 11 },
    { firstname: "Robert", lastname: "Hernandez", score: 14 },
    { firstname: "Olivia", lastname: "King", score: 19 },
    { firstname: "Daniel", lastname: "Wright", score: 23 },
    { firstname: "Grace", lastname: "Scott", score: 7 },
    { firstname: "James", lastname: "Green", score: 9 },
    { firstname: "Mia", lastname: "Adams", score: 21 },
    { firstname: "Ethan", lastname: "Baker", score: 6 },
    { firstname: "Lily", lastname: "Nelson", score: 17 },
];

// --- API: отримати 10 випадкових користувачів ---
app.get('/users', (req, res) => {
    let result = [...users];

    // --- Сортування ---
    const { sortBy, order } = req.query;

    if (sortBy) {
        result.sort((a, b) => {
            if (order === 'desc') {
                return b[sortBy].localeCompare(a[sortBy]);
            }
            return a[sortBy].localeCompare(b[sortBy]);
        });
    }

    // Випадкові 10
    result = result.sort(() => 0.5 - Math.random()).slice(0, 10);

    res.json(result);
});

// --- API: нові користувачі ---
app.get('/new-users', (req, res) => {
    res.json(users.slice(0, 5));
});

// --- API: gallery ---
app.get('/gallery', (req, res) => {
    const fs = require('fs');
    const dir = path.join(__dirname, 'public/gallery');

    const files = fs.readdirSync(dir);
    res.json(files);
});

// --- API: weather ---
app.get('/weather', (req, res) => {
    const temperature = Math.floor(Math.random() * 31);
    res.json({
        city: 'Kyiv',
        temperature
    });
});

// --- Запуск сервера ---
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});