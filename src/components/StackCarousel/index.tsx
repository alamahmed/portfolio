import { useState } from "react";
import { Card, Button, Flex, Text, Title, AspectRatio, ActionIcon } from "@mantine/core";
import { HandIcon } from "@radix-ui/react-icons";

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

interface cardDataArray {
  cardData: cardData[],
}
// type cardDataArray = cardData[];

const StackCarousel = ( { cardData }:cardDataArray ) => {
  const [ cards, setCards ] = useState(cardData);
  const animation = (i: number) => {
    // To update the top card location to move top forward in the stack and dissapear
    setCards((prevCards) => {
        return prevCards.map((card, index) => ({
            ...card,
            transform: 
                index === i
                ? "translate(-20px, -15px)"
                : i === 0 ? index === i + 1
                ? "translate(40px, 30px)"
                : "translate(20px, 15px)"
                : index === i - 1
                  ? "translate(20px, 15px)"
                  : "translate(40px, 30px)",
            opacity: 
                index === i ? 0 : 1,
        }));
    });

    // To update the top card location to start from far back
    setTimeout(() => {
      setCards((prevCards) => {
      return prevCards.map((card, index) => ({
        ...card,
        transform:
          index === i
            ? "translate(80px, 45px)"
            : i === 0 ? index === i + 1
              ? "translate(40px, 30px)"
              : "translate(20px, 15px)"
            : index === i - 1
            ? "translate(20px, 15px)"
            : "translate(40px, 30px)",
        
        transition: "transform 0ms, opacity 500ms ease-in-out, background-color 500ms ease-in-out",
      }));
    });
    }, 500); // Match the transition duration
    
    // To update all the card locations in the back to move forward and the last top card to appear at the back
    setTimeout(() => {
      setCards((prevCards) => {
        return prevCards.map((card, index) => ({
          ...card,
          transform:
            index === i
            ? "translate(40px, 30px)"
            : i === 0 ? index === i + 1
              ? "translate(20px, 15px)"
              : "translate(0px, 0px)"
            : index === i - 1
              ? "translate(0px, 0px)"
              : "translate(20px, 15px)",
          opacity: 
          index === 2 ? 1 : 1,
          zIndex: 
            index === i ? 1 
            : i === 0 ? index === i + 1 ? 2 : 3 
            : index === i - 1 ? 3 : 2,
          color: 
            index === i ? 'var(--mantine-color-dark-1)' 
            : i === 0 ? index === i + 1 
            ? 'var(--mantine-color-dark-4)' : 'var(--mantine-color-dark-8)' 
            : index === i - 1 
            ? 'var(--mantine-color-dark-8)' : 'var(--mantine-color-dark-4)',
          transition: "transform 500ms, opacity 500ms ease-in-out, background-color 500ms ease-in-out",

        }));
      });
    }, 520); // Match the transition duration
  }

  return (
    <Flex justify={'center'}>
      <div style={{ position: 'relative', width: '500px', height: '300px'}}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                ...card,
            }}
            onClick={() => {
                animation(index);
            }}
          >
            <AspectRatio ratio={2 / 1.1} >
              <Card 
                  bg={card.color} 
                  radius={'xl'}
                  p={'xl'}
              >
                <Card.Section px={'lg'} py={'md'}>
                  <Button variant={'outline'} radius={'ld'} color={'white'}>
                    {card.technology}
                  </Button>
                </Card.Section>
                <Card.Section px={'lg'} py={'md'}>
                <Title c={'white'} mb={'sm'}>
                  {card.title}
                </Title>
                <Text c={'white'}>
                  {card.description}
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
          </div>
        ))}
      </div>
    </Flex>
  );
}

export default StackCarousel;