const getUrl = (path) => {
    return `http://127.0.0.1:8000/api/chat/${path}`;
}

export const getUsersRequest = async () => {
    return await fetch(getUrl('accounts/'));
}

export const getGroupsRequest = async () => {
    return await fetch(getUrl('groups/'));
}

export const loginRequest = async (user) => {
    return await fetch(getUrl('accounts/login/') + `?username=${user.username}`)
}