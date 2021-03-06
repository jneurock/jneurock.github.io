import React from 'react';
import ThoughtPreview from './preview';
import { Link } from 'gatsby';

export default function LatestThoughts({ thoughts }) {
  return (
    <section>
      <header className="margin-btm-2x">
        <h2 className="h4 margin-btm-0">
          Latest <span className="color-secondary">Thoughts</span>
        </h2>
        <hr />
      </header>
      {
        thoughts.map(function({ node: thought })  {
          return (
            <ThoughtPreview content={thought} key={thought.id} />
          );
        })
      }
      <hr />
      <section className="latest-thoughts__read-more">
        <Link
          className="thought-link"
          title="Read More Thoughts"
          to="/thoughts"
        >
          Read More Thoughts &hellip;
        </Link>
      </section>
    </section>
  );
}
