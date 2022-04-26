export const Query = {
    getTodo: (_, { id }) => {
        return db.todos.find(
            (student) => student.id == id
        )
    },


}