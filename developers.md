# Developer Guidance

# Building the docker image

Run the following commands:

```
docker build -t catlord-website .
docker run -p 3000:3000 catlord-website
```

If you get a permissions error when trying to run docker you may need to run:

```
sudo chmod 666 /var/run/docker.sock
```

```
doctl registry login
```
