import { Container, Text, VStack, Heading, Box, Image } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const Index = () => {
  const brands = [
    { name: "Parker", logo: "/images/parker-logo.svg" },
    { name: "Montblanc", logo: "/images/montblanc-logo.svg" },
    { name: "Cross", logo: "/images/cross-logo.svg" },
    { name: "Waterman", logo: "/images/waterman-logo.svg" },
    { name: "Sheaffer", logo: "/images/sheaffer-logo.svg" },
    { name: "Lamy", logo: "/images/lamy-logo.svg" },
    { name: "Pilot", logo: "/images/pilot-logo.svg" },
    { name: "Uni-ball", logo: "/images/uniball-logo.svg" },
    { name: "Sharpie", logo: "/images/sharpie-logo.svg" }
  ];

    const Banner = () => {
      const bannerRef = useRef(null);

      useEffect(() => {
        const banner = bannerRef.current;
        let scrollAmount = 0;
        const scrollStep = 1;
        const scrollInterval = 20;

        const scrollBanner = () => {
          scrollAmount += scrollStep;
          if (scrollAmount >= banner.scrollWidth / 2) {
            scrollAmount = 0;
          }
          banner.scrollLeft = scrollAmount;
        };

        const intervalId = setInterval(scrollBanner, scrollInterval);
        return () => clearInterval(intervalId);
      }, []);

      return (
        <Box ref={bannerRef} overflow="hidden" whiteSpace="nowrap" borderWidth={1} borderRadius="lg" p={4} mt={8} width="100%">
          {brands.concat(brands).map((brand, index) => (
            <Box key={index} display="inline-block" mx={4} textAlign="center">
              <Image src={brand.logo} alt={`${brand.name} logo`} boxSize="50px" objectFit="contain" mb={2} />
              <Text fontSize="lg">{brand.name}</Text>
            </Box>
          ))}
        </Box>
      );
    };

    return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">The History of the Pen</Heading>
        <Image src="/images/pen-history.jpg" alt="History of the Pen" boxSize="300px" objectFit="cover" />
        <Box p={4} borderWidth={1} borderRadius="lg">
          <Text fontSize="lg">
            The pen is a writing instrument used to apply ink to a surface, usually paper, for writing or drawing. The history of the pen can be traced back to ancient civilizations, where early forms of pens were made from reeds and feathers. Over the centuries, the design and functionality of pens have evolved significantly, leading to the modern pens we use today.
          </Text>
        </Box>
      <Banner />
      </VStack>
    </Container>
  );
};

export default Index;