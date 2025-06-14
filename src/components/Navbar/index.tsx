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
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { TwitterLogoIcon, LinkedInLogoIcon, GitHubLogoIcon, SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { get_resume_url } from '../../api';
import classes from './index.module.css';


const Navbar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [resumeUrl, setResumeUrl] = useState('');
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  useEffect(() => {
    get_resume_url((url) => {
      setResumeUrl(url + '?alt=media');
    });
  }, []);

  const location = useLocation();
  const Data = [
    { id: 0, link: '/', name: 'Home' },
    { id: 1, link: '/about', name: 'About' },
    { id: 2, link: '/projects', name: 'Projects' },
    { id: 3, link: resumeUrl, name: 'Resume' },
  ]
  const connect = [
    { link: "https://x.com/alamahmed2003", icon: <TwitterLogoIcon /> },
    { link: "https://github.com/alamahmed", icon: <GitHubLogoIcon /> },
    { link: "https://www.linkedin.com/in/alam-ahmed", icon: <LinkedInLogoIcon /> },
  ]

  const links = Data.map((nav) => {
    if (nav.name === 'Resume') {
      return (
        <a 
          href={nav.link} 
          className={classes.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            closeDrawer();
          }}
        >
          {nav.name}
        </a>
      );
    }
    return (
      <Link 
        to={nav.link} 
        className={location.pathname === nav.link ? `${classes.link}  ${classes.active}` : classes.link}
        onClick={() => {
          closeDrawer();
        }}
      >
        {nav.name}
      </Link>
    );
  })

  const socialLinks = connect.map((item) => {
    return (
      <ActionIcon component={'a'} variant={'light'} size={'lg'} radius={'md'} href={item.link} target='_blank'>
        {item.icon}
      </ActionIcon>
    );
  })

  return (
    <Container pt={'md'} size={'xl'}>
      <Card p={'md'} withBorder radius={'lg'}>
        <header className={classes.header}>
          <Group justify={'space-between'} h={'100%'}>
            <Link to={'/'} className={classes.link}>
              <Title order={2}>Ahmed Alam</Title>
            </Link>
            <Group h={'100%'} gap={0} visibleFrom={'sm'}>
              {links}
            </Group>
            <Group visibleFrom={'sm'}>
              <ActionIcon
                variant="light"
                size="lg"
                radius="md"
                onClick={() => toggleColorScheme()}
                aria-label="Toggle color scheme"
              >
                {colorScheme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </ActionIcon>
              {socialLinks}
            </Group>
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom={'sm'} />
          </Group>
        </header>
        {/* For Mobile View */}
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size={'100%'}
          padding={'md'}
          title={'Navigation'}
          hiddenFrom={'sm'}
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx={'md'}>
            <Divider my={'sm'} />
            {links}
            <Divider my={'sm'} />
            <Group justify="center" mt="md">
              <ActionIcon
                variant="light"
                size="lg"
                radius="md"
                onClick={() => {
                  toggleColorScheme();
                  closeDrawer();
                }}
                aria-label="Toggle color scheme"
              >
                {colorScheme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </ActionIcon>
              {socialLinks}
            </Group>
          </ScrollArea>
        </Drawer>
      </Card>
    </Container>
  );
}

export default Navbar;