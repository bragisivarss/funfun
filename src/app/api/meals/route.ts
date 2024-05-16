import { apiPost } from "../database";

export async function POST(req: Request, res: Response) {
    const body = await req.json();
    const { name, description, imageUrl, mealUrl } = body;

    const query = `
    INSERT INTO meals(name, description, imageUrl, mealUrl)
    VALUES(?, ?, ?, ?)
  `;
    const values = [name, description, imageUrl, mealUrl];

    let status, respBody;
    await apiPost(query, values)
        .then(() => {
            status = 200;
            respBody = { message: "Successfully created meal" };
        })
        .catch((err) => {
            status = 400;
            respBody = err;
        });
    return Response.json(respBody, {
        status,
    });
}
