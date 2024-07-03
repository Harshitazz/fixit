// src/api/index.js

export const askQuestion = async (question) => {
  const response = await fetch('https://fixitapi-harshitazzs-projects.vercel.app/ask',  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    },
    body: JSON.stringify({ question }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data.answer;
};



