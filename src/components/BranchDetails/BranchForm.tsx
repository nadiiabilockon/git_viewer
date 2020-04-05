import React, { useContext } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import BranchSelect from "./BranchSelect"
import { BrancContext } from "./BranchMain";

export default function BranchForm() {
  const {
    handleCommits,
    firstBranch,
    secondBranch
  } = useContext(BrancContext);

  return (
    <Form>
      <Row className="justify-content-center">
        <Col>
          <Form.Group>
            <BranchSelect name="firstBranch" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <BranchSelect name="secondBranch" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <Button
            className="btn-round"
            variant="dark"
            onClick={handleCommits}
            disabled={!firstBranch || !secondBranch}
          >
            Show difference
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
