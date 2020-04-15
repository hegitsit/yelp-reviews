import React, { useEffect, useState } from 'react';
import { ReviewList } from './components/reviewList'
import { TOKEN } from './yelp-api/config';
import './App.css';

function App() {
  const [companyDescription, reviewData] = useState([]);
  const [singleReviews, displayReviews] = useState([]);

  useEffect(() => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=icecream&location=alpharetta&radius=8000&sort_by=rating&total=5&limit=5`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        Origin: 'localhost',
        withCredentials: true,
      }
    })
      .then(res => res.json())
      .then(response => {
        reviewData(response.businesses);
        response.businesses.map((business) => {
          const { id } = business;
          return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}/reviews?limit=1`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${TOKEN}`,
              Origin: 'localhost',
              withCredentials: true,
            }
          })
            .then(res => res.json())
            .then(response => {
              displayReviews(response)
            })
        })
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <div className="header">ICE CREAM</div>
      <div className="review-list">
        <ReviewList restaurants={companyDescription} singleReviews={singleReviews} />
      </div>
    </div>
  );
}

export default App;
