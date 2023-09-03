class User {
  constructor(firstName, lastName, age, gender, subscribed) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.subscribed = subscribed;
  }
  toggleSubscription(subStatus) {
    this.subscribed = subStatus;
  }
}

export default User;
