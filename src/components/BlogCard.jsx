import React, { useState, useEffect } from 'react';

const BlogCard = () => {
  const [petFacts, setPetFacts] = useState([]); // State to store pet facts
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for errors

  // List of APIs for various pet facts
  const petApis = [
    'https://catfact.ninja/facts?limit=3', // Cat facts
    'https://dog-api.kinduff.com/api/facts?number=3', // Dog facts
    'https://some-random-api.ml/animal/bird', // Bird facts
    'https://some-random-api.ml/animal/fox', // Fox facts
  ];

  useEffect(() => {
    const fetchAllPetFacts = async () => {
      try {
        setLoading(true);

        // Fetch all APIs and combine the results
        const responses = await Promise.all(petApis.map(api => fetch(api).then(res => res.json())));
        
        // Extract facts from each response
        const facts = [];
        responses.forEach(response => {
          if (response.data) {
            facts.push(...response.data.map(item => item.fact)); // Cat/Dog facts structure
          } else if (response.fact) {
            facts.push(response.fact); // Bird/Fox facts structure
          }
        });

        setPetFacts(facts);
      } catch (err) {
        setError('Failed to fetch pet facts from all sources.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllPetFacts();
  }, []);

  if (loading) {
    return <p>Loading pet facts...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="blog-card">
      <h2>Interesting Pet Facts</h2>
      <ul>
        {petFacts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogCard;
