// source: https://developers.google.com/identity/one-tap/web/reference/js-reference
const GoogleOneTapSignIn = ({
    clientId,
    onOneTapLoginSuccess,
    onOneTapLoginError,
    onNotification,
}) => {
    if (!window || !window.google || !window.google.accounts || !clientId) {
        return;
    }

    const handleCredentialResponse = (response) => {
        if (response.credential && onOneTapLoginSuccess) {
            onOneTapLoginSuccess(response);
        }
        else if (onOneTapLoginError) {
            onOneTapLoginError(response);
        }
    };

    const callback = handleCredentialResponse;

    window.google.accounts.id.initialize({
        client_id: clientId,
        callback,
        auto_select: false,
    });
    window.google.accounts.id.prompt((notification) => {
        if (onNotification) {
            onNotification(notification);
        }
    });
};

export default GoogleOneTapSignIn;
