import React from "react";

const PromotionCard = ({ promotion }) => (
  <div>
    <img alt='produto' src={promotion.imageUrl} />
    <div>
      <h1>{promotion.title}</h1>
      <span>{promotion.price}</span>
      <footer>
        {promotion.comments.length > 0 && (
          <div>{promotion.comments[0].comment}</div>
        )}
        <div>{promotion.comments.length}</div>
        <a href={promotion.url} target='_black'>
          IR PARA O SITE
        </a>
      </footer>
    </div>
  </div>
);

export default PromotionCard;
