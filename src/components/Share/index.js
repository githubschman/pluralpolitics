/* eslint-disable react/jsx-curly-brace-presence */
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  TumblrShareButton,
  TumblrIcon,
} from "react-share";
import styles from '../../pages/results/results.module.scss'

const ShareModal: React.FC = ({diversityLevel, expansiveness, label}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button className={styles["results-btn"]} type="primary" onClick={showModal}>
        Share Your Results
      </Button>
      <Modal title="Share" footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div>
          <EmailShareButton
            className="share-button"
            subject="My Plural Politics Results"
            body={`Hello! I just took the Plural Politics Test. It’s a refreshingly nuanced, innovative personality test that doesn’t box you in. I got a result of ${label}. My political expansiveness score is ${expansiveness} and my viewpoint diversity is ${diversityLevel}. Here’s a link to the test! Try it and show me your results!`}
            separator=" "
            url="https://pluralpolitics.com"
          >
            <EmailIcon size={32} round /> Email
          </EmailShareButton>
          <LinkedinShareButton url="https://pluralpolitics.com" className="share-button">
            <LinkedinIcon size={32} round /> LinkedIn
          </LinkedinShareButton>
          <RedditShareButton
            url="https://pluralpolitics.com"
            title="Plural Politics"
            windowWidth={660}
            windowHeight={460}
            className="share-button"
          >
            <RedditIcon size={32} round /> Reddit
          </RedditShareButton>
          <TumblrShareButton
            url="https://pluralpolitics.com"
            title="Plural Politics"
            className="share-button"
          >
            <TumblrIcon size={32} round /> Tumblr
          </TumblrShareButton>
          <FacebookShareButton
            url="https://pluralpolitics.com"
            quote={`I just got a result of ${label} on the Plural Politics Test. My political expansiveness score is ${expansiveness} and my viewpoint diversity is ${diversityLevel}. This is a refreshingly nuanced, innovative personality test that doesn’t box you in. Try it and show me your results!`}
            className="share-button"
          >
            <FacebookIcon size={32} round /> Facebook
          </FacebookShareButton>
          <TwitterShareButton
              title={`I just got a result of ${label} on the Plural Politics Test. My political expansiveness score is ${expansiveness} and my viewpoint diversity is ${diversityLevel}. Try it and show me your results!`}
              url="https://pluralpolitics.com"
              hashtags={["PluralPolitics"]}
              className="share-button"
          >
              <TwitterIcon size={32} round /> Twitter
          </TwitterShareButton>
        </div>
      </Modal>
    </>
  );
};

export default ShareModal;
