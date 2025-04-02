
class Validation {
    static validateText(text) {
        const regex = /^[A-Za-z0-9\s.,'-]{3,}$/; // Allows letters, numbers, spaces, and common punctuation, min 3 chars
        return regex.test(text.trim());
    }

}

export default Validation;