## API documentation

## Base URL
The base URL for the API is: `http://localhost:3001/` when running locally, and will be different in the production environment depending on your deployment.

## Endpoints

### User Endpoints

#### Register User
- **POST** `/api/users/`
  - Description: Register a new user in the system.
  - Body:
    ```json
    {
      "username": "string",
      "email": "string",
      "password": "string"
    }
    ```
  - Responses:
    - `200 OK` on success with the user object.
    - `400 Bad Request` if there's an error.

#### Login User
- **POST** `/api/users/login`
  - Description: Authenticate a user and start a session.
  - Body:
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```
  - Responses:
    - `200 OK` on success with a welcome message.
    - `400 Bad Request` if credentials are incorrect.

#### Logout User
- **POST** `/api/users/logout`
  - Description: Log out the current user and destroy the session.
  - Responses:
    - `204 No Content` on success.
    - `404 Not Found` if no session is found.

### Project Endpoints

#### Create Project
- **POST** `/api/projects/`
  - Description: Create a new project, user must be authenticated.
  - Body:
    ```json
    {
      "name": "string",
      "description": "string",
      "user_id": "integer"
    }
    ```
  - Responses:
    - `200 OK` on success with the project object.
    - `400 Bad Request` if there's an error.

#### Delete Project
- **DELETE** `/api/projects/:id`
  - Description: Delete a project by its ID, user must be authenticated and must be the owner of the project.
  - URL Parameters: `id` of the project to delete.
  - Responses:
    - `200 OK` on success.
    - `404 Not Found` if the project does not exist.
    - `500 Internal Server Error` if there's an error.

### Home Routes (Views)

#### Home Page
- **GET** `/`
  - Description: Retrieve the homepage with all projects.
  - Responses:
    - `200 OK` and renders the `homepage` view with projects data.
    - `500 Internal Server Error` if there's an error.

#### Project Detail
- **GET** `/project/:id`
  - Description: Retrieve details for a single project.
  - URL Parameters: `id` of the project.
  - Responses:
    - `200 OK` and renders the `project` view with project data.
    - `500 Internal Server Error` if there's an error.

#### User Profile
- **GET** `/profile`
  - Description: Retrieve the profile page for the logged-in user, must be authenticated.
  - Responses:
    - `200 OK` and renders the `profile` view with user data.
    - `500 Internal Server Error` if there's an error.

#### Login Page
- **GET** `/login`
  - Description: Retrieve the login page.
  - Responses:
    - `200 OK` and renders the `login` view.
    - Redirects to `/profile` if the user is already logged in.

> Note: All POST requests that create or modify data should be protected with authentication middleware, ensuring that only authenticated users can perform those operations.

Please ensure that you replace the base URL with your production URL when deploying the application. This documentation should be updated as new endpoints are added or changes are made to existing ones