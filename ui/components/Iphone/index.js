import React, { Fragment } from "react";
import Box from "@tds/core-box";
import FlexGrid from "@tds/core-flex-grid";
import Text from "@tds/core-text";

import { useFetch } from "../../hooks/useFetch";
import iphoneImage from "../../../public/images/iphone.jpg";
import DeviceDetail from "../DeviceDetail";

const Iphone = () => {
  const [data, loading] = useFetch("http://localhost:8081/iphones");

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (data) {
    const { data: iphones } = data;

    return (
      <FlexGrid>
        <FlexGrid.Col>
          {iphones.map((iphone) => {
            return (
              <Fragment key={iphone.id}>
                <Box vertical={2}>
                  <Box between={1}>
                    <Text>{iphone.name}</Text>
                    <Text>Retail Price: ${iphone.price}</Text>
                  </Box>
                  <FlexGrid.Row>
                    <DeviceDetail
                      image={iphoneImage}
                      name={iphone.name}
                      brand={iphone.brand}
                      price={iphone.price}
                    />
                  </FlexGrid.Row>
                </Box>
              </Fragment>
            );
          })}
        </FlexGrid.Col>
      </FlexGrid>
    );
  }
  return null;
};

Iphone.defaultProps = {};
Iphone.propTypes = {};

Iphone.displayName = "Iphone";

export default Iphone;
