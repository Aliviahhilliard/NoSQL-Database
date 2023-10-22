# NoSQL: Social Network API

## Table of Contents
- [Overview](#overview)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)
- [Mock Up](#mock-up)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

Welcome to the Social Network API! This API serves as the backend infrastructure for a social network web application where users can share thoughts, react to friends' thoughts, and manage a friend list. The tech stack includes Express.js, MongoDB, and Mongoose. For date and time formatting, either a JavaScript date library or the native JavaScript `Date` object can be used. A walkthrough video is available to guide you through its capabilities.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large volumes of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I invoke the application
THEN my server starts, and Mongoose models sync with the MongoDB database
WHEN I access API GET routes for users and thoughts in a REST client
THEN I receive formatted JSON data for each route
WHEN I test API POST, PUT, and DELETE routes
THEN I can create, update, and delete users and thoughts in the database
WHEN I test API routes for friend lists and reactions
THEN I can add and remove friends and create and delete reactions
```

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Insomnia (for testing)

## Installation

If MongoDB is not yet installed on your machine, follow this [MongoDB Installation Guide](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb).

Clone this repository to your local machine and run `npm install` to install the necessary packages.

## Usage

Run `npm start` to start the server and sync the MongoDB database. Use Insomnia or another REST client to test the API routes.

## Walkthrough Video

[Watch the Walkthrough Video Here](https://your-walkthrough-video-link.com)

## Mock Up

Animations to demonstrate API route testing in Insomnia:

![User and Thought GET Routes](./Assets/18-nosql-homework-demo-01.gif)
![Single User and Thought GET Routes](./Assets/18-nosql-homework-demo-02.gif)
![User POST, PUT, DELETE Routes](./Assets/18-nosql-homework-demo-03.gif)
![Friend List POST, DELETE Routes](./Assets/18-nosql-homework-demo-04.gif)

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue to discuss the proposed changes.

## License

This project is under the MIT License. See [LICENSE](./LICENSE) for details.

## Contact

If you have any questions or feedback, feel free to reach out. Happy coding!

---

This should make your README file more comprehensive and easy to navigate.