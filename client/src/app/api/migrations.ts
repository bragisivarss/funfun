import { db } from "./database";

export const migrate = () => {
  db.serialize(() => {
   db.run(
    `
      CREATE TABLE IF NOT EXISTS meals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        imageUrl TEXT NOT NULL,
        mealUrl TEXT NOT NULL
      );
    `,
    (err: Error) => {
     if (err) {
      console.error(err.message);
     }
     console.log("meals table created successfully.");
    }
   );
  });
}
