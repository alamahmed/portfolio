import React, { useEffect, useState } from "react";
import StackCarousel, { cardData } from '../../components/StackCarousel/index'
import { AspectRatio, Card, Container, Flex, Image, Text, Title, Button, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { get_skills, get_data, get_resume_url, get_about_me, get_profile_picture } from "../../api";

interface projectData {
    name: string,
    description: string,
    technologies_used: string[],
    color: string,
    link: string,
}
  
const Home = () => {
    const matches = useMediaQuery('(min-width: 56.25em)');
    const [resumeUrl, setResumeUrl] = useState('');
    const [projects, setProjects] = useState<cardData[]>([]);
    const [aboutMe, setAboutMe] = useState<string | null>(null);
    const [profilePicture, setProfilePicture] = useState('');

    const set_projects_data = (data: {projects: projectData[]}) => {
        // Take only the first 3 projects and transform them for the carousel
        const limitedProjects = data.projects.slice(0, 3).map((project, index) => {
            return {
                technology: project.technologies_used,
                title: project.name,
                description: project.description,
                color: 'var(--mantine-color-dark-8)',
                link: project.link,
                transform: index === 0 
                    ? "translate(40px, 30px)"
                    : index === 1 
                        ? "translate(20px, 15px)"
                        : "translate(0px, 0px)",
                transition: "transform 500ms ease-in-out, opacity 500ms ease-in-out, background-color 500ms ease-in-out",
                opacity: 1,
                zIndex: index + 1,
            };
        });
        setProjects(limitedProjects);
    }

    useEffect(() => {
        get_data("Projects", set_projects_data);
    }, []);

    const [skills, setSkillsData] = useState<string[]>([]);
  
    const set_skills_data = (data: string[]) => {
        setSkillsData(data);
    }
    
    useEffect(() => {
        get_skills(set_skills_data)
    }, [])

    useEffect(() => {
        get_resume_url((url) => {
            setResumeUrl(url + '?alt=media');
        });
    }, []);

    useEffect(() => {
        get_about_me((data) => {
            setAboutMe(data);
        });
    }, []);

    useEffect(() => {
        get_profile_picture((url) => {
            setProfilePicture(url);
        });
    }, []);

    const set_skills = skills.map((item, index) => {
        return (
            <Button 
                key={index}
                variant={'light'} 
                mr={'md'} 
                mt={'md'} 
                radius={'md'} 
                styles={{
                    root: {
                        cursor: 'default'
                    }
                }}
            >
                {item}
            </Button>
        );
    })

    return (
        <Container size={'xl'} pt={'md'}>
            <Card withBorder radius={'lg'} p={0}>
                <Flex 
                    direction={matches ? 'row' : 'column'} 
                    justify={'space-between'} 
                    align={'center'}
                    gap={matches ? 0 : 'md'}
                >
                    <Card.Section w={matches ? '25%' : '100%'} m={0} p={'md'}>
                        <AspectRatio ratio={1/1}>
                            <Image radius={'lg'} src={profilePicture} alt={'Profile Picture'}/>
                        </AspectRatio>
                    </Card.Section>
                    <Card.Section w={matches ? '74%' : '100%'} m={0} p={'md'}>
                        <Title order={2} mb={'md'}>
                            About me
                        </Title>
                        <Text size={matches ? 'md' : 'sm'}>
                            {aboutMe === null ? "Loading..." : aboutMe || "No about me text available"}
                        </Text>
                    </Card.Section>
                </Flex>
            </Card>
            <Flex 
                direction={matches ? 'row' : 'column'} 
                my={'md'} 
                justify={matches ? 'space-between' : 'space-evenly'}
                gap={matches ? 0 : 'md'}
            >
                <Card withBorder radius={'lg'} py={'xl'} h={matches ? 'auto' : '60vh'} w={matches ? '49%' : '100%'} p={matches ? 'xl' : 'md'}>
                    <Card.Section px={matches ? 'xl' : 'md'} pb={'md'}>
                        <Title order={2}>My Projects</Title>
                    </Card.Section>
                    <Card.Section px={matches ? 'xl' : 'md'}>
                        {projects.length > 0 ? (
                            <StackCarousel cardData={projects}/>
                        ) : (
                            <Text>Loading projects...</Text>
                        )}
                    </Card.Section>
                </Card>
                <Stack w={matches ? '49%' : '100%'} justify="space-between" mt={matches ? 0 : 'md'}>
                    <Card withBorder radius={'lg'} p={matches ? 'xl' : 'md'} mb={'md'}>
                        <Flex direction={'column'} py={matches ? 0 : 'md'} justify={'center'}>
                            <Card.Section px={matches ? 'xl' : 'md'}>
                                <Title order={2}>Skills</Title>
                            </Card.Section>
                            <Card.Section px={matches ? 'xl' : 'md'}>
                                {set_skills}
                            </Card.Section>
                        </Flex>
                    </Card>
                    <Card withBorder radius={'lg'} p={matches ? 'xl' : 'md'}>
                        <Flex 
                            direction={matches ? 'row' : 'column'} 
                            align={matches ? 'center' : 'flex-start'} 
                            justify={'space-evenly'}
                            gap={matches ? 0 : 'md'}
                        >
                            <Title order={2}>Resume</Title>
                            <Card bg={'black'} radius={'lg'} p={'md'} w={matches ? '70%' : '100%'}>
                                <Flex 
                                    direction={matches ? 'row' : 'column'}
                                    align={'center'} 
                                    justify={'space-evenly'} 
                                    p={'md'}
                                    gap={matches ? 0 : 'md'}
                                >
                                    <Title order={4} c={'white'} ta={matches ? 'left' : 'center'}>
                                        More details about my career
                                    </Title>
                                    <Button 
                                        variant={'outline'} 
                                        c={'white'}
                                        fullWidth
                                        onClick={() => window.open(resumeUrl, '_blank')}
                                    >
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