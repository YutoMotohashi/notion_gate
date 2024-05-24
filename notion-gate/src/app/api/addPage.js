// pages/api/addPage.js
export default function handler(req, res) {
    res.status(200).json({ message: "Hello from addPage!" });
}


// import { Client } from '@notionhq/client';

// export default async function(req, res) {
//     console.log('Hello world, api is called');
//     if (req.method !== 'POST') {
//         return res.status(405).end('Method Not Allowed');
//     }

//     const { databaseId, title, description } = req.body;
//     const apiKey = process.env.NOTION_API_KEY; // Ensure this is set in your environment variables
//     const notion = new Client({ auth: apiKey });

//     try {
//         const response = await notion.pages.create({
//             parent: { database_id: databaseId },
//             properties: {
//                 'Name': { title: [{ text: { content: title } }] },
//                 'Description': { rich_text: [{ text: { content: description } }] }
//             }
//         });
//         console.log('Notion API response:', response);
//         res.status(200).json(response);
//     } catch (error) {
//         console.error('Notion API error:', error);
//         res.status(500).json({ message: 'Failed to add entry', error: error.message });
//     }
// }
