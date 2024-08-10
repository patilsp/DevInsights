"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';

const TechnologyNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'technology',
            apiKey: '76eabb07-961d-4464-86f2-6ee28389acce', // Replace with your valid API key
            pageSize: 10,
          },
        });
        setArticles(response.data.articles);
      } catch (err) {
        setError('Failed to fetch news. Please check your API key and try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Technology News</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.url}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              {article.urlToImage && <img src={article.urlToImage} alt={article.title} width="100" />}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechnologyNews;
