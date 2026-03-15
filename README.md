# service virtualization using mountebank

### getting started
```bash
git clone https://github.com/sadabnepal/mountebank-api-mock.git &&
cd mountebank-service-virtualization
```

### pre-requisite
[![NodeJs](https://img.shields.io/badge/-NodeJS-%23339933?logo=npm)](https://nodejs.org/en/download/)

### install package
```
npm install
```

### start stub
```
npm start
```

### stub details
The project is using [mountebank](http://www.mbtest.org) as a service virtualization tool, which provides following endpoints.
```
Base URL: http://localhost:4545/api 
```

| http call   | endpoint               | status code | payload   |
|-------------|------------------------|-------------|-----------|
| GET         | `/users/{id}`          | 200         | N/A       |
| GET         | `/users?page={number}` | 200         | N/A       |
| POST        | `/users`               | 201         | `{"name": "sadab", "job": "tester" }`|
| PUT         | `/users/{id}`          | 200         | `{"name": "saqib", "job": "admin" }` |
| POST        | `/register`            | 200         | `{"email": "test@test.com", "password": "test@123" }` |
| POST        | `/login`               | 200         | `{"email": "test@test.com", "password": "test@123" }` |

Note: default response will be empty object `{}` with response code: `404`
