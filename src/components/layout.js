import React from "react";
import { css } from '@emotion/core';

import { rhythm } from '../utils/typography';

export default ({ children }) => (

<div 
    css={css`
        margin: 0 auto;
        max-width: 1200px;
        min-height: 100%;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
        display: flex;
        justify-content: center;
        flex-wrap: wrap;        `}>
    { children }
</div>

);