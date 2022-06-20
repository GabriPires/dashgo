import { Icon, Link as ChakraLink, LinkProps, Text } from '@chakra-ui/react';
import { ElementType } from 'react';
import Link from 'next/link';

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children: React.ReactNode;
  href: string;
}

export const NavLink = ({ icon, children, href, ...props }: NavLinkProps) => {
  return (
    <Link href={href} passHref>
      <ChakraLink display={'flex'} alignItems={'center'} {...props}>
        <Icon as={icon} fontSize={20} />
        <Text ml={4} fontWeight={'medium'}>
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
};
