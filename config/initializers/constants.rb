if Rails.env.development? 
  WEBPACK_ASSET_PATH = "http://localhost:8080/dist/main.js"
else
  WEBPACK_ASSET_PATH = "webpack"
end