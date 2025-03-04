function canDrive(age, hasLicense) {
    return age >= 18 && hasLicense;
}

console.log(canDrive(20, true));
console.log(canDrive(17, true)); 
console.log(canDrive(25, false));
console.log(canDrive(18, true));  
