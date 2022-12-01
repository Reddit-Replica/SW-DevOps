## عامل اي يعمنا

## if new version up and you want to download it
- docker pull waer/backend:latest
- docker pull waer/frontend:latest
- docker pull waer/frontend_testing:latest

## want to use frontend with mock server 
### go to docker compse folder and run 
- docker compose down
- docker compose up -d
- docker run -p 8085:8080 -p 3000:3000 waer/frontend_testing 

## want to use frontend with backend 
### go to docker compse folder and run 
- remove frontend_testing container from docker Desktop (sama) or vscode docker extention (karem) 
- docker compose down
- docker compose up -d


cypress run --env CYPRESS_baseUrl=