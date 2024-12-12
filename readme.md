#   Steps to run outside docker

#   Tasks
    1. Admin Responsibilities:
   - Add new grocery items to the system
   - View existing grocery items
   - Remove grocery items from the system
   - Update details (e.g., name, price) of existing grocery items
   - Manage inventory levels of grocery items
    2. User Responsibilities:
   - View the list of available grocery items
   - Ability to book multiple grocery items in a single order

#   To Do
    add a readme file to run the project, also mention steps to test in postman
        mention env file changes
        create db shopping
        insert with given commands
        write postman steps as we test
        mention api for each mentioned along with request body
        also write steps for docker
    search To Do
    Steps to run
        add changes in .env file
        check all steps if working properly
        for db
            create db ecommerce
            run npm run dev
            now run below to insert data
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