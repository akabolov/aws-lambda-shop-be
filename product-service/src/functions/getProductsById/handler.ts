import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayEvent } from "aws-lambda";
import mockData from "src/mockData";

const getProductsList = async (event: APIGatewayEvent) => {
  try {
    const { id } = event.pathParameters;
    const item = ((await mockData()) as { id: string }[]).find((piece) => {
      return piece.id === id;
    });

    if (!item) {
      return formatJSONResponse({ message: "Product not found" }, 404);
    }
    return formatJSONResponse(item);
  } catch (error) {
    console.log("lambda error", error);
  }
};

export const main = middyfy(getProductsList);
