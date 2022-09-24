// import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
// import schema from "./schema";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayEvent } from "aws-lambda";

// const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
const getProductList = async (event: APIGatewayEvent) => {
  return formatJSONResponse({
    message: `Hello world, welcome to the exciting Serverless world!`,
    event,
  });
};

export const main = middyfy(getProductList);
