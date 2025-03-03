import React from "react";
import YouTube from "react-youtube";
import styles from './YoutubeVideo.module.scss'

export default class YoutubeVideo extends React.Component {
    render() {
        const opts = {
            playerVars: {
                autoplay: 1,
            },
        }; 

        return (
            <div className={styles.videoBox}>
                <div className={styles.videoResponsive}>
                    {/* need actual youtube video id to put here */}
                    <YouTube videoId="tiKFuzpX-NA" 
                    opts={opts} onReady={this._onReady} />
                </div>
            </div>
        );
    }

    _onReady(event) {
        event.target.pauseVideo();
    }
}