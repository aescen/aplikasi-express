# 29-deploy-service-restful-api-to-server

## URL Heroku:

- https://aplikasi-express-server.herokuapp.com

## Endpoints

- `GET` /
- `POST` /hewan
- `GET` /hewan
- `GET` /hewan:id
- `PUT` /hewan:id
- `DELETE` /hewan:id

### Body

`POST` / `PUT`

```json
{
  "nama": "string",
  "namaSpesies": "string",
  "umur": "int"
}
```