### Project Description

##### The project is a nested category model that allows users to organize categories in a hierarchical structure. It is built using TypeScript, Node.js, and Express.js to create the server-side functionality. MongoDB is used as the database, and Mongoose is utilized for creating models and interacting with the database. The application provides various routes to manage categories. Users can create parent and child categories, where child categories are nested under parent categories. The API supports category routes for creating, updating, and deleting categories. Additionally, there are routes for searching categories based on specific criteria. One important feature of the project is the ability to deactivate categories. When a user deactivates a category, all its child categories are also deactivated. This ensures that the entire hierarchy of categories is efficiently managed and reflects the status of the parent category. By using this application, users can effectively organize and manage categories in a nested structure, perform CRUD operations on categories, search for specific categories, and easily deactivate categories along with their child categories when needed.

### Technologies Used

- TypeScript
- Node.js
- Express.js
- MongoDB
- Mongoose

### Installation

- Clone the repository
- Navigate to the project directory
- Install the dependencies: \*\*npm install\*\*
- Set up the MongoDB database and provide the database connection URL in the configuration.
- Run the application: \*\*npm run dev\*\*

### Usage

1. Access the application by visiting the provided URL in your browser.

2. Create a parent category by providing a name and saving it.

3. Create child categories by selecting a parent category and entering a name.

4. Get all categories or a single catregory if needed.

5. Update or delete categories as needed.

6. Search for categories using the provided search functionality.

7. To deactivate a category, simply select the category and choose the deactivate option. The deactivation will also apply to all child categories.

### Sample:

#### Create a Parent Category

POST /api/v1/category
Body:
{
"name": "Electronics"
}

#### Create a Child Category

POST /api/v1/category
Body:
{
"name": "Accessories",
"parent": "60a83a88c7d5e914c41da7f4" (Parent category ID)
}

#### Get all Categories

GET /api/v1/category

#### Get a Category

GET /api/v1/category/:id

#### Update a Category

PATCH /api/v1/category/edit/:id
Body:
{
"name": "Updated Category Name"
}

#### Delete a Category

DELETE api/v1/category/delete/:id

#### Search Categories

GET /api/v1/category?search=Accessories

#### Deactivate a Category

PATCH api/v1/category/:id/deactivate
