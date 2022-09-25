import mockData from "src/mockData";
import { assert, test } from "vitest";
import { getProductsList } from "../getProductsList/handler";

test("Should return correct response", async () => {
  const expected = await getProductsList();

  const correctPayload = await mockData();
  console.log(correctPayload);
  assert.deepEqual(expected, {
    statusCode: 200,
    body: JSON.stringify({ data: correctPayload }),
  });
});
