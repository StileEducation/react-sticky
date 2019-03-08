import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

import { Sticky, StickyContainer } from "../../src";
import { Header } from "../header";

let renderCount = 0;
export class Horizontal extends PureComponent {
    render() {
        return (
            <div
                style={{
                    display: "inline-block",
                    width: "10000px",
                    height: "unset",
                    overflowX: "auto",
                }}
            >
                <span>Content before the Sticky...</span>
                <StickyContainer
                    className="container"
                    style={{
                        width: "600px",
                        height: "80px",
                        display: "inline-block",
                    }}
                >
                    <Sticky horizontalSticky>
                        {({ style }) => (
                            <Header
                                style={{ ...style, display: "inline-block" }}
                                renderCount={renderCount++}
                            />
                        )}
                    </Sticky>
                    <span>Here is some non-sticky stuff</span>
                </StickyContainer>
                <span>
                    Content after the Sticky lksjdf jskf sklj sakfj kdlfjsk
                    fsklafjdksaf dksfj klsfj dksjgfdkl fdskfglkf lfjk fksf
                    lkasjfslk fjksl flskfj klfj dslkfjd slkfjdslkf dslkfjd
                    fjkslf alfj skfl;dalf kdsjfl sfl;kjf ldkfj dlkfjdk fkdf kdjf
                    kdfjlsf kdjfkd flsk flskf dlsfk dslfkds fldkfjdlsfk dlfjks
                    fjlis efiesf ieshose sdoiisdl flkdsf kldsjf dsjdk glkdsjg
                    dksgdksl gdlskgjds gkjdsl fkds fldskj dlskg dslkgjd
                    slgkdslgkdjsgl skg slgkslfkjslkfj sdf dskf jsdlk sdjfl ksfj
                    ldskf jdslfk jsdlkfj lsdkf jdlsk jsldkf jslfdk jdslfk jsdlk
                    jdslfk jsdlk djfl ksdj ldksj lsdk jsdlk jsdlk jdsl kdsj
                    ldskfj lsdkf jldskf jdlskfjlskfj lsdkf jlk jslk jdslfk jdslf
                    kdj ds s...
                </span>
            </div>
        );
    }
}
