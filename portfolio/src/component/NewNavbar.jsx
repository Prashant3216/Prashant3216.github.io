import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    useColorMode,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import {Link, animateScroll as Scroll} from "react-scroll"
import { cyanColor, purpleColor } from '../theme/theme.config';

  export default function WithSubnavigation() {
    const {colorMode, toggleColorMode}=useColorMode()
    const { isOpen, onToggle } = useDisclosure();
    const isLight= colorMode ==="dark"
  
    return (
      <Box id="navbar" sx={{position:"fixed",width:"100%"}} zIndex="10">
        <Flex
          bg={useColorModeValue("cyan.600", "base")}
          color={useColorModeValue('gray.600', "cyan.600")}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', "cyan.600")}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'space-between' }} fontSize={"30px"}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', purpleColor)}
              pl={{base:"6", md:"12", lg:"32"}}
              pr={{base:"6", md:"12", lg:"32"}}>
             Prashant Verma
             
            </Text>
  
            <Flex display={{ base: 'none', md: 'flex' }}   ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
           
           
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>

      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', cyanColor);
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack  direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box  key={navItem.label}>
            <Popover  trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger >
                <Link
                  p={2}
                  sx={{fontSize:"20px"}}
                  href={navItem.href ?? '#'}
                  
                  
                  smooth={true} duration={1000}  to={navItem.href} spy={true} offset={-50}
                  >
                  <Text 
                  p={2}
                  sx={{fontSize:"20px"}}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500} 
                  color={linkColor} _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                  </Text>
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
        <a href="https://drive.google.com/file/d/1Ab_UQBpF6AJwXdrMTw6MB6Cmz3uwsJbp/view?usp=sharing" target="_blank"><Text  p={2}
                  sx={{fontSize:"20px"}}
                  fontSize={'sm'}
                  fontWeight={500} 
                  color={linkColor} _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}> Resume </Text></a>
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
   
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
         
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}
              >
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
                
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
        <a href="https://drive.google.com/file/d/1Ab_UQBpF6AJwXdrMTw6MB6Cmz3uwsJbp/view?usp=sharing" target="_blank">
        <Text
        bg={useColorModeValue('white', 'gray.800')}
        pt={4} 
        display={{ md: 'none' }} 
          _hover={{
            textDecoration: 'none',
          }}> Resume </Text></a>

      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Link
            fontWeight={600}
            color={useColorModeValue('gray.600', cyanColor)}
            smooth={true} duration={1000} to={href} spy={true} offset={-50}>
            {label}
          </Link>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
          
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href} >
                  {child.label}
                </Link>
              ))}
              
          </Stack>
          
        </Collapse>
      </Stack>
    );
  };
  
//   interface NavItem {
//     label: string;
//     subLabel?: string;
//     children?: Array<NavItem>;
//     href?: string;
//   }
  
  const NAV_ITEMS = [
    {
      label: 'Home',
      href:"Header",
     
    },
    {
      label: 'About',
      href:"About",
     
    },
    {
      label: 'Skills',
      href: "Skills",
    },
    {
      label: 'Projects',
      href: "Projects",
    },
    {
        label: 'Contact',
        href: "Contact",
      }
  ];