import React, { useState } from 'react';
import data from './data';
import { Wrapper, FaqContainer, Header, Question, Item, Title, Answer, ArrowIcon } from './styles';
import { FaAngleDown } from 'react-icons/fa';

const Accordion = () => {
  const [open, setOpen] = useState(null)

  const toggle = (i) => {
    if (open == i) {
      return setOpen(null)  
    }
    setOpen(i)
  }
  return (
    <Wrapper id="faq">
      <img src="/question.svg"/>
      <FaqContainer>
        <Question>
          <Header>
          <h2>Perguntas Frequentes</h2>
          <h4>Conta para a gente a sua dúvida?</h4>
          </Header>
            {data.map((item, i) => (
              <Item>
                <Title onClick={() => toggle(i)}>
                  <h2>{item.question}</h2>
                  <ArrowIcon>{open === i ? 
                    <FaAngleDown style={{transform: 'rotate(180deg)'}}/> 
                    : 
                    <FaAngleDown />}
                  </ArrowIcon>
                </Title>
                
                {open === i ? 
                  <Answer show={true}>
                    {item.answer}
                  </Answer>
                  :   
                  <Answer show={false}>
                    {item.answer}
                  </Answer>
                }
              </Item>
            ))};
        </Question>
      </FaqContainer>
    </Wrapper>
  )
}

export default Accordion;
