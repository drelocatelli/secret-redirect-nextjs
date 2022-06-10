import Router from 'next/router';
//@ts-ignore
import { useEffect } from 'react';

interface SecretProps {
    pathname: string;
    query: any;
}

function SecretRedirect(props: SecretProps) {

    useEffect(() => {
        Router.push(props, props.pathname);
    }, [])


    return null;
}

export default SecretRedirect;