# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users/:id` (get profile page of user)
- `GET /api/users/:followers/:id` (get all users following this user)
- `GET /api/users/:followed/:id` (get all users followed by user)

### Session

- `POST /api/session`
- `DELETE /api/session`

### Photos
- `GET /api/users/photos`
- `GET /api/users/feed/photos` (get photos of all followed accounts)
