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
    ServicesSubHeading,
    ServicesCardImage
}from './styledServices';
import AppDev from '../../images/AppDevelopment.svg';
import Cloud from '../../images/Cloud.svg';
import DigitalMarketing from '../../images/DigitalMarketing.svg';
import MobileDev from '../../images/MobileDev.svg';
import Maintenance from '../../images/Maintenance.svg';
import DataCenter from '../../images/DataCenter.svg';
import Security from '../../images/Security.svg';
import cctvInstall from '../../images/cctvInstall.svg';
import Content from '../../images/Content.svg';
import WebDesign from '../../images/WebDesign.svg';
import SEO from '../../images/SEOs.svg';
import POS from '../../images/POS.svg';
import Design from '../../images/Design.svg';
import { Button } from '../styledNavbar';

const SeeAll = () => {
    return(
        <ServicesSection>
        <ServicesWrapper>
          <ServicesHeading>Our Services</ServicesHeading>
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
                <ServicesCardImage src = {AppDev} alt="services"/>
                </ServicesCardIcon>
                <ServicesCardPlan>Web Development</ServicesCardPlan>
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
                <ServicesCardImage src = {Cloud} alt="services"/>
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
            
            <ServicesCard>
              <ServicesCardInfo>
                <ServicesCardIcon>
                <ServicesCardImage src = {MobileDev} alt="services"/>
                </ServicesCardIcon>
                <ServicesCardPlan>Mobile App</ServicesCardPlan>
                <ServicesCardPlan>Development</ServicesCardPlan>
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
                <ServicesCardImage src = {POS} alt="services"/>
                </ServicesCardIcon>
                <ServicesCardPlan>Point Of Sales</ServicesCardPlan>
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
                <ServicesCardImage src = {SEO} alt="services"/>
                </ServicesCardIcon>
                <ServicesCardPlan>SEO</ServicesCardPlan>
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
            
            <ServicesCard>
              <ServicesCardInfo>
                <ServicesCardIcon>
                <ServicesCardImage src = {WebDesign} alt="services"/>
                </ServicesCardIcon>
                <ServicesCardPlan>Web Designing</ServicesCardPlan>
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
                <ServicesCardImage src = {Design} alt="services"/>
                </ServicesCardIcon>
                <ServicesCardPlan>Graphics Designing</ServicesCardPlan>
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
                <ServicesCardImage src = {Content} alt="services"/>
                </ServicesCardIcon>
                <ServicesCardPlan>Content Writing</ServicesCardPlan>
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

          <ServicesSubHeading>We Are All In One</ServicesSubHeading>  
          <ServicesContainer>
            
            <ServicesCard>
              <ServicesCardInfo>
                <ServicesCardIcon>
                <ServicesCardImage src = {cctvInstall} alt="services"/>
                </ServicesCardIcon>
                <ServicesCardPlan>CCTV Installation</ServicesCardPlan>
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
                <ServicesCardImage src = {DataCenter} alt="services"/>
                </ServicesCardIcon>
                <ServicesCardPlan>Data Center</ServicesCardPlan>
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
                <ServicesCardImage src = {Security} alt="services"/>
                </ServicesCardIcon>
                <ServicesCardPlan>Cyber Security</ServicesCardPlan>
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
            
            <ServicesCard>
              <ServicesCardInfo>
                <ServicesCardIcon>
                <ServicesCardImage src = {Maintenance} alt="services"/>
                </ServicesCardIcon>
                <ServicesCardPlan>SW / HW</ServicesCardPlan>
                <ServicesCardPlan>Maintenance</ServicesCardPlan>
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
                <ServicesCardImage src = {Cloud} alt="services"/>
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

          
        
        </ServicesWrapper>
      </ServicesSection>
    )
}

export default SeeAll;