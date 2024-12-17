function isNotBetween3AMand5AM() {
    const now = new Date();
    const currentHour = now.getHours();
  
    // Check if the current hour is outside 3 AM to 5 AM
    if (currentHour < 4 || currentHour >= 6) {
      return true; // Not between 3 AM and 5 AM
    }
    return false; // Between 3 AM and 5 AM
  }
  
  // Example Usage
  
  if (isNotBetween3AMand5AM()) {
    console.log("It is NOT between 3 AM and 5 AM.");
  } else {
    console.log("It is between 3 AM and 5 AM.");
  }
  