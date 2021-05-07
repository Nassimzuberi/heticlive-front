import React from 'react';
import videojs from 'video.js'
import 'video.js/dist/video-js.css';
import {url} from '../config'

export default class VideoPlayer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            resolution: 720,
            stream: false,
            videoJsOptions: null
        }
    }

    componentDidMount() {
        this.setState({
            stream: true,
            videoJsOptions: {
                autoplay: false,
                controls: true,
                sources: [{
                    src: url + ':8888/live/'+ this.props.channel.stream_key + '_'+ this.state.resolution + '/index.m3u8',
                    type: 'application/x-mpegURL'
                }],
                fluid: true,
            }
        }, () => {
            this.player = videojs(this.videoNode, this.state.videoJsOptions, function onPlayerReady() {
                console.log('onPlayerReady', this)
            });
        });
    }
    callVideoPlayer(resolution){
        this.setState({
            videoJsOptions: {
                autoplay: false,
                controls: true,
                sources: [{
                    src: url + ':8888/live/'+ this.props.channel.stream_key + '_'+ resolution + '/index.m3u8',
                    type: 'application/x-mpegURL'
                }],
                fluid: true,
            }
        });
    }



    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }

    render() {
        return (
            <div className={"bg-gray-300"}>
                {this.state.stream ? (
                <div data-vjs-player className={"relative"}>
                    <div className={"absolute left-4 top-2 "}>
                        <h2 className={"text-3xl"}>{this.props.channel.name}</h2>
                        {this.props.channel.state ? (
                            <p className={"text-red-500 flex items-center text-xl"}>
                                <span className={"block w-2 h-2 rounded bg-red-500 animate-ping mx-2"}></span>
                                En direct</p>
                        ): (
                            <p className={"text-gray-500 flex items-center text-xl"}>
                                <span className={"block w-2 h-2 rounded bg-gray-500 mx-2"}></span>
                                Hors ligne</p>
                        )}

                    </div>
                    <div className="absolute right-2 top-4">
                        <button onClick={() => this.callVideoPlayer(720)} className={"mx-3"}>720</button>
                        <button onClick={() => this.callVideoPlayer(480)} className={"mx-3"}>480</button>
                        <button onClick={() => this.callVideoPlayer(360)} className={"mx-3"}>360</button>
                    </div>

                    <video ref={node => this.videoNode = node} className="video-js vjs-big-play-centered"/>
                </div>
            ) : ' Loading ... '}
            </div>

        )
    }
}