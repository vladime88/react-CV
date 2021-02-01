import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
              <li className="hobby">
                <i className="fas fa-running"></i>
                <span>Course à pied</span>
              </li>
              <li className="hobby">
                <i className="fas fa-hiking"></i>
                <span>Randonnés</span>
              </li>
              <li className="hobby">
                <i className="fas fa-cooking"></i>
                <span>Cuisine</span>
              </li>
              <li className="hobby">
                <i className="fas fa-bitcoin"></i>
                <span>Crypto-monnaies</span>
              </li>
            </ul>
        </div>
    );
};

export default Hobbies;