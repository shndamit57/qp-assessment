#   Steps to run outside docker
    git clone git clone https://github.com/shndamit57/qp-assessment.git
    cd qp-assessment
    npm install
    make required changes in .env file
    npm start

#   Steps to run inside docker
    git clone git clone https://github.com/shndamit57/qp-assessment.git
    cd qp-assessment
    make required changes in .env file
    docker build -t my-node-app .
    docker run --env-file .env -p 3000:3000 --name my-node-container my-node-app

#   To test
    1.first create a db
    2.whenever you first start an application it will automatically create the tables
    3.now can insert the data in tables using below commands:
        INSERT INTO products (name, price, stock)
        VALUES 
        ('Apple', 1.5, 100),
        ('Banana', 0.8, 200),
        ('Orange', 1.2, 150),
        ('Milk', 2.5, 50),
        ('Bread', 1.0, 75);

        INSERT INTO users (username, role, password)
        VALUES
        ('admin_user', 'admin','admin_user'),
        ('customer1', 'user','customer1'),
        ('customer2', 'user','customer2');

        INSERT INTO orders (userid, productid, quantity)
        VALUES
        (2, 2, 5),
        (2, 2, 10),
        (3, 3, 7);

    4.now go to postman
        request: POST
        body: {"username": "customer1", "password": "customer1"}
        api: http://localhost:3000/api/auth/signin
        go to Tests tab in the same request and paste below
            const response = pm.response.json();
            if (response && response.token) {
            pm.environment.set("authToken", response.token);
            console.log("Token saved to environment: " + response.token);
            } else {
            console.log("No token found in response");
            }
            pm.variables.get("variable_key");
        Now you will have a session live, so that you can test the remaining apis
    5.test apis
        open a new postman tab
        in the headers add below key value pair
            Key: Authorization
            Value: Bearer {{authToken}}
        now lets first test the role user apis
        5.1 order items(can be accessed only with role user)
            request: POST
            body: {"userid":2, "productid":3, "quantity":20}
            api: http://localhost:3000/api/order
        5.2 To test the admin api again fire the api in step 4 by changing the body to
            body: {"username": "admin_user", "password": "admin_user"}
        5.3 get all items(this api is accessible to both type of roles)
            request: get
            api: http://localhost:3000/api/prooduct
        5.4 create product(can be accessed only by admin)
            request: POST
            body: {"name": "maggie", "price": 10, "stock": 200 }
            api: http://localhost:3000/api/auth/product
        5.5 update product(can be accessed only by admin)
            request: PUT
            body: {"name": "banana", "price": 1, "stock": 100 }
            api: http://localhost:3000/api/product/2
        5.6 delete product(can be accessed only by admin)
            request: delete
            api: http://localhost:3000/api/product/2