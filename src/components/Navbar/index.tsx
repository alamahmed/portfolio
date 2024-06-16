import {
  Group,
  Divider,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Title,
  ActionIcon,
  Container,
  Card,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { TwitterLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import classes from './index.module.css';


const Navbar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  
  const Data = [
    {link: '/', name: 'Home'},
    {link: '/about', name: 'About'},
    {link: '/projects', name: 'Projects'},
    {link: '/resume', name: 'Resume'},
  ]

  const links = Data.map((nav) => {
    return (
      <Link to={nav.link} className={classes.link}>
        {nav.name}
      </Link>
    );
  })

  return (
    <Container pt={'md'} size={'xl'}>
      <Card p={'md'} withBorder radius={'lg'}>
        <header className={classes.header}>
          <Group justify={'space-between'} h={'100%'}>
            <Group justify={'space-between'}>
                <Title order={2}>Ahmed Alam</Title>
            </Group>
            <Group h={'100%'} gap={0} visibleFrom={'sm'}>
              {links}
            </Group>
  
            <Group>
                <ActionIcon component={'a'} variant={'light'} size={'lg'} radius={'md'} href="https://x.com/alamahmed2003" target='_blank'>
                    <TwitterLogoIcon fill={'true'} color={'black'}/>
                </ActionIcon>
                <ActionIcon component={'a'} variant={'light'} size={'lg'} radius={'md'} href="https://github.com/alamahmed" target='_blank'>
                    <GitHubLogoIcon color={'black'}/>
                </ActionIcon>
                <ActionIcon component={'a'} variant={'light'} size={'lg'} radius={'md'} href="https://www.linkedin.com/in/alam-ahmed" target='_blank'>
                    <LinkedInLogoIcon color={'black'}/>
                </ActionIcon>
            </Group>
  
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </header>
        {/* For Mobile View */}
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />
            {links}
            <Divider my="sm" />
          </ScrollArea>
        </Drawer>
      </Card>
    </Container>
  );
}

export default Navbar;