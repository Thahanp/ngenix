```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f6f8;
    color: #222;
}


/* Navigation */

nav {
    height: 70px;
    background-color: #111827;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 8%;
}

.logo {
    font-size: 28px;
    font-weight: bold;
    color: white;
}

nav ul {
    display: flex;
    gap: 30px;
    list-style: none;
}

nav a {
    color: white;
    text-decoration: none;
}

nav a:hover {
    color: #3b82f6;
}


/* Hero */

.hero {
    height: 500px;

    background:
        linear-gradient(
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
        ),
        url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80");

    background-size: cover;
    background-position: center;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
    color: white;
}

.hero-content h1 {
    font-size: 50px;
    margin-bottom: 15px;
}

.hero-content p {
    font-size: 20px;
    margin-bottom: 25px;
}

button {
    border: none;
    background-color: #2563eb;
    color: white;

    padding: 12px 25px;

    border-radius: 6px;

    font-size: 16px;

    cursor: pointer;
}

button:hover {
    background-color: #1d4ed8;
}


/* Cars */

.cars {
    padding: 70px 8%;
}

.cars h2,
.about h2,
.contact h2 {
    text-align: center;
    font-size: 35px;
    margin-bottom: 40px;
}

.car-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.car-card {
    background-color: white;

    border-radius: 12px;

    overflow: hidden;

    padding-bottom: 25px;

    text-align: center;

    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);

    transition: 0.3s;
}

.car-card:hover {
    transform: translateY(-8px);
}

.car-img {
    height: 200px;

    background-color: #e5e7eb;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 90px;
}

.car-card h3 {
    font-size: 24px;
    margin-top: 20px;
}

.car-card p {
    color: #666;
    margin: 10px;
}

.car-card h4 {
    font-size: 20px;
    margin: 15px;
}


/* About */

.about {
    background-color: white;
    padding: 70px 8%;
}

.features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.features div {
    text-align: center;
    padding: 30px;
    background-color: #f4f6f8;
    border-radius: 10px;
}

.features h3 {
    margin-bottom: 10px;
}


/* Contact */

.contact {
    padding: 70px 8%;
}

.contact p {
    text-align: center;
    margin: 10px;
}


/* Footer */

footer {
    background-color: #111827;
    color: white;

    text-align: center;

    padding: 25px;
}


/* Mobile */

@media (max-width: 768px) {

    nav ul {
        display: none;
    }

    .hero-content h1 {
        font-size: 35px;
    }

    .car-container {
        grid-template-columns: 1fr;
    }

    .features {
        grid-template-columns: 1fr;
    }
}
```
