# MURMUR

### Requirements
1. OS: `Linux`
2. NodeJS: `v12`
3. NPM: `v6`
4. YARN: `v22`

### Steps to install this app
1. Download the code.
2. Go to db directory and Build database container.
    1. `$cd db`
    2. `$docker-compose build`
    3. `$docker-compose up -d`
3. Go to server directory and run the server.(from project root)
    1. `$cd server`
    2. `$npm install`
    3. `$npm run start`
4. Go to client directory and build and run the client. (from project root).
   1. `$cd client`
   2. `$yarn`
   3. `$yarn build`
   3. `$yarn start`
   
### Steps to use this app

1. Go to `http://localhost:3000/auth`
   As of now you can not create new user. You have to log-in with the following existing user.
   
   |user_id            |password              |
   |-------------------|----------------------|
   |albert_einstein    |Mileva Marić          |
   |friedrich_nietzsche|Salomé                |
   |gautama_buddha     |Yasodharā             |
   |jrr_tolkien        |Edith Tolkien         |
   |mahatma_gandhi     |Kasturba Gandhi       |
   |mark_twain         |Olivia Langdon Clemens|
   |oscar_wilde        |Constance Lloyd       |
   |ralph_waldo_emerson|Ellen Louisa Tucker   |
   |thomas_a_edison    |Mary Stilwell         |

   
### Pages
1. log in: `/auth`
2. Timeline: `/`
3. List of users: `/list-of-user`
4. Profile: `profile`
5. Other user details: `user-details-page`
