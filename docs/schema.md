# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
bio             | text      |
profile_pic_url | string    |

## photos
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
img_url            | string    | not null
caption            | text      |
poster_id          | integer   | not null, foreign key (references users), indexed
location           | string    |
current_user_liked | boolean   |

## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
following_id | integer   | not null, foreign key (references users), indexed


## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
body        | text      | not null
photo_id    | integer   | not null

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
liker_id    | integer   | not null, foreign key (references users), indexed
photo_id    | integer   | not null, foreign key (references photos), indexed
