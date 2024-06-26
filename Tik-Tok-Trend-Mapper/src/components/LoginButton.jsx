import React, { useEffect } from 'react';
import { generateState } from './utils';
const TikTokLogin = () => {
    useEffect(() => {
        const state = generateState();
        const script = document.createElement('script');
        script.src = "https://lf6-ttcdn-tos.pstatp.com/obj/eden-cn/ies-sdk/js/sdk-web.js";
        script.async = true;
        script.onload = () => initializeTikTokLogin(state);
        document.body.appendChild(script);

        return () => document.body.removeChild(script);
    }, []);

    const initializeTikTokLogin = (state) => {
        console.log("Initializing TikTok SDK");
        if (window.TikTokSDK) {
            console.log("TikTok SDK Loaded");
            window.TikTokSDK.init({
                client_key: 'awa1qhmt9h3tbyl3',
                scope: 'user.info.basic,video.list',
                redirect_uri: 'http://localhost:3788',
                state: state
            });
    
            console.log("Attempting to add login button");
            window.TikTokSDK.AppLoginButton({
                container: '#tiktok-login-btn-container',
                size: 'medium',
                onSuccess: (data) => {
                    console.log('Login Success:', data);
                },
                onFailure: (error) => {
                    console.error('Login Failed:', error);
                }
            });
        } else {
            console.error('TikTok SDK not loaded');
        }
    };

    return <div id="tiktok-login-btn-container"></div>;
};

export default TikTokLogin;