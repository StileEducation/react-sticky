// Type definitions for react-sticky 6.0
// Project: https://github.com/captivationsoftware/react-sticky
// Definitions by: Matej Lednicky <http://www.thinkcreatix.com/>,
//                 Curtis Warren <https://github.com/curtisw0>,
//                 Andrew Hyndman <https://github.com/ajhyndman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

declare module "react-sticky" {
    export const StickyContainer: React.ComponentClass<
        React.HTMLAttributes<HTMLDivElement>
    >;

    export interface StickyChildArgs {
        style: React.CSSProperties;
        isSticky: boolean;
        wasSticky: boolean;
        distanceFromTop: number;
        distanceFromBottom: number;
        distanceFromLeft: number;
        distanceFromRight: number;
        calculatedHeight: number;
        calculatedWidth: number;
    }

    export interface StickyProps {
        children: (args: StickyChildArgs) => React.ReactElement<any>;
        relative?: boolean;
        isActive?: boolean;
        className?: string;
        style?: any;
        stickyClassName?: string;
        stickyStyle?: any;
        topOffset?: number;
        bottomOffset?: number;
        leftOffset?: number;
        rightOffset?: number;
        horizontalSticky?: boolean;
        onStickyStateChange?(isSticky: boolean): void;
        disableCompensation?: boolean;
        disableHardwareAcceleration?: boolean;
    }

    export const Sticky: React.ComponentClass<StickyProps>;
}
