```javascript
// Scroll to cars section

function scrollToCars() {

    document.getElementById("cars").scrollIntoView({
        behavior: "smooth"
    });

}


// Rent a car

function rentCar(carName, price) {

    let days = prompt(
        "How many days do you want to rent the " + carName + "?"
    );


    if (days === null) {
        return;
    }


    days = Number(days);


    if (days <= 0 || isNaN(days)) {

        alert("Please enter a valid number of days.");

        return;
    }


    let total = price * days;


    alert(
        "Booking Details\n\n" +

        "Car: " + carName + "\n" +

        "Price per day: ₹" +
        price.toLocaleString("en-IN") + "\n" +

        "Number of days: " + days + "\n\n" +

        "Total Price: ₹" +
        total.toLocaleString("en-IN") +

        "\n\nThank you for choosing DriveEasy!"
    );

}
```
