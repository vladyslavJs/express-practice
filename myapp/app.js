const express = require('express');
const app = express();
const PORT = 3000;

// app.get('/', (req, res) => {
//     res.send('<h1>Believe in yourself!</h1>');
// });
//---------------------------

// app.get('/contact', (req, res) => {
//     res.send('<h1>Contact page</h1>');
// });
//---------------------------

// app.get('/contact/:id', (req, res) => {
//     res.send(`<h1>Contact</h1> Parameters:${req.params.id}`);
// });
//---------------------------

// app.use((req, res, next) => {
    //     console.log('Наше проміжне ПЗ');
    //     next();
// });
//---------------------------


// app.listen(PORT, () => {
    //     console.log(`Server is running on http://localhost:${PORT}/contact/123`);
// });
//---------------------------

// app.post('/login', (req, res, next) => {
//     const { email, password } = req.body;
//     const passwordValid = checkPassword(password);
//     const userExists = checkUserExists(email);

//     if (passwordValid && userExists) {
//         res.status(200).send('Authentication successful!');
//     } else {
//         res.status(401).send('Authentication failed!')
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

function checkPassword(password) {
    const minLength = 8;
    return password.length >= minLength;
}

function checkUserExists(email) {
    const users = [
        { email: 'user1@example.com', password: 'password1' },
        { email: 'user2@example.com', password: 'password2' },
    ];
    return users.some(user => user.email === email);
}

app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res, next) => {
    const { email, password } = req.body;
    const passwordValid = checkPassword(password);
    const userExists = checkUserExists(email);

    if (passwordValid && userExists) {
        res.status(200).send('Authentication successful!');
    } else {
        res.status(401).send('Authentication failed!');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/login.html`);
});
 
