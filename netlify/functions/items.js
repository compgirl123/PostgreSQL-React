// netlify/functions/items.js

// Simulated items data. In a real app, you might query your PostgreSQL DB here.
const items = [
  { id: 1, nom: "Item 1" },
  { id: 2, nom: "Item 2" },
  { id: 3, nom: "Item 3" },
];

exports.handler = async (event, context) => {
  try {
    // You could add more logic here (e.g., reading query params)
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        // Allow CORS so that your frontend can access the API
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(items),
    };
  } catch (error) {
    console.error("Error fetching items:", error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Failed to fetch items" }),
    };
  }
};
