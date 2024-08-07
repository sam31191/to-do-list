# To-Do List Application

This is a simple task management application built with React, Node.js, and MongoDB. The application allows users to create, update, delete, and filter tasks. Tasks have a title, description, and status (e.g., "To Do," "In Progress," "Done").

## Features

- Create new tasks with a title, description, and status.
- Update the status of tasks.
- Delete tasks.
- Filter tasks by status.
- Responsive UI built with React Bootstrap.

## Technologies Used

- Frontend: React, React Bootstrap
- Backend: Node.js, Express.js
- Database: MongoDB
- HTTP Client: Axios

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running on your local machine or a remote server.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sam31191/to-do-list.git
   cd to-do-list

2. **Install backend dependencies:**
    cd src/backend
    npm install
    cd ../..

3. **Install frontend dependencies:**
    npm install


### Configuration

1. **Backend Configuration:**
    Ensure your MongoDB server is running. The backend is configured to connect to mongodb://localhost:27017/ToDoList by default. You can change this in the server.js file if needed.

2. **Frontend Configuration:**
    No additional configuration is required for the frontend.

### Running the Application

1. **Start the backend server:**
    cd src/backend
    node server.js

2. **Start the frontend development server:**
    npm start

The application will be running at http://localhost:3000/.

### API Endpoints
    . GET /api/tasks: Get all tasks (optional query parameter status to filter by status)
    . POST /api/task: Create a new task
    . PUT /api/task/: Update a task by ID
    . DELETE /api/task/: Delete a task by ID

### Project Structure

```
to-do-list/
├── src/
│   ├── backend/
│   │   ├── models/
│   │   │   └── todo.js
│   │   ├── routes/
│   │   │   └── todoRoutes.js
│   │   ├── server.js
│   │   └── package.json
│   ├── components/
│   │   └── TodoList.js
│   ├── App.js
│   ├── index.js
│   └── package.json
├── .gitignore
└── README.md
```


### Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure you follow the existing code style and include appropriate tests.

### License
This project is licensed under the MIT License.

### Acknowledgements
React
Node.js
Express.js
MongoDB
React Bootstrap
