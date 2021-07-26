import React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faGithub, faTwitter, faYoutube, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import  {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const SocialLinks = () => {
  return (
    <IconContainer>
      <a href={"https://github.com/nirkaufman"} target={'_blank'}><FontAwesomeIcon icon={faGithub} size={'lg'} /></a>
      <a href={"https://www.youtube.com/nirkaufman101"} target={'_blank'}><FontAwesomeIcon icon={faYoutube} size={'lg'}/></a>
      <a href={"https://www.linkedin.com/in/nirkaufman"} target={'_blank'}><FontAwesomeIcon icon={faLinkedin} size={'lg'}/></a>
      <a href={"https://twitter.com/nirkaufman/"} target={'_blank'}><FontAwesomeIcon icon={faTwitter} size={'lg'}/></a>
      <a href={"https://www.facebook.com/nir.kaufman/"} target={'_blank'}><FontAwesomeIcon icon={faFacebook} size={'lg'}/></a>
      <a href={"mailto:nirkaufman@gmail.com"}target={'_blank'}><FontAwesomeIcon icon={faEnvelope} size={'lg'}/></a>
    </IconContainer>
  )
}

export default SocialLinks
