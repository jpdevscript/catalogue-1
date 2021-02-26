import React from "react";
import { string, number } from "prop-types";
import Box from "@tds/core-box";
import Card from "@tds/core-card";
import Heading from "@tds/core-heading";
import Text from "@tds/core-text";
import Image from "@tds/core-image";
import PriceLockup from "@tds/core-price-lockup";

const DeviceDetail = ({ image, brand, name, price }) => {
  return (
    <Card>
      <Box between={2}>
        <Image
          src={image}
          rounded="corners"
          width={100}
          height={100}
          alt="Image of co-workers collaborating"
        />
        <Text bold>{brand}</Text>
      </Box>
      <Heading level="h2">{name}</Heading>
      <Box between={2}>
        <PriceLockup
          size="small"
          price="0"
          signDirection="left"
          rateText="upfront"
        />
        <Text>Retail price: ${price}</Text>
      </Box>
    </Card>
  );
};

DeviceDetail.defaultProps = {};
DeviceDetail.propTypes = {
  brand: string.isRequired,
  name: string.isRequired,
  price: number.isRequired,
  image: string.isRequired,
};

DeviceDetail.displayName = "DeviceDetail";

export default DeviceDetail;
