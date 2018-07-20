aws-apigateway-lambda
===========

This project is an example how to use API Gateway with AWS Lambda. 

## Installation

### Requirements

To locally simulate gateway environment we are using [sam](https://docs.aws.amazon.com/lambda/latest/dg/serverless_app.html)

* Docker

* [SAM](https://docs.aws.amazon.com/lambda/latest/dg/sam-cli-requirements.html)

### Installation

```bash
pip install aws-sam-cli
```

### Run application Locally

To to run the application locally the following command should be used:

```bash
sam local start-api
```

This command will deploy the application to a docker container and provide the endpoint.

```
2018-07-20 18:40:30 Mounting Products at http://127.0.0.1:3000/person/{id} [GET]
2018-07-20 18:40:30 You can now browse to the above endpoints to invoke your functions. You do not need to restart/reload SAM CLI while working on your functions changes will be reflected instantly/automatically. You only need to restart SAM CLI if you update your AWS SAM template
2018-07-20 18:40:30  * Running on http://127.0.0.1:3000/ (Press CTRL+C to quit)
```

#### Example

```bash
curl http://127.0.0.1:3000/person/12
```

## Documentation

* AWS Lambda - https://docs.aws.amazon.com/lambda/latest/dg/welcome.html

* AWS API Gateway - https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html 

* SAM CLI - https://docs.aws.amazon.com/lambda/latest/dg/sam-cli-requirements.html

* Docker - https://docs.docker.com/