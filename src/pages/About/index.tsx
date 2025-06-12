import { useEffect, useState } from "react";
import { Anchor, Button, Card, Container, Flex, Grid, Input, Text, Textarea, Title } from "@mantine/core";
import { useMediaQuery, useColorScheme } from "@mantine/hooks";
import { notifications } from '@mantine/notifications';
import { CodeIcon } from "@radix-ui/react-icons";
import { get_data } from "../../api";
import { useForm } from "@mantine/form";
import emailjs from '@emailjs/browser';
import gmail from '../../resources/email.svg';
import map from '../../resources/map.svg';
import phone from '../../resources/phone.svg';

interface contact {
    address: string,
    link: string
}

interface services {
    title: string,
    description: string
}

const About = () => {
    const matches = useMediaQuery('(min-width: 56.25em)');
    const colorScheme = useColorScheme();
    const [about_me, setAboutMe] = useState<string[]>([]);
    const [contact_info, setContactInfo] = useState<contact[]>([]);
    const [service_data, setServiceData] = useState<services[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate: {
            name: (value) => (value.length < 2 ? 'Name is too short' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            message: (value) => (value.length < 10 ? 'Message is too short' : null),
        },
    });

    const icons = [
        <img src={gmail} alt="" style={{ filter: colorScheme === 'dark' ? 'invert(1)' : 'none' }} />,
        <img src={map} alt="" style={{ filter: colorScheme === 'dark' ? 'invert(1)' : 'none' }} />,
        <img src={phone} alt="" style={{ filter: colorScheme === 'dark' ? 'invert(1)' : 'none' }} />,
    ]
  
    const set_about_me = (data: {details: string[]}) => {
        setAboutMe(data.details);
    }

    const set_contact_info = (data: {contacts: contact[]}) => {
        setContactInfo(data.contacts);
    }

    const set_service_data = (data: {services: services[]}) => {
        setServiceData(data.services)
    }

    useEffect(() => {
        get_data("about_me", set_about_me);
        get_data("contact_info", set_contact_info);
        get_data("my_services", set_service_data);
    }, [])

    const about_section = about_me.map((item) => {
        return (
            <Grid.Col span={{ base: 12, sm: 6, md: 6, lg: 6 }}>
                <Text ta={matches ? 'left' : 'center'} pr={'md'} pb={'md'}>
                    {item}
                </Text>
            </Grid.Col>
        );
    })

    const services_section = service_data.map((item) => {

        return (
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                <Flex justify={'center'}>
                    <Card mb={'md'}>
                        <Flex pb={'md'} w={'fit-content'} justify={'center'} align={'center'}>
                            <CodeIcon />
                            <Title pl={'xl'} order={3}>
                                {item.title}
                            </Title>
                        </Flex>
                        <Text>
                            {item.description}
                        </Text>
                    </Card> 
                </Flex>
            </Grid.Col>
        );
    })

    const contacts_section = contact_info.map((item, index) => {
        return (
            <Flex
                align={'center'}
                mt={'md'}
            >
                {icons[index]}
                <Anchor
                    href={item.link} 
                    target={'_blank'}
                    c="inherit"
                >
                    <Text pl={'md'}>
                        {item.address}
                    </Text>
                </Anchor>
            </Flex>
        );
    })

    const handleSubmit = async (values: typeof form.values) => {
        try {
            setIsSubmitting(true);
            await emailjs.send(
                process.env.REACT_APP_EMAIL_SERVICE_ID || '',
                process.env.REACT_APP_EMAIL_TEMPLATE_ID || '',
                {
                    from_name: values.name,
                    from_email: values.email,
                    message: values.message,
                },
                process.env.REACT_APP_EMAIL_API_KEY || ''
            );
            
            notifications.show({
                title: 'Success!',
                message: 'Your message has been sent successfully.',
                color: 'green',
            });
            
            form.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            notifications.show({
                title: 'Error',
                message: 'Failed to send message. Please try again later.',
                color: 'red',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Container size='xl' pt={'md'}>
            <Card
                withBorder
                radius={'lg'}
                p={matches ? 'xl' : 'md'}
            >
                <Card.Section p={matches ? 'xl' : 'md'}>
                <Title ta={matches ? 'left' : 'center'}>
                    About Me
                </Title>
                <Flex
                    mt={'xl'} 
                    px={matches ? 'md' : 'xs'}
                >
                    <Grid>
                        {about_section}
                    </Grid>
                </Flex>
                </Card.Section>
            </Card>
            <Card
                withBorder
                mt={'xl'}
                radius={'lg'}
                p={matches ? 'xl' : 'md'}
            >
            <Card.Section p={matches ? 'xl' : 'md'}>
                <Title ta={matches ? 'left' : 'center'}>
                    My Services
                </Title>
                    <Grid>
                        {services_section}
                    </Grid>
                </Card.Section>
            </Card>
            <Card
                withBorder
                mt={'xl'}
                radius={'lg'}
                p={matches ? 'xl' : 'md'}
                mb={'xl'}
            >
                <Title
                    p={matches ? 'md' : 'sm'}
                    ta={matches ? 'left' : 'center'}
                >
                    Contact me
                </Title>
                <Flex
                    justify={'space-between'}
                    direction={matches ? 'row' : 'column'}
                    align={matches ? 'start' : 'center'}
                    gap={matches ? 0 : 'md'}
                >
                    <Card.Section w={matches ? '50%' : '100%'} p={matches ? 'xl' : 'md'}>
                        <Text>
                            If you have any questions or would like to discuss a project, please don't hesitate to get in touch. I'd love to hear from you!
                        </Text>
                        {contacts_section}
                    </Card.Section>
                    <Card.Section w={matches ? '50%' : '100%'} p={matches ? 'xl' : 'md'}>
                        <form onSubmit={form.onSubmit(handleSubmit)}>
                            <Input
                                pb={'lg'}
                                placeholder={'Name'}
                                radius={'md'}
                                {...form.getInputProps('name')}
                            /> 
                            <Input 
                                pb={'lg'}
                                placeholder={'Email'}
                                radius={'md'}
                                {...form.getInputProps('email')}
                            />
                            <Textarea
                                pb={'lg'}
                                resize={'vertical'}
                                minRows={4}
                                placeholder={'Message'}
                                radius={'md'}
                                {...form.getInputProps('message')}
                            />
                            <Button 
                                type={'submit'}
                                fullWidth 
                                radius={'md'}
                                color={'black'}
                                loading={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Submit'}
                            </Button>
                        </form>
                    </Card.Section>
                </Flex>
            </Card>
        </Container>
    );
}

export default About;