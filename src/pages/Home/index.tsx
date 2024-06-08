import React from "react";
import { AspectRatio, Card, Container, Flex, Image, Text, Title, Button, ActionIcon, Stack } from "@mantine/core";
import { HandIcon } from "@radix-ui/react-icons";
// import classes from './index.module.css';

const Home = () => {
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
            <Button variant={'light'} mr={'md'} mt={'md'} radius={'md'}>
                {item.skill}
            </Button>
        );
    })

    return (
        <Container size={'xl'}>
            <Card withBorder radius={'lg'} p={0}>
                <Flex justify={'space-between'} align={'center'}>
                    <Card.Section w={'25%'} m={0} p={'md'}>
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
            <Flex my={'md'} justify={'space-between'}>
                <Card withBorder radius={'lg'} w={'49%'} p={'xl'}>
                        <Card.Section px={'xl'} pb={'md'}>
                            <Title>My Projects</Title>
                        </Card.Section>
                        <Card.Section px={'xl'}>
                            <AspectRatio ratio={2/1.1} >
                                <Card bg={'black'} radius={'xl'} p={'xl'}>
                                    <Card.Section px={'lg'} py={'md'}>
                                        <Button variant={'outline'} radius={'ld'} color={'white'}>
                                            React JS
                                        </Button>
                                    </Card.Section>
                                    <Card.Section px={'lg'} py={'md'}>
                                    <Title c={'white'} mb={'sm'}>
                                        URLShortener
                                    </Title>
                                    <Text c={'white'}>
                                        This is a URL shortener with which you can shorten multiple urls and keep track of them in the dashboard
                                    </Text>
                                    </Card.Section>
                                    <Card.Section px={'lg'} py={'md'}>
                                        <Flex justify={'flex-end'}>
                                            <ActionIcon variant={'light'} radius={'lg'} c={'white'}>
                                                <HandIcon />
                                            </ActionIcon>
                                        </Flex>
                                    </Card.Section>
                                </Card>
                            </AspectRatio>
                        </Card.Section>
                </Card>
                <Stack w={'49%'} justify="space-between">
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
                        <Flex align={'center'} justify={'space-evenly'} >
                            <Title>Resume</Title>
                                <Card bg={'black'} radius={'lg'} p={'md'} w={'70%'}>
                                    <Flex align={'center'} justify={'space-evenly'} p={'md'}>
                                        <Title order={4} c={'white'}>
                                            More details about my career
                                        </Title>
                                        <Button variant={'outline'} c={'white'}>
                                            Open
                                        </Button>
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