import React from "react";
import { Button, Card, Container, Flex, ScrollArea, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Project from '../../components/Project/index';
import classes from './index.module.css';

const Projects = () => {
    const matches = useMediaQuery('(min-width: 56.25em)');

    return (
        <Container size={'xl'} pt={'md'}>
            <Flex
                direction={matches ? 'row' : 'column'}
                gap={matches ? 0 : 'md'}
            >
                <Flex 
                    align={'center'}
                    w={matches ? '45%' : '100%'}
                > 
                    <Card 
                        withBorder
                        radius={'lg'}
                        p={matches ? 'xl' : 'md'}
                        w={'100%'}
                        h={matches ? '90%' : 'auto'}
                    >
                        <Flex 
                            h={'100%'}
                            direction={'column'}
                            justify={'end'}
                            gap={'md'}
                        >
                            <Title 
                                order={2}
                                ta={'left'}
                            >
                                Over the Past Few Years, <br /> I've worked on various Projects. <br />Here's few of my best:
                            </Title>
                            <Button
                                w={'fit-content'}
                                h={'auto'}
                                py={'md'}
                                color={'black'}
                                radius={'md'}
                            >
                                Get in touch
                            </Button>
                        </Flex>
                    </Card>
                </Flex>
                <ScrollArea
                    classNames={classes}
                    pt={matches ? 'xl' : '0'}
                    w={matches ? '55%' : '100%'}
                    h={matches ? '89vh' : 'auto'}
                >
                    <Project />
                </ScrollArea>
            </Flex>
        </Container>
    );
}

export default Projects;