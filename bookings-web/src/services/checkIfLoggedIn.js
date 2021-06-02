export const checkIfLoggedIn = async () => {
    const user = await fetch(`${process.env.BASE_URL}/users/checklogin`, {
        method: 'GET',
        credentials: 'include',
    });
    return user.json();
};
