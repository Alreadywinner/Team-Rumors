import {Link} from 'react-router-dom';
import styled from 'styled-components';

// padding:100px 0 160px;
export const ProductSection = styled.div`
padding:100px 20px 160px;
display:flex;
flex-direction:column;
justify-content:center;
background:#4b59f7;
`;

export const ProductWrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:0 auto;

@media screen and (max-width:960px){
    margin:0 30px;
    display:flex;
    flex-direction:column;
    align-items:center;
}
`;

export const ProductHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    margin-top:24px;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const ProductCard = styled(Link)`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const ProductCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const ProductCardIcon = styled.div`
  margin: 24px 0;
`;
export const ProductCardImage = styled.img`
  width:150px;
  height:80px;
`;

export const ProductCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const ProductCardCost = styled.h4`
  font-size: 30px;
`;

export const ProductCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const ProductCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const ProductCardFeature = styled.li`
  margin-bottom: 10px;
`;

export const SeeAllButton = styled(Link)`
  border-radius:4px;
  background:#fff;
  text-decoration:none;
  white-space:nowrap;
  margin-top:10px;
  padding:10px 20px;
  color:#4b59f7;
  font-size:20px;
  outline:none;
  border:3px solid #4c59f7;
  cursor:pointer;

  &:hover{
      transition:all 0.3s ease-out;
      background:#fff;
      transform:scale(1.06);
  }

  @media screen and (max-width:960px){
      width:100%;
  }
`;