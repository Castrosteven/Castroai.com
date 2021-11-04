require('dotenv').config({path:'./.env.local'});

const contentfulManagement = require("contentful-management")
module.exports = function() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_CMA_TOKEN 
  })

  return contentfulClient
    .getSpace(process.env.CONTENTFUL_SPACE_ID )
    .then(space => space.getEnvironment('master'))
}