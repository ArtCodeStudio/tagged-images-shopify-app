import type { ReactNode, ComponentType } from 'react';

export type Target = '_blank' | '_self' | '_parent' | '_top';

export interface LinkLikeComponentProps extends React.HTMLProps<HTMLAnchorElement> {
    /** The url to link to */
    url: string;
    /**	The content to display inside the link */
    children?: ReactNode;
    /** Makes the link open in a new tab */
    external?: boolean;
    /** Where to display the url */
    target?: Target;
    /** Makes the browser download the url instead of opening it. Provides a hint for the downloaded filename if it is a string value. */
    download?: string | boolean;
    [key: string]: any;
}

export type LinkLikeComponent = ComponentType<LinkLikeComponentProps>;
