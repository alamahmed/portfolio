import React from "react";
import StackCarousel from '../../components/StackCarousel/index'
import { AspectRatio, Card, Container, Flex, Image, Text, Title, Button, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router-dom";
// import classes from './index.module.css';

interface cardData {
    technology: string,
    title: string,
    description: string,
    color: string,
    transform: string,
    transition: string,
    opacity: number,
    zIndex: number,
}
  
const Home = () => {
    const matches = useMediaQuery('(min-width: 56.25em)');

    const projects: cardData[] = [
        {
            technology: 'reactJS',
            title: "Project 1",
            description: "description 1",
            color: 'var(--mantine-color-dark-1)',
            transform: "translate(40px, 30px)",
            transition: "transform 500ms ease-in-out, opacity 500ms ease-in-out, background-color 500ms ease-in-out",
            opacity: 1,
            zIndex: 1,
        },
        {
            technology: 'reactJS',
            title: "Project 2",
            description: "description 2",
            color: 'var(--mantine-color-dark-4)',
            transform: "translate(20px, 15px)",
            transition: "transform 500ms ease-in-out, opacity 500ms ease-in-out, background-color 500ms ease-in-out",
            opacity: 1,
            zIndex: 2,
        },
        {
            technology: 'reactJS',
            title: "Project 3",
            description: "description 3",
            color: 'var(--mantine-color-dark-8)',
            transform: "translate(0px, 0px)",
            transition: "transform 500ms ease-in-out, opacity 500ms ease-in-out, background-color 500ms ease-in-out",
            opacity: 1,
            zIndex: 3,
        },
    ];

    const data = [
        {skill: 'C++'},
        {skill: 'Python'},
        {skill: 'JavaScript'},
        {skill: 'TypeScript'},
        {skill: 'ReactJS'},
        {skill: 'NextJS'},
        {skill: 'ThreeJS'},
        {skill: 'SQL'},
        {skill: 'Playwright'},
        {skill: 'Selenium'},
        {skill: 'Jira'},
        {skill: 'Firebase'},
        
    ]
    const skills = data.map((item) => {
        return (
            <Button variant={'light'} mr={'md'} mt={'md'} radius={'md'} styles={{
                root: {
                    cursor: ''
                }
            }}>
                {item.skill}
            </Button>
        );
    })

    return (
        <Container size={'xl'} pt={'md'}>
            <Card withBorder radius={'lg'} p={0}>
                <Flex direction={ matches ? 'row' : 'column' } justify={'space-between'} align={'center'}>
                    <Card.Section w={matches ? '25%' : '100%'} m={0} p={'md'}>
                        <AspectRatio ratio={1/1}>
                            <Image radius={'lg'} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={'image'}/>
                        </AspectRatio>
                    </Card.Section>
                    <Card.Section w={'74%'} m={0} p={'md'}>
                        <Title>
                            About me
                        </Title>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iure, natus quos officia repellendus minima doloremque cum molestiae, sapiente vel voluptate, dolor incidunt! Explicabo, eveniet deserunt expedita qui fugiat eos!
                        </Text>
                    </Card.Section>
                </Flex>
            </Card>
            <Flex direction={matches ? 'row' : 'column'} my={'md'} justify={matches ? 'space-between' : 'space-evenly'}>
                <Card withBorder radius={'lg'} w={matches ? '49%' : '100%'} p={'xl'}>
                        <Card.Section px={'xl'} pb={'md'}>
                            <Title>My Projects</Title>
                        </Card.Section>
                        <Card.Section px={'xl'}>
                            <AspectRatio ratio={matches ? 2/1.1 : 1/1} >
                            <StackCarousel cardData={projects}/>
                            </AspectRatio>
                        </Card.Section>
                </Card>
                <Stack w={matches ? '49%' : '100%'} justify="space-between" mt={matches ? 0 : '5%'}>
                    <Card withBorder radius={'lg'} py={'xl'} mb={'lg'}>
                        <Flex direction={'column'} justify={'center'}>
                            <Card.Section px={'xl'}>
                                <Title>Skills</Title>
                            </Card.Section>
                            <Card.Section px={'xl'}>
                                {skills}
                            </Card.Section>
                        </Flex>
                    </Card>
                    <Card withBorder radius={'lg'} py={'xl'}>
                        <Flex direction={matches ? 'row' : 'column'} align={matches ? 'center' : 'flex-start'} justify={'space-evenly'} >
                            <Title>Resume</Title>
                                <Card bg={'black'} radius={'lg'} p={'md'} w={matches ? '70%' : '100%'}>
                                    <Flex align={'center'} justify={'space-evenly'} p={'md'}>
                                        <Title order={4} c={'white'}>
                                            More details about my career
                                        </Title>
                                        <Link to={'/resume'} style={{textDecoration: 'none'}}>
                                            <Button 
                                                variant={'outline'} 
                                                c={'white'}
                                            >
                                                    Open
                                            </Button>
                                        </Link>
                                    </Flex>
                                </Card>
                        </Flex>
                    </Card>
                </Stack>
            </Flex>
        </Container>
    );
}

export default Home;