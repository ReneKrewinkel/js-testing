// userService.js
export class UserService {
    constructor(database) {
      this.database = database; // Dependency injection for the database
    }
  
    async getUserById(id) {
      console.log('echte function getUserById')
      const user = await this.database.findUserById(id);
      return user;
    }
  
    async createUser(user) {
      const newUser = await this.database.insertUser(user);
      return newUser;
    }
  }
  
  