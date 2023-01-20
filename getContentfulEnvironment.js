require('dotenv').config({path:'./.env.local'});

const contentfulManagement = require("contentful-management")
module.exports = function() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_CMA_TOKEN||'CFPAT-jkCRBUx8jNqJI1Eh55ZXTUVFhvLHwsjNCYzF3XUe7uQ'
  })

  return contentfulClient
    .getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID||"7bkmtfyy5w8g" )
    .then(space => space.getEnvironment('master'))
}