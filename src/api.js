export const askQuestion = async (question) => {
  const response = await fetch('http://localhost:5000/ask', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
  });

  if (!response.ok) {
      throw new Error('Failed to fetch answer');
  }

  const data = await response.json();
  return data.answer;
};
