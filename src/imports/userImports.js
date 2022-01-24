
var _userName = "banana";

export function setUserName(userName) {
    _userName = userName;

    const event = new Event('setState');
    event.userName = _userName;

    window.dispatchEvent(event);
}

export function getUserName() {
    return _userName;
}