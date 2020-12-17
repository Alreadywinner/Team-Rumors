import React from 'react';
import {
    ProductSection,
    ProductWrapper,
    ProductHeading,
    ProductContainer,
    ProductCard,
    ProductCardInfo,
    ProductCardIcon,
    ProductCardPlan,
    ProductCardCost,
    ProductCardLength,
    ProductCardFeatures,
    ProductCardFeature,
    ProductCardImage
} from './styledProducts';
import { Button } from '../styledNavbar';
import POS from '../../images/POS.svg';
import Warehouse from '../../images/Warehousing.svg';
import Assets from '../../images/Assets.svg';
import ticketSystem from '../../images/ticketSystem.svg'; 
import HRS from '../../images/HRS.svg';
import bills from '../../images/bills.svg';
import Sales from '../../images/Sales.svg';
const Products = () => {
    return(
        <ProductSection>
        <ProductWrapper>
          <ProductHeading>Products</ProductHeading>
          <ProductContainer>
            
            <ProductCard>
              <ProductCardInfo>
                <ProductCardIcon>
                  <ProductCardImage src = {bills} alt = "products"/>
                </ProductCardIcon>
                <ProductCardPlan>Billing</ProductCardPlan>
                <ProductCardPlan>and</ProductCardPlan>
                <ProductCardPlan>Inventory</ProductCardPlan>
                <ProductCardCost>$99.99</ProductCardCost>
                <ProductCardLength>per month</ProductCardLength>
                <ProductCardFeatures>
                  <ProductCardFeature>100 New Users</ProductCardFeature>
                  <ProductCardFeature>$10,000 Budget</ProductCardFeature>
                  <ProductCardFeature>Retargeting analytics</ProductCardFeature>
                </ProductCardFeatures>
                <Button primary>Choose Plan</Button>
              </ProductCardInfo>
            </ProductCard>
            
            <ProductCard>
              <ProductCardInfo>
                <ProductCardIcon>
                  <ProductCardImage src = {HRS} alt = "Products"/>
                </ProductCardIcon>
                <ProductCardPlan>HRM</ProductCardPlan>
                <ProductCardPlan>and</ProductCardPlan>
                <ProductCardPlan>Inventory</ProductCardPlan>
                <ProductCardCost>$299.99</ProductCardCost>
                <ProductCardLength>per month</ProductCardLength>
                <ProductCardFeatures>
                  <ProductCardFeature>1000 New Users</ProductCardFeature>
                  <ProductCardFeature>$50,000 Budget</ProductCardFeature>
                  <ProductCardFeature>Lead Gen Analytics</ProductCardFeature>
                </ProductCardFeatures>
                <Button primary>Choose Plan</Button>
              </ProductCardInfo>
            </ProductCard>

            
            <ProductCard>
              <ProductCardInfo>
                <ProductCardIcon>
                  <ProductCardImage src = {ticketSystem} alt = "products"/>
                </ProductCardIcon>
                <ProductCardPlan>Ticket</ProductCardPlan>
                <ProductCardPlan>Help</ProductCardPlan>
                <ProductCardPlan>Desk</ProductCardPlan>
                <ProductCardCost>$999.99</ProductCardCost>
                <ProductCardLength>per month</ProductCardLength>
                <ProductCardFeatures>
                  <ProductCardFeature>Unlimited Users</ProductCardFeature>
                  <ProductCardFeature>Unlimited Budget</ProductCardFeature>
                  <ProductCardFeature>24/7 Support</ProductCardFeature>
                </ProductCardFeatures>
                <Button primary>Choose Plan</Button>
              </ProductCardInfo>
            </ProductCard>

          </ProductContainer>


          <ProductContainer>
            
            <ProductCard>
              <ProductCardInfo>
                <ProductCardIcon>
                  <ProductCardImage src={POS} alt="products"/>
                </ProductCardIcon>
                <ProductCardPlan>Point</ProductCardPlan>
                <ProductCardPlan>of</ProductCardPlan>
                <ProductCardPlan>Sales</ProductCardPlan>
                <ProductCardCost>$99.99</ProductCardCost>
                <ProductCardLength>per month</ProductCardLength>
                <ProductCardFeatures>
                  <ProductCardFeature>100 New Users</ProductCardFeature>
                  <ProductCardFeature>$10,000 Budget</ProductCardFeature>
                  <ProductCardFeature>Retargeting analytics</ProductCardFeature>
                </ProductCardFeatures>
                <Button primary>Choose Plan</Button>
              </ProductCardInfo>
            </ProductCard>
            
            <ProductCard>
              <ProductCardInfo>
                <ProductCardIcon>
                  <ProductCardImage src = {Warehouse} alt = "Products"/>
                </ProductCardIcon>
                <ProductCardPlan>Warehouse</ProductCardPlan>
                <ProductCardPlan>Management</ProductCardPlan>
                <ProductCardPlan>System</ProductCardPlan>
                <ProductCardCost>$299.99</ProductCardCost>
                <ProductCardLength>per month</ProductCardLength>
                <ProductCardFeatures>
                  <ProductCardFeature>1000 New Users</ProductCardFeature>
                  <ProductCardFeature>$50,000 Budget</ProductCardFeature>
                  <ProductCardFeature>Lead Gen Analytics</ProductCardFeature>
                </ProductCardFeatures>
                <Button primary>Choose Plan</Button>
              </ProductCardInfo>
            </ProductCard>

            
            <ProductCard>
              <ProductCardInfo>
                <ProductCardIcon>
                  <ProductCardImage src = {Assets} alt = "products"/>
                </ProductCardIcon>
                <ProductCardPlan>Asset</ProductCardPlan>
                <ProductCardPlan>Management</ProductCardPlan>
                <ProductCardPlan>System</ProductCardPlan>
                <ProductCardCost>$999.99</ProductCardCost>
                <ProductCardLength>per month</ProductCardLength>
                <ProductCardFeatures>
                  <ProductCardFeature>Unlimited Users</ProductCardFeature>
                  <ProductCardFeature>Unlimited Budget</ProductCardFeature>
                  <ProductCardFeature>24/7 Support</ProductCardFeature>
                </ProductCardFeatures>
                <Button primary>Choose Plan</Button>
              </ProductCardInfo>
            </ProductCard>

          </ProductContainer>

          <ProductContainer>
          <ProductCard>
              <ProductCardInfo>
                <ProductCardIcon>
                  <ProductCardImage src = {Sales} alt = "products"/>
                </ProductCardIcon>
                <ProductCardPlan>Sales</ProductCardPlan>
                <ProductCardPlan>ERP</ProductCardPlan>
                <ProductCardPlan>Software</ProductCardPlan>
                <ProductCardCost>$999.99</ProductCardCost>
                <ProductCardLength>per month</ProductCardLength>
                <ProductCardFeatures>
                  <ProductCardFeature>Unlimited Users</ProductCardFeature>
                  <ProductCardFeature>Unlimited Budget</ProductCardFeature>
                  <ProductCardFeature>24/7 Support</ProductCardFeature>
                </ProductCardFeatures>
                <Button primary>Choose Plan</Button>
              </ProductCardInfo>
            </ProductCard>
          </ProductContainer>
        
        </ProductWrapper>
      </ProductSection>
    )
}

export default Products;