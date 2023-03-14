## Encryptor
A web application for encrypting and decrypting text using a user-provided key.
This is a web app built as the final project for Harvard's CS50x course. The app allows users to encrypt and decrypt messages with any numerical key. The encryption algorithm uses the ASCII table to shift the character codes, and the decryption algorithm reverses the process. Check out the demo [here](https://youtu.be/S8nyX5MDoDk).

## Live Version
You can access the live version of the Encryptor web application [here](https://encryptor-webapp.netlify.app/).


## Technologies Used
- Frontend: React, Tailwind
- Backend: Express.js

## Functionality
- The user can input a plain text and a key number
- The app will encrypt the plain text by adding the key number to every character's ASCII code, excluding spaces.
- The user can then decrypt the encrypted text to retrieve the original text by subtracting the key number from the encrypted text's character's ASCII code.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- NodeJS
- npm

### Installing
1. Clone the repository
2. Go to the view directory of the project
3. Run `npm i` to install the dependencies
4. Go to the server directory and run `npm i` again to install the server dependencies
5. In the view directory, run `npm run dev` to start the frontend
6. In the server directory, run `npm start` to start the backend
7. Visit http://127.0.0.1:5173/ to access the app

## Note
This app is a simple demonstration of encryption and decryption using a user-provided key. It is not meant to be used for secure data encryption.

## Author
Mahdi Ettehadnejad
