import React from "react";
import styles from "./FeaturesCard.module.css";

export const FeaturesCard: React.FC = () => {
  return (
    <>
      <div className="features-card">
        <div className="features-icon">
          <i className="fas fa-bell">
            <Icon name="pen"></Icon>
          </i>
        </div>
        <div className="features-container">
          <h3 className="features-card-heading">Real-time Updates</h3>
          <p className="features-card-description">
            Get instant notifications when tasks are updated or moved between
            columns.
          </p>
        </div>
      </div>
    </>
  );
};
