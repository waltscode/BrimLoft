# Database Schema and Relationships for hatshoppe

## Overview
This document outlines the database schema and the relationships between different tables in the `hatshoppe_db` for the HatStore online application.

## Database Schema

### Tables
1. **Users**: Stores user information.
2. **Categories**: Holds product categories.
3. **Products**: Contains details of products.
4. **Orders**: Records user orders.
5. **OrderItems**: Details of items within each order.
6. **ShoppingCarts**: Shopping cart information for each user.
7. **CartItems**: Items present in a shopping cart.
8. **Reviews**: User reviews for products.

### Relationships
- **Users**
  - One-to-Many with `Orders`
  - One-to-Many with `Reviews`
- **Categories**
  - One-to-Many with `Products`
- **Products**
  - Many-to-One with `Categories`
  - One-to-Many with `OrderItems`
  - One-to-Many with `Reviews`
- **Orders**
  - Many-to-One with `Users`
  - One-to-Many with `OrderItems`
- **OrderItems**
  - Many-to-One with `Orders`
  - Many-to-One with `Products`
- **ShoppingCarts**
  - One-to-One with `Users`
- **CartItems**
  - Many-to-One with `ShoppingCarts`
  - Many-to-One with `Products`
- **Reviews**
  - Many-to-One with `Users`
  - Many-to-One with `Products`

## Detailed Table Descriptions

### Users Table
- `id`: Primary key, Auto Increment.
- `username`: Unique.
- `email`: Unique, must be a valid email format.
- `password`: Hashed for security.
- `default_address`: User's default address.

### Categories Table
- `id`: Primary key, Auto Increment.
- `category_name`: Name of the category.

### Products Table
- `id`: Primary key, Auto Increment.
- `name`: Name of the product.
- `description`: Detailed description.
- `price`: Product price.
- `image_url`: URL of the product image.
- `num_in_stock`: Number of items in stock.
- `rating`: Product rating.
- `is_featured`: Boolean indicating if the product is featured.
- `category_id`: Foreign key referencing `Categories`.

### Orders Table
- `id`: Primary key, Auto Increment.
- `user_id`: Foreign key referencing `Users`.
- `total_amount`: Total amount of the order.
- `order_date`: Date and time when the order was placed.

### OrderItems Table
- `id`: Primary key, Auto Increment.
- `order_id`: Foreign key referencing `Orders`.
- `product_id`: Foreign key referencing `Products`.
- `quantity`: Number of products ordered.
- `price_at_purchase`: Price of the product at the time of purchase.

### ShoppingCarts Table
- `id`: Primary key, Auto Increment.
- `user_id`: Foreign key referencing `Users`.
- `created_at`: Date and time when the cart was created.

### CartItems Table
- `id`: Primary key, Auto Increment.
- `cart_id`: Foreign key referencing `ShoppingCarts`.
- `product_id`: Foreign key referencing `Products`.
- `quantity`: Number of products in the cart.

### Reviews Table
- `id`: Primary key, Auto Increment.
- `user_id`: Foreign key referencing `Users`.
- `product_id`: Foreign key referencing `Products`.
- `comment`: Text of the review.
- `timestamp`: Date and time when the review was created.

## Notes
- The schema is designed to be scalable and efficient.
- Proper indexing and constraints are applied for optimized performance and data integrity.