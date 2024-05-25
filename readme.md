# koinX Assignment

This Node.js API allows you to upload cryptocurrency trade data from CSV files, process them, and store them in a MongoDB database.

## Usage

1. **Upload CSV File:**

    Use the `/api/upload-csv` endpoint to upload a CSV file containing cryptocurrency trade data. The API will process the file and store the trade data in the database.

2. **Get Asset-Wise Balance:**

    Use the `/api/balance` endpoint to get the asset-wise balance of the account at any given timestamp.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/udaygaidhane30/koinX_assignment.git
    ```

2. Install dependencies:

    ```bash
    cd koinx_assignment
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add the following:

    ```plaintext
    PORT=3000
    connection=mongodb://localhost:27017/crypto-trades
    ```

    Replace `mongodb://localhost:27017/crypto-trades` with your MongoDB URI.

4. Start the server:

    ```bash
    node app.js
    ```

## Project Structure

- `app.js`: Main entry point of the application.
- `models/`: Mongoose models for MongoDB.
- `routes/`: Route handlers for different endpoints.
- `uploads/`: Directory to store uploaded CSV files.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **Multer**: Middleware for handling file uploads.
- **Mongoose**: MongoDB object modeling tool.
- **csv-parser**: Library for parsing CSV files.
- **MongoDB**: NoSQL database for storing cryptocurrency trade data.

