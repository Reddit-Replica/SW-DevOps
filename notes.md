## important notes for diffrent deployment way 

## for k8s deployment



## for Docker-Compose deployment
# mongolink inside must be not local host but with service name ( mongo-service ) in out case so link must be 



## front end 
### have 2 separate files as .env_dev .end_pro 
#### and manully set enviroment variable (VUE_ENV) to use which one from the 2 files as enviroment variable
#### files will include the following:
##### base_url this will be the base url to call backend 
##### Vue_Port this will be the Port that application run on it 


## backend 
### have 2 separate files as .env_dev .end_pro 
#### and manully set enviroment variable (NODE_ENV) to use which one from the 2 files as enviroment variable
#### files will include the following:
##### DB_HOST , DB_USER , DB_PASSWORD , DB_NAME , DB_PORT env for connecting data base 
##### NODE_PORT this will be the Port that application run on it 


## for mobile 
### use dont write logic in main function since it need to reset the whole application when edit on
### use void main(){runapp(myApp());} and write whole login in other wedget  