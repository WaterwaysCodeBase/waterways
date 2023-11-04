import { Heading, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import HeadingTitle from "./HeadingTitle";
import { textSecondary } from "./Colors";

const TypingEffect = ({
  words,
  typingSpeed = 100,
  erasingSpeed = 50,
  delay = 1000,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const word = words[currentWordIndex];
    let wordIndex = 0;
    let erase = false;

    const typeWord = () => {
      if (erase) {
        setCurrentWord(word.substring(0, wordIndex - 1));
      } else {
        setCurrentWord(word.substring(0, wordIndex + 1));
      }

      if (!erase && wordIndex === word.length) {
        erase = true;
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
        }, delay);
      }

      if (erase && wordIndex === 0) {
        erase = false;
        setCurrentWord("");
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
      }

      wordIndex += erase ? -1 : 1;
      setShowCursor(showCursor);
    };

    const typingInterval = setInterval(
      typeWord,
      erase ? erasingSpeed : typingSpeed
    );

    return () => clearInterval(typingInterval);
  }, [currentWordIndex, words, typingSpeed, erasingSpeed, delay]);

  return (
    <Text color={textSecondary}>
      {currentWord}
      {showCursor && "."} {/* Display cursor */}
    </Text>
  );
};

export default TypingEffect;
