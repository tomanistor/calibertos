# Calibertos

# Run API Server
In separate terminal windows run:
- `mongod`
- `npm start`

# API Documentation
```
Request: `GET /users`
Respone:
[
  {
    '_id': ObjectId,
    'name': String,
    'email': String
  },
  ...
]
```

```
Request: `GET /users/:id`
Response:
{
  '_id': ObjectId,
  'name': String,
  'email': String
}
```

```
Request: `POST /users`
{
  'name': String,
  'email': String
}
Response:
{
  '_id': ObjectId
}
```

```
Request: `DELETE /users/:id`
Response:
{
  '_id': ObjectId
}
```
