import Router from 'next/router';
import { useEffect } from 'react';

function SecretRedirect(props) {
    useEffect(function () {
        Router.push(props, props.pathname);
    }, []);
    return null;
}

export { SecretRedirect as default };
//# sourceMappingURL=index.js.map
