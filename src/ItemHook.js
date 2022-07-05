import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card,
  CardBody,
  CardTitle,
  CardText } from "reactstrap";
/*The item can be drinks or snacks*/

function Item({ items, cantFind }) {
  const { id } = useParams();

  let item = items.find((item) => item.id === id);
  if (!item) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.address}</CardText>
          <p>
            <b>Permits:</b> {item.permitTypes}
          </p>
          <p>
            <b>Description:</b> {item.description}
          </p>
          <p>
            <b>Phone:</b> {item.ownerPhone}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Item;
