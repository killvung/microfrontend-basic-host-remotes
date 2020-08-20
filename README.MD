# Microfrontend Basic Host Remotes
This is a simple microfrontend application built with Webpack 5 Module Federation. It contains a host application loading two components from remote applications
-   `microfrontend-container` is my container application
-   `microfrontend-images-remote` is my remote application exposing images application
-   `microfrontend-videos-remote` is my remote application exposing videos application

# Running Demo
- Followed `microfrontend-images-remote` and `microfrontend-videos-remote` instructions 
to retrieve `Credential` for APIs calls.
- run `npm run start` on all 3 applications correspondingly
- localhost:8080 (`microfrontend-container`)
- localhost:3002 (`microfrontend-images-remote`)
- localhost:3003 (`microfrontend-videos-remote`)