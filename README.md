# Back-Proyect_Event

## Introduction

- This is an API for crossfit website.
This is an api with crossfit box information, news and a blog.
## SETUP

### Install & Update Dependencies

The first time you start the server you may want to make sure you have the dependencies installed, in the right versions. To do so, just go to the terminal and type:

```
$ npm install
```

### Install StandardJS Linter

[StandardJS](https://standardjs.com/) is a JavaScript style guide, linter, and formatter.

#### VSCode Extension

You may want to install [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs)

> VSCODE `SETTINGS.JSON`:

```
  "javascript.validate.enable": false,
  "standard.enable": true,
  "standard.run": "onType",
  "standard.autoFixOnSave": false,
  "standard.usePackageJson": true
```

_Make sure you don't have duplicate rules!_

### Environment Variables

The next setup step is to create an `Environment Variable` file `.env` in this folder. We have provided a `.env.example` for you with a sample configuration for both **development** and **production** environments.

Make your own copy\_

```
$ cp .env.example .env
```

And customize the sample params to your needs

<<<<<<< HEAD
- mongoURL: "mongodb://localhost/",
- mongoDBName: 'BoxesCrossFit',
- apiKeys : "fakeapikey",
- port : 5000
=======
- mongoURL: "mongodb://localhost:3000/api",
- mongoDBName: 'BoxesCrossFit',
- apiKeys : "fakeapikey",
- port : 3000
Happy coding!

## MODELS

### USER MODEL

| KEY            | TYPE     | REQUIRED | VALIDATIONS  | EXTRA |
| -------------- | -------- | ---------|------------- |-------
| first_name     | String   | true     |              |
| last_name      | String   | true     |              |
| email          | String   | true     | regex(email  |
| password       | String   | true     | min(8)       |
| mobile         | String   | true     | min(6)       |
| social_tw      | String   | false    |              |
| social_fb      | String   | false    |              |
| social_it      | String   | false    |              |
| social_lk      | String   | false    |              |
| birthday       | Date     | false    |              |
| role           | String   | true     |              | Enum: User, Admin, default: User
| name_box       | ObjectId |  false   | Ref: Box
| country  | String   | true     |              |



### EVENT MODEL

| KEY                      | -------- | --------- |----------
| name                     | String   |  true     |
| direction                | String   |  true     |
| country                  | String   |  true     |
| province                 | String   |  true    |
| email                    | String   |  true     |
| phone                    | Strin    |  true     |
| social_fb                | String   |  true     |
| social_it                | String   |  true     |
| social_web               | String   |  false    |
| description              | String   |  true     |
| coachs                   | [String] |  false    |
| img                      | String   |  true     |
| google_map_embed_iframe  |String    |  true
| createAt                 | String   |  true     |



## API ROUTES

Please note that all routes in this API should be called with the `/api` prefix before the endpoint:

```
POST http://DOMAIN/api/auth/signup
```

### AUTHENTICATION ENDPOINTS
> TOKEN Required: NO

| METHOD | URL           | What does it do      |
| ------ | ------------- | -------------------- |
| POST   | `auth/signup` | Create a new account |
| POST   | `auth/login`  | Authenticates a user |


### ADMIN ENDPOINTS

> TOKEN Required: YES

| METHOD | URL                  | What does it do  | Extra
| ------ | ---------------------| ---------------- | -----
| GET    | `admin/users`        | Get All Users    | ADMIN
| GET    | `admin/boxes `       | Get Events       | ADMIN


### USER ENDPOINTS

> TOKEN Required: YES

| METHOD | URL             | What does it do  | Extra
| ------ | --------------- | ---------------- | -----
| GET    | `me      `      | Get Profile      |
| PUT    | `me`            | Update a User    |
| PUT    | `me/password`   | Update My Password  |
| DELETE | `me`            | Deletes Account  |


### BOX ENDPOINTS

> TOKEN Required: NO

| METHOD | URL          | What does it do | Filters
| ------ | -------------| ----------------|-------------------------|
| GET    | `boxes`      | Get All Boxes   | Country / province
| GET    | `boxes/:id`  | Get One Event   |
