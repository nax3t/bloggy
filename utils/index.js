module.exports = {
    formatDate(datetimeString) {
        // Parse the datetime string into a Date object
        const date = new Date(datetimeString);

        // Array of month names
        const monthNames = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        // Get the day, month, and year components from the Date object
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();

        // Function to add suffix to day
        function addSuffix(num) {
            if (num === 1 || num === 21 || num === 31) {
                return num + "st";
            } else if (num === 2 || num === 22) {
                return num + "nd";
            } else if (num === 3 || num === 23) {
                return num + "rd";
            } else {
                return num + "th";
            }
        }

        // Format the date string with the day, month, and year
        const formattedDate = `${addSuffix(day)} ${month} ${year}`;

        return formattedDate;
    },
}