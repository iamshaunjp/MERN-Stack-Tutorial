import { Link } from "react-router-dom";
import {
  BreadcrumbItem,
  Breadcrumb,
  BreadcrumbLink,
  Flex,
  Heading,
  Spacer,
  Divider,
  Box,
} from "@chakra-ui/react";
import {
  //   AddIcon,
  //   ChevronDownIcon,
  ChevronRightIcon,
  //   HamburgerIcon,
  //   PhoneIcon,
} from "@chakra-ui/icons";
const Navbar = () => {
  return (
    <Box>
      <Flex align="center" mx={[5, 10]} mt={[10, 20]} px={[3, 8]}>
        <Box>
          <Heading fontSize={[22, 42]} fontFamily="Pacifico">
            Blog SPARK
          </Heading>
        </Box>
        <Spacer />
        <Breadcrumb
          fontWeight="bold"
          fontFamily="Quicksand"
          // color="#CCCFDC"
          alignSelf="flex-end"
          spacing={[0, 2]}
          separator={<ChevronRightIcon color="black" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/authors/" fontSize={[12, 20]}>
              Authors
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/about" fontSize={[12, 20]}>
              About
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/newBlog" fontSize={[12, 20]}>
              {" "}
              New Blog
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Box mx={[5, 10]} mt={[4, 14]}>
        <Divider borderColor={"gray"} borderWidth="1px" />
      </Box>
    </Box>
  );
};

export default Navbar;
