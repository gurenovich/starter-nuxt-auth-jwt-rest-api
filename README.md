# starter-nuxt-auth-jwt-rest-api

> Start template with nuxtjs and auth jwt rest api

## Install

``` bash
# install dependencies
$ npm i

# create .env file with PRISMA_MANAGEMENT_API_SECRET=supersecret

# change /server/prisma/docker-compose.yml (PROJECT_NAME)

# change /server/prisma/prisma.yml (PROJECT_NAME)

# install docker in /server/prisma
$ docker-compose up -d

# prisma
$ prisma deploy
```

Check out http://localhost:4466/PROJECT_NAME/_admin
```
# generate new token for web interface _admin and paste him in settings
$ prisma token
```

Graphql playground:
http://localhost:4466/PROJECT_NAME/
```
{
  "Authorization": "Bearer YOUR_TOKEN"
}
```
