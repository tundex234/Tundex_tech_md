//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "malvink003@gmail.com";
global.location = "Kwekwe, Zimbabwe";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/tundex234/Tundex_tech_md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VajRmmoKwqSSnMXxt115";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VajRmmoKwqSSnMXxt115";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b1ccca316c27bffae7f5f.jpg";
global.devs = "2348081170565";
global.sudo = process.env.SUDO || "263780166288";
global.owner = process.env.OWNER_NUMBER || "2348081170565";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/b1ccca316c27bffae7f5f.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "am tundex tech md";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0tEdFAwRnp5c2VGZnpVMVk3akhHVlBuV1BVQ1MrQXZFZ0d2cklyYSttcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUitXZVB3aHVLdHA3U3lsSk1xK0VOTHpBcDhLN3ZGbDRNbHJ3bDg1YVh3ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRjJ0akNPWmpGckN0aC9TZXBabERUWnQ3Q3ZpVk9aTXhhREl4SW1qSEY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXU1AzKzZjSjIvYjdYTDA2N2FiSGpHZ2ZQRWx2bzA0OWdLYlRvem9rS2c4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdQbjNyeVJjSUlzSlg4UktpMktRU0g2Qzg5VGVKRzV3bFhJc2ZRa0ZubXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImcxWWJTeEVkaDdzOWltdVZtNkZJb0ZQOXpqaW00MlVad3dRNDJtRm1sV009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUNsSHV6M3kxNmdxYS9EekRQQVhIOUZLaFp0aExOUXc2MjB4TTAzemJIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQnBxSk8vbkVRN01DSW43OWl3bU1hdjJYK0ZscVhBSkhYekhKNTAxQi9oWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldVYWJsME1vaU8rbE9TWGJzZWtPeUYxWXB0ZU1OZXhCeGd1YWpBdjgwdFlrKzgrK1JOQ1lKTnI4bjFFbXhCdXBYYUlMZGY2bzVVUm1ONW9QeFpPQ0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzEsImFkdlNlY3JldEtleSI6InF6RnNJdit0eG5veFlreWVFbVQ3UjlmTTFiZTZTTWFPVW1FQzlDZmluNVU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODA4MTE3MDU2NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCNDYxODVCREY0N0Q2NkQ0RDI5NzBCNzhCMEJFOEI3RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxNDkxNzM4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MDgxMTcwNTY1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjU4QzIwMEI5RDQwNkFBNEI1QUI0NzRCMjhDNUM1Nzk4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE0OTE3NDJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwODExNzA1NjVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjVFMzI0MDZEN0YzNDZDREQ1QzQ3QTJBQjg2Nzg5N0YifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTQ5MTc1N30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODA4MTE3MDU2NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0QjUxNURGRTE3MkZDNjgyMDE4RDA1M0YwRDA4N0RFMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxNDkxNzYyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXUGxZODJ0M1FxQ09JWlBnbi1yN0VnIiwicGhvbmVJZCI6Ijc5OGQwYWNhLWE5OWItNDkyNS04Yjk3LWJiMjZhNDkwZmM5YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJId2tvQktGd2FOazFQdndEV2lxUXFqdXNrUXM9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRRQncvOWg5MWFRUklyNUlKMmNGaGJUVXhwYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t2L2tLc0NFSWJDNzdRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkM5c0dVdlZZNWExNXB2Qzg4bS93OGpKTm13ZU5EbGx6T2FzY3Q1Y29RRVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImErckR1OXRsclYwTHN2SllsejI0S2F6eGY5dExLYTJOU3Y2TEFnVzE0dDFJRmd5WmNtV256WXc5cjQvVUs3amZpVnF6MWZYMGhLbUw4dWVraFRzWkRBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMdEFnWXFyTkZxZGZubzdMSmpaNVNFdXpkNE8vdWZEUjZwdUtrWnVyWDl2MllRS1k3RnRUd0Y5SFgrYnZKcm5MdWNEYy9DLy9CVDJkc3E0OVdpbTNDQT09In0sIm1lIjp7ImlkIjoiMjM0ODA4MTE3MDU2NTo3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlR1bmRleCBFbnRlcnByaXNlIiwibGlkIjoiMTU3MjMwNjQ5MzQ4MjY2OjdAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwODExNzA1NjU6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRdmJCbEwxV09XdGVhYnd2UEp2OFBJeVRac0hqUTVaY3ptckhMZVhLRUJFIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJREE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE0OTE5MTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTXl2In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`TUNDEX TECH MD ™`",
  author: process.env.PACK_AUTHER || "TUNDEX MD",
  packname: process.env.PACK_NAME || "M A L V I N",
  botname: process.env.BOT_NAME || "TUNDEX TECH MD",
  ownername: process.env.OWNER_NAME || "TUNDEX",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-X00anFgosmRhhWP75khXT3BlbkFJlyo7xhWoWhz9Sdoap9Hv",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "T U N D E X").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
