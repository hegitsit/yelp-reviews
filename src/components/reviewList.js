import React from 'react';
import { ReviewDescription } from './reviewDescription';

export function ReviewList({ restaurants, singleReviews, getReviews }) {
  // console.log('singleReviews', singleReviews)
  const { reviews } = singleReviews;

  if (!reviews) return '';
  return (
    <div>
      {
        reviews.length > 0 &&
        restaurants.map((restaurant) => {
          return (
            <div>
              <ReviewDescription key={restaurant.id} restaurant={restaurant} getReviews={getReviews} />
            </div>
          )
        })
      }
    </div>
  )
}