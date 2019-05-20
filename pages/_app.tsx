import React from 'react';
import App, { Container, NextAppContext, DefaultAppIProps } from 'next/app';
import '../src/styles/index.scss';

class MyApp extends App {
    public static async getInitialProps({ Component, ctx }: NextAppContext): Promise<DefaultAppIProps> {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    public render(): React.ReactNode {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        );
    }
}

export default MyApp;
