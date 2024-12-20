let users = []; // In-memory storage (replace with a database)

// Get user by email
exports.getUserByEmail = async (email) => {
  return users.find((user) => user.email === email);
};

// Save user
exports.saveUser = async (user) => {
  users.push(user);
};
