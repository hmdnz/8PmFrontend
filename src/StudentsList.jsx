import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "reactstrap";

export default function StudentsList() {
  const [listOfStudent, setListOfStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:2023/students/all-students")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setListOfStudents(data);
      });
  }, []);
  return (
    <div>
      {/* {JSON.stringify(listOfStudent)} */}
      <div>
        <Row>
          {listOfStudent.map((student, index) => (
            <Col md={3} key={index} className="mb-2">
              <Card key={index} className="p-3">
                <h5>
                  {student.firstName} {student.lastName}
                </h5>
                <p>
                  {student.email} . <span>{student.gender}</span>
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
