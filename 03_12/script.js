import User from "./User.js";

const defaultUser = new User("John", "Doe", 30, "Male", false);

console.log("New User: ", defaultUser);
defaultUser.toggleSubscription(true);
console.log("Default User subscription status: ", defaultUser.subscribed);
