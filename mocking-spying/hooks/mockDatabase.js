// mockDatabase.js
export const mockDatabase = {
    users: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }],
    findUserById(id) {
      return this.users.find(user => user.id === id)
    },
    insertUser(user) {
      user.id = this.users.length + 1
      this.users.push(user)
      return user
    }
  }
  
