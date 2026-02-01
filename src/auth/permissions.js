export function canAccessAdmin(user) {
    return user?.role === "admin";
}

export function canDeleteMovie(user) {
    return user?.role === "admin";
}