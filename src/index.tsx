import Router from 'next/router';
//@ts-ignore
import { useEffect } from 'react';

interface SecretProps {
    pathname: string;
    query: any;
}

const SecretRedirect = (props: SecretProps) => Router.push(props, props.pathname)

export default SecretRedirect;