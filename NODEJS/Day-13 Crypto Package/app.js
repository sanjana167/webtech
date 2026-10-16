import crypto from "crypto";

/**
 * ! crypto.randomBytes()

const otpChar = crypto.randomBytes(3).toString("hex");
console.log("otpChar:",otpChar); // otpChar = aa8587

const apiKey = crypto.randomBytes(16).toString("hex");
console.log("apiKey:",apiKey);
 */

/**
 * ! crypto.randomInt(min, max)
const createOtp = (length = 6) => crypto.randomInt(10**(length - 1), 10**length);
console.log(createOtp())
console.log(createOtp(4))
*/

/**
 * ! Hashing
 * ? crypto.createHash()
 * ? sha256 => 32 bytes 
 * ? sha512 => 64 bytes
 * 
 * sha = secure hashing algorithm

const password = "Superman123";

const passwordHash = crypto.createHash("sha256").update(password).digest("hex");
console.log("passwordHash:",passwordHash);
// passwordHash = 80b50b5f2d8dc0444bb44c5482c35eb2dc3b25436d9f1f6bae1540d6339f6afa


const passwordInput = "Superman123";
const newPasswordHash = crypto.createHash("sha256").update(passwordInput).digest("hex")
console.log("newPasswordHash:", newPasswordHash);

console.log(passwordHash === newPasswordHash)
 */


/** 
const createHash = (value) => {
  return crypto.createHash("sha256").update(value).digest("hex");
};

const password1 = "Superman1";
const hashPassword = createHash(password1);
console.log("hashPassword:", hashPassword);

const password2 = "Superman1";
const newHashPassword = createHash(password2);
console.log("newHashPassword:", newHashPassword);

console.log("comparison:", hashPassword === newHashPassword);

*/



/** 
const password1 ="raj@123";
const password2="raj@123";

const secretKey="mysecret"

const hashPassword1= crypto.createHmac("sha256", secretKey).update("password1").digest("hex")
console.log("hashPassword1:" , password1);

const hashPassword2= crypto.createHmac("sha256", secretKey).update("password2").digest("hex")
console.log("hashPassword2:" , password2); 

console.log(hashPassword1 === hashPassword2); 
*/


/**
const password1 = "Raj@123";
const password2 = "Raj@123";


const hashPassword =(pass) =>{
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(pass,salt,100000,32 , "sha512").toString("hex");
  return hash
}

const hash1 = hashPassword(password1);
const hash2 = hashPassword(password2);

console.log(hash1);
console.log(hash2);
console.log(hash1 === hash2); 
*/



const password1 = "Raj@123";
const password2 = "Raj@123";

const ITERATION = 100000;
const  KEYLEN = 32;
const DIGEST = "sha512" ;

const hashPassword =(pass) =>{
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(pass,salt,ITERATION, KEYLEN , DIGEST).toString("hex");
  return `${ITERATION}:${salt}:${hash}`;
}

hashPassword("Aditya123");












