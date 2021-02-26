import React from "react";
import FlexGrid from "@tds/core-flex-grid";
import Text from "@tds/core-text";

import { useFetch } from "../../hooks/useFetch";
import watchImage from "../../../public/images/watch.jpg";
import DeviceDetail from "../DeviceDetail";

const Watch = () => {
  const [data, loading] = useFetch("http://localhost:8081/watches");

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (data) {
    const { data: watches } = data;
    return (
      <FlexGrid>
        <FlexGrid.Row>
          {watches.map((watch) => {
            return (
              <FlexGrid.Col key={watch.id}>
                <DeviceDetail
                  image={watchImage}
                  name={watch.name}
                  brand={watch.brand}
                  price={watch.price}
                />
              </FlexGrid.Col>
            );
          })}
        </FlexGrid.Row>
      </FlexGrid>
    );
  }
  return null;
};

Watch.defaultProps = {};
Watch.propTypes = {};

Watch.displayName = "Watch";

export default Watch;
