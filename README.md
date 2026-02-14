# Shopping-Cart-Calculation-Project

A simple JavaScript shopping cart project that calculates:
 Total Cart Items
 Total Price
 Total Discount
 Final Amount
 Highest Price Product
 Delivery Charges Based on Final Amount
 -----
This project helps beginners understand:
JavaScript Arrays
forEach() loop
Objects
Conditional Statements
DOM Manipulation
Price & Discount Calculations
-----
Features
1️⃣ Cart Item Count
Displays total number of products in the cart.
cartCount.textContent = products.length;
-----
2️⃣ Total Price Calculation
Calculates total price of all products:
totalAmount = product.price * product.quantity;
-----
3️⃣ Discount Calculation
Applies discount percentage on each product:
discountAmount = (totalAmount * product.discount) / 100;
-----
4️⃣ Final Amount
Final Amount = Total Price - Total Discount
-----
5️⃣ Highest Price Product
Finds the product with the highest total price (price × quantity).
-----
Concepts Used
JavaScript Arrays
Array forEach() Method
Objects
Conditional Statements (if-else)
DOM Manipulation
Arithmetic Calculations
Basic Business Logic
-----
How It Works (Step-by-Step)
Create product objects inside an array.
Loop through products using forEach().
-----
Calculate:
Total Price
Discount
Final Amount
Find highest priced product.
Apply delivery charges based on final amount.
Display all values in HTML using textContent.
-----
Learning Purpose
This project is designed for beginners who want to:
Improve JavaScript logic building
Practice real-world cart calculations
Understand how e-commerce price systems work

-----
 Future Improvements
Add dynamic product adding
Add quantity increase/decrease buttons
Store cart in Local Storage
Add remove product feature
Convert to React Version
Improve UI Design
