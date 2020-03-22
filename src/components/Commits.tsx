import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroller";
import showItems from './ShowItems'

export default function Commits(props: { data: Object[] }) {
  const [items, setItems] = useState<number>(5);
  const [hasMoreItems, setMore] = useState(true);

  const loadMore = () => {
    if (items >= Object.keys(props.data).length) {
      setMore(false);
    } else {
      setTimeout(() => {
        setItems(prevState => prevState + 5);
      }, 1500);
    }
  };

  return (
    <ListGroup variant="flush">
      {Object.keys(props.data).length ? (
        <InfiniteScroll
          loadMore={loadMore}
          hasMore={hasMoreItems}
          loader={"Loading..."}
          useWindow={true}
        >
          {showItems(items, props.data)}
        </InfiniteScroll>
      ) : null}
    </ListGroup>
  );
}
