import React from 'react';
import {Button} from '../styledNavbar';
import {FaFacebook , FaInstagram , FaTwitter , FaLinkedin} from 'react-icons/fa'; 
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMediaWrap,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    SocialLogo,
    SocialMedia,
    SocialIcon
} from './styledFooter';
const Footer = () => {
    return(
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to recieve the latest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>

                <Form>
                    <FormInput name = "email" type="email" placeholder="Your Email" />
                        <Button fontBig> Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Our Services</FooterLinkTitle>
                        <FooterLink to = "/">Web Development</FooterLink>
                        <FooterLink to = "/">Mobile App Development</FooterLink>
                        <FooterLink to = "/">Cloud Hosting</FooterLink>
                        <FooterLink to = "/">Digital Marketing</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Our Services</FooterLinkTitle>
                        <FooterLink to = "/">Web Development</FooterLink>
                        <FooterLink to = "/">Mobile App Development</FooterLink>
                        <FooterLink to = "/">Cloud Hosting</FooterLink>
                        <FooterLink to = "/">Digital Marketing</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper> 

                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Our Services</FooterLinkTitle>
                        <FooterLink to = "/">Web Development</FooterLink>
                        <FooterLink to = "/">Mobile App Development</FooterLink>
                        <FooterLink to = "/">Cloud Hosting</FooterLink>
                        <FooterLink to = "/">Digital Marketing</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Our Services</FooterLinkTitle>
                        <FooterLink to = "/">Web Development</FooterLink>
                        <FooterLink to = "/">Mobile App Development</FooterLink>
                        <FooterLink to = "/">Cloud Hosting</FooterLink>
                        <FooterLink to = "/">Digital Marketing</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon />
                        TEAM RUMORS
                    </SocialLogo>
                    
                    <WebsiteRights>
                        TEAM RUMORS 2020
                    </WebsiteRights>
                    <SocialIcons>
                        
                        <SocialIconLink href="/" target="_blank" aria-label = "Facebook">
                            <FaFacebook />
                        </SocialIconLink>    
                        <SocialIconLink href="/" target="_blank" aria-label = "Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label = "Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label = "Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
}

export default Footer;