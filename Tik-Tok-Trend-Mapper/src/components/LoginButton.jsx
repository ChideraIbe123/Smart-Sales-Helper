import React, { useEffect } from 'react';

const TikTokLogin = () => {
    useEffect(() => {
        // Ensure the TikTok SDK script is loaded
        const script = document.createElement('script');
        script.src = "https://lf6-ttcdn-tos.pstatp.com/obj/eden-cn/ies-sdk/js/sdk-web.js";
        script.onload = initializeTikTokLogin;
        document.body.appendChild(script);

        // Cleanup the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const initializeTikTokLogin = () => {
        if (window.TikTokSDK) {
            window.TikTokSDK.init({
                client_key: 'awa1qhmt9h3tbyl3',
                scope: 'user.info.basic,video.list', // The scope of access
                redirect_uri: 'YOUR_REDIRECT_URI', // Your redirect URI
                state: 'your_random_state' // A random or fixed state string for CSRF protection
            });

            window.TikTokSDK.AppLoginButton({
                container: '#tiktok-login-btn-container',
                size: 'medium',
                onSuccess: (data) => {
                    console.log('Login Success:', data);
                    // You can redirect the user or save the login data
                },
                onFailure: (error) => {
                    console.error('Login Failed:', error);
                }
            });
        }
    };

    return (
        <div id="tiktok-login-btn-container">
            {/* The TikTok login button will be rendered here by the SDK */}
        </div>
    );
};

export default TikTokLogin;