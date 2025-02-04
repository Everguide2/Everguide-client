import React from "react";
import styled from "styled-components";

const Links = ({ links }) => {
  return (
    <LinksContainer>
      {links.map((group, index) => (
        <LinkGroup key={index}>
          <span>{group.description}</span>
          <LinkItems>
            {group.items.map((item, idx) => (
              <a key={idx} href={item.href}>
                {item.text}
              </a>
            ))}
          </LinkItems>
        </LinkGroup>
      ))}
    </LinksContainer>
  );
};

export default Links;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  ${({ theme }) => theme.fonts.body3};
  align-items: center; 
  text-align: center; 
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  span {
    color: #BBBBBB;
    margin-right: 5px;
  }
`;

const LinkItems = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: black;
    text-decoration: none;
  }
`;