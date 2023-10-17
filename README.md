# NoSQL: Social Network API

## Table of Contents
- [Overview](#overview)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Walkthrough Video](#walkthrough-video)
- [Mock Up](#mock-up)
- [Getting Started](#getting-started)
  - [MongoDB Installation](#mongodb-installation)
  - [Models](#models)
    - [User Model](#user-model)
    - [Thought Model](#thought-model)
    - [Reaction (SCHEMA ONLY)](#reaction-schema-only)
  - [API Routes](#api-routes)
    - [api/users](#apiusers)
    - [api/users/:userId/friends/:friendId](#apiusersuseridfriendsfriendid)
    - [api/thoughts](#apithoughts)
    - [api/thoughts/:thoughtId/reactions](#apithoughtsthoughtidreactions)
- [Submission](#submission)

## Overview

Welcome to the Social Network API! This project involves building an API for a social network web application. Users can share their thoughts, react to friends' thoughts, and create a friend list. The stack includes Express.js for routing, MongoDB for the database, and Mongoose as the Object Data Modeling (ODM) tool. Additionally, a JavaScript date library or the native JavaScript `Date` object can be used for timestamp formatting.

As this application won't be deployed, a walkthrough video is provided to demonstrate its functionality, meeting all the acceptance criteria.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Walkthrough Video

[Link to the Walkthrough Video](https://your-walkthrough-video-link.com)

## Mock Up

The provided animations demonstrate the application's API routes tested in Insomnia:

- GET routes to return all users and thoughts
- GET routes to return a single user and a single thought
- POST, PUT, and DELETE routes for users
- POST and DELETE routes for a user's friend list
- Additional actions for reactions to thoughts (not shown in animations)

![Demo of GET routes to return all users and all thoughts in Insomnia.](./Assets/18-nosql-homework-demo-01.gif)
![Demo that shows GET routes to return a single user and a single thought in Insomnia.](./Assets/18-nosql-homework-demo-02.gif)
![Demo that shows the POST, PUT, and DELETE routes for users in Insomnia.](./Assets/18-nosql-homework-demo-03.gif)
![Demo that shows the POST and DELETE routes for a user’s friend list in Insomnia.](./Assets/18-nosql-homework-demo-04.gif)

## Getting Started

To set up and run this application, follow these steps:

### MongoDB Installation

Ensure that MongoDB is installed on your machine. If not, follow the [MongoDB installation guide](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb) to install MongoDB locally.

### Models

#### User Model

- `username`
  - String
  - Unique
  - Required
  - Trimmed

- `email`
  - String
  - Required
  - Unique
  - Must match a valid email address

- `thoughts`
  - Array of `_id` values referencing the `Thought` model

- `friends`
  - Array of `_id` values referencing the `User` model (self-reference)

**Schema Settings**:

Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.

#### Thought Model

- `thoughtText`
  - String
  - Required
  - Must be between 1 and 280 characters

- `createdAt`
  - Date
  - Set default value to the current timestamp
  - Use a getter method to format the timestamp on query

- `username` (The user that created this thought)
  - String
  - Required

- `reactions` (These are like replies)
  - Array of nested documents created with the `reactionSchema`

**Schema Settings**:

Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

#### Reaction (SCHEMA ONLY)

- `reactionId`
  - Use Mongoose's ObjectId data type
  - Default value is set to a new ObjectId

- `reactionBody`
  - String
  - Required
  - 280 character maximum

- `username`
  - String
  - Required

- `createdAt`
  - Date
  - Set default value to the current timestamp
  - Use a getter method to format the timestamp on query

**Schema Settings**:

This will not be a model but will be used as the `reaction` field's subdocument schema in the `Thought` model.

### API Routes

#### `/api/users`

-

 `GET` all users
- `GET` a single user by its `_id` and populated thought and friend data
- `POST` a new user

```json
// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
```

- `PUT` to update a user by its `_id`
- `DELETE` to remove user by its `_id`

**BONUS**: Remove a user's associated thoughts when deleted.

#### `/api/users/:userId/friends/:friendId`

- `POST` to add a new friend to a user's friend list
- `DELETE` to remove a friend from a user's friend list

#### `/api/thoughts`

- `GET` to get all thoughts
- `GET` to get a single thought by its `_id`
- `POST` to create a new thought (push the created thought's `_id` to the associated user's `thoughts` array field)

```json
// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
```

- `PUT` to update a thought by its `_id`
- `DELETE` to remove a thought by its `_id`

#### `/api/thoughts/:thoughtId/reactions`

- `POST` to create a reaction stored in a single thought's `reactions` array field
- `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

## Submission
I hope you enjoy exploring the capabilities of the Social Network API! Here are the links for your reference:

- [Link to the Walkthrough Video](https://your-walkthrough-video-link.com)

Feel free to reach out with any questions or feedback. Happy coding!
```

This table of contents organizes the README for easy navigation. Remember to replace `"https://your-walkthrough-video-link.com"` with the actual URL of your walkthrough video and ensure you have the necessary animations and assets in the correct paths.
