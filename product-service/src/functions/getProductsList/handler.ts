// import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
// import schema from "./schema";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayEvent } from "aws-lambda";
import mockData from "src/mockData";

// const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
const getProductsList = async (event: APIGatewayEvent) => {
  try {
    const data = await mockData();
    return formatJSONResponse({
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const main = middyfy(getProductsList);
