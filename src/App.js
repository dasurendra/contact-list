import { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";

import ContactTable from "./ContactTable";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filterlist, setFilter] = useState([]);
  const searchBoxRef = useRef();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => {
        setContacts(users);
        setFilter(users);
      });
  }, []);

  const handleOnChange = () => {
    const str = searchBoxRef.current.value;

    const filterdContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(str.toLowerCase())
    );
    setFilter(filterdContacts);
  };

  console.log(filterlist);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <div className="main-items shadow-lg ">
            <div className="text-center ">
              <input
                type="text"
                className="fs-4 p-3  border-0 mb-4"
                ref={searchBoxRef}
                onChange={handleOnChange}
                placeholder="Search Contacts here ..."
              />
            </div>

            {filterlist.length ? (
              <ContactTable users={filterlist} />
            ) : (
              <h3>Sorry ,No Contacts Found!!!</h3>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
