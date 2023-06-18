import React from "react";
import { Col, Row } from "reactstrap";
import StudentCreate from "./StudentCreate";
import StudentsList from "./StudentsList";

function Layout() {
  return (
    <div>
      <div className="navbar"></div>
      <Row className="m-0 p-0">
        <Col className="col_one" lg={1}>
          fadsfsa
        </Col>
        <Col className="col_two" lg={2}>
          <StudentCreate />
        </Col>
        <Col className="col_three" lg={9}>
          
          <StudentsList />
        </Col>
      </Row>
    </div>
  );
}

export default Layout;
