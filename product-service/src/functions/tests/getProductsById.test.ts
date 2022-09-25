import { APIGatewayProxyEvent } from "aws-lambda";
import mockData from "src/mockData";
import { assert, test } from "vitest";
import { getProductsById } from "../getProductsById/handler";

test("Should return correct response", async () => {
  const expected = await getProductsById({
    pathParameters: { id: "1" },
  } as unknown as APIGatewayProxyEvent);

  const correctPayload = ((await mockData()) as { id: string }[]).find(
    (piece) => {
      return piece.id === "1";
    }
  );

  assert.deepEqual(expected, {
    statusCode: 200,
    body: JSON.stringify(correctPayload),
  });
});

test("Should return error if not found", async () => {
  const expected = await getProductsById({
    pathParameters: { id: "123123123123" },
  } as unknown as APIGatewayProxyEvent);

  assert.deepEqual(expected, {
    statusCode: 404,
    body: JSON.stringify({ message: "Product not found" }),
  });
});
