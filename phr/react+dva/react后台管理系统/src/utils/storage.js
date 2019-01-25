export default {
    getItem(key) {
        const value = localStorage.getItem(key);
        return JSON.parse(value) ? JSON.parse(value) : value
    },
    setItem(key, value) {
        if (typeof value != "string") {
            value = JSON.stringify(value)
        }
        localStorage.setItem(key, value)
    }
}