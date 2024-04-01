const base_url = process.env.DATABASE_URL;
const PORT = process.env.PORT;
const userjwt = process.env.userJWT;
const userpasswordjwt = process.env.userpasswordjwt;
const adminJWT = process.env.adminJWT;
const adminpasswordjwt = process.env.adminpasswordjwt;
const appPassword = process.env.appPassword;

module.exports = {
    PORT  , userjwt , userpasswordjwt , adminJWT , adminpasswordjwt , appPassword
}