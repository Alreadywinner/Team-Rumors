import React from 'react';
import {
    ServicesSection,
    ServicesWrapper,
    ServicesHeading,
    ServicesContainer,
    ServicesCard,
    ServicesCardInfo,
    ServicesCardIcon,
    ServicesCardPlan,
    ServicesCardCost,
    ServicesCardLength,
    ServicesCardFeatures,
    ServicesCardFeature,
    SeeAllButton,
    ServicesCardImage
}from './styledServices';
import AppDev from '../../images/AppDevelopment.svg';
import Cloud from '../../images/Cloud.svg';
import DigitalMarketing from '../../images/DigitalMarketing.svg';
import { Button } from '../styledNavbar';

const Services = () => {
    return(
        <ServicesSection>
        <ServicesWrapper>
          <ServicesHeading>Services</ServicesHeading>
          <ServicesContainer>
            
          <ServicesCard>
              <ServicesCardInfo>
                <ServicesCardIcon>
                  <ServicesCardImage src = {DigitalMarketing} alt="services"/>
                </ServicesCardIcon>
                <ServicesCardPlan>Digital Marketing</ServicesCardPlan>
                <ServicesCardCost>$99.99</ServicesCardCost>
                <ServicesCardLength>per month</ServicesCardLength>
                <ServicesCardFeatures>
                  <ServicesCardFeature>100 New Users</ServicesCardFeature>
                  <ServicesCardFeature>$10,000 Budget</ServicesCardFeature>
                  <ServicesCardFeature>Retargeting analytics</ServicesCardFeature>
                </ServicesCardFeatures>
                <Button primary>Choose Plan</Button>
              </ServicesCardInfo>
            </ServicesCard>
            
            <ServicesCard>
              <ServicesCardInfo>
                <ServicesCardIcon>
                  <ServicesCardImage src = {AppDev} alt = "App-Dev"/>
                </ServicesCardIcon>
                <ServicesCardPlan>App Development</ServicesCardPlan>
                <ServicesCardCost>$299.99</ServicesCardCost>
                <ServicesCardLength>per month</ServicesCardLength>
                <ServicesCardFeatures>
                  <ServicesCardFeature>1000 New Users</ServicesCardFeature>
                  <ServicesCardFeature>$50,000 Budget</ServicesCardFeature>
                  <ServicesCardFeature>Lead Gen Analytics</ServicesCardFeature>
                </ServicesCardFeatures>
                <Button primary>Choose Plan</Button>
              </ServicesCardInfo>
            </ServicesCard>

            
            <ServicesCard>
              <ServicesCardInfo>
                <ServicesCardIcon>
                  <ServicesCardImage src = {Cloud} alt="Cloud"/>
                </ServicesCardIcon>
                <ServicesCardPlan>Cloud Services</ServicesCardPlan>
                <ServicesCardCost>$999.99</ServicesCardCost>
                <ServicesCardLength>per month</ServicesCardLength>
                <ServicesCardFeatures>
                  <ServicesCardFeature>Unlimited Users</ServicesCardFeature>
                  <ServicesCardFeature>Unlimited Budget</ServicesCardFeature>
                  <ServicesCardFeature>24/7 Support</ServicesCardFeature>
                </ServicesCardFeatures>
                <Button primary>Choose Plan</Button>
              </ServicesCardInfo>
            </ServicesCard>

          </ServicesContainer> 
        
        <ServicesContainer>
        <SeeAllButton to = "/allServices">See All</SeeAllButton>
        </ServicesContainer>
        
        </ServicesWrapper>
      </ServicesSection>
    );
}
export default Services;