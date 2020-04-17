# Todo list

## Setup & run with Docker
```
docker build --tag todo_list .

docker run --publish 8000:8080 --detach --name todo_list todo_list
```

Then navigate to http://localhost:8000
