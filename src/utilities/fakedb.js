const addToDb = id => {
    localStorage.setItem('break-time', id);
}

export { addToDb }