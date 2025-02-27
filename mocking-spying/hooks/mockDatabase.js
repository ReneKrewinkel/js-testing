// mockDatabase.js
export const mockDatabase = {
    users: [{ id: 1, name: 'Harry' }, { id: 2, name: 'Jane Doe' }],
    findUserById(id) {
      console.log('echte function findUserById uit de database functie')

      return this.users.find(user => user.id === id)
    },
    insertUser(user) {
      console.log('echte function insertUser uit de database functie')
      user.id = this.users.length + 1
      this.users.push(user)
      return user
    }
  }
  
