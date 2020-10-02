import { createContext } from 'react';

export const RenderContext = createContext({
    needRender: [],
    setNeedRender: () => {},
});

export default RenderContext;