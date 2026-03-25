const getUserFromDB = (userId) => {
    return new Promise((resolve, reject) => {
        const fakeDB = [
            { id: 1, name: 'Alice', role: 'admin' },
            { id: 2, name: 'Bob', role: 'user' },
        ];

        setTimeout(() => {
            const user = fakeDB.find(user => user.id === userId);

            if (user) {
                resolve(user);
            } else {
                reject(new Error(`User: ${userId} not found`));
            }
        }, 1000);
    });
};

getUserFromDB(1)
    .then(user => {
        console.log('User found: ${user.name} (Role: ${user.role})' );
    })
    .catch(error => {
        console.error(error.message);
});
