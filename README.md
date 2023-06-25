# todo-list
To create a readme file for the provided code, you can follow these steps:

## Project Name

To-Do List App

## Description

This is a web application that allows users to create to-do lists, add items to the lists, mark items as completed, and delete items. It uses the Express framework for handling HTTP requests, MongoDB for data storage, and EJS as the templating engine for rendering views.

## Installation

1. Clone the repository or download the code files.
2. Install Node.js and npm (Node Package Manager) if they are not already installed on your system.
3. Open a terminal or command prompt and navigate to the project directory.
4. Run the following command to install the required dependencies:

   ```
   npm install
   ```

5. Create a MongoDB Atlas account (https://www.mongodb.com/cloud/atlas) and obtain the connection string for your database.
6. Replace the MongoDB connection string in the code with your own connection string. You can find it in the `mongoose.connect()` statement.
7. Optionally, customize the port number (`process.env.PORT || 3000`) in the `app.listen()` statement.

## Usage

1. Start the server by running the following command:

   ```
   npm start
   ```

2. Open a web browser and navigate to `http://localhost:3000` (or the port number you specified).

3. You will see the default to-do list for the current day. You can add new items by entering text in the input field and clicking the "+" button. You can mark items as completed by checking the checkbox and delete items by clicking the trash icon.

4. To create a custom to-do list, enter a custom list name in the URL after the slash, e.g., `http://localhost:3000/Work`. This will create a new list or load an existing list with the given name. You can then add, mark, or delete items in the same way as the default list.

5. To delete a custom list, click the "Delete List" button at the bottom of the list.

6. To retrieve a JSON array of all list names, you can send a GET request to `/api/names`. This will return a JSON response with an array of list names.

## Hosted Demo

A live demo of this application is available at [https://todolist-uvfx.onrender.com/](https://todolist-uvfx.onrender.com/).
