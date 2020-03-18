import React from "react";
import { Spinner } from "react-bootstrap";

class loader extends React.Component {
  render() {
    return (
      <div className="text-center" >
        <Spinner
          animation="border"
          role="status"
          style={{ width: '3rem', height: '3rem' }}
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

};

export default loader;
