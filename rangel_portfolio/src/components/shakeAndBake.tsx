// import React from "react";
// import { Box, BoxProps, keyframes, css } from "@chakra-ui/react";

// const shakeAnimation = keyframes`
//   10%, 90% {
//     transform: translate3d(-1px, 0, 0);
//   }
//   20%, 80% {
//     transform: translate3d(2px, 0, 0);
//   }
//   30%, 50%, 70% {
//     transform: translate3d(-4px, 0, 0);
//   }
//   40%, 60% {
//     transform: translate3d(4px, 0, 0);
//   }
// `;

// interface ShakingBoxProps extends BoxProps {
//   shake?: boolean;
// }

// const ShakingBox: React.FC<ShakingBoxProps> = ({
//   shake,
//   children,
//   ...rest
// }) => {
//   const shakeStyle = shake
//     ? css`
//         animation: ${shakeAnimation} infinite 0.5s;
//       `
//     : undefined;

//   return (
//     <Box {...rest} css={shakeStyle}>
//       {children}
//     </Box>
//   );
// };

// export default ShakingBox;
