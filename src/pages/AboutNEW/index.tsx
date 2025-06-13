import React from "react";
import { Card, Container, Flex, Image, Title, Text, Button, Stack, Badge, Space, AspectRatio } from "@mantine/core";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import logo from "../../resources/image.png";
  
const About = () => {

    const roles_data = [
        { title: 'position Title', description: 'one line description', logo: logo },
        { title: 'position Title', description: 'one line description', logo: logo },

    ]

    const roles = roles_data.map((item) => {
        return (
            <Flex>
                <AspectRatio ratio={1/1}>
                    <Image radius={'md'} w={'xl'} src={item.logo} alt={'image'}/>
                </AspectRatio>
                <Flex
                    px={'md'}
                    direction={'column'}
                    justify={'center'}
                >
                    <Text c={'black'} lh={1}>
                        {item.title}
                    </Text>
                    <Text lh={1}>
                        {item.description}
                    </Text>
                </Flex>
            </Flex>  
        );
    })

    return (
        <Container size='xl' pt={'md'}>
            <Flex justify={'space-between'}>
                <Card
                    withBorder
                    bg={'translucent'}
                    radius={'md'}
                    w={'50%'}
                    h={'80vh'}
                >
                    <Flex
                        direction={'column'}
                        align={'center'}
                        justify={'space-around'}
                        h={'100%'}
                    >
                        <Card.Section w={'40%'}>
                            <Image radius={'lg'} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={'image'}/>
                        </Card.Section>
                        <Card.Section>
                            <Title>
                                Ahmed Alam
                            </Title>
                            <Text>
                                alamahmed2003@gmail.com
                            </Text>
                        </Card.Section>
                        <Card.Section>
                            <Button radius={'lg'} color={'black'}>
                                Download CV
                            </Button>
                        </Card.Section>
                    </Flex>
                </Card>
                <Stack
                    w={'49%'}
                    h={'80vh'}
                >
                    <Card
                        withBorder
                        bg={'translucent'}
                        radius={'md'}
                        h={'40%'}
                        p={'xl'}
                    >
                        <Flex
                            direction={'column'}
                            justify={'center'}
                        >
                            <Card.Section>
                                <Title>
                                    About me
                                </Title>
                            </Card.Section>
                            <Card.Section>
                                <Badge px={0} variant={'transparent'} color={'green.8'}>
                                    <Flex align={'center'}>
                                        <CheckCircledIcon />
                                        <Space w={'xs'} />
                                        Open to work
                                    </Flex>
                                </Badge>
                            </Card.Section>
                            <Card.Section>
                                <Text 
                                    fz={14}
                                >
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo corporis quos dolorem totam pariatur velit facilis, deleniti assumenda, accusantium, maxime laborum minima! Sunt laborum velit totam nemo, officiis error nesciunt.
                                </Text>
                            </Card.Section>
                        </Flex>
                    </Card>
                    <Card
                        withBorder
                        bg={'translucent'}
                        radius={'md'}
                        h={'60%'}
                        p={'xl'}
                    >
                        <Flex
                            px={'md'}
                            direction={'column'}
                            justify={'center'}
                        >
                            <Card.Section>
                                <Title order={5}>
                                    Latest Roles / Projects
                                </Title>
                            </Card.Section>
                            <Card.Section>
                                <Stack my={'lg'}>
                                    {roles}
                                </Stack>
                            </Card.Section>
                            <Card.Section>
                                <Title order={5} fw={600}>
                                    Main Apps
                                </Title>
                            </Card.Section>
                        </Flex>
                    </Card>
                </Stack>
            </Flex>
        </Container>
    );
}

export default About;