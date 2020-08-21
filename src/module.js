// src/my-module.js
// Named export - Has a name. Have as many as needed.
export const message = 'message from module.js';
// Default export - Has no name. You can only have one.
export default (name) => `Hello ${name}`;
// or
// const message = 'Some message from my-module.js';
// const getGreeting = (name) => `Hello ${name}`;
// export { message, getGreeting as default }