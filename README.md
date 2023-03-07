https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

```
# Get container ID
$ docker ps

# Print app output
$ docker logs <container id>

# Example
Server running on port 3456
```


```
# Enter the container
$ docker exec -it <container id> /bin/bash
```

```
# Kill our running container
$ docker kill <container id>
<container id>

# Confirm that the app has stopped
$ curl -i localhost:3456
curl: (7) Failed to connect to localhost port 3456: Connection refused
```