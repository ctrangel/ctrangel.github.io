import { Box } from "@chakra-ui/react";
import Photography from "./Photography";
import { Text } from "@chakra-ui/react";
import React from "react";
import "../App.css";

const PhotoSection = () => {
  return (
    <Box mt={"3em"}>
      <Box id="showcase" p={"15px"}>
        <Text
          id="pics-header"
          mb={["2em"]}
          color={"white"}
          fontSize={"1.3em"}
          fontWeight="extrabold"
          textAlign={["center", "center"]}
          w={"12em"}
          bgGradient="linear(to-l, cyan, cyan)"
          bgClip={"text"}
        >
          Here's some pics I took of places I liked
        </Text>
        <div className="container">
          <div
            className="box box-1"
            style={{ "--img": `url(/pittsburgh.jpg)` } as React.CSSProperties}
            data-text="Pittsburgh"
          ></div>
          <div
            className="box box-2"
            style={{ "--img": "url(./pittsburgh.jpg)" } as React.CSSProperties}
            data-text="Hvalfjörður"
          ></div>
          <div
            className="box box-3"
            style={
              { "--img": "url(./media/pittsburgh.jpg)" } as React.CSSProperties
            }
            data-text="Montserrat"
          ></div>
          <div
            className="box box-4"
            style={
              { "--img": "url(./media/pittsburgh.jpg)" } as React.CSSProperties
            }
            data-text="Osaka"
          ></div>
          <div
            className="box box-5"
            style={
              { "--img": "url(./media/pittsburgh.jpg)" } as React.CSSProperties
            }
            data-text="Ueno"
          ></div>
        </div>
      </Box>
      <Photography />
    </Box>
  );
};

export default PhotoSection;